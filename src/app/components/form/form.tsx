import { IListingItem } from "@/app/types/api";
import PropertySearch from "../property-search";
import RegisterCompanyForm from "../register-company-form";
import ContactForm from "../contact-form";

interface Props {
  data: any;
  listings: IListingItem[];
}

const Form: React.FC<Props> = ({ data, listings }) => {
  const { name } = data;

  const renderContent = () => {
    if (name === "property-search")
      return <PropertySearch listings={listings} />;

    if (name === "register-company") return <RegisterCompanyForm />;
    if (name === "contact") return <ContactForm />;

    return <>generic form</>;
  };

  return <>{renderContent()}</>;
};

export default Form;
