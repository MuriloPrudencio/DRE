import Input from "../components/Input/Input";
import styles from "../styles/DRE.module.css";

export default function Dre() {
  return (
    <>
      <div className={styles.form_container}>
        <div className={styles.form_title}>
          <h1>Faça a sua DRE</h1>
        </div>
        <form className={styles.form_content}>
          <Input
            text=" Receita Bruta"
            type="number"
            name="Nome"
            placeholder=" 0 "
          />
          <Input
            text=" Deduções"
            type="number"
            name="Nome"
            placeholder=" 0"
          />
          <Input
            text="Receita Líquida"
            type="number"
            name="Nome"
            placeholder=" 0 "
          />
          <Input
            text="CMV"
            type="number"
            name="Nome"
            placeholder=" 0"
          />
          <Input
            text="Lucro Bruto"
            type="number"
            name="Nome"
            placeholder=" 0 "
          />
          <Input
            text="Despesas com Vendas"
            type="number"
            name="Nome"
            placeholder=" 0"
          />
          <Input
            text="Despesas Administrativas"
            type="number"
            name="Nome"
            placeholder=" 0 "
          />
          <Input
            text="Despesas Financeiras"
            type="number"
            name="Nome"
            placeholder=" 0"
          />
          <Input
            text="Resultado Antes IRPJ"
            type="number"
            name="Nome"
            placeholder=" 0 "
          />
          <Input
            text="Provisões IRPJ"
            type="number"
            name="Nome"
            placeholder=" 0"
          />
          <Input
            text="Resultado Líquido"
            type="number"
            name="Nome"
            placeholder=" 0"
          />
        </form>
      </div>
    </>
  )
}