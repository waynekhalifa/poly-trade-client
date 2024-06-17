import dynamic from "next/dynamic";
import { Grid } from "@mui/material";

import Button from "../button";

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

const ButtonList: React.FC<Props> = ({ data }) => {
  const { list, margin, padding, alignment, animation } = data;

  const renderContent = (): React.ReactNode => (
    <Grid
      container
      columnGap={3}
      justifyContent={{
        xs: alignment ? alignment.xs : "flex-start",
        sm: alignment ? alignment.sm : "flex-start",
        md: alignment ? alignment.md : "flex-start",
        lg: alignment ? alignment.lg : "flex-start",
      }}
      pt={{
        xs: padding && padding.top ? padding.top.xs : 0,
        sm: padding && padding.top ? padding.top.sm : 0,
        md: padding && padding.top ? padding.top.md : 0,
        lg: padding && padding.top ? padding.top.lg : 0,
      }}
      pb={{
        xs: padding && padding.bottom ? padding.bottom.xs : 0,
        sm: padding && padding.bottom ? padding.bottom.sm : 0,
        md: padding && padding.bottom ? padding.bottom.md : 0,
        lg: padding && padding.bottom ? padding.bottom.lg : 0,
      }}
      pl={{
        xs: padding && padding.left ? padding.left.xs : 0,
        sm: padding && padding.left ? padding.left.sm : 0,
        md: padding && padding.left ? padding.left.md : 0,
        lg: padding && padding.left ? padding.left.lg : 0,
      }}
      pr={{
        xs: padding && padding.right ? padding.right.xs : 0,
        sm: padding && padding.right ? padding.right.sm : 0,
        md: padding && padding.right ? padding.right.md : 0,
        lg: padding && padding.right ? padding.right.lg : 0,
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
      {list.map((item: any) => (
        <Button key={item.id} data={item} />
      ))}
    </Grid>
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

export default ButtonList;
