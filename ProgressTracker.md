# Dziennik Postępu Prac (Progress Tracker)

Dokument służy do bieżącego śledzenia statusu implementacji poszczególnych faz projektu portfolio Grzegorza Czopińskiego.

## Status Fazy 0: Dokumentacja 
- [x] Utworzenie `PRD.md` (Product Requirements Document)
- [x] Utworzenie `TechStack.md`
- [x] Utworzenie `ImplementationPlan.md`
- [x] Utworzenie `ProgressTracker.md`

## Status Fazy 1: Inicjalizacja i Środowisko (Setup)
- [x] Wygenerowanie szkieletu Astro (`minimal`, `strict` TypeScript)
- [x] Instalacja i integracja Tailwind CSS (v4)
- [x] Instalacja pakietu `lucide-astro`
- [x] Konfiguracja kolorów i czcionek w `src/styles/global.css` (Tailwind v4)
- [x] Konfiguracja base URL w `astro.config.mjs`

## Status Fazy 2: Warstwa Danych (Data Layer)
- [x] `src/data/projects.ts`
- [x] `src/data/experience.ts`
- [x] `src/data/certificates.ts`

## Status Fazy 3: Układy i Szkielet (Layouts)
- [x] `src/layouts/BaseLayout.astro`
- [x] `src/layouts/ProjectLayout.astro`

## Status Fazy 4: Komponenty Strony Głównej
- [x] `src/components/Navbar.astro`
- [x] `src/components/Hero.astro`
- [x] `src/components/About.astro`
- [x] `src/components/Achievements.astro`
- [x] `src/components/Skills.astro`
- [x] `src/components/ProjectCard.astro`
- [x] `src/components/Projects.astro`
- [x] `src/components/Experience.astro`
- [x] `src/components/Certificates.astro`
- [x] `src/components/Contact.astro`

## Status Fazy 5: Składanie Stron
- [x] `src/pages/index.astro`
- [x] `src/pages/projects/iris.astro`

## Status Fazy 6: Pliki Statyczne i Assety
- [x] Dodanie `avatar.jpg` (zostawione jako zadanie dla użytkownika)
- [x] Dodanie plików projektu `iris` (HTML, IPYNB - wgrano pliki tymczasowe placeholders)

## Status Fazy 7: Automatyzacja (CI/CD) i Wdrożenie
- [ ] Konfiguracja git (repo)
- [x] Skrypt wdrożeniowy `.github/workflows/deploy.yml`

---

## Dziennik Zmian (Changelog)

- **11.03.2026**: Rozpoczęcie projektu. Utworzenie dokumentacji `PRD`, `TechStack`, `ImplementationPlan` i `ProgressTracker`.