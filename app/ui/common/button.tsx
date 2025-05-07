import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        'text-white transition-colors bg-[#2E57D3] disabled:bg-[#BEC7E2] disabled:pointer-events-none disabled:cursor-default hover:bg-primary border-none outline-none flex items-center justify-center px-10 py-4 cursor-pointer',
        className,
      )}
    >
      {children}
    </button>
  );
}
