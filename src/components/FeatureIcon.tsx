import easyIcon from "/assets/donation.png";
import charityIcon from "/assets/charity.png";
import boxesIcon from "/assets/boxes.png";
const icons = {
  donations: easyIcon,
  impact: charityIcon,
  boxes: boxesIcon,
};

interface IconProps {
  id: string;
  className?: string;
  alt: string;
}

export const Icon = ({ id, className, alt }: IconProps) => {
  const iconSrc = icons[id as keyof typeof icons];
  return <img src={iconSrc} className={className} alt={alt || "Icon"} />;
};

export default Icon;
