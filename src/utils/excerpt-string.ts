export function excerptString(input: string, maxLength: number): string {
  if (input.length <= maxLength) {
    return input;
  }

  const trimmedString = input.substr(0, maxLength - 3).trim();
  return trimmedString + "...";
}
