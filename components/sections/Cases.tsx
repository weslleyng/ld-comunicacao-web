import Image, { type StaticImageData } from "next/image";
import InstagramEmbed from "@/components/ui/InstagramEmbed";
import styles from "./Cases.module.css";
import clienteTextil from "@/assets/img/cliente-textil.png";
import clienteRedeAmazonica from "@/assets/img/cliente-rede-amazonica.png";
import clienteCbn from "@/assets/img/cliente-cbn.png";
import advEspecialista from "@/assets/img/adv-especialista.png";

type Case = {
  tag: string;
  title: string;
  desc: string;
  outlet: string;
  image?: StaticImageData;
  instagramUrl?: string;
  /** Generic external article link (non-Instagram). */
  link?: string;
};

const cases: Case[] = [
  {
    tag: "Diagnóstico por imagem",
    title: "Dra. Marianna Brock",
    desc: "Especialista em diagnóstico por imagem e membro da Comissão Nacional de Medicina Fetal, explicou ao Jornal Bom Dia Amazonas como a endometriose pode interferir na fertilidade.",
    outlet: "Bom Dia Amazonas — Rede Amazônica (afiliada Globo)",
    instagramUrl: "https://www.instagram.com/reel/DJZgWILtV7V/",
  },
  {
    tag: "Cirurgia plástica",
    title: "Dr. Renan Gil",
    desc: "Cirurgião plástico, concedeu entrevista à TV RIT, de São Paulo, sobre reconstrução mamária pós-câncer, destacando a segurança do procedimento.",
    outlet: "TV RIT — São Paulo",
    instagramUrl: "https://www.instagram.com/reel/DEmzX84xAb1/",
  },
  {
    tag: "Indústria têxtil",
    title: "Ada Pereira — Ponto da Camisa",
    desc: "A LD Comunicação acompanhou a CEO da Ponto da Camisa em entrevista à Record News, gravada na fábrica, mostrando o processo de produção de malhas e a força do setor têxtil.",
    outlet: "Record News",
    image: clienteTextil,
  },
  {
    tag: "Implante capilar",
    title: "Dr. Sidharta Gadelha",
    desc: "Acompanhamento do médico especialista em implante capilar em entrevista para a TV Record, gravada na clínica, apresentando estrutura e diferenciais do atendimento.",
    outlet: "TV Record",
    image: clienteRedeAmazonica,
  },
  {
    tag: "Diagnóstico por imagem",
    title: "Dr. Jorge Leão — CDMI",
    desc: "Diretor do Centro de Diagnóstico por Imagem (CDMI), entrevistado no programa Pautas do Dia, da CBN Amazônia, consolidando sua autoridade na área.",
    outlet: "Pautas do Dia — CBN Amazônia",
    image: clienteCbn,
  },
  {
    tag: "Direito previdenciário",
    title: "Amanda Gabrielle Souza",
    desc: "Advogada especialista, explicou ao Portal Terra as mudanças na lei para concessão de benefícios do INSS. Entre as novas regras, a exigência do cadastro biométrico.",
    outlet: "Portal Terra",
    image: advEspecialista,
    link: "https://www.terra.com.br/economia/financas-pessoais/advogada-explica-mudanca-na-lei-para-concessao-de-beneficios-do-inss,ac919a3eabb444b5d257b80d23b34248ilzwln0s.html",
  },
];

export default function Cases() {
  return (
    <section id="cases" className={styles.cases} aria-label="Resultados reais">
      <div className="container">
        <p className="kicker">Resultados reais</p>
        <h2>Especialistas que viraram fonte da imprensa</h2>
        <div className={styles.grid}>
          {cases.map((item) => (
            <article key={item.title} className={styles.case}>
              {item.instagramUrl ? (
                <div className={styles.embed}>
                  <InstagramEmbed url={item.instagramUrl} />
                </div>
              ) : (
                item.image && (
                  <div className={styles.media}>
                    <Image
                      src={item.image}
                      alt={`${item.title} — entrevista em ${item.outlet}`}
                      placeholder="blur"
                      sizes="(max-width: 1024px) 100vw, 560px"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                )
              )}
              <div className={styles.content}>
                <span className={styles.tag}>{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <p className={styles.outlet}>
                  <span>Veículo:</span> {item.outlet}
                </p>
                {item.link && (
                  <a
                    className={styles.link}
                    href={item.link}
                    target="_blank"
                    rel="noopener"
                  >
                    Ler a matéria ↗
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
