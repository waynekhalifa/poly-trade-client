import RichText from "../components/rich-text";

export function sectionRenderer(section: any, index: number) {
  switch (section.__component) {
    case "shared.quote":
      return <RichText key={index} data={section} />;
    default:
      return null;
  }
}
