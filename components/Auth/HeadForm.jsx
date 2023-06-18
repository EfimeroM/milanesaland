import React from "react";

const HeadForm = ({ title }) => {
  return (
    <div
      title="banner"
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/dvabcnlc4/image/upload/v1686955133/MilanesaLand/auth/banner-auth_rsofvb.webp)",
        backgroundSize: "cover",
      }}
      className="w-5/6 md:w-2/6 border border-custom-orange border-b-0 rounded rounded-br-none 
        rounded-bl-none"
    >
      <div
        style={{ textShadow: "1px 2px 5px rgba(0,0,0,0.9)", WebkitTextStroke: ".5px black" }}
        className="w-full px-2 py-4 text-lg text-gray-50 font-bold"
      >
        <p>{title} para disfrutar de todo el contenido:</p>
        <ul className="text-base my-2">
          <li>- Milacoins</li>
          <li>- Recompensas de Ranking</li>
          <li>- Solicitud para agregar tus mods favoritos</li>
        </ul>
      </div>
    </div>
  );
};

export default HeadForm;
