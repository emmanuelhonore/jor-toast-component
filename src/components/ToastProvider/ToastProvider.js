import React from "react";

import useEscapeKey from "../../hooks/useEscapeKey";

export const ToastContext = React.createContext();

function ToastProvider({children}) {
  // tastList, array of objects with 'id', 'message' and 'variant'
  const [toastList, setToastList] = React.useState([
    {'id': crypto.randomUUID(),'variant': 'warning', 'message': 'A warning message'},
    {'id': crypto.randomUUID(),'variant': 'error', 'message': 'some error message'}
  ]);
  
  // use a callback to avoid unnecessary re-render with the useEscapeKey hook
  const handleEscape = React.useCallback(() => {
    // Code to dismiss all toasts
    setToastList([]);
  }, []);

  useEscapeKey(handleEscape);

  // remove toast from list (used in the Toast component)
  function removeToast(id) {
    const nextToastList = toastList.filter( toast => {
      return toast.id !== id;
    });

    setToastList(nextToastList)
  }

  // add Toast to list (used in playground)
  function addToast(variant, message) {
    if (!message) {return;}
    const addToast = {'id': crypto.randomUUID(),'variant': variant, 'message': message}
    setToastList([...toastList, addToast]);
  }

  return (
    <ToastContext.Provider value={{toastList, removeToast, addToast}}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
