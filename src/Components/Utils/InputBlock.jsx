const InputBlock = ({ inputData, inputFunction, type, name, placeholder }) => {
  return (
    <div className="block">
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className="p-2 bg-transparent border-b-2 border-white-1"
        value={inputData}
        onChange={(e) => {
          inputFunction(e.target.value);
        }}
      />
    </div>
  );
};

export default InputBlock;
