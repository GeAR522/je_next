import React from 'react';
import ConfirmDenyModal from './ConfirmDenyModal';

interface ILogoutModal {
  zIndex?: '' | 'z-10' | 'z-20' | 'z-30' | 'z-40' | 'z-50';
  onDeny: () => void;
}

export default function LogoutModal({ onDeny, zIndex }: ILogoutModal) {
  function logOut() {
    localStorage.removeItem('JE_TOKEN');
    window.location.reload();
  }
  return (
    <ConfirmDenyModal
      zIndex={zIndex}
      size="sm"
      modalTitle="Log Out"
      modalText="Are you sure you want to log out?"
      onConfirm={logOut}
      onDeny={onDeny}
    />
  );
}
