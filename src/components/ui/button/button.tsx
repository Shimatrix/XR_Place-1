import React from 'react';
import style from './button.module.css';
import arrow from '../../../assets/images/стрелка.svg';

interface ButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
}

export const UIButton: React.FC<ButtonProps> = ({
  text,
  onClick,
  className = ''
}) => (
  <button className={`${style.button_demo} ${className}`} onClick={onClick}>
    <span className={style.buttom_text}>{text}</span>
    <span>
      <img src={arrow} alt='arrow' />
    </span>
  </button>
);
