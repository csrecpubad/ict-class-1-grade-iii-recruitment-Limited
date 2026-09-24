export interface SelectOption {
  value: string;
  label: string;
}

interface SelectFieldProps {
  label: string;
  name: string;
  value: string;
  options: SelectOption[];
  onChange: (value: string) => void;

  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
}

export default function SelectField({
  label,
  name,
  value,
  options,
  onChange,
  placeholder = "Select",
  required = false,
  disabled = false,
  error,
}: SelectFieldProps) {
  return (
    <div className="form-group">
      <label htmlFor={name}>
        {label}

        {required && (
          <span className="required-mark"> *</span>
        )}
      </label>

      <select
        id={name}
        name={name}
        value={value}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
        className={error ? "input-error" : ""}
      >
        <option value="">
          {placeholder}
        </option>

        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>

      {error && (
        <small className="field-error">
          {error}
        </small>
      )}
    </div>
  );
}