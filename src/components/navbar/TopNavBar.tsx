'use client';
import { useVisibility } from '@/util_hooks';
import React from 'react';
import LoginRegisterModal from '../modals/LoginRegisterModal';
import { LoggedInContext } from '@/app/contexts/loggedIn';
import LogoutModal from '../modals/LogoutModal';
import LoginLogoutButton from './login_logout/LoginLogoutButton';

export default function TopNavBar() {
  return (
    <nav className="w-full bg-slate-800">
      <div
        id="topnavbar-container"
        className="flex flex-row p-5 justify-between"
      >
        <div id="logo-container" className="flex flex-row">
          <a href="/">
            <h1 className="text-3xl select-none">JerseyEverything</h1>
          </a>
        </div>
        <div id="link-container" className="flex flex-row items-center">
          <a href="#" className="px-3 select-none">
            About
          </a>
          <a href="/posts" className="px-3 select-none">
            Posts
          </a>
          <a href="/posts/new" className="px-3 select-none">
            New Post
          </a>
          <LoginLogoutButton />
        </div>
      </div>
    </nav>
  );
}
