interface StoreButtonsProps {
  className?: string;
}

const storeLinks = [
  {
    href: "https://apps.apple.com/qa/app/tayf/id6717596245?platform=iphone",
    src: "/assets/appstore.png",
    alt: "Download on App Store",
    width: "w-[180px]",
    height: "h-[52px]",
  },
  {
    href: "https://play.google.com/store/apps/details?id=qa.tayf.www",
    src: "/assets/google-play.png",
    alt: "Get it on Google Play",
    width: "w-[180px]",
    height: "h-[52px]",
  },
];

const StoreButtons = ({ className = "" }: StoreButtonsProps) => {
  return (
    <div className={`flex flex-col sm:flex-row gap-4 md:gap-6 ${className}`}>
      {storeLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className={`${link.width} ${link.height}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.alt}
        >
          <img
            src={link.src}
            alt={link.alt}
            className="w-full h-full"
            loading="lazy"
          />
        </a>
      ))}
    </div>
  );
};

export default StoreButtons;
