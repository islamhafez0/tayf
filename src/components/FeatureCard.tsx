import { useTranslation } from "react-i18next";
import { Icon } from "./FeatureIcon";

interface FeatureCardProps {
  id: string;
  title: string;
  description: string;
}

const backgroundColors = {
  donations: "bg-primaryPurple-light",
  impact: "bg-[#F1802C33]",
  boxes: "bg-[#1C94C733]",
};

const FeatureCard = ({ id, title, description }: FeatureCardProps) => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const iconBgColor = backgroundColors[id as keyof typeof backgroundColors];
  return (
    <li
      className="w-full md:w-[calc((100%/3)-2rem)] flex flex-col items-center space-y-[30px] text-center py-10 px-[30px] rounded-[20px] bg-white shadow-features-dropshadow border border-[#E5F4F2]"
      dir={currentLanguage === "ar" ? "rtl" : "ltr"}
    >
      <div
        className={`w-20 h-20 rounded-2xl flex items-center justify-center ${iconBgColor}`}
      >
        <Icon id={id} className="w-[42px] h-[42px]" alt={title} />
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </li>
  );
};

export default FeatureCard;
