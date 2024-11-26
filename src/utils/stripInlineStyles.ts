import cheerio from "cheerio";

function stripInlineStyles(html: string): string {
  const $ = cheerio.load(html);

  // Remove inline style attribute from all elements
  $("[style]").removeAttr("style");

  // Remove style tags
  $("style").remove();

  return $.html();
}

export default stripInlineStyles;
