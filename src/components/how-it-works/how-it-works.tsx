import Link from "next/link";
import { Button, Grid } from "@mui/material";

import ForUsers from "./for-users";
import ForAgents from "./for-agents";

interface Props {
  searchParams: any;
}

const HowItWorks: React.FC<Props> = ({ searchParams }) => {
  return (
    <>
      <Grid container mb={3} sx={{ a: { color: "inherit" } }}>
        <Link href="/how-it-works?tab=for-users">
          <Button
            variant="contained"
            size="large"
            color={searchParams["tab"] === "for-users" ? "primary" : "inherit"}
          >
            For Users
          </Button>
        </Link>
        <Link href="/how-it-works?tab=for-agents">
          <Button
            variant="contained"
            size="large"
            color={searchParams["tab"] === "for-agents" ? "primary" : "inherit"}
          >
            For agents
          </Button>
        </Link>
      </Grid>
      {searchParams["tab"] === "for-users" && <ForUsers />}
      {searchParams["tab"] === "for-agents" && <ForAgents />}
    </>
  );
};

export default HowItWorks;
