import TextField from "./TextField";

interface NICFieldProps {
  value: string;
  onChange: (value: string) => void;

  required?: boolean;
  disabled?: boolean;
  error?: string;
}

export default function NICField({
  value,
  onChange,
  required = true,
  disabled = false,
  error,
}: NICFieldProps) {
  const handleChange = (input: string) => {
    const cleaned = input
      .toUpperCase()
      .replace(/[^0-9VX]/g, "")
      .slice(0, 12);

    onChange(cleaned);
  };

  return (
    <TextField
      label="National Identity Card Number"
      name="nic"
      value={value}
      onChange={handleChange}
      placeholder="Enter NIC number"
      example="Example: 901234567V or 199012345678"
      required={required}
      disabled={disabled}
      maxLength={12}
      error={error}
    />
  );
}