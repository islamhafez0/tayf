import { useTranslation } from "react-i18next";
import FeatureCard from "./FeatureCard";
import StoreButtons from "./StoreButtons";

const Features = () => {
  const { t, i18n } = useTranslation();
  const features = t("features", { returnObjects: true }) as {
    id: string;
    title: string;
    description: string;
  }[];

  const currentLanguage = i18n.language;

  return (
    <section className="max-w-screen-xl mx-auto">
      <div
        className={`px-6 md:px-[50px] py-10 ${
          currentLanguage === "ar" && "font-arabic"
        }`}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          {t("featuresHeading")}
        </h2>
        <ul
          className={`flex flex-wrap justify-center items-center ${
            currentLanguage === "ar" && "flex-col-reverse"
          } md:flex-row gap-8`}
        >
          {features.map((item) => (
            <FeatureCard key={item.id} {...item} />
          ))}
        </ul>
        <StoreButtons className="items-center w-full mt-12 md:justify-center" />
      </div>
    </section>
  );
};

export default Features;
