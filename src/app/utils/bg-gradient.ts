export function linearGradient(
  startColor: string,
  endColor: string,
  degree: string
): string {
  return `linear-gradient(${degree}deg, ${startColor}, ${endColor})`;
}
