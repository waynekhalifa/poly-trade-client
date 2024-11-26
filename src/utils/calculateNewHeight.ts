function calculateNewHeight(
  originalWidth: number,
  originalHeight: number,
  newWidth: number
): number {
  const aspectRatio: number = originalHeight / originalWidth;
  const newHeight: number = aspectRatio * newWidth;

  return newHeight;
}

export default calculateNewHeight;
