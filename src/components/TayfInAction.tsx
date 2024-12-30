import { useTranslation } from "react-i18next";

const TayfInAction = () => {
  const { t, i18n } = useTranslation();
  const title = t("tayfInAction.title");
  const currentLanguage = i18n.language;
  const items = t("tayfInAction.features", { returnObjects: true }) as {
    title: string;
    desc: string;
  }[];
  return (
    <section className="max-w-screen-xl mx-auto" id="tayf-in-action">
      <div className="px-6 md:px-[50px] py-10">
        <div className="flex flex-col md:flex-row justify-between gap-[60px]">
          <div>
            <img
              src="/assets/tayfinaction.png"
              alt="Tayf In Action!"
              className="h-auto w-full lg:w-[620px]"
            />
          </div>
          <div
            className="mt-0 md:mt-24 flex flex-col items-start"
            dir={currentLanguage === "ar" ? "rtl" : "ltr"}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">
              {title}
            </h2>
            <ul
              className={`space-y-6 list-disc ${
                currentLanguage === "ar" ? "mr-5" : "ml-5"
              }`}
            >
              {items.map((item, inx) => (
                <li key={inx}>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p>{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TayfInAction;
