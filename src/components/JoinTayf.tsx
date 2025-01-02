import { useTranslation } from "react-i18next";
import StoreButtons from "./StoreButtons";

const JoinTayf = () => {
  const { t, i18n } = useTranslation();
  const title = t("joinTayf.title");
  const subtitle = t("joinTayf.subtitle");
  const btn = t("joinTayf.button");
  const currentLanguage = i18n.language;
  return (
    <section className="max-w-screen-xl mx-auto" id="join-tayf">
      <div className="px-6 md:px-[50px] py-10">
        <div className="bg-primaryPurple-light rounded-[20px] gap-10 flex flex-col md:flex-row md:justify-between">
          <div
            dir={currentLanguage === "ar" ? "rtl" : "ltr"}
            className={`flex flex-col p-8 md:p-14 flex-1 text-center ${
              currentLanguage === "ar"
                ? "items-center md:items-end md:text-right"
                : "items-center md:items-start md:text-left"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">{title}</h2>
            <p className="text-xl">{subtitle}</p>
            <StoreButtons className="mt-10 flex-wrap" />
          </div>
          <div className="w-full md:h-[434px] md:w-[580px]">
            <img
              src="/assets/join-tayf.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinTayf;
