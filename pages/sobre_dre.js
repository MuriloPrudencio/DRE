import styles from "../styles/EntendaDRE.module.css";

export default function Sobre() {
    return (
        <>
        <div className={styles.entenda_container}>
            <h1>O que é uma DRE ?</h1>
            <p>
            A <span>DRE "DEMONSTRAÇÃO DO RESULTADO DO EXERCÍCIO"</span> se trata de um relatório de suas operações financeiras, 
             durante um determinado período, a qual é capaz de indentificar, se nesses periodos, a empresa teve lucro ou prejuízos. Esse relatório confronta os dados das receitas e das
             despesas do negócio , mostrando o resultado líquido do seu desempenho e detalhando a real situação operacional de um negócio.
            </p>
            <p>
            Ao utilizar esse controle também como relatório gerencial, você poderá avaliar como anda a saúde financeira da sua empresa e, assim, usar as informações para tomar
             decisões que irão reduzir gastos e melhorar a saúde financeira de sua empresa..
            </p>
            <p>
            Pela lei, o relatório é obrigatório para todas as empresas, exceto o MEI, e deve ser feito anualmente (após o encerramento do ano-calendário, que é o período compreendido entre janeiro e dezembro de um mesmo ano).
            </p>
            <p>
                Para tomar decisões a curto prazo, é bom fazer acompanhamento mensal da DRE de sua empresa.
            </p>
            <img src="/img/estrutura.png"/>
        </div>
        </>
    )
}

