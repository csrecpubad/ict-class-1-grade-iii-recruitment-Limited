export type NICValidationResult = {
  valid: boolean;
  normalizedNIC: string;
  message: string;
};

export function normalizeNIC(value: string): string {
  return value
    .trim()
    .toUpperCase()
    .replace(/\s+/g, "");
}

export function validateNIC(
  value: string
): NICValidationResult {
  const nic = normalizeNIC(value);

  if (!nic) {
    return {
      valid: false,
      normalizedNIC: "",
      message: "NIC number is required.",
    };
  }

  // Old NIC:
  // 9 digits + V/X
  const oldNICPattern = /^\d{9}[VX]$/;

  if (oldNICPattern.test(nic)) {
    return {
      valid: true,
      normalizedNIC: nic,
      message: "",
    };
  }

  // New NIC:
  // Exactly 12 digits
  const newNICPattern = /^\d{12}$/;

  if (newNICPattern.test(nic)) {
    return {
      valid: true,
      normalizedNIC: nic,
      message: "",
    };
  }

  return {
    valid: false,
    normalizedNIC: nic,
    message:
      "Enter a valid NIC number. Example: 901234567V or 199012345678.",
  };
}