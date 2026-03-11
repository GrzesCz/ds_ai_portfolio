# Dokumentacja Stosu Technologicznego (TechStack)

Projekt: Portfolio Grzegorza Czopińskiego (Data Scientist & AI Engineer)

Ten dokument szczegółowo opisuje stos technologiczny, biblioteki i narzędzia wykorzystywane w projekcie, wraz z ich przeznaczeniem i wersjami.

---

## 1. Core Stack

| Warstwa | Narzędzie/Technologia | Opis |
|---|---|---|
| **Framework** | **Astro 4.x** | Statyczny generator stron (SSG), który wysyła do przeglądarki zero niepotrzebnego JavaScriptu ("Zero JS by default"). Zapewnia doskonałą wydajność (Lighthouse 100/100) kluczową dla SEO. |
| **Styling** | **Tailwind CSS 3.x** | Utility-first CSS framework. Używany do budowy responsywnego (mobile-first), nowoczesnego interfejsu bezpośrednio w plikach `.astro` bez przeskakiwania do plików CSS. |
| **Język** | **TypeScript (Strict)** | Zapewnia bezpieczeństwo typów dla danych portfolio (listy projektów, doświadczenia, certyfikatów). Eliminuje błędy w runtime. |

---

## 2. Biblioteki i Pakiety Zewnętrzne

Poniżej zestawienie kluczowych zależności instalowanych przez `npm`:

| Pakiet NPM | Typ | Przeznaczenie |
|---|---|---|
| `@astrojs/tailwind` | Integracja | Oficjalna integracja Astro pozwalająca na używanie Tailwind CSS w procesie budowania. |
| `tailwindcss` | Zależność (Dev) | Główny silnik Tailwind CSS do generowania stylów w projekcie. |
| `lucide-astro` | Zależność | Biblioteka wektorowych ikon (SVG) dostosowanych do Astro, oferująca czysty, nowoczesny design. Używana w komponentach np. sekcji Kontakt, Certyfikaty, Osiągnięcia. |

---

## 3. Architektura Danych

Zamiast tradycyjnego systemu CMS (Content Management System), portfolio korzysta z bez-bazodanowej architektury opartej na tablicach i obiektach w TypeScript:

- **Baza danych:** Pliki `.ts` (TypeScript) w katalogu `src/data/`.
  - `projects.ts` (Lista projektów wraz z tagami, opisami, linkami).
  - `experience.ts` (Historia zatrudnienia).
  - `certificates.ts` (Kursy i certyfikaty).
- **Zaleta:** Całkowity brak zapytań sieciowych do bazy danych; zawartość jest wklejana na "twardo" podczas budowania HTML.

---

## 4. Narzędzia Deweloperskie & Środowisko

| Narzędzie | Zastosowanie |
|---|---|
| **Node.js (v20+)** | Środowisko uruchomieniowe (runtime) i manager pakietów (npm). |
| **Git** | System kontroli wersji (repozytorium będzie znajdować się na GitHubie). |
| **VS Code / Cursor** | Rekomendowane IDE z rozszerzeniami dla Astro i Tailwind CSS. |

---

## 5. Deployment i Hosting (CI/CD)

Projekt wykorzystuje ekosystem GitHuba do ciągłej integracji i wdrożenia:

- **Hosting:** **GitHub Pages** (darmowy i szybki serwer statyczny).
- **CI/CD:** **GitHub Actions** (Workflow: `.github/workflows/deploy.yml`).
  - *Zasada działania:* Każdy `push` na gałąź `main` automatycznie uruchamia komendę `npm run build` i publikuje nowo wygenerowany folder `/dist` do GitHub Pages.

---

## 6. Integracje Zewnętrzne (Wbudowane w Treść)

- **Iframe Embedding:** Bezpośrednie osadzenie notebooka Jupyter (`iris.html`) na podstronie projektu bez dodatkowych parserów markdown czy bibliotek zewnętrznych, korzystając ze standardowego `<iframe src="...">`.
- **Google Fonts:** Zaimportowana rodzina czcionek `Inter` połączona za pomocą `<link rel="preconnect">` w dokumencie `BaseLayout.astro`.
- **Intersection Observer API:** Natywne (Vanilla JS) wsparcie przeglądarki do wykrywania, kiedy element pojawia się na ekranie. Używane do dodania subtelnych klas CSS "fade-in". Bez instalacji ciężkich bibliotek jak Framer Motion.