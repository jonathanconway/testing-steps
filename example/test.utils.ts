export function parseNumber(numberString: string) {
  const numberStringCleaned = numberString.replaceAll(",", "");
  const numberFloat = parseFloat(numberStringCleaned);
  return numberFloat;
}
