import React from 'react';

export const useVisibility = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  function visibilityToggle() {
    setIsVisible(!isVisible);
  }
  function setClose() {
    setIsVisible(false);
  }
  function setOpen() {
    setIsVisible(true);
  }
  return { isVisible, setIsVisible, visibilityToggle, setClose, setOpen };
};
