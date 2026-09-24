export function calculateAge(
  birthday: string,
  referenceDate: string
): string {
  if (!birthday) {
    return "";
  }

  const birthDate = new Date(`${birthday}T00:00:00`);
  const targetDate = new Date(`${referenceDate}T00:00:00`);

  if (isNaN(birthDate.getTime()) || isNaN(targetDate.getTime())) {
    return "";
  }

  if (birthDate > targetDate) {
    return "";
  }

  let years =
    targetDate.getFullYear() -
    birthDate.getFullYear();

  let months =
    targetDate.getMonth() -
    birthDate.getMonth();

  let days =
    targetDate.getDate() -
    birthDate.getDate();

  if (days < 0) {
    months--;

    const previousMonth = new Date(
      targetDate.getFullYear(),
      targetDate.getMonth(),
      0
    );

    days += previousMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  return `${years} Years ${months
    .toString()
    .padStart(2, "0")} Months ${days
    .toString()
    .padStart(2, "0")} Days`;
}