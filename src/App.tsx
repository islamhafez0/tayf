import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import TayfInAction from "./components/TayfInAction";
import JoinTayf from "./components/JoinTayf";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

const App = () => {
  const { t } = useTranslation();
  const documentTitle = t("docTitle");
  const documentDescribtion = t("docDesc");
  return (
    <>
      <Helmet>
        <title>{documentTitle}</title>
        <meta name="description" content={documentDescribtion} />
        <meta property="og:title" content={documentTitle} />
        <meta property="og:description" content={documentDescribtion} />
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
