import React from 'react';
import style from './button.module.css';
import arrow from '../../../assets/images/стрелка.svg';

interface ButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  icon?: string | React.ReactNode;
}

export const UIButton: React.FC<ButtonProps> = ({
  text,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  icon = arrow
}) => (
  <button
    type={type}
    className={`${style.button_demo} ${className}`}
    onClick={onClick}
    disabled={disabled}
  >
    <span className={style.buttom_text}>{text}</span>
    {icon && (
      <span>
        {typeof icon === 'string' ? <img src={icon} alt='icon' /> : icon}
      </span>
    )}
  </button>
);
