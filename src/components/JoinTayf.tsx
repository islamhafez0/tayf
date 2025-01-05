import { useTranslation } from "react-i18next";
import StoreButtons from "./StoreButtons";

const JoinTayf = () => {
  const { t } = useTranslation();
  const title = t("joinTayf.title");
  const subtitle = t("joinTayf.subtitle");
  return (
    <section className="max-w-screen-xl mx-auto" id="donate-now">
      <div className="px-6 md:px-[50px] py-10">
        <div className="bg-primaryPurple-light rounded-[20px] gap-10 flex flex-col lg:flex-row items-center :items-start lg:justify-between">
          <div
            className={`flex flex-col p-8 md:p-14 flex-1 items-center lg:items-start text-center lg:text-align-unset`}
          >
            <h2 className="section-title font-bold mb-8">{title}</h2>
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
