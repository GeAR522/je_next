import React from 'react';

interface IBaseModal {
  zIndex?: '' | 'z-10' | 'z-20' | 'z-30' | 'z-40' | 'z-50';
  modalColour?: string;
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export default function BaseModal({
  children,
  zIndex = '',
  modalColour = 'bg-slate-500',
  size = 'md',
}: IBaseModal) {
  const width = () => {
    switch (size) {
      case 'sm':
        return 'w-1/4';
      case 'md':
        return 'w-1/2';
      case 'lg':
        return 'w-2/3';
    }
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center ${zIndex} w-full`}
    >
      <div className={`${modalColour} p-6 rounded-3xl shadow-lg ${width()}`}>
        {children}
      </div>
    </div>
  );
}
