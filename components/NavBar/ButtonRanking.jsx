import { useState } from "react";
import { BsArrowDownShort } from "react-icons/bs";
import Ranking from "../Ranking";

const ButtonRanking = ({ isMobile }) => {
  const [viewRanking, setViewRanking] = useState(false);

  const handleRanking = () => {
    setViewRanking((prev) => !prev);
  };

  return (
    <>
      {isMobile && (
        <div className="absolute right-0 mt-20 mr-2">
          {!viewRanking ? (
            <BsArrowDownShort
              onClick={handleRanking}
              className="h-8 w-10 text-custom-orange border border-t-0
              border-custom-orange rounded rounded-tr-none rounded-tl-none"
            />
          ) : (
            <Ranking handleRanking={handleRanking} isMobile={isMobile} />
          )}
        </div>
      )}
    </>
  );
};

export default ButtonRanking;
