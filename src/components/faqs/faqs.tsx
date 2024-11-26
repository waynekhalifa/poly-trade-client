import { useState } from "react";
import { ArrowForwardIosSharp } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
  useTheme,
} from "@mui/material";

interface Props {
  data: any;
}

const Faqs: React.FC<Props> = ({ data }) => {
  const theme = useTheme();
  const [expanded, setExpanded] = useState<string | false>(
    `panel${data.questions[0].id}`
  );

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <Box
      sx={{
        mt: data.margin ? data.margin.top : 0,
        mb: data.margin ? data.margin.bottom : 0,
        ml: data.margin ? data.margin.left : 0,
        mr: data.margin ? data.margin.right : 0,
        pt: data.padding ? data.padding.top : 0,
        pb: data.padding ? data.padding.bottom : 0,
        pl: data.padding ? data.padding.left : 0,
        pr: data.padding ? data.padding.right : 0,
      }}
    >
      {data.questions.map((item: any) => (
        <Accordion
          key={item.id}
          expanded={expanded === `panel${item.id}`}
          onChange={handleChange(`panel${item.id}`)}
        >
          <AccordionSummary
            aria-controls={`panel${item.id}-content`}
            id={`panel${item.id}-header`}
            expandIcon={<ArrowForwardIosSharp sx={{ fontSize: "0.9rem" }} />}
            sx={{
              bgcolor:
                theme.palette.mode === "dark"
                  ? "rgba(255, 255, 255, .05)"
                  : "rgba(0, 0, 0, .03)",
              flexDirection: "row-reverse",
              "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                transform: "rotate(90deg)",
                mr: 1,
              },
              "& .MuiAccordionSummary-content": {
                ml: 1,
              },
            }}
          >
            <Typography>{item.Summary}</Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{ p: 2, borderTop: "1px solid rgba(0, 0, 0, .125)" }}
          >
            <Typography>{item.Content}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default Faqs;
