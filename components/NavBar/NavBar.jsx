import { useEffect, useState } from "react";

import ButtonRanking from "./ButtonRanking";
import { useMediaQuery } from "@react-hook/media-query";
import Menu from "./Menu";

const NavBar = () => {
  const widthMin = useMediaQuery("only screen and (min-width: 768px)");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    widthMin ? setIsMobile(false) : setIsMobile(true);
  }
  , [widthMin]);

  return (
    <div className="w-full h-20 border-b flex z-10 border-custom-orange">
      <Menu />
      <ButtonRanking isMobile={isMobile} />
    </div>
  );
};

export default NavBar;
