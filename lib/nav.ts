// Single source of truth for the in-page section navigation.
// Reused by the desktop nav and the mobile panel in SiteNav. Each `id` must
// match the `id` attribute on the corresponding <section> in components/sections.

export type NavItem = {
  id: string;
  label: string;
};

export const NAV_ITEMS: readonly NavItem[] = [
  { id: "metodo", label: "Método" },
  { id: "servicos", label: "Serviços" },
  { id: "sobre", label: "Sobre" },
  { id: "cases", label: "Cases" },
  { id: "contato", label: "Contato" },
] as const;
