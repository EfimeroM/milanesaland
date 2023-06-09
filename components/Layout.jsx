import Head from "next/head";
import NavBar from "./NavBar/NavBar";

const Layout = ({ children, titlePage, description, content, keywords }) => {
  return (
    <>
      <Head>
        <title>{`MilanesaLand 3 - ${titlePage}`}</title>
        <meta charSet="UTF-8" />
        <meta name={description} content={content} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="MilanesaLand 3 - Juan Martin Perez" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:title" content={`MilanesaLand 3 - ${titlePage}`} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/favicon.ico" />
        <meta property="og:url" content="https://www.ejemplo.com/" />
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
