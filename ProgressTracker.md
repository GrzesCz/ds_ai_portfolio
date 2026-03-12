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
- [x] `src/pages/projects/kopi.astro` (case study)
- [x] `src/pages/projects/etl-rynek-pracy.astro` (case study — flagship)

## Status Fazy 6: Pliki Statyczne i Assety
- [ ] Dodanie `avatar.jpg` (zadanie użytkownika — zdjęcie z LinkedIn)
- [ ] Dodanie `cv.pdf` (zadanie użytkownika — plik CV do pobrania)
- [ ] Dodanie `gotoit-logo.png` (logo GOTOIT dla certyfikatu — opcjonalne)

## Status Fazy 7: Automatyzacja (CI/CD) i Wdrożenie
- [x] Konfiguracja git (repo)
- [x] Skrypt wdrożeniowy `.github/workflows/deploy.yml`

## Status Fazy 8: Audyt jakości (na podstawie analizy best practices)
- [x] Usunięcie projektu Iris EDA (overused dataset — szkodzi wizerunkowi seniora)
- [x] Skrócenie listy certyfikatów z 7 do 4, dodanie linków i logotypu dla GOTOIT
- [x] Dodanie podstrony case-study dla flagowego projektu KOPI
- [x] Dodanie przycisku "Pobierz CV" w sekcjach Hero i Kontakt
- [x] Przebudowa sekcji "Umiejętności" z pasków postępu na nowoczesne tagi z ikonami
- [x] Usunięcie pełnego timeline'u doświadczenia (skupienie uwagi 100% na projektach i umiejętnościach)
- [x] **Usunięcie sekcji "Kluczowe osiągnięcia"** (uniknięcie duplikacji danych z sekcji Hero, skrócenie lejka uwagi)

---

## Dziennik Zmian (Changelog)

- **11.03.2026 (sesja 1)**: Rozpoczęcie projektu. Utworzenie dokumentacji `PRD`, `TechStack`, `ImplementationPlan` i `ProgressTracker`.
- **11.03.2026 (sesja 2)**: Inicjalizacja Astro + Tailwind v4, utworzenie warstwy danych (projects, experience, certificates), layoutów, 10 komponentów, 2 stron, GitHub Actions workflow. Pierwszy commit.
- **11.03.2026 (sesja 3 — audyt jakości)**:
  - Usunięto projekt Iris EDA i jego podstronę (`iris.astro`) — overused dataset
  - Skrócono certyfikaty z 7 do 4 (usunięto Git, Python w Excelu, kurs "od Zera")
  - Dodano podstronę case-study KOPI (`/projects/kopi`) z metrykami, sekcjami Problem/Rozwiązanie/Rezultat, listą funkcjonalności, szczegółami tech stacku i opisem roli
  - Dodano przycisk "Pobierz CV" (zielony, emerald) w sekcji Hero i Contact
  - Rozbudowano opisy 4 pozostałych projektów o metryki i impact biznesowy
  - Pliki do uzupełnienia przez użytkownika: `public/avatar.jpg`, `public/cv.pdf`
- **11.03.2026 (sesja 4 — rozbudowa projektów)**:
  - Zmiana projektu flagowego na: **Automatyzacja agregacji i przetwarzania danych z rynku pracy** (ETL w chmurze, GOTOIT, mar–cze 2025)
  - Dodano case study ETL (`/projects/etl-rynek-pracy`) z zadaniami, zakresem, efektami, stackiem (Dramatiq, Redis, PostgreSQL, Digital Ocean, Docker)
  - Zaktualizowano wszystkie 6 projektów zgodnie z danymi z LinkedIn: Payslipper (Flask, Bootstrap, PyInstaller), Pomocnik sklepu (Streamlit, OpenAI API), Ewidencja (grafiki, powiadomienia), KOPI (MySQL), dodano Gabinet okulistyczny
  - Statystyki Hero i Achievements: "1 system" → "6+ projektów produkcyjnych"
- **11.03.2026 (sesja 5 — optymalizacja UI/UX)**:
  - Usunięcie sekcji statystyk z komponentu Hero (redukcja duplikacji informacji)
  - Odchudzenie strony głównej (usunięcie zduplikowanych bloków)