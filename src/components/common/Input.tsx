interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = ({ label, ...props }: InputProps) => {
  return (
    <div>
      {label && <label>{label}</label>}
      <input
        className='w-full p-2 border border-gray-300 rounded-md'
        {...props}
      />
    </div>
  );
};

export default Input;
