import React from 'react';
import BaseModal from './BaseModal';

interface IConfirmDenyModal {
  modalTitle?: string;
  modalText: string;
  confirmText?: string;
  deleteText?: string;
  zIndex?: '' | 'z-10' | 'z-20' | 'z-30' | 'z-40' | 'z-50';
  size?: 'sm' | 'md' | 'lg';
  onConfirm: () => void;
  onDeny: () => void;
}

export default function ConfirmDenyModal({
  modalTitle,
  modalText,
  confirmText,
  deleteText,
  zIndex,
  size,
  onConfirm,
  onDeny,
}: IConfirmDenyModal) {
  return (
    <BaseModal zIndex={zIndex} size={size}>
      <h2 className="text-xl font-bold mb-4">{modalTitle}</h2>
      <p className="mb-6">{modalText}</p>
      <div className="flex justify-end space-x-4">
        <button
          onClick={onDeny}
          className="bg-slate-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
        >
          {deleteText || 'No'}
        </button>
        <button
          onClick={onConfirm}
          className="bg-red-500 hover:bg-red-700 font-bold py-2 px-4 rounded"
        >
          {confirmText || 'Yes'}
        </button>
      </div>
    </BaseModal>
  );
}
