import cn from '@/utils/cn';
import { cva, type VariantProps } from 'class-variance-authority';
import Image from 'next/image';

type RoundedSize = 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';

const buttonVariants = cva(
  'w-full min-w-[158px] h-[43px] font-sans font-semibold flex items-center justify-center hover:brightness-90',
  {
    variants: {
      variant: {
        primary: 'bg-primary-black text-primary-white',
        outlinedBlack:
          'border-2 border-primary-black text-primary-black hover:border-opacity-70',
        outlinedWhite: 'border-2 border-primary-white text-primary-white',
        gray: 'bg-primary-gray text-primary-white',
        cyan: 'bg-secondary-cyan text-primary-white',
        red: 'bg-secondary-red text-primary-white',
      },
      rounded: {
        none: 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        full: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      rounded: 'none',
    },
  },
);

type ButtonProps = {
  children: React.ReactNode;
  rounded?: RoundedSize;
  height?: string;
  fontSize?: string;
  iconSrc?: string;
  iconSize?: number;
  iconPosition?: 'left' | 'right';
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export default function Button({
  children,
  variant,
  rounded,
  iconSrc,
  iconSize = 14,
  iconPosition = 'left',
  className,
  ...props
}: ButtonProps) {
  const icon = iconSrc ? (
    <Image
      src={iconSrc}
      alt='icon'
      width={iconSize}
      height={iconSize}
      className={iconPosition === 'left' ? 'mr-2' : 'ml-3'}
    />
  ) : null;
  return (
    <button
      className={cn(buttonVariants({ variant, rounded }), className)}
      {...props}
    >
      {iconPosition === 'left' && icon}
      {children}
      {iconPosition === 'right' && icon}
    </button>
  );
}
