import { Box, Container, Grid, Typography } from "@mui/material";
import useResponsive from "@/app/hooks/useResponsive";
import { Fragment } from "react";
import { MD_UP_PARAMS } from "@/app/constants/media-queries";
import LinkWrap from "../../link-wrap";

interface Props {
  logoUrl: string | null;
  logoText: string | null;
  copyright: any;
}

const CopyRight: React.FC<Props> = ({ logoUrl, logoText, copyright }) => {
  const mdUp = useResponsive(MD_UP_PARAMS);

  const renderText = (item: any): React.ReactNode => (
    <>{item.text.length > 0 && item.text}</>
  );

  const renderLink = (item: any): React.ReactNode => (
    <LinkWrap
      href={item.url}
      blank={item.children[0].text === "IZOSS" ? true : false}
    >
      {item.children[0].text}
    </LinkWrap>
  );

  const renderCopyWrightText = (): React.ReactNode => (
    <>
      {copyright[0].children.map((item: any, index: number) => (
        <Fragment key={index}>
          {item.type === "text" ? renderText(item) : renderLink(item)}
        </Fragment>
      ))}
    </>
  );

  return (
    <Box bgcolor={"primary.light"}>
      <Container>
        <Grid container justifyContent={"space-between"} alignItems={"center"}>
          <Box
            height={"100%"}
            py={2}
            px={3}
            position={"relative"}
            bgcolor={"secondary.main"}
            display={{ xs: "none", md: "block" }}
          >
            {/* <Logo placement={"footer"} logoUrl={logoUrl} logoText={logoText} /> */}
            <Box
              position={"absolute"}
              left={0}
              top={-31}
              width={1}
              height={32}
              bgcolor={"secondary.main"}
              sx={{ clipPath: "polygon(100% 0%, 0% 100%, 100% 100%)" }}
            />
            <Box
              position={"absolute"}
              right={-24}
              top={-32}
              width={24}
              height={32}
              bgcolor={"secondary.dark"}
              sx={{ clipPath: "polygon(0 0, 0% 100%, 100% 100%)" }}
            />
          </Box>
          <Typography
            textAlign={mdUp ? "end" : "center"}
            color={"common.white"}
            py={{ xs: 2, md: 0 }}
            sx={{ a: { color: "secondary.main", fontWeight: 500 } }}
          >
            {renderCopyWrightText()}
          </Typography>
        </Grid>
      </Container>
    </Box>
  );
};

export default CopyRight;
