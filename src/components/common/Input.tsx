interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = ({ label, ...props }: InputProps) => {
  return (
    <div className='flex items-center'>
      {label && <label className='min-w-[80px] text-right mr-2'>{label}</label>}
      <input
        className='flex-1 p-2 my-1 outline-none border border-gray-300 rounded-md'
        {...props}
      />
    </div>
  );
};

export default Input;
