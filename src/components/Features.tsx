import { useTranslation } from "react-i18next";
import FeatureCard from "./FeatureCard";

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
      <div className="px-6 md:px-[50px] py-10">
        <h2
          className={`font-bold text-center mb-16 section-title ${
            currentLanguage === "en" && "!text-3xl lg:!text-[50px]"
          }`}
        >
          {t("featuresHeading")}
        </h2>
        <ul className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8`}>
          {features.map((item) => (
            <FeatureCard key={item.id} {...item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Features;
