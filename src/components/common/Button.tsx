interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      className='bg-brand py-2 px-4 text-white rounded-sm hover:brightness-110'
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
