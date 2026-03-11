# Product Requirements Document (PRD)

## 1. Metryka Projektu
- **Nazwa projektu:** Portfolio Grzegorza Czopińskiego
- **Rola:** Data Scientist & AI Engineer
- **Główny cel:** Zbudowanie kompletnego, nowoczesnego portfolio prezentującego 12 lat doświadczenia w analizie danych i automatyzacji procesów, które wyróżni kandydata na rynku pracy i projektów B2B.
- **Platforma docelowa:** Web (Mobile-first) z hostingiem na GitHub Pages.

---

## 2. Grupa Docelowa (Target Audience)
1. **Rekruterzy HR / Headhunterzy:** Szybkie skanowanie doświadczenia, kluczowych słów (Python, SQL, Power BI) oraz certyfikatów.
2. **Hiring Managerowie (Lead Data Scientist, CTO):** Weryfikacja twardych umiejętności technicznych, jakości projektów, stacku i wpływu biznesowego (KPI).
3. **Klienci biznesowi (B2B):** Poszukiwanie eksperta do automatyzacji procesów i raportowania (dowody skuteczności m.in. redukcja czasu o 80%).

---

## 3. Stos Technologiczny
| Warstwa | Technologia / Narzędzie | Uzasadnienie |
|---|---|---|
| **Framework** | Astro 4.x | Błyskawiczne ładowanie statycznych stron (SSG), natywne wsparcie dla contentu, idealne pod portfolio. |
| **Język** | TypeScript (Strict) | Typowanie ułatwiające zarządzanie danymi strukturalnymi portfolio (projekty, doświadczenie). |
| **Styling** | Tailwind CSS | Szybkie budowanie nowoczesnego, powtarzalnego UI i responsywności. |
| **Ikony** | Lucide-Astro | Spójne wizualnie, wektorowe ikony. |
| **Animacje** | CSS Transitions + JS | Subtelny fade-in z użyciem Intersection Observer API. |
| **CI/CD** | GitHub Actions | Zautomatyzowany build i deploy na `push` do gałęzi `main`. |
| **Hosting** | GitHub Pages | Darmowy, niezawodny hosting powiązany bezpośrenio ze źródłem (repo). |

---

## 4. Architektura i Mapa Strony (Sitemap)

Projekt składa się z głównej strony (Single Page) opartej o kotwice nawigacyjne (anchors) oraz wydzielonych stron szczegółów projektów.

- `/` (Strona główna)
  - Nawigacja (Navbar - sticky)
  - Hero Section (Wizytówka + Statystyki)
  - O mnie (Bio + Quick Info)
  - Osiągnięcia (Kluczowe KPI)
  - Umiejętności (Wizualizacja kompetencji)
  - Projekty (Siatka kart projektowych z podziałem na role)
  - Doświadczenie zawodowe (Pionowy Timeline)
  - Certyfikaty
  - Kontakt i Linki
- `/projects/iris` (Strona szczegółów projektu EDA Iris)
  - Opis, Stack, Wyniki, Iframe z notebookiem, Przycisk pobierania.

---

## 5. Wymagania Funkcjonalne (Features)

### 5.1. Strona Główna
- **Pływająca nawigacja (Sticky Navbar):** Ukrywane pod menu typu "hamburger" na urządzeniach mobilnych; płynne przewijanie do poszczególnych sekcji (Smooth Scroll).
- **Sekcja Hero:** Imię, nazwisko, stanowisko, zwięzłe bio. Call to Action (CTA) kierujące do projektów i LinkedIn. Wyróżnione okrągłe zdjęcie profilowe.
- **Sekcja Osiągnięć:** 4 wyraźne "karty" z dużymi liczbami (12 lat, 15+ dashboardów, 80% redukcja, 1 system produkcyjny).
- **Sekcja Umiejętności:** Pogrupowane kompetencje (Języki, Biblioteki, BI, AI/Narzędzia) z wizualnymi paskami postępu / poziomu znajomości.
- **Karty Projektów:** Tytuł, opis, tagi stacku technologicznego, impact biznesowy. Dodatkowy, wyróżniający banner (badge) dla "Flagship Project" (System KOPI). Przekierowania do GitHub lub podstron szczegółów.
- **Timeline Doświadczenia:** Historyczna oś czasu eksponująca stanowiska w GDDKiA i Eurostradzie.
- **Sekcja Kontakt:** Widoczne linki (LinkedIn, GitHub) w formie dużych, czytelnych przycisków.

### 5.2. Podstrona Projektu (np. Analiza EDA Irysów)
- **Breadcrumbs:** Ułatwiona nawigacja powrotna.
- **Wizualizacja Noteooka (Iframe):** Bezpieczne osadzenie wygenerowanego pliku `iris.html` z dynamicznym dopasowywaniem wysokości.
- **Wnioski (Key Findings):** Prezentacja kluczowych insightów z analizy w formie wydzielonych, czytelnych kafelków.
- **Download:** Przycisk umożliwiający pobranie surowego pliku `.ipynb`.

---

## 6. Wymagania Niefunkcjonalne (NFRs)

### 6.1. Design System & UI/UX
- **Motyw:** Ciemny (Dark Mode - domyślny i jedyny).
- **Kolory bazowe:** Tło `#0f172a` (Slate 900), Karty `#1e293b` (Slate 800).
- **Akcenty:** Indigo (`#6366f1`), Emerald (`#10b981`). Gradienty i subtelne "glowing effects".
- **Typografia:** Rodzina fontów `Inter` z Google Fonts. Hierarchia rozmiarów (min. 4xl dla nagłówków Hero).
- **Responsywność (RWD):** Mobile-first. Układy elastyczne oparte o Flexbox i CSS Grid. 

### 6.2. Wydajność
- **Lighthouse Score:** Docelowo > 95 we wszystkich 4 kategoriach (Performance, Accessibility, Best Practices, SEO).
- **Optymalizacja zasobów:** Leniwe ładowanie (Lazy loading) animacji i iframe'ów, minimalizacja JS dzięki architekturze Astro.

### 6.3. SEO & Open Graph
- Unikalne znaczniki `<title>` i `<meta description>` na każdej stronie.
- Kompletne metadane Open Graph i Twitter Cards z dedykowanym `og:image` (na bazie avatara) dla lepszego wyświetlania linków (np. na LinkedIn/Slack).

---

## 7. Plan Wdrożenia

1. **Inicjalizacja i Konfiguracja:** Wygenerowanie szkieletu Astro, konfiguracja Tailwind CSS, struktura folderów.
2. **Modele Danych (TS):** Skonfigurowanie ustrukturyzowanych danych z doświadczeniem, projektami, certyfikatami i umiejętnościami wewnątrz folderu `src/data/`.
3. **Budowa Komponentów Bazoowych:** Stworzenie Layoutu, Nawigacji i Stopki.
4. **Implementacja Sekcji Strony Głównej:** Hero, About, Achievements, Skills, Projects, Experience, Certificates, Contact.
5. **Budowa Podstron:** Strona projektu `/projects/iris.astro`.
6. **Dodanie animacji:** Wdrożenie Intersection Observera do subtelnego wprowadzania elementów (fade-in).
7. **CI/CD:** Skonfigurowanie GitHub Actions (`.github/workflows/deploy.yml`).
8. **Testy i poprawki końcowe:** Weryfikacja mobilna i test wydajności.

---

## 8. Pliki Zewnętrzne do dostarczenia przez użytkownika
- `avatar.jpg` - zdjęcie profilowe z LinkedIn.
- `iris.html` i `iris.ipynb` - pliki dla projektu demonstracyjnego EDA.
