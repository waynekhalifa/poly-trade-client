import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Chip,
  Grid,
  Typography,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { IListingItem } from "@/app/types/api";
import LinkWrap from "../link-wrap";
import { useEffect, useState } from "react";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

interface Props {
  data: any;
  listings: IListingItem[];
}

const ExploreProperties: React.FC<Props> = ({ listings }) => {
  const [value, setValue] = useState<number>(0);
  const [location, setLocation] = useState<string>("");
  const [locationSlug, setLocationSlug] = useState<string>("");

  useEffect(() => {
    const propertyLocations: IListingItem | undefined = listings.find(
      (item: any) => item.name === "propertyLocations"
    );

    if (
      propertyLocations &&
      propertyLocations.result.data &&
      propertyLocations.result.data.length > 0
    ) {
      setLocation(propertyLocations.result.data[0].attributes.name);
    }

    // eslint-disable-next-line
  }, []);

  const propertyTypes: IListingItem | undefined = listings.find(
    (item: any) => item.name === "propertyTypes"
  );
  const propertyLocations: IListingItem | undefined = listings.find(
    (item: any) => item.name === "propertyLocations"
  );

  const handleChange = (event: React.SyntheticEvent, newValue: number) =>
    setValue(newValue);

  const handleClick = (name: string, slug: string) => {
    setLocation(name);
    setLocationSlug(slug);
  };

  const isSelected = (label: string): boolean => label === location;

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="purpose tabs"
        >
          <Tab
            label="Buy"
            {...a11yProps(0)}
            sx={{ textTransform: "capitalize" }}
          />
          <Tab
            label="Rent"
            {...a11yProps(1)}
            sx={{ textTransform: "capitalize" }}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        {propertyLocations &&
          propertyLocations.result.data &&
          propertyLocations.result.data.length && (
            <Grid container gap={2}>
              {propertyLocations.result.data.map((item: any) => (
                <Chip
                  key={item.id}
                  label={item.attributes.name}
                  onClick={() =>
                    handleClick(item.attributes.name, item.attributes.slug)
                  }
                  sx={{
                    borderRadius: 0,
                    border: "1px solid",
                    borderColor: isSelected(item.attributes.name)
                      ? "secondary.main"
                      : "transparent",
                    cursor: "pointer",
                  }}
                />
              ))}
            </Grid>
          )}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        {propertyLocations &&
          propertyLocations.result.data &&
          propertyLocations.result.data.length > 0 && (
            <Grid container gap={2}>
              {propertyLocations.result.data.map((item: any) => (
                <Chip
                  key={item.id}
                  label={item.attributes.name}
                  onClick={() =>
                    handleClick(item.attributes.name, item.attributes.slug)
                  }
                  sx={{
                    borderRadius: 0,
                    border: "1px solid",
                    borderColor: isSelected(item.attributes.name)
                      ? "secondary.main"
                      : "transparent",
                    cursor: "pointer",
                  }}
                />
              ))}
            </Grid>
          )}
      </CustomTabPanel>
      {propertyTypes &&
        propertyTypes.result.data &&
        propertyTypes.result.data.length > 0 && (
          <>
            {propertyTypes.result.data.map((item: any) => (
              <Accordion
                key={item.id}
                elevation={0}
                disableGutters
                sx={{
                  mb: 2,
                  bgcolor: "transparent",
                  border: "1px solid",
                  borderColor: "divider",
                  "&::before": {
                    display: "none",
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  {`Find ${item.attributes.name}s`}
                </AccordionSummary>
                <AccordionDetails
                  sx={{ borderTop: "1px solid", borderColor: "divider" }}
                >
                  <LinkWrap
                    href={`/${
                      value === 0 ? "buy" : "rent"
                    }?search=${locationSlug}&property-type=${
                      item.id
                    }&bedrooms=-1&bathrooms=-1`}
                    sx={{ textDecoration: "underline" }}
                  >
                    <Typography variant="body2">
                      {`${item.attributes.name}s for ${
                        value === 0 ? "sale" : "rent"
                      } in ${location}`}
                    </Typography>
                  </LinkWrap>
                </AccordionDetails>
              </Accordion>
            ))}
          </>
        )}
    </>
  );
};

export default ExploreProperties;
