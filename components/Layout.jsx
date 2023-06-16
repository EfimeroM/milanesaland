import Head from "next/head";
import NavBar from "./NavBar/NavBar";

const Layout = ({ children, title, description, content, keywords }) => {
  return (
    <>
      <Head>
        <title>{`MilanesaLand 3 - ${title}`}</title>
        <meta charSet="UTF-8" />
        <meta name={description} content={content} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="MilanesaLand 3 - Juan Martin Perez" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://res.cloudinary.com/dvabcnlc4/image/upload/v1686593209/MilanesaLand/icons/minecraft_vtfbas.ico" />

        <meta property="og:title" content={`MilanesaLand 3 - ${title}`} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://res.cloudinary.com/dvabcnlc4/image/upload/v1686593209/MilanesaLand/icons/minecraft_vtfbas.ico" />
        <meta property="og:url" content="https://milanesaland.online" />
        <meta property="og:type" content="web" />
      </Head>
      <div className="max-w-screen-xl mx-auto">
      <NavBar />
        {children}
      </div>
    </>
  );
};

export default Layout;
