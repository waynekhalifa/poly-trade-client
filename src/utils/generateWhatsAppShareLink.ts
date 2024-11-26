export function generateWhatsAppShareLink(
  phoneNumber: string,
  url: string,
  text: string
): string {
  const encodedPhoneNumber = encodeURIComponent(phoneNumber);
  const encodedUrl = encodeURIComponent(url);
  const encodedText = encodeURIComponent(text);
  return `https://api.whatsapp.com/send?phone=${encodedPhoneNumber}&text=${encodedText}%0A${encodedUrl}`;
}
