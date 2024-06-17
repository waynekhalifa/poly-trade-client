import Quote from "../quote";
import RichText from "../rich-text";

interface Props {
  section: any;
  index: number;
}

const SectionRenderer: React.FC<Props> = ({ section, index }) => {
  const renderSection = () => {
    switch (section.__component) {
      case "shared.richtext":
        return <RichText key={index} data={section} />;
      case "shared.quote":
        return <Quote key={index} data={section} />;
      default:
        return null;
    }
  };

  return <>{renderSection()}</>;
};

export default SectionRenderer;
