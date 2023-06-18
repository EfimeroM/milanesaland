import Link from "next/link";

import IconMenu from "./IconMenu";
import { Tooltip } from "react-tooltip";

const Menu = () => {
  const navList = [
    {
      name: "Home",
      path: "/",
      icon: "https://res.cloudinary.com/dvabcnlc4/image/upload/v1686593209/MilanesaLand/icons/home_hiwa0z.ico",
    },
    {
      name: "Roulette",
      path: "/roulette",
      icon: "https://res.cloudinary.com/dvabcnlc4/image/upload/v1686593209/MilanesaLand/icons/roulette_pggdcw.ico",
    },
    {
      name: "Download",
      path: "/download",
      icon: "https://res.cloudinary.com/dvabcnlc4/image/upload/v1686593209/MilanesaLand/icons/download_i2dvcq.ico",
    },
    {
      name: "Mods",
      path: "/mods",
      icon: "https://res.cloudinary.com/dvabcnlc4/image/upload/v1686593209/MilanesaLand/icons/minecraft_vtfbas.ico",
    },
  ];

  const handleContextMenu = (event) => {
    event.preventDefault();
  };

  return (
    <div className="h-full w-full flex items-center justify-between px-2 md:justify-start md:w-auto">
      {navList.map(({ name, path, icon }, index) => (
        <Link
          key={index + name}
          href={path}
          className="w-10 h-10 p-1 md:mr-10 rounded hover:bg-dark-hover"
          onContextMenu={handleContextMenu}
        >
          <IconMenu icon={icon} name={name} placeholder={name} />
        </Link>
      ))}
      <Link
        href={{
          pathname: "/authentication",
          query: { type: "login" },
        }}
        className="py-1 px-2 border-2 flex justify-center items-center 
        border-custom-orange rounded hover:bg-dark-hover"
      >
        <p className="text-custom-orange">Jugar ahora</p>
      </Link>
    </div>
  );
};

export default Menu;
