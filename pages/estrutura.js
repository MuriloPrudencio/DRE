import styles from "../styles/Estrutura.module.css";

export default function Estrutura() {
    return (
        <>
            <div className={styles.estrutura_container}>
                <div className={styles.estrutura_title}>
                    <h1>DRE Estrutura</h1>
                </div>
                <div className={styles.estrutura_imagem}>
                 <img src="/img/dreModelo.png" alt="modelo de Dre"/>
                </div>
            </div>
            <div className={styles.estrutura_content}>
                    <p><span>Receita Bruta:</span>  Vendas de Produtos, Vendas de Mercadorias, Prestação de Serviços</p>
                    <p><span>(-) Deduções e abatimentos:</span>  Devoluções de Vendas, Abatimentos, Impostos e Contribuições Incidentes sobre Vendas</p>
                    <p><span>(=) Receita Líquida</span></p>
                    <p><span>(-) CMV (Custos de mercadorias vendidas):</span>  Total de custo sobre mercadoria vendidas, Custo dos Serviços Prestados</p>
                    <p><span>(=) Lucro Bruto</span></p>
                    <p><span>(-) Despesas com Vendas:</span>  Como fretes</p>
                    <p><span>(-) Despesas Administrativas:</span>  Salários, conta de água e luz, contabilidade, manutenção e reparos, aluguéis</p>
                    <p><span>(-) Despesas Financeiras:</span>  As despesas são os juros a pagar</p>
                    <p><span>(=) Resultado Antes IRPJ CSLL</span></p>
                    <p><span>(-) Provisões IRPJ E CSLL:</span>  Calcular quanto pagará de Imposto de Renda naquele ano</p>
                    <p><span>(=)Resultado Líquido</span></p>
                </div>
        </>
    )
}

