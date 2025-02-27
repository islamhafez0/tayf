import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const { t, i18n } = useTranslation();
  const MobileItems = t("listItems", { returnObjects: true }) as {
    label: string;
    href: string;
  }[];

  const switchLanguage = useCallback((lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  }, []);

  const currentLanguage = i18n.language;

  return (
    <header
      className="max-w-screen-xl mx-auto relative"
      style={{ zIndex: 1000 }}
    >
      <div className="flex items-center justify-between px-6 md:px-[50px] py-5 transition-all duration-300">
        <a href="#" className="h-11">
          <img
            src="/assets/logo.png"
            alt="Tayf in-kind donations program"
            className="max-w-full h-full object-cover"
            loading="lazy"
          />
        </a>

        <MobileMenu
          mobileMenu={mobileMenu}
          setMobileMenu={setMobileMenu}
          switchLanguage={switchLanguage}
          MobileItems={MobileItems}
          currentLanguage={currentLanguage}
        />

        <div
          className={`hidden md:flex items-center gap-4`}
          style={{ zIndex: 50 }}
        >
          <button
            onClick={() =>
              switchLanguage(currentLanguage === "ar" ? "en" : "ar")
            }
            className={`py-2 min-w-[84px] text-sm hover:bg-gray-100 rounded-lg font-bold ${
              currentLanguage !== "ar" ? "font-arabic" : "font-english"
            }`}
          >
            {currentLanguage === "ar" ? "English" : "العربية"}
          </button>
          <a
            href="#tayf-in-action"
            role="button"
            className={`bg-primaryPurple-light text-primaryPurple font-bold py-[18px] px-6 rounded-[20px] transition-all duration-300 text-center ${
              currentLanguage === "ar" && "font-arabic"
            }`}
          >
            {MobileItems[0].label}
          </a>
          <a
            href="#donate-now"
            role="button"
            className="text-white bg-primaryPurple font-bold py-[18px] rounded-[20px] transition-all duration-300 min-w-[220px] text-center"
            dir={currentLanguage === "ar" ? "rtl" : "ltr"}
          >
            {MobileItems[1].label}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
