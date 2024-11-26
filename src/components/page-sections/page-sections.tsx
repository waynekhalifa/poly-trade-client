import dynamic from "next/dynamic";

const pages: any = {
  "contact-me": dynamic(() => import("./contact-me"), {
    suspense: false,
  }),
  "about-me": dynamic(() => import("./about-me"), {
    suspense: false,
  }),
  blog: dynamic(() => import("./blog"), {
    suspense: false,
  }),
  services: dynamic(() => import("./services"), {
    suspense: false,
  }),
  coaching: dynamic(() => import("./coaching"), {
    suspense: false,
  }),
  "empty-content": dynamic(() => import("./empty-content"), {
    suspense: false,
  }),
};

interface Props {
  page: any;
  posts: any;
}

const PageSections: React.FC<Props> = ({ page, posts }) => {
  const PageComponent = pages[page.attributes.slug] || pages[`empty-content`];

  return (
    <>
      <PageComponent page={page} posts={posts} />
    </>
  );
};

export default PageSections;
