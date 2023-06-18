import AuthController from "@/components/Auth/AuthController";
import Layout from "@/components/Layout";

export default function Home() {
  const seoHead = {
    title: "Autenticacion",
    content: "Inicio de sesion y registro de la pagina web",
    description: "Pagina de autenticacion",
    keywords: ["milanesaland", "milanesaland3", "minecraft", "server"],
  };

  return (
    <Layout {...seoHead}>
      <AuthController />
    </Layout>
  );
}
