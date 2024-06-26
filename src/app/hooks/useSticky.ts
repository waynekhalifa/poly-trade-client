import { useEffect } from "react";

const useSticky = (
  containerID: string,
  position: number,
  isStickyHeader?: boolean
) => {
  useEffect(() => {
    window.addEventListener("scroll", isSticky);

    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  const isSticky = () => {
    const header: HTMLElement | null = document.getElementById(containerID);
    const scrollTop = window.scrollY;

    if (header) {
      let firstSection: HTMLElement | null = null;
      let mainElement: HTMLElement | null = null;

      if (isStickyHeader) mainElement = document.querySelector("main");
      if (mainElement) firstSection = mainElement.querySelector("section");

      if (scrollTop >= position) {
        document.querySelectorAll("body")[0].style.marginTop =
          header.offsetHeight + "px";
        header.classList.add("is-sticky");

        if (firstSection)
          firstSection.style.marginTop = header.offsetHeight + "px";
      } else {
        document.querySelectorAll("body")[0].style.marginTop = "0px";
        header.classList.remove("is-sticky");
        if (firstSection) firstSection.style.marginTop = "0px";
      }
    }
  };
};

export default useSticky;
