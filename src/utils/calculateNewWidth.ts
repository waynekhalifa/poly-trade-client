function calculateNewWidth(
  originalWidth: number,
  originalHeight: number,
  newHeight: number
): number {
  const aspectRatio: number = originalWidth / originalHeight;
  const newWidth: number = aspectRatio * newHeight;

  return newWidth;
}

export default calculateNewWidth;
