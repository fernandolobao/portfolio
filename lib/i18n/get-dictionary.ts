import type { Locale } from "./config";
import { en } from "./dictionaries/en";
import { es } from "./dictionaries/es";
import { ptBR } from "./dictionaries/pt-BR";
import type { Dictionary } from "./types";

const dictionaries: Record<Locale, Dictionary> = {
  "pt-BR": ptBR,
  en,
  es,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
