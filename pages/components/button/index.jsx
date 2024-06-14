import Image from 'next/image';
import { tv } from 'tailwind-variants';

const buttonVariants = tv({
  base: 'font-bold rounded-xl flex gap-1 justify-center',
  variants: {
    color: {
      primary: 'bg-primary',
      secondary: 'bg-zinc-200',
    },
    size: {
      default: 'h-10 px-2',
      sm: 'px-2 py-1',
      md: 'px-4 py-2',
      xl: 'px-6 py-4',
    },
    style: {
      outline: 'bg-transparent border w-full',
      filled: 'text-white bg-primary w-full  hover:bg-primary-dark-800',
      icon: 'p-4',
    },
    disabled: {
      true: 'opacity-50 bg-gray-500 pointer-events-none',
    },
  },
  compoundVariants: [
    {
      style: 'outline',
      class: 'text-primary hover:bg-primary-dark-100 border-primary-dark-100',
    },
    {
      style: 'borderless',
      class: 'text-gray-700 hover:bg-gray-50',
    },
  ],
});

function Button({ size, style, color, disabled, ...props }) {
  return (
    <button
      className={buttonVariants({ size, style, color, disabled })}
      {...props}
    >
      {props.children}
    </button>
  );
}

export default Button;
