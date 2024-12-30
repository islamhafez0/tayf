import { useTranslation } from "react-i18next";

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
            className={`flex flex-col p-8 md:p-14 flex-1 text-center md:text-unset ${
              currentLanguage === "ar"
                ? "items-center md:items-end"
                : "items-center md:items-start"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">{title}</h2>
            <p className="text-xl">{subtitle}</p>
            <a
              href="https://apps.apple.com/qa/app/tayf/id6717596245?platform=iphone"
              role="button"
              className="text-white bg-primaryPurple font-medium w-60 max-w-full text-center py-4 rounded-[20px] mt-10"
              target="_blank"
              rel="noopener noreferrer"
            >
              {btn}
            </a>
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
