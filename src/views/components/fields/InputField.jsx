
function InputField(props) {
  const { label, id,name, extra, type, placeholder, variant,onChange,value } =
    props;

  return (
    <div className={`${extra}`}>
      <label
        htmlFor={id}
        className={`text-sm text-white ${
          variant === "auth" ? "ml-1.5 font-medium" : "ml-3 font-bold !text-black"
        }`}
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        className="mt-2 flex h-12 w-full text-black  items-center justify-center rounded-xl  border bg-white p-3 text-sm outline-none"
      />
    </div>
  );
}

export default InputField;
