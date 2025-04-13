interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      className='bg-brand py-2 px-4 text-white rounded-sm hover:brightness-110'
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
