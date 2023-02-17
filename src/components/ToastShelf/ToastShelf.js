import React from 'react';

import {ToastContext} from '../ToastProvider';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf() {
  const {toastList} = React.useContext(ToastContext);

  return (
    <ol className={styles.wrapper}
        role="region"
        aria-live="assertive"
        aria-label="notification">
      {toastList.map(({id, variant, message}) => (
        <li key={id} >
          <Toast id={id} variant={variant}>{message}</Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
