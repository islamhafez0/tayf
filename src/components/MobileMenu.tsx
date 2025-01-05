import { Menu, X } from "lucide-react";
import { SetStateAction, useEffect } from "react";

const MobileMenu = ({
  mobileMenu,
  setMobileMenu,
  MobileItems: items,
  switchLanguage,
  currentLanguage,
}: {
  setMobileMenu: React.Dispatch<SetStateAction<boolean>>;
  mobileMenu: boolean;
  switchLanguage: (lang: string) => void;
  MobileItems: { label: string; href: string }[];
  currentLanguage: string;
}) => {
  useEffect(() => {
    const handleScroll = () => {
      setMobileMenu(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <button
        onClick={() => setMobileMenu(true)}
        className="md:hidden transition-transform duration-200 hover:scale-110"
        aria-expanded={mobileMenu}
        aria-label="Open Menu"
      >
        <Menu className="w-8 h-8" />
      </button>

      <div
        className={`fixed top-0 right-0 w-full h-full bg-white p-6 transition-all duration-300 ease-out transform z-20 ${
          mobileMenu ? "translate-x-0" : "translate-x-full"
        } `}
      >
        <div dir="rtl">
          <button
            onClick={() => setMobileMenu(false)}
            className="rounded-full flex items-center justify-center transition-all duration-200 mt-0.5"
            aria-label="Close Menu"
          >
            <X className="w-8 h-8 transition-transform duration-200 hover:rotate-90 mt-0.5" />
          </button>
        </div>

        <div dir={currentLanguage === "ar" ? "rtl" : "ltr"}>
          <ul className="mt-20 space-y-6 mb-6">
            <>
              {items.map((item, index) => (
                <li
                  key={index}
                  style={{
                    transitionDelay: `${(index + 1) * 100}ms`,
                    opacity: mobileMenu ? 1 : 0,
                    transform: mobileMenu
                      ? "translateX(0)"
                      : currentLanguage === "ar"
                      ? "translateX(-20px)"
                      : "translateX(20px)",
                  }}
                  className="border-b border-[#2d2d2d80] pb-6"
                >
                  <a
                    href={item.href}
                    className={`font-bold text-lg transform transition-all duration-200 hover:translate-x-2 ${
                      currentLanguage === "ar" ? "pr-8" : "pl-8"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </>
          </ul>

          <div
            className="transition-all duration-300"
            style={{
              transitionDelay: `${(items.length + 1) * 100}ms`,
              opacity: mobileMenu ? 1 : 0,
              transform: mobileMenu ? "translateY(0)" : "translateY(20px)",
            }}
          >
            {currentLanguage === "ar" ? (
              <button
                onClick={() => switchLanguage("en")}
                className="py-2 px-4 text-sm transition-all duration-200 font-bold mr-4 font-english"
              >
                English
              </button>
            ) : (
              <button
                onClick={() => switchLanguage("ar")}
                className="py-2 px-4 text-sm transition-all duration-200 font-arabic font-bold ml-4"
              >
                العربية
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
