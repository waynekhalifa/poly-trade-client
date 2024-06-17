import Link from "next/link";
import { Button, Grid } from "@mui/material";

import ForUsers from "./for-users";
import CustomerAgreement from "./customer-agreement";

interface Props {
  searchParams: any;
}

const TermsAndConditions: React.FC<Props> = ({ searchParams }) => {
  return (
    <>
      <Grid container mb={3} sx={{ a: { color: "inherit" } }}>
        <Link href="/terms-and-conditions?tab=for-users">
          <Button
            variant="contained"
            size="large"
            color={searchParams["tab"] === "for-users" ? "primary" : "inherit"}
          >
            For Users
          </Button>
        </Link>
        <Link href="/terms-and-conditions?tab=for-agents">
          <Button
            variant="contained"
            size="large"
            color={searchParams["tab"] === "for-agents" ? "primary" : "inherit"}
          >
            Customer Agreement
          </Button>
        </Link>
      </Grid>
      {searchParams["tab"] === "for-users" && <ForUsers />}
      {searchParams["tab"] === "for-agents" && <CustomerAgreement />}
    </>
  );
};

export default TermsAndConditions;
