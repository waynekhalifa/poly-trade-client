function removeFontFamilyStyles(htmlString: string) {
  // Use a regular expression to replace all instances of 'font-family: *;' with an empty string
  return htmlString.replace(/font-family:\s*[^;]+;/g, "");
}

export default removeFontFamilyStyles;
