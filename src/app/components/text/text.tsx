import { Typography } from "@mui/material";
import dynamic from "next/dynamic";

const Bounce = dynamic(() => import("../animation/bounce"), {
  suspense: false,
});
const Fade = dynamic(() => import("../animation/fade"), { suspense: false });
const Flip = dynamic(() => import("../animation/flip"), { suspense: false });
const Hinge = dynamic(() => import("../animation/hinge"), { suspense: false });
const JackInTheBox = dynamic(() => import("../animation/jack-in-the-box"), {
  suspense: false,
});
const Roll = dynamic(() => import("../animation/roll"), { suspense: false });
const Rotate = dynamic(() => import("../animation/rotate"), {
  suspense: false,
});
const Slide = dynamic(() => import("../animation/slide"), { suspense: false });

interface Props {
  data: any;
}

const Text: React.FC<Props> = ({ data }) => {
  const {
    component,
    fontWeight,
    text,
    color,
    variant,
    textAlign,
    margin,
    noWrap,
    animation,
  } = data;

  const mapFontWeight = (): number => {
    switch (fontWeight) {
      case "light":
        return 300;
      case "regular":
        return 400;
      case "semi-bold":
        return 500;
      case "bold":
        return 700;
      default:
        return 400;
    }
  };

  const renderContent = (): React.ReactNode => (
    <Typography
      component={component}
      fontWeight={mapFontWeight()}
      color={color}
      variant={variant}
      noWrap={noWrap}
      textAlign={{
        xs: textAlign ? textAlign.xs : "start",
        sm: textAlign ? textAlign.sm : "start",
        md: textAlign ? textAlign.md : "start",
        lg: textAlign ? textAlign.lg : "start",
      }}
      mt={{
        xs: margin && margin.top ? margin.top.xs : 0,
        sm: margin && margin.top ? margin.top.sm : 0,
        md: margin && margin.top ? margin.top.md : 0,
        lg: margin && margin.top ? margin.top.lg : 0,
      }}
      mb={{
        xs: margin && margin.bottom ? margin.bottom.xs : 0,
        sm: margin && margin.bottom ? margin.bottom.sm : 0,
        md: margin && margin.bottom ? margin.bottom.md : 0,
        lg: margin && margin.bottom ? margin.bottom.lg : 0,
      }}
      ml={{
        xs: margin && margin.left ? margin.left.xs : 0,
        sm: margin && margin.left ? margin.left.sm : 0,
        md: margin && margin.left ? margin.left.md : 0,
        lg: margin && margin.left ? margin.left.lg : 0,
      }}
      mr={{
        xs: margin && margin.right ? margin.right.xs : 0,
        sm: margin && margin.right ? margin.right.sm : 0,
        md: margin && margin.right ? margin.right.md : 0,
        lg: margin && margin.right ? margin.right.lg : 0,
      }}
    >
      {/* {name === "copy-right" ? <>&copy; {`${currentYear} ${text}`}</> : text} */}
      {text}
    </Typography>
  );

  const animateContent = (): React.ReactNode => {
    if (animation && animation.component === "Bounce")
      return <Bounce animation={animation}>{renderContent()}</Bounce>;
    if (animation && animation.component === "Fade")
      return <Fade animation={animation}>{renderContent()}</Fade>;
    if (animation && animation.component === "Flip")
      return <Flip animation={animation}>{renderContent()}</Flip>;
    if (animation && animation.component === "Hinge")
      return <Hinge animation={animation}>{renderContent()}</Hinge>;
    if (animation && animation.component === "JackInTheBox")
      return (
        <JackInTheBox animation={animation}>{renderContent()}</JackInTheBox>
      );
    if (animation && animation.component === "Roll")
      return <Roll animation={animation}>{renderContent()}</Roll>;
    if (animation && animation.component === "Rotate")
      return <Rotate animation={animation}>{renderContent()}</Rotate>;
    if (animation && animation.component === "Slide")
      return <Slide animation={animation}>{renderContent()}</Slide>;

    return renderContent();
  };

  return <>{animateContent()}</>;
};

export default Text;
