import { Button as MuiButton } from "@mui/material";
import LinkWrap from "../link-wrap";

interface Props {
  data: any;
}

const Button: React.FC<Props> = ({ data }) => {
  // console.log(data);
  const renderButton = (ariaLabel: string | undefined): React.ReactNode => {
    return (
      <MuiButton
        variant={data.variant}
        size={data.size}
        fullWidth={data.fullWidth}
        color={data.color}
        disabled={data.disabled}
        aria-label={ariaLabel}
        sx={{
          mt: data.margin ? data.margin.top : 0,
          mb: data.margin ? data.margin.bottom : 0,
          ml: data.margin ? data.margin.left : 0,
          mr: data.margin ? data.margin.right : 0,
        }}
      >
        {data.text}
      </MuiButton>
    );
  };

  return (
    <>
      {data.type === "link" ? (
        <LinkWrap href={data.href} blank={data.newTab} ariaLabel={data.name}>
          {renderButton(undefined)}
        </LinkWrap>
      ) : (
        renderButton(data.name)
      )}
    </>
  );
};

export default Button;
