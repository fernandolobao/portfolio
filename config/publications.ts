export type PublicationKind = "chapter" | "event" | "website";

/**
 * Source: Lattes (ID 2827827873429812). Titles and venues are kept in their
 * original language; only the type labels and notes are translated.
 */
export interface PublicationInterface {
  id: string;
  kind: PublicationKind;
  title: string;
  authors?: string;
  venue?: string;
  year: number;
  pages?: string;
  /** Where to read it (repository / proceedings page). */
  url?: string;
}

export const publications: PublicationInterface[] = [
  {
    id: "culture-creativity",
    kind: "chapter",
    title:
      "Culture and creativity in design: the role of designers as cultural mediators in creative projects",
    authors:
      "Mabuto, A. F.; Monteiro, F. C.; Van der Linden, J. C. S.; Jacques, J. J.",
    venue:
      "In: Van der Linden, J. C. S.; Scherdien, I.; Machado, L. (org.). Design, Cultura e Inovação: volume 4. Porto Alegre: Marcavisual",
    year: 2025,
    pages: "42–55",
    url: "https://lume.ufrgs.br/handle/10183/301909",
  },
  {
    id: "protheses",
    kind: "event",
    title:
      "Evolução tecnológica das próteses: da antiguidade à integração biônica com interfaces neurais",
    authors: "Camilotti, F.; Ribeiro, V. G.",
    venue:
      "Anais do VI Congresso Brasileiro Interdisciplinar em Ciência e Tecnologia. Even3",
    year: 2025,
    url: "https://www.even3.com.br/anais/congresso-brasileiro-interdisciplinar-ciencia-tecnologia/1196501-evolucao-tecnologica-das-proteses--da-antiguidade-a-integracao-bionica-com-interfaces-neurais/",
  },
  {
    id: "moshpit",
    kind: "website",
    title: "Moshpit",
    authors: "Monteiro, F. C.",
    year: 2013,
  },
];
