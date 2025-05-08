import { FC } from 'react';
import styles from './ExpandIcon.module.css';

type ExpandIconProps = {
  isExpanded?: boolean;
  className?: string;
};

export const ExpandIcon: FC<ExpandIconProps> = ({
  isExpanded = false,
  className = ''
}) => (
  <svg
    className={`${styles.icon} ${isExpanded ? styles.expanded : ''} ${className}`}
    width='50'
    height='50'
    viewBox='0 0 50 50'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    aria-hidden='true'
  >
    <g clipPath='url(#clip0_4233_186)'>
      <circle
        cx='25'
        cy='25'
        r='24.5'
        stroke='currentColor'
        strokeOpacity='0.9'
      />
      <rect
        x='11.6641'
        y='23.3335'
        width='26.6667'
        height='2'
        transform='rotate(0.170432 11.6641 23.3335)'
        fill='currentColor'
        fillOpacity='0.8'
      />
      {!isExpanded && (
        <rect
          x='23.9941'
          y='37.7065'
          width='26.6667'
          height='2'
          transform='rotate(-90 23.9941 37.7065)'
          fill='currentColor'
          fillOpacity='0.8'
        />
      )}
    </g>
    <defs>
      <clipPath id='clip0_4233_186'>
        <rect width='50' height='50' fill='white' />
      </clipPath>
    </defs>
  </svg>
);
