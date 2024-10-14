import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Upside from "../../components/mainLayout/Upside";
import Downside from "../../components/mainLayout/Downside";

export default function MainLayout() {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollTop > lastScrollTop) {
        setIsVisible(false); // Scroll Down
      } else {
        setIsVisible(true); // Scroll Up
      }

      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <>
      <div
        className={`px-14 py-6 flex flex-col gap-y-9 sticky top-0 bg-[#fdf8f6] ${
          isVisible ? "fade-in" : "fade-out"
        }`}
      >
        <Upside />
        <Downside />
      </div>
      <Outlet />
    </>
  );
}
