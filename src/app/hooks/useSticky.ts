import { useEffect } from "react";

const useSticky = (containerID: string) => {
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
      if (scrollTop >= 160) {
        document.querySelectorAll("body")[0].style.marginTop =
          header.offsetHeight + "px";
        header.classList.add("is-sticky");
      } else {
        document.querySelectorAll("body")[0].style.marginTop = "0px";
        header.classList.remove("is-sticky");
      }
    }
  };
};

export default useSticky;
