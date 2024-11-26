import Section from "../section";
import { IListingItem, IListingResult } from "@/app/types/api";
import { ISessionUser } from "@/app/types/session";

interface Props {
  sections: IListingResult;
  listings: IListingItem[];
  activePage: string;
  session?: ISessionUser | null;
  searchParams?: any;
}

const SectionsRenderer: React.FC<Props> = ({
  sections,
  listings,
  activePage,
  session,
  searchParams,
}) => {
  return (
    <>
      {sections.data.map((item: any) => (
        <Section
          key={item.id}
          data={item.attributes}
          listings={listings}
          activePage={activePage}
          session={session ? session : null}
          searchParams={searchParams ? searchParams : null}
        />
      ))}
    </>
  );
};

export default SectionsRenderer;
