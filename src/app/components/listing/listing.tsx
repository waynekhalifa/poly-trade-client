import { IListingItem } from "@/app/types/api";
import PropertyListing from "../property-listing";
import { ISessionUser } from "@/app/types/session";

interface Props {
  data: any;
  listings: IListingItem[];
  activePage: string;
  searchParams: any;
  session: ISessionUser | null;
}

const Listing: React.FC<Props> = ({
  data,
  listings,
  activePage,
  searchParams,
  session,
}) => {
  const { sectionName } = data;

  if (sectionName === "property-listing") {
    return (
      <PropertyListing
        listings={listings}
        activePage={activePage}
        searchParams={searchParams}
        session={session}
      />
    );
  }

  return <>Should render listing</>;
};

export default Listing;
