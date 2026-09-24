interface DateFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;

  required?: boolean;
  disabled?: boolean;
  min?: string;
  max?: string;
  error?: string;
}

export default function DateField({
  label,
  name,
  value,
  onChange,
  required = false,
  disabled = false,
  min,
  max,
  error,
}: DateFieldProps) {
  return (
    <div className="form-group">
      <label htmlFor={name}>
        {label}

        {required && (
          <span className="required-mark"> *</span>
        )}
      </label>

      <input
        id={name}
        name={name}
        type="date"
        value={value}
        disabled={disabled}
        min={min}
        max={max}
        onChange={(e) => onChange(e.target.value)}
        className={error ? "input-error" : ""}
      />

      {error && (
        <small className="field-error">
          {error}
        </small>
      )}
    </div>
  );
}