import Link from "next/link";
import { Button, Grid } from "@mui/material";

import { ISessionUser } from "@/types/session";
import DetailsForm from "./details-form";
import PasswordForm from "./password-form";

interface Props {
  session: ISessionUser | null;
  searchParams: any;
}

const AccountForm: React.FC<Props> = ({ session, searchParams }) => {
  return (
    <>
      <Grid container mb={3} sx={{ a: { color: "inherit" } }}>
        <Link href="/my-account?tab=personal-information&info=details">
          <Button
            variant="contained"
            size="large"
            color={searchParams["info"] === "details" ? "primary" : "inherit"}
          >
            Personal Details
          </Button>
        </Link>
        <Link href="/my-account?tab=personal-information&info=password">
          <Button
            variant="contained"
            size="large"
            color={searchParams["info"] === "password" ? "primary" : "inherit"}
          >
            Password
          </Button>
        </Link>
      </Grid>
      {searchParams["info"] === "details" && <DetailsForm session={session} />}
      {searchParams["info"] === "password" && (
        <PasswordForm session={session} />
      )}
    </>
  );
};

export default AccountForm;
