export function calculatePages(total: number, limit: number): number {
  return total <= limit ? 1 : Math.ceil(total / limit);
}
