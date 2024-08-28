'use client';
import React from 'react';
import BaseModal from './BaseModal';

interface IUserLogin {
  loginOrRegister: 'login' | 'register';
  onDeny: () => void;
}

export default function LoginRegisterModal({
  loginOrRegister,
  onDeny,
}: IUserLogin) {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  function userLogin() {
    console.log(loginOrRegister);

    fetch(`http://127.0.0.1:3000/${loginOrRegister}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          name: name,
          username: email,
          password: password,
        },
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.status === 200) {
          localStorage.setItem('JE_TOKEN', data.token);
          window.location.reload();
        } else {
          alert('Login Failed');
          console.log(data);
        }
      });
  }

  return (
    <BaseModal size="md" zIndex="z-10">
      <div id="lor-form-container" className="mt-5 flex flex-col">
        <div id="lor-form-header">
          <h1 id="lor-form-title" className="text-3xl">
            {loginOrRegister === 'login' ? 'Login' : 'Register'}
          </h1>
        </div>
        <div className="flex flex-col" id="lor-form-content">
          <form id="lor-form" onSubmit={userLogin}>
            <div
              id="lor-form-name-input"
              className="py-4 flex flex-row items-center"
            >
              <label className="mr-5" htmlFor="lor-form-name">
                Name:
              </label>
              <input
                className="pl-2 w-full rounded-md min-h-7"
                type="text"
                id="lor-form-name"
                name="name"
                placeholder="Name..."
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div
              id="lor-form-email-input"
              className="py-4 flex flex-row  items-center"
            >
              <label className="mr-5" htmlFor="lor-form-email">
                Email:
              </label>
              <input
                className="pl-2 w-full rounded-md min-h-7"
                type="email"
                id="lor-form-email"
                name="email"
                placeholder="Email..."
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div
              id="lor-form-password-input"
              className="py-4 flex flex-row  items-center"
            >
              <label className="mr-5" htmlFor="lor-form-password">
                Password:
              </label>
              <input
                className="pl-2 w-full rounded-md min-h-7"
                type="password"
                id="lor-form-password"
                name="password"
                placeholder="Password..."
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div
              id="lor-form-buttons"
              className="flex flex-row items-center justify-end mt-3"
            >
              <button
                id="lor-form-deny"
                className="bg-red-500 hover:bg-red-700 py-2 px-5 text-xl rounded-lg"
                onClick={onDeny}
              >
                Cancel
              </button>
              <button
                id="lor-form-submit"
                type="submit"
                className="bg-gray-700 hover:bg-slate-800 px-5 py-2 rounded-lg text-xl"
              >
                {loginOrRegister === 'login' ? 'Login' : 'Register'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </BaseModal>
  );
}
