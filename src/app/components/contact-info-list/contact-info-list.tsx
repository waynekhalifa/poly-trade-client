import { Box, Grid } from "@mui/material";

import ContactInfo from "../contact-info";

interface Props {
  data: any;
}

const ContactInfoList: React.FC<Props> = ({ data }) => {
  const { gap, list, margin, padding } = data;

  const renderContent = (): React.ReactNode => (
    <Grid container columnSpacing={gap}>
      {list.map((item: any) => (
        <Grid item key={item.id} xs={12} md={6}>
          <ContactInfo data={item} />
        </Grid>
      ))}
    </Grid>
  );

  const animateContent = (): React.ReactNode => {
    return renderContent();
  };

  return (
    <Box
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
      {animateContent()}
    </Box>
  );
};

export default ContactInfoList;
