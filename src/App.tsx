import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import TayfInAction from "./components/TayfInAction";
import JoinTayf from "./components/JoinTayf";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

const App = () => {
  const { t, i18n } = useTranslation();
  const documentTitle = t("docTitle");
  const documentDescription = t("docDesc");
  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: i18n.language,
          dir: i18n.language === "ar" ? "rtl" : "ltr",
        }}
      >
        <title>{documentTitle}</title>
        <meta name="description" content={documentDescription} />
        <meta property="og:title" content={documentTitle} />
        <meta property="og:description" content={documentDescription} />
        <meta property="og:image" content="/assets/logo.png" />
      </Helmet>
      <Navbar />
      <Hero />
      <Features />
      <TayfInAction />
      <JoinTayf />
    </>
  );
};

export default App;
