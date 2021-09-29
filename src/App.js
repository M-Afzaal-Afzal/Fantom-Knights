import React, {useEffect, useState} from "react";
import Routes from "./router/Routes";
import ScrollToTop from "./components/ScrollToTop";
import AnimatedCursor from "react-animated-cursor";
import AOS from "aos";
import "aos/dist/aos.css";


const App = () => {



  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>


        <ScrollToTop />
      <Routes />
      <AnimatedCursor
        innerSize={12}
        outerSize={50}
        color="252, 163, 17"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={1}
      />
    </div>
  );
};

export default App;
