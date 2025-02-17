import { useTranslation } from "react-i18next";
import StoreButtons from "./StoreButtons";

const JoinTayf = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const title = t("joinTayf.title");
  const subtitle = t("joinTayf.subtitle");
  const footerLantern = t("joinTayf.footerLantern");
  return (
    <section className="max-w-screen-xl mx-auto" id="donate-now">
      <div className="px-6 md:px-[50px] py-10 overflow-hidden">
        <div className="bg-primaryPurple-light rounded-[20px] md:gap-0 flex flex-col lg:flex-row items-center :items-start lg:justify-between bg-[url(/assets/join-tayf-bg.png)] bg-no-repeat bg-cover bg-top md:bg-left">
          <div
            className={`flex flex-col p-8 md:p-[p-[3.5rem_3.5rem_0_0]] flex-1 items-center lg:items-start text-center lg:text-align-unset`}
          >
            <h2 className="section-title font-bold mb-8">{title}</h2>
            <p className="text-xl">{subtitle}</p>
            <StoreButtons className="mt-10 flex-wrap" />
          </div>
          <div className="w-full md:h-[434px] md:w-[580px] relative flex-1">
            <img
              src="/assets/join-tayf.png"
              alt="Join Tayf Now!"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <img
              src={footerLantern}
              alt="Lantern"
              className={`absolute bottom-0 w-[270px] h-[360px] md:w-[473px] md:h-[632px] object-contain ${
                currentLanguage === "ar"
                  ? "-left-16 md:-left-32"
                  : "-right-16 md:-right-32"
              }`}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinTayf;
