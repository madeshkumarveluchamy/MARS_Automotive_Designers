import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // 1. விண்டோவை ஸ்க்ரோல் பண்ண ட்ரை பண்ணும்
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });

      // 2. ஒருவேளை CSS லாக் இருந்தா, மெயின் .App div-ஐ தேடி டாப்-க்கு கொண்டு போகும்
      const appContainer = document.querySelector(".App");
      if (appContainer) {
        appContainer.scrollTop = 0;
      }

      // 3. குளோபல் html/body எலிமெண்ட்டுகளையும் கட்டாயப்படுத்தி டாப்-க்கு கொண்டு போகும்
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    // Framer motion அனிமேஷன் முடியறதுக்காக சின்ன சின்ன டைமிங்ல 3 தடவை அடிச்சு டாப்-க்கு கொண்டு போகும்
    handleScroll();
    const t1 = setTimeout(handleScroll, 100);
    const t2 = setTimeout(handleScroll, 300);
    const t3 = setTimeout(handleScroll, 600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [pathname]);

  return null;
};

export default ScrollToTop;