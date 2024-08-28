import React from 'react';

export default function CenteredContentContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      id="content-container"
      className="w-full mt-10 px-10 pb-10 items-center overflow-hidden ."
    >
      {children}
    </div>
  );
}
