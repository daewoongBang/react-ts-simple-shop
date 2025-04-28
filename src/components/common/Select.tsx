interface Option {
  label: string;
  value: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options?: Option[];
}

const Select = ({ options, ...props }: SelectProps) => {
  return (
    <select
      className='w-full border-dashed border-2 border-brand p-2 outline-none'
      {...props}
    >
      {options?.map((option, index) => (
        <option key={`${option.value}-${index}`} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
