import styles from "./Disclaimer.module.css";

export default function Disclaimer() {
  return (
    <section className={styles.disclaimer} aria-label="Observações adicionais">
      <div className="container">
        <p className={styles.text}>
          Não garantimos que você possa ser divulgado em veículos específicos ou
          ganhar dinheiro usando qualquer uma das nossas ideias, ferramentas,
          estratégias e recomendações. Nada na nossa comunicação é uma promessa
          ou garantia para você realizar quaisquer ações, receber benefícios ou
          algo semelhante. O que fazemos é executar as melhores técnicas e
          utilizar as ferramentas mais atuais disponíveis no mercado, explicar o
          passo a passo de tudo o que executamos internamente em nossa agência e
          apresentar cases próprios de sucesso para provar que é possível. Porém,
          os resultados variam de acordo com cada pessoa.
        </p>
      </div>
    </section>
  );
}
