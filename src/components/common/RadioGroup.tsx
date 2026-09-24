interface RadioOption {
  value: string;
  label: string;
}

interface RadioGroupProps {
  label: string;
  name: string;
  value: string;
  options: RadioOption[];
  onChange: (value: string) => void;
  required?: boolean;
  error?: string;
}

export default function RadioGroup({
  label,
  name,
  value,
  options,
  onChange,
  required = false,
  error,
}: RadioGroupProps) {
  return (
    <div className="form-group full-width">

      {/* Question */}
      <div className="radio-question">
        {label}
        {required && (
          <span className="required-mark"> *</span>
        )}
      </div>

      {/* Radio options */}
      <div className="radio-group">

        {options.map((option) => (
          <div
            key={option.value}
            className="radio-row"
          >
            <input
              type="radio"
              id={`${name}-${option.value}`}
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={(e) =>
                onChange(e.target.value)
              }
            />

            <label
              htmlFor={`${name}-${option.value}`}
              className="radio-text"
            >
              {option.label}
            </label>
          </div>
        ))}

      </div>

      {error && (
        <small className="field-error">
          {error}
        </small>
      )}

    </div>
  );
}