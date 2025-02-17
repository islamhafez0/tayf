import { useTranslation } from "react-i18next";
import StoreButtons from "./StoreButtons";
import { useEffect, useState } from "react";

const Hero = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language as "ar" | "en";
  const [imageLoaded, setImageLoaded] = useState(false);
  const heroImage = t("heroImage");
  const heroBgShape = t("heroShape");
  const heroLantern = t("heroLantern");
  useEffect(() => {
    setImageLoaded(false);
  }, [currentLanguage]);
  return (
    <section className="max-w-screen-xl mx-auto relative">
      <img
        src={heroBgShape}
        alt="Ramadan Shape"
        className={`absolute -top-[128px] hidden lg:block
            ${currentLanguage === "ar" ? "left-0" : "right-0"}`}
      />
      <img
        src={heroLantern}
        alt="Lantern"
        className={`absolute -top-[128px] w-44 h-[463px] object-contain md:w-[301px] md:h-[800px] ${
          currentLanguage === "ar"
            ? "-right-8 md:-right-4"
            : "-left-8 md:-left-4"
        }`}
      />
      <div
        style={{ zIndex: 900 }}
        className="pt-16 pb-10 px-6 md:px-[50px] w-full flex flex-col lg:flex-row justify-between items-center"
      >
        <div
          className={`flex flex-col items-center text-center md:items-start md:text-start flex-1 ${
            currentLanguage === "ar" ? "md:pr-24" : "md:pl-24"
          }`}
          style={{ zIndex: 3 }}
        >
          <h1
            className={`font-bold mb-6 section-title px-3.5 md:px-0 ${
              currentLanguage === "en" && "md:!text-[62px] md:!leading-[80.6px]"
            }`}
          >
            {t("welcomHeading")}
          </h1>
          <p
            className={`text-xl mb-6 ${
              currentLanguage === "en" &&
              "text-base leading-7 md:text-xl md:leading-9"
            }`}
          >
            {t("welcomeSubtext")}
          </p>
          <StoreButtons />
        </div>
        <div className="relative aspect-[486.26/691] w-full max-w-[486.26px] bg-[url(/assets/hero-shape-bg-mobile.png)] bg-no-repeat bg-contain bg-center lg:bg-none">
          <img
            src={heroImage}
            alt="Hero Image"
            className={`w-full h-full ${
              !imageLoaded ? "blur-sm" : ""
            } transition-all duration-200`}
            loading="lazy"
            onLoad={() => {
              setImageLoaded(true);
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
