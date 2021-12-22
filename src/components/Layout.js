import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Script from "next/script";
import Cookies from "js-cookie";
// scrollbarr
import PerfectScrollbar from "react-perfect-scrollbar";
// Components
import Sidebar from "./Sidebar";
import Header from "./Header";
import Setting from "./Setting";
import Footer from "./Footer";

export default function Layout({ children }) {
  const [settingShow, setSettingShow] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);
  const [sideNav, setSideNav] = useState("");
  const [sideColor, setSideColor] = useState("");
  const [cookie, setCookie] = useState({});
  const router = useRouter();

  useEffect(() => {
    const CsettingNav = Cookies.get("settingNav");
    if (CsettingNav && CsettingNav !== "{}") {
      setCookie(JSON.parse(CsettingNav));
      if (JSON.parse(CsettingNav).CdarkTheme) {
        document.body.classList.add("dark-version");
      } else {
        document.body.classList.remove("dark-version");
      }
      setDarkTheme(JSON.parse(CsettingNav).CdarkTheme || false);
      setSideNav(JSON.parse(CsettingNav).CsideNav || "bg-gradient-dark");
      setSideColor(JSON.parse(CsettingNav).CsideColor || "primary");
    } else {
      setDarkTheme(false);
      setSideNav("bg-gradient-dark");
      setSideColor("primary");
    }
  }, []);

  const hanldeChangeSideNav = (color) => {
    setSideNav(color);
    setCookie({
      ...cookie,
      CsideNav: color,
    });
  };
  const hanldeChangeSideColor = (color) => {
    setSideColor(color);
    setCookie({
      ...cookie,
      CsideColor: color,
    });
  };
  const handleDarkTheme = (e) => {
    setDarkTheme(e.target.checked);
    setCookie({
      ...cookie,
      CdarkTheme: e.target.checked,
    });
    if (e.target.checked) {
      document.body.classList.add("dark-version");
    } else {
      document.body.classList.remove("dark-version");
    }
  };
  const hanldeSettingShow = (bool) => setSettingShow(bool);

  useEffect(() => {
    Cookies.set("settingNav", JSON.stringify(cookie));
  }, [cookie]);

  useEffect(() => {
    const handleRouteChange = () => {
      document.body.classList.remove("g-sidenav-pinned");
      setSettingShow(false);
    };
    router.events.on("routeChangeStart", handleRouteChange);
    return () => router.events.off("routeChangeStart", handleRouteChange);
  }, [router.events]);

  return (
    <>
      <Sidebar sideNav={sideNav} sideColor={sideColor} />

      <PerfectScrollbar className="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
        <Header header={children.type.header} />
        <div className="container-fluid py-4">{children}</div>
        <Footer />
      </PerfectScrollbar>

      <Setting
        hanldeChangeSideNav={hanldeChangeSideNav}
        hanldeChangeSideColor={hanldeChangeSideColor}
        hanldeSettingShow={hanldeSettingShow}
        settingShow={settingShow}
        sideNav={sideNav}
        handleDarkTheme={handleDarkTheme}
        darkTheme={darkTheme}
      />

      <Script src="/assets/js/custom.js" />
      <Script src="https://kit.fontawesome.com/42d5adcbca.js" />
    </>
  );
}
