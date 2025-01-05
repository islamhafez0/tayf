import { useTranslation } from "react-i18next";
import StoreButtons from "./StoreButtons";
import { useState } from "react";

const Hero = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language as "ar" | "en";
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <section className="max-w-screen-xl mx-auto">
      <div className="pt-16 pb-10 px-6 md:px-[50px] w-full flex flex-col lg:flex-row justify-between items-center">
        <div className="flex flex-col items-center text-center md:items-start md:text-start flex-1">
          <h1
            className={`font-bold mb-6 section-title px-2.5 md:px-0 ${
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
        <div className="relative aspect-[486.26/691] w-full max-w-[486.26px]">
          <img
            src="/assets/hero.png"
            alt="Hero Image"
            className={`w-full h-full ${
              !imageLoaded && "blur-sm"
            } transition-all duration-200`}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
