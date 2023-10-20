import "../../styles/components/common/Input.css";

export const Input = ({
  label,
  placeholder,
  width = "100%",
  id,
  name,
  error = false,
  errorMsg,
  ...rest
}) => {
  return (
    <div className="input-wrapper" style={{ width }}>
      {label ? (
        <label htmlFor={id} className="input-label">
          {label}
        </label>
      ) : null}
      <input
        className="input"
        id={id}
        placeholder={placeholder}
        name={name}
        {...rest}
      />
      {error && errorMsg ? <p className="">{errorMsg}</p> : null}
    </div>
  );
};
