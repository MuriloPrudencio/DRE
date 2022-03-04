import styles from "../styles/Analise.module.css";

export default function Analise() {
  return (
    <>
    <div className={styles.analise_title}>
       <h1>Modelos de análise</h1>
    </div>
    <div>
      <div className={styles.analise_sub_title}>
        <h2>Análise horizontal</h2>
      </div>
      <div className={styles.analise_sub_content}>
        <p>A análise horizontal tem como objetivo entender qual foi o aumento ou redução de cada uma das contas ao longo dos meses.
          Conforme o tempo passa, a variação dos saldos dos demonstrativos contábeis indicam se sua empresa está crescendo, se mantendo
          em um patamar ou mesmo encolhendo em seus resultados.
        </p><br />
        <p>
        Nessa análise, o que se busca é a comparação dos resultados para os mesmos elementos, considerando exercícios ou períodos distintos. 
        Sua empresa pode estar interessada em saber se um determinado produto está sendo lucrativo ou não e se vale a pena manter suas vendas e investir em melhorias.
        </p><br />
        <p>
        Objetivo da análise horizontal vai dizer se há potencial de mercado ou não, conforme os resultados das vendas e da incidência de impostos.
        </p>
      </div>
      <div className={styles.analise_sub_title}>
        <h2>Análise vertical</h2>
      </div>
      <div className={styles.analise_sub_content}>
        <p>
        A análise vertical permite relacionar um elemento da DRE com a categoria que o integra. Na linha do exemplo anterior, é possível comparar os resultados financeiros
        de uma determinada mercadoria com os resultados de outras, similares ou não.
        </p><br />
        <p>
        Além disso, essa análise oferece parâmetros de comparação entre despesas, receitas ou custos em relação ao faturamento bruto. Dessa forma, será possível notar de
        forma rápida e eficaz quais despesas contribuíram para reduzir o lucro do período.
        </p>
      </div>
    </div>
    </>
  )
}