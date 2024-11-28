export function formatNumberToArabic(num: number): string {
  const arabicFormatter = new Intl.NumberFormat("ar-EG");
  return arabicFormatter.format(num);
}
