import { useMediaQuery } from 'react-responsive';

interface ArrowButtonProps {
  color?: string;
  mobileColor?: string;
}

export const ArrowButton: React.FC<ArrowButtonProps> = ({
  color = '#4D4D4D',
  mobileColor = '#4D4D4D'
}) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const currentColor = isMobile ? mobileColor : color;

  return (
    <svg
      width='16'
      height='28'
      viewBox='0 0 16 28'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M1 24L14 11M14 11H1M14 11V24'
        stroke={currentColor}
        strokeWidth='2'
      />
    </svg>
  );
};
