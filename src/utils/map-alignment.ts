export const mapAlignment = (alignment: any): "start" | "end" | "center" => {
  switch (alignment ? alignment : "flex-start") {
    case "flex-start":
      return "start";
    case "center":
      return "center";
    case "flex-end":
      return "end";
    default:
      return "start";
  }
};
