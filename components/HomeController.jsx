import { useEffect, useState } from "react";

import { useMediaQuery } from "@react-hook/media-query";
import Ranking from "./Ranking";

const HomeController = () => {
  const widthMin = useMediaQuery("only screen and (min-width: 768px)");
  const [showRanking, setShowRanking] = useState(false);

  useEffect(() => {
    widthMin ? setShowRanking(true) : setShowRanking(false);
  }, [widthMin]);

  return (
    <div className="flex w-full h-full">
      <div id="box" className="w-full md:w-3/4 flex flex-col">
        <div id="banner" className="bg-red-400 w-full h-64 md:h-96">
          banner principal
        </div>
        <div id="info" className="flex h-32 md:h-64">
          <div className="w-1/2 bg-lime-400">info 1</div>
          <div className="w-1/2 bg-lime-600">info 2</div>
        </div>
      </div>
      {showRanking && <Ranking />}
    </div>
  );
};

export default HomeController;
