export function lightenColor(hexColor: string, amount: number): string {
  // Remove the '#' symbol if present
  const color = hexColor.replace("#", "");

  // Convert the color to RGB
  const red = parseInt(color.slice(0, 2), 16);
  const green = parseInt(color.slice(2, 4), 16);
  const blue = parseInt(color.slice(4, 6), 16);

  // Calculate the lightened color
  const lightenedRed = Math.round(red + (255 - red) * amount);
  const lightenedGreen = Math.round(green + (255 - green) * amount);
  const lightenedBlue = Math.round(blue + (255 - blue) * amount);

  // Convert the lightened color back to hex
  const lightenedHex = `#${(
    (lightenedRed << 16) |
    (lightenedGreen << 8) |
    lightenedBlue
  )
    .toString(16)
    .padStart(6, "0")}`;

  return lightenedHex;
}

export function darkenColor(hexColor: string, amount: number): string {
  // Remove the '#' symbol if present
  const color = hexColor.replace("#", "");

  // Convert the color to RGB
  const red = parseInt(color.slice(0, 2), 16);
  const green = parseInt(color.slice(2, 4), 16);
  const blue = parseInt(color.slice(4, 6), 16);

  // Calculate the darkened color
  const darkenedRed = Math.round(red * (1 - amount));
  const darkenedGreen = Math.round(green * (1 - amount));
  const darkenedBlue = Math.round(blue * (1 - amount));

  // Convert the darkened color back to hex
  const darkenedHex = `#${(
    (darkenedRed << 16) |
    (darkenedGreen << 8) |
    darkenedBlue
  )
    .toString(16)
    .padStart(6, "0")}`;

  return darkenedHex;
}
