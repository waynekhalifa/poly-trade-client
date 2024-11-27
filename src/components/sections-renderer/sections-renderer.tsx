import Section from "../section";
import { IListingItem, IListingResult } from "@/types/api";
import { ISessionUser } from "@/types/session";
import { Locale } from "@/types/locale";

interface Props {
  sections: IListingResult;
  listings: IListingItem[];
  activePage: string;
  locale: Locale;
  session?: ISessionUser | null;
  searchParams?: any;
}

const SectionsRenderer: React.FC<Props> = ({
  sections,
  listings,
  activePage,
  session,
  searchParams,
  locale,
}) => {
  return (
    <>
      {sections.data.map((item: any) => (
        <Section
          key={item.id}
          data={item.attributes}
          listings={listings}
          activePage={activePage}
          locale={locale}
          session={session ? session : null}
          searchParams={searchParams ? searchParams : null}
        />
      ))}
    </>
  );
};

export default SectionsRenderer;
