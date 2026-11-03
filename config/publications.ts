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
  },
  {
    id: "protheses",
    kind: "event",
    title:
      "Evolução tecnológica das próteses: da antiguidade à integração biônica com interfaces neurais",
    venue: "VI Congresso Brasileiro Interdisciplinar em Ciência e Tecnologia",
    year: 2025,
  },
  {
    id: "moshpit",
    kind: "website",
    title: "Moshpit",
    authors: "Monteiro, F. C.",
    year: 2013,
  },
];
