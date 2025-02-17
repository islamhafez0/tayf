import { useTranslation } from "react-i18next";

const TayfInAction = () => {
  const { t, i18n } = useTranslation();
  const title = t("tayfInAction.title");
  const currentLanguage = i18n.language;
  const items = t("tayfInAction.features", { returnObjects: true }) as {
    title: string;
    desc: string;
  }[];
  const sectionImage = t("tayfInAction.image");
  return (
    <section className="py-10">
      <div className="max-w-screen-xl mx-auto" id="tayf-in-action">
        <div className="md:px-[50px] bg-[url(/assets/tayf-action-bg.png)]">
          <div className="flex flex-col md:flex-row justify-between gap-[80px] items-center">
            <div className="px-6 md:px-0">
              <img
                src={sectionImage}
                alt="Tayf In Action!"
                className="h-auto w-full lg:w-[620px] -mb-20 md:mb-0"
              />
            </div>
            <div className="md:pb-[67px]">
              <div className="mt-0 md:mt-24 flex flex-col items-start bg-[#F8F9FF] py-8 md:py-20 px-6 md:px-14">
                <h2 className="section-title font-bold mb-8">{title}</h2>
                <ul
                  className={`space-y-6 list-disc ${
                    currentLanguage === "ar" ? "mr-5" : "ml-5"
                  }`}
                >
                  {items.map((item, inx) => (
                    <li key={inx}>
                      <h3 className="font-bold text-xl">{item.title}</h3>
                      <p>{item.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TayfInAction;
