import { AiOutlineClose } from "react-icons/ai";

const Ranking = ({ handleRanking, isMobile = null }) => {
  const handleViewRanking = () => {
    isMobile && handleRanking();
  };

  return (
    <div
      className="w-52 h-auto -mr-2 md:w-1/4 bg-bg-body border border-t-0 md:border-t rounded rounded-tl-none 
      rounded-tr-none rounded-br-none border-custom-orange"
    >
      <div
        onClick={handleViewRanking}
        id="title"
        className="border-b p-2 flex justify-between items-center border-custom-orange"
      >
        <p>Ranking</p>
        {isMobile && <AiOutlineClose className="text-xl text-custom-orange" />}
      </div>
      <div className="p-2">
        <div>
          <p>asdasd</p>
        </div>

        <div>
          <p>asdasd</p>
        </div>
        <div>
          <p>asdasd</p>
        </div>
        <div>
          <p>asdasd</p>
        </div>
        <div>
          <p>asdasd</p>
        </div>
      </div>
    </div>
  );
};

export default Ranking;
