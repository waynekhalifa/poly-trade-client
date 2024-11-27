import { IListingItem } from "@/types/api";
import PropertySearch from "../property-search";
import RegisterCompanyForm from "../register-company-form";
import ContactForm from "../contact-form";
import { Locale } from "@/types/locale";

interface Props {
  data: any;
  locale: Locale;
  listings: IListingItem[];
}

const Form: React.FC<Props> = ({ data, listings, locale }) => {
  const { name } = data;

  const renderContent = () => {
    if (name === "property-search")
      return <PropertySearch listings={listings} />;

    if (name === "register-company") return <RegisterCompanyForm />;
    if (name === "contact") return <ContactForm locale={locale} />;

    return <>generic form</>;
  };

  return <>{renderContent()}</>;
};

export default Form;
