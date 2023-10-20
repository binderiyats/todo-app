import "../../styles/components/common/Button.css";

export const Button = ({
  children,
  width = "max-content",
  outline = false,
  size = "medium",
  Icon,
}) => {
  return (
    <button
      className={`button ${outline ? "outline" : ""} ${size}`}
      style={{ width }}
    >
      {Icon && (
        <Icon
          width={size === "medium" ? 16 : 24}
          height={size === "medium" ? 16 : 24}
        />
      )}
      <span>{children}</span>
    </button>
  );
};
