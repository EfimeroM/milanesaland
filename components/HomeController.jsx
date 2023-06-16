import { useEffect, useState } from "react";

import { useMediaQuery } from "@react-hook/media-query";
import Ranking from "./Ranking";
import Image from "next/image";

const HomeController = () => {
  const widthMin = useMediaQuery("only screen and (min-width: 768px)");
  const [showRanking, setShowRanking] = useState(false);
  const bannerLink =
    "https://res.cloudinary.com/dvabcnlc4/image/upload/f_auto,q_auto/v1/MilanesaLand/viyi87xidmkhwq4sbc51";
  const infoLink =
    "https://res.cloudinary.com/dvabcnlc4/image/upload/f_auto,q_auto/v1/MilanesaLand/hzioxajmnowvpcakg9ts";

  useEffect(() => {
    widthMin ? setShowRanking(true) : setShowRanking(false);
  }, [widthMin]);

  return (
    <div className="flex w-full h-full py-6 px-2 md:px-0">
      <div id="box" className="w-full md:w-3/4 flex flex-col">
        <div
          id="banner"
          className="w-full height-banner my-5 flex flex-col-reverse md:flex-row md:pr-4"
        >
          <div className="w-full md:w-2/4 flex flex-col justify-center py-5">
            <h2 className="py-2 text-2xl">Ruleta Milacoins</h2>
            <p>
              Ahora tienes la posibilidad de ganar Milacoins gratuitamente con
              un solo click
            </p>
          </div>
          <div className="w-full md:w-3/4">
            <Image
              src={bannerLink}
              width={0}
              height={0}
              sizes="100"
              style={{ width: "100%", height: "100%" }}
              className="rounded "
              alt="image banner roulette"
            />
          </div>
        </div>
        <div id="info" className="flex h-32 md:h-64 flex-col md:flex-row">
          <div className="w-full md:w-1/2 rounded py-6 md:pr-4">
            <div>
              <Image
                src={infoLink}
                width={0}
                height={0}
                sizes="100"
                style={{ width: "100%", height: "100%" }}
                className="rounded "
                alt="image info milanesaland"
              />
            </div>
            <p className="py-2">Mira el nuevo sistema elemental</p>
          </div>
          <div className="w-full md:w-1/2 rounded py-6 md:pr-4">
            <div>
              <Image
                src={infoLink}
                width={0}
                height={0}
                sizes="100"
                style={{ width: "100%", height: "100%" }}
                className="rounded "
                alt="image info milanesaland"
              />
            </div>
            <p className="py-2">Mira el nuevo sistema elemental</p>
          </div>
        </div>
      </div>
      {showRanking && <Ranking />}
    </div>
  );
};

export default HomeController;
