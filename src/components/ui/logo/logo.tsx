import React from 'react';

interface LogoProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  className?: string;
}

export const XRLogo: React.FC<LogoProps> = ({
  width = 40,
  height = 28,
  color = '#444444',
  className = ''
}) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 40 28'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={className}
  >
    <path
      d='M14.306 12.6098L21.7905 4.67752M14.7565 16.2983L23.3346 6.88391M15.55 18.9361L24.9191 9.02842M17.0726 21.5309L25.7805 12.0951M18.6381 23.3143L25.7805 15.655M38.9038 13.875C38.9038 20.6852 33.383 26.206 26.5728 26.206C19.7626 26.206 14.2419 20.6852 14.2419 13.875C14.2419 7.06483 19.7626 1.54407 26.5728 1.54407C33.383 1.54407 38.9038 7.06483 38.9038 13.875ZM25.908 13.875C25.908 20.6852 20.3873 26.206 13.5771 26.206C6.76685 26.206 1.24609 20.6852 1.24609 13.875C1.24609 7.06483 6.76685 1.54407 13.5771 1.54407C20.3873 1.54407 25.908 7.06483 25.908 13.875Z'
      stroke={color}
      strokeWidth='1.28671'
    />
  </svg>
);
