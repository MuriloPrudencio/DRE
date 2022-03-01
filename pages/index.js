
import Link from "next/link";
import styles from "../styles/Home.module.css";


export default function Home() {
    return (
      <>
      <div className={styles.home_container}>
        <div className={styles.home_title}>
          <h1>Seja Bem vido</h1>
          <p>Faça sua DRE</p>
          <button className={styles.home_btn}><Link href="/">DRE</Link></button>
        </div>
        <div>
         <img className={styles.home_imagem}
         src="/img/BackHome.jpg"
         alt="contabilidade"
         />
        </div>       
      </div>
      <div className={styles.home_text}>
          <h2>My DRE</h2>
          <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil nam, dolorem aspernatur numquam quisquam cum excepturi
           praesentium id esse asperiores inventore accusantium quod ratione voluptatum odit dolorum consequatur nostrum autem.
         </p>
        </div>
      </>
    )
}

