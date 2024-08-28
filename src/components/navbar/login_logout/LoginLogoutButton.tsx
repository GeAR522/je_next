import { LoggedInContext } from '@/app/contexts/loggedIn';
import LoginRegisterModal from '@/components/modals/LoginRegisterModal';
import LogoutModal from '@/components/modals/LogoutModal';
import { useVisibility } from '@/util_hooks';
import React from 'react';

export default function LoginLogoutButton() {
  const {
    isVisible: showLoR,
    setClose: closeLoR,
    setOpen: openLoR,
  } = useVisibility();

  const { loggedIn } = React.useContext(LoggedInContext);

  console.log(loggedIn);
  const LoginLogoutModal = () => {
    return loggedIn ? (
      <LogoutModal onDeny={closeLoR} zIndex="z-10" />
    ) : (
      <LoginRegisterModal loginOrRegister="login" onDeny={closeLoR} />
    );
  };

  return (
    <>
      <button onClick={openLoR} className="px-3 select-none">
        {loggedIn ? 'Logout' : 'Login/Register'}
      </button>
      {showLoR && <LoginLogoutModal />}
    </>
  );
}
