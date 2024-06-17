function calculateAspectRatio(width: number, height: number): string {
  const gcd = (a: number, b: number): number => {
    if (b === 0) {
      return a;
    }
    return gcd(b, a % b);
  };

  const greatestCommonDivisor: number = gcd(width, height);
  const aspectRatio: string = `${width / greatestCommonDivisor}:${
    height / greatestCommonDivisor
  }`;

  return aspectRatio;
}

export default calculateAspectRatio;
