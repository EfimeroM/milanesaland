import Image from "next/image";
import { Tooltip } from "react-tooltip";

const IconMenu = ({icon, name, placeholder}) => {
  return (
    <div>
      <Image
        src={icon}
        width={0}
        height={0}
        sizes="100"
        style={{ width: "100%", height: "100%" }}
        className="rounded "
        alt={`Imagen de ${name}`}
        data-tooltip-id="tooltip-icon-menu" data-tooltip-content={placeholder}
      />
      <Tooltip id="tooltip-icon-menu" />
    </div>
  );
};

export default IconMenu;
