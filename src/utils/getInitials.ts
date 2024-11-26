export function getInitials(name: string = ""): string {
  const nameParts = name.split(" ");

  const initials = nameParts
    .map((part) => {
      if (part.length > 0) {
        return part[0].toUpperCase();
      }
    })
    .join("");

  return initials;
}
