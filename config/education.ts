/**
 * Language-neutral education data. Degree names and details live in
 * `lib/i18n/dictionaries`, keyed by `id`.
 */
export interface EducationInterface {
  id: string;
  institution: string;
  startYear: number;
  endYear: number;
  link: string;
}

export const education: EducationInterface[] = [
  { id: "ufrgs-master", institution: "UFRGS", startYear: 2025, endYear: 2027, link: "https://www.ufrgs.br/pgdesign" },
  { id: "ufrgs-ux", institution: "UFRGS / FEENG", startYear: 2022, endYear: 2024, link: "https://www.ufrgs.br" },
  { id: "uniritter-bigdata", institution: "UniRitter", startYear: 2020, endYear: 2023, link: "https://www.uniritter.edu.br/" },
  { id: "laureate-mba", institution: "Laureate International Universities", startYear: 2017, endYear: 2019, link: "https://www.laureate.net/" },
  { id: "uniritter-design", institution: "UniRitter", startYear: 2008, endYear: 2013, link: "https://www.uniritter.edu.br/" },
  { id: "ufrgs-technical", institution: "UFRGS", startYear: 2007, endYear: 2010, link: "https://www.ufrgs.br" },
  { id: "senac-webdesign", institution: "SENAC/RS", startYear: 2007, endYear: 2007, link: "https://www.senacrs.com.br" },
];
