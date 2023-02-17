import React from 'react';

import {ToastContext} from '../ToastProvider';

import Button from '../Button';
import RadioInput from '../RadioInput';

import ToastShelf from '../ToastShelf';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const { addToast } = React.useContext(ToastContext);

  // state Message
  const [message, setMessage] = React.useState('');
  // state Variant: notive | warning | success | error
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);

  // add Toast to list (used in playground)
  function handleToastPop(event) {
    event.preventDefault();

    addToast(variant, message);
  
    // reset previous state
    setMessage('');
    setVariant(VARIANT_OPTIONS[0]);
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf />

      <form className={styles.controlsWrapper} onSubmit={handleToastPop}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea 
            id="message" 
            value={message} 
            onChange={event => {
              setMessage(event.target.value);
              }} 
            className={styles.messageInput} />
          </div>
        </div>

        <div className={styles.row} role="radiogroup" aria-labelledby="radiogroup-variant">
          <div id="radiogroup-variant" className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            {
              VARIANT_OPTIONS.map( option => (
                <RadioInput 
                  key={`variant-${option}`}
                  name="variant" 
                  value={option} 
                  label={option}
                  checked={option === variant}
                  onChange={event => {
                    setVariant(event.target.value);
                  }}
                />
              ))
            }
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button type="submit">Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
