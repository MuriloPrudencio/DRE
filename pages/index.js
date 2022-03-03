
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
          <p>
            A <span>My DRE</span>  é uma plataforma criada com intuito de auxiliar você a deixar a sua vida pessoal, 
            ou a sua empresa, com uma saúde financeira estável, e apto a melhorar suas habilidades de tomar decisões.
         </p>
         <p>
            Em nossa plataforma você terá a sua disposição, conteudos voltados a <span>DRE "DEMONSTRAÇÃO DO RESULTADO DO EXERCÍCIO"</span>,
            e irá aprender a criar e análisar o resultado de sua empresa.
         </p>
        </div>
        <div className={styles.home_sub_text}>
          <h3>Serviços que a plataforma oferece:</h3>
          <ul>
            <li>
              Aprenda o que é uma DRE:  <Link href="/"><a>Clique aqui</a></Link>
            </li>
            <li>
              Aprenda a estrutura da DRE: <Link href="/"><a>Clique aqui</a></Link>
            </li>
            <li>
               Aprenda os modelos de análise da DRE: <Link href="/"><a>Clique aqui</a></Link>
            </li>
            <li>
              Faça você mesmo a sua DRE: <Link href="/"><a>Clique aqui</a></Link>
            </li>
          </ul>
        </div>
      </>
    )
}

