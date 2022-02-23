import Head from "next/head";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";


export default function Layout ({children}) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Site sobre Demonstrativo de resultado..." />
        <meta name="author" content="Murilo Prudencio" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>My DRE</title>
      </Head>

      <NavBar />
        <main className="main_container">{children}</main>
      <Footer/>


       <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
       <script src="custom.js"></script>
    </>
  )  
}