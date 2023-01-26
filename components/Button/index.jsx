import React from 'react';
import styles from '../../styles/Button.module.scss';
import { RightArrowIcon } from '../../assets/icons';
function Button(props) {
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noreferrer"
      className={styles.button}>
      {props.text}
      <RightArrowIcon />
    </a>
  );
}

export default Button;
