import dynamic from "next/dynamic";
import { Email, PhoneIphone } from "@mui/icons-material";
// import Form from "../form";
import { ISessionUser } from "@/app/types/session";

const Button = dynamic(() => import("../button"), { suspense: false });
const Form = dynamic(() => import("../form"), { suspense: false });
const Faqs = dynamic(() => import("../faqs"), { suspense: false });
const ButtonList = dynamic(() => import("../button-list"), { suspense: false });
const ExploreProperties = dynamic(() => import("../explore-properties"), {
  suspense: false,
});
const ButtonLink = dynamic(() => import("../button-link"), { suspense: false });
const Listing = dynamic(() => import("../listing"), { suspense: false });
const Media = dynamic(() => import("../media"), { suspense: false });
const NewLogo = dynamic(() => import("../new-logo"), { suspense: false });
const Quote = dynamic(() => import("../quote"), { suspense: false });
const RichText = dynamic(() => import("../rich-text"), { suspense: false });
const Service = dynamic(() => import("../service"), { suspense: false });
const Text = dynamic(() => import("../text"), { suspense: false });
const Slider = dynamic(() => import("../slider"), { suspense: false });
const SubscribeForm = dynamic(() => import("../subscribe-form"), {
  suspense: false,
});
const SocialIcons = dynamic(() => import("../social-icons"), {
  suspense: false,
});
const Breadcrumb = dynamic(() => import("../breadcrumb"), {
  suspense: false,
});
const UsefulLinks = dynamic(() => import("../usefull-links"), {
  suspense: false,
});
const HeroTitle = dynamic(() => import("../hero-title"), {
  suspense: false,
});
const WidgetTitle = dynamic(() => import("../widget-title"), {
  suspense: false,
});
const ContactForm = dynamic(() => import("../contact-form"), {
  suspense: false,
});
const EmbeddedMap = dynamic(() => import("../embedded-map"), {
  suspense: false,
});
const MessageForm = dynamic(() => import("../message-form"), {
  suspense: false,
});
const ContactInformation = dynamic(() => import("../contact-information"), {
  suspense: false,
});
const SearchForm = dynamic(() => import("../search-form"), {
  suspense: false,
});
const Gallery = dynamic(() => import("../gallery"), {
  suspense: false,
});
const Testimonials = dynamic(() => import("../testimonials"), {
  suspense: false,
});
const TextImageList = dynamic(() => import("../text-image-list"), {
  suspense: false,
});
const CourseModuleList = dynamic(() => import("../course-module-list"), {
  suspense: false,
});
const Numbers = dynamic(() => import("../numbers"), {
  suspense: false,
});
const Criterias = dynamic(() => import("../criterias"), {
  suspense: false,
});
const Divider = dynamic(() => import("../divider"), {
  suspense: false,
});
const PortfolioItem = dynamic(() => import("../portfolio-item"), {
  suspense: false,
});
const LottieTechnology = dynamic(() => import("../lottie-technology"), {
  suspense: false,
});
const SupportLinks = dynamic(() => import("../support-links"), {
  suspense: false,
});
const MyAccount = dynamic(() => import("../my-account"), {
  suspense: false,
});
const TermsAndConditions = dynamic(() => import("../terms-and-conditions"), {
  suspense: false,
});
const HowItWorks = dynamic(() => import("../how-it-works"), {
  suspense: false,
});

interface Props {
  component: any;
  listings: any[];
  activePage: string;
  searchParams: any;
  session: ISessionUser | null;
}

const Content: React.FC<Props> = ({
  component,
  listings,
  activePage,
  searchParams,
  session,
}) => {
  // console.log(component);
  const renderComponent = () => {
    switch (component.__component) {
      case "shared.rich-text":
        return <RichText key={component._id} data={component} />;
      case "shared.quote":
        return <Quote key={component._id} data={component} />;
      case "shared.text":
        return <Text key={component._id} data={component} />;
      case "shared.button":
        return <Button key={component._id} data={component} />;
      case "shared.slider":
        return <Slider key={component._id} data={component} />;
      case "shared.media":
        return <Media key={component._id} data={component} />;
      case "shared.service":
        return <Service key={component._id} data={component} />;
      case "shared.social-icons":
        return <SocialIcons key={component._id} data={component} />;
      case "shared.logo":
        return <NewLogo key={component._id} data={component} />;
      // case "shared.breadcrumb":
      //   return <Breadcrumb key={component._id} data={component} />;
      case "shared.subscribe-form":
        return <SubscribeForm key={component._id} data={component} />;
      case "shared.hero-title":
        return <HeroTitle key={component._id} data={component} />;
      case "shared.widget-title":
        return <WidgetTitle key={component._id} data={component} />;
      case "shared.embedded-map":
        return <EmbeddedMap key={component._id} data={component} />;
      case "shared.contact-form":
        return <ContactForm key={component._id} data={component} />;
      case "shared.message-form":
        return <MessageForm key={component._id} data={component} />;
      case "shared.contac-information":
        return <ContactInformation key={component._id} data={component} />;
      case "shared.search-form":
        return <SearchForm key={component._id} data={component} />;
      case "shared.gallery":
        return <Gallery key={component._id} data={component} />;
      case "shared.testimonials":
        return <Testimonials key={component._id} data={component} />;
      case "shared.text-image-list":
        return <TextImageList key={component._id} data={component} />;
      case "shared.button-list":
        return <ButtonList key={component._id} data={component} />;
      case "shared.course-module-list":
        return <CourseModuleList key={component._id} data={component} />;
      case "shared.numbers":
        return <Numbers key={component._id} data={component} />;
      case "shared.craterias":
        return <Criterias key={component._id} data={component} />;
      case "shared.portfolio-item":
        return <PortfolioItem key={component._id} data={component} />;
      case "shared.divider":
        return <Divider key={component._id} data={component} />;
      case "shared.fa-qs":
        return <Faqs key={component._id} data={component} />;
      case "shared.terms-and-conditions":
        return (
          <TermsAndConditions key={component._id} searchParams={searchParams} />
        );
      case "shared.how-it-works":
        return <HowItWorks key={component._id} searchParams={searchParams} />;
      case "shared.lottie-technology":
        return <LottieTechnology key={component._id} data={component} />;
      case "shared.explore-properties":
        return (
          <ExploreProperties
            key={component._id}
            data={component}
            listings={listings}
          />
        );
      case "shared.form":
        return (
          <Form key={component._id} data={component} listings={listings} />
        );
      case "shared.my-account":
        return (
          <MyAccount
            key={component._id + searchParams && searchParams["tab"]}
            data={component}
            listings={listings}
            searchParams={searchParams}
            session={session}
          />
        );
      case "shared.sitemap":
        return component.placement === "footer.widget" ? (
          <UsefulLinks
            key={component._id}
            data={component}
            activePage={activePage}
          />
        ) : (
          <SupportLinks
            key={component._id}
            data={component}
            activePage={activePage}
          />
        );
      case "shared.contact":
        return (
          <ButtonLink
            key={component._id}
            text={component.contact}
            url={component.url}
            padding={component.padding}
            margin={component.margin}
            icon={<PhoneIphone sx={{ color: "common.white" }} />}
          />
        );
      case "shared.email":
        return (
          <ButtonLink
            key={component._id}
            text={component.email}
            url={component.url}
            padding={component.padding}
            margin={component.margin}
            icon={<Email sx={{ color: "common.white" }} />}
          />
        );
      case "shared.listing":
        return (
          <Listing
            key={component._id}
            data={component}
            listings={listings}
            activePage={activePage}
            searchParams={searchParams}
            session={session}
          />
        );
      default:
        return null;
    }
  };

  return <>{renderComponent()}</>;
};

export default Content;
