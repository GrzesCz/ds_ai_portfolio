# Szczegółowy Plan Implementacji (Implementation Plan)

Projekt: Portfolio Grzegorza Czopińskiego (Data Scientist & AI Engineer)

Ten dokument to instrukcja "krok po kroku", jak zaimplementować portfolio na podstawie wymagań opisanych w `PRD.md` i stosu technologicznego opisanego w `TechStack.md`.

---

## Faza 1: Inicjalizacja i Środowisko (Setup)
*Cel: Przygotowanie gotowego, skonfigurowanego środowiska pracy.*

1. **Utworzenie projektu Astro:**
   - Wygenerowanie szkieletu komendą `npm create astro@latest` z użyciem szablonu "minimal" i TypeScript w trybie "strict".
2. **Instalacja zależności (Tailwind CSS):**
   - Dodanie integracji Tailwind za pomocą `npx astro add tailwind`.
3. **Instalacja dodatkowych pakietów:**
   - Instalacja biblioteki ikon `npm install lucide-astro`.
4. **Konfiguracja Tailwind (`tailwind.config.mjs`):**
   - Zdefiniowanie niestandardowych kolorów (Dark mode, Indigo `#6366f1`, Emerald `#10b981`).
   - Rozszerzenie domyślnej czcionki `sans` o `Inter`.
5. **Konfiguracja Astro (`astro.config.mjs`):**
   - Skonfigurowanie bazowego URL dla GitHub Pages (`base: '/ds_ai_portfolio'`).

---

## Faza 2: Warstwa Danych (Data Layer)
*Cel: Utworzenie struktury danych do zasilania komponentów portfolio.*

1. **Definicja struktur TypeScript (`src/data/`):**
   - Utworzenie pliku `projects.ts` (typy `Project`, lista projektów w tym flagowy KOPI i EDA Iris).
   - Utworzenie pliku `experience.ts` (historia zatrudnienia w GDDKiA i Eurostrada).
   - Utworzenie pliku `certificates.ts` (lista certyfikatów z instytucjami i datami).

---

## Faza 3: Układy i Szkielet (Layouts)
*Cel: Stworzenie głównych ram dla całego serwisu w tym SEO.*

1. **Plik `src/layouts/BaseLayout.astro`:**
   - Podstawowa struktura dokumentu HTML.
   - Konfiguracja head: Google Fonts (`Inter`), metadane SEO (title, description).
   - Dodanie metadanych Open Graph i Twitter (w tym wskazanie na plik zdjęcia `og:image`).
   - Skrypt JS z Intersection Observer do obsługi subtelnych animacji "fade-in".
2. **Plik `src/layouts/ProjectLayout.astro`:**
   - Layout dziedziczący po `BaseLayout`, specjalnie przygotowany na podstrony projektowe, zawierający m.in. wyśrodkowaną kolumnę główną.

---

## Faza 4: Komponenty Strony Głównej (UI Components)
*Cel: Utworzenie wszystkich reużywalnych sekcji prezentacyjnych dla strony głównej.*

1. **Nawigacja (`src/components/Navbar.astro`):**
   - Pływające (sticky) menu na górze strony.
   - Wersja desktopowa z linkami typu anchor (`#o-mnie`, `#projekty`).
   - Wersja mobilna: rozwijane "hamburger menu" z JS-owym toggle.
2. **Sekcja Hero (`src/components/Hero.astro`):**
   - Avatar z gradientowym obramowaniem, tytuł (gradient na nazwisku), krótkie bio.
   - Przyciski CTA kierujące do `#projekty` i do LinkedIn.
   - Dodatkowa wstęga/grid z 4 kluczowymi statystykami biznesowymi.
3. **Sekcja O mnie (`src/components/About.astro`):**
   - Paragrafy tekstowe o doświadczeniu domenowym.
   - Panel "Quick Info" (Lokalizacja, Stanowisko, Główne technologie).
4. **Sekcja Osiągnięcia (`src/components/Achievements.astro`):**
   - 4 wyraźne karty z metrykami (np. redukcja czasu 80%) z użyciem Lucide Icons/Emoji.
5. **Sekcja Umiejętności (`src/components/Skills.astro`):**
   - Kafelki grupujące umiejętności z estetycznymi, procentowymi paskami postępu (gradienty).
6. **Sekcja Projektów (`src/components/Projects.astro` oraz `ProjectCard.astro`):**
   - Grid projektów renderowany z pliku `projects.ts`.
   - Obsługa znacznika "Flagship Project" (KOPI).
   - Dynamiczne tagi technologiczne, linki do GitHub / podstron projektowych.
7. **Sekcja Doświadczenie (`src/components/Experience.astro`):**
   - Pionowa linia osi czasu (timeline) z kropkami.
   - Iteracja przez tablicę doświadczeń zawodowych z wypunktowanymi szczegółami.
8. **Sekcja Certyfikaty (`src/components/Certificates.astro`):**
   - Siatka z listą osiągnięć i kursów w formacie kompaktowych kart.
9. **Sekcja Kontakt (`src/components/Contact.astro`):**
   - Informacje końcowe zachęcające do współpracy (projekty B2B).
   - Duże, wyraźne przyciski z ikonami (GitHub, LinkedIn).

---

## Faza 5: Składanie Stron (Pages)
*Cel: Zintegrowanie komponentów z layoutami w finalne podstrony.*

1. **Strona Główna (`src/pages/index.astro`):**
   - Zaimportowanie `BaseLayout` i osadzenie wszystkich komponentów zbudowanych w Fazie 4 w odpowiedniej kolejności.
2. **Podstrona Projektu Iris (`src/pages/projects/iris.astro`):**
   - Podłączenie pod `ProjectLayout`.
   - Nawigacja typu breadcrumbs (Strona Główna -> Projekty -> Analiza EDA Irysów).
   - Wyrenderowanie "Key Findings" w formie specjalnych bloków.
   - Osadzenie pliku Jupyter Notebook używając znacznika `<iframe src="/ds_ai_portfolio/projects/iris/iris.html">` ze skryptem do automatycznego dostosowywania wysokości (auto-resize).
   - Dodanie przycisku z opcją ściągnięcia oryginalnego notebooka (`.ipynb`).

---

## Faza 6: Pliki Statyczne i Assety (Public)
*Cel: Dodanie brakujących materiałów fizycznych do katalogu `/public`.*

1. **Zdjęcie Profilowe:**
   - Dodanie zdjęcia profilowego do głównego katalogu `public/avatar.jpg`.
2. **Pliki Projektu Iris:**
   - Utworzenie folderu `public/projects/iris/`.
   - Dodanie tam uprzednio wyeksportowanego do HTML notatnika `iris.html`.
   - Dodanie źródłowego pliku z kodem `iris.ipynb`.

---

## Faza 7: Automatyzacja (CI/CD) i Wdrożenie
*Cel: Publikacja online całego portfolio na serwerze GitHub Pages.*

1. **Konfiguracja Repozytorium:**
   - `git init`, przygotowanie paczki.
2. **GitHub Actions (`.github/workflows/deploy.yml`):**
   - Utworzenie pliku workflow odpowiedzialnego za:
     - Wyciągnięcie kodu na maszynę wirtualną Ubuntu.
     - Konfigurację Node.js (v20+).
     - Instalację paczek z `package-lock.json`.
     - Zbudowanie projektu Astro poleceniem `npm run build`.
     - Przysłanie zbudowanych plików z folderu `/dist` na produkcję.
3. **Ustawienia na GitHub:**
   - Instrukcja włączenia "GitHub Actions" jako źródła (Source) w ustawieniach serwisu dla GitHub Pages.

---

## Zakończenie: Testy Q&A
- Przejrzenie mobilnej wersji strony.
- Zweryfikowanie podstrony Iris (czy notebook się renderuje bez przewijania poziomego i czy opcja pobrania działa).
- Sprawdzenie Lighthouse'a (uruchomienie devTools w przeglądarce).