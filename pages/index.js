import HomeController from "@/components/HomeController";
import Layout from "@/components/Layout";

export default function Home() {
  const seoHead = {
    title: "Inicio",
    content: "Inicio de la pagina web",
    description: "Inicio de la pagina web",
    keywords: ["milanesaland", "milanesaland3", "minecraft", "server"],
  };

  return (
    <Layout {...seoHead}>
      <HomeController />
    </Layout>
  );
}
