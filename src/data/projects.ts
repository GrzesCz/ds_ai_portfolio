export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  stack: string[];
  impact?: string;
  status?: string;
  date?: string;
  flagship?: boolean;
  github?: string;
  live?: string;
  page?: string;
}

export const projects: Project[] = [
  {
    slug: 'etl-rynek-pracy',
    title: 'Automatyzacja agregacji i przetwarzania danych z rynku pracy',
    description:
      'Skalowalny system ETL w chmurze — codzienne pobieranie, wzbogacanie i udostępnianie tysięcy ofert pracy przez własne API.',
    longDescription:
      'W ramach pracy zespołowej zbudowałem system automatycznie pozyskujący, przetwarzający i udostępniający dane ofertowe z rynku pracy. System codziennie pobiera duże wolumeny danych z zewnętrznego źródła, wzbogaca je, standaryzuje i udostępnia przez własne API. Wdrożenie na Digital Ocean z użyciem Dramatiq, Redis, PostgreSQL i Docker.',
    stack: ['Python', 'FastAPI', 'Dramatiq', 'Redis', 'PostgreSQL', 'Docker', 'Digital Ocean', 'MinIO','Git'],
    impact:
      'Kilka tysięcy ofert przetwarzanych dziennie, API dla innych zespołów, rozwiązanie problemu nadmiernego zużycia RAM przez workerów',
    status: 'Projekt edukacyjny',
    date: 'mar 2025 – cze 2025',
    flagship: true,
    page: '/ds_ai_portfolio/projects/etl-rynek-pracy',
  },
  {
    slug: 'payslipper',
    title: 'Employee Payslipper',
    description:
      'System do kompleksowej obsługi pasków wynagrodzeń: Excel → PDF z szyfrowaniem (PESEL) → masowa wysyłka e-mail.',
    longDescription:
      'Zaprojektowałem i współtworzyłem system obejmujący automatyczne przetwarzanie danych z plików Excel, generowanie spersonalizowanych dokumentów PDF z indywidualnym szyfrowaniem (PESEL) oraz masową wysyłkę na adresy e-mail pracowników. Interfejs graficzny (HTML/Bootstrap), możliwość uruchomienia jako plik .exe (PyInstaller).',
    stack: ['Python', 'Pandas', 'Flask', 'PDF', 'SMTP', 'Bootstrap', 'PyInstaller'],
    impact:
      'Szybkie, bezbłędne i w pełni zautomatyzowane generowanie pasków, eliminacja ryzyka pomyłek, zgodność z RODO',
    status: 'Projekt komercyjny',
    date: 'czerwiec 2025',
    page: '/ds_ai_portfolio/projects/payslipper',
  },
  
  {
    slug: 'sklep-spozywczy',
    title: 'Pomocnik dla sklepu spożywczego',
    description:
    'Aplikacja do analizy sprzedaży, prognozowania z wykorzystaniem AI oraz automatycznego generowania list zamówień.',
    longDescription:
    'Aplikacja do analizy i wizualizacji danych związanych z asortymentem produktów, bieżącymi obrotami w sklepie spożywczym oraz prognozowaniem przyszłej sprzedaży. Kluczowe funkcje: analiza sprzedaży poszczególnych produktów, prognoza sprzedaży z modelami AI (OpenAI API), automatyczne generowanie listy produktów do zamówienia.',
    stack: ['PHP', 'MySQL', 'Bootstrap', 'CSS', 'JavaScript', 'OpenAI API', 'Machine Learning', 'Analiza danych'],
    impact:
    'Prognozowanie sprzedaży, optymalizacja zamówień, wsparcie decyzji zakupowych',
    status: 'Produkcja (serwer prywatny)',
    date: '2024 – 2025 (planowany rozwój aplikacji z wykorzystaniem AI)',
    page: '/ds_ai_portfolio/projects/sklep-spozywczy',
  },
  {
    slug: 'ewidencja-pracownikow',
    title: 'Ewidencja pracowników',
    description:
    'Aplikacja webowa do zarządzania kadrami: grafiki zmianowe, listy płac, faktury, powiadomienia e-mail o terminach.',
    longDescription:
    'System do zarządzania danymi zatrudnionych, ewidencji czasu pracy, organizacji grafików pracy zmianowej, list płac oraz faktur. Zaawansowane tworzenie grafików pracowniczych, automatyczne powiadomienia e-mail (koniec umowy, badania lekarskie, szkolenia BHP), generowanie list płac, informowanie o nieuregulowanych fakturach. Wdrożyłem go na zewnętrznym serwerze komercyjnym.',
    stack: ['PHP', 'MySQL', 'Bootstrap', 'CSS', 'JavaScript'],
    impact:
    'Centralizacja HR, automatyzacja powiadomień, eliminacja ręcznych grafików',
    status: 'Produkcja (serwer komercyjny)',
    date: '2023 – do dziś (ciągły rozwój)',
    page: '/ds_ai_portfolio/projects/ewidencja-pracownikow',
  },
  {
    slug: 'kopi',
    title: 'System KOPI',
    description:
      'Aplikacja webowa do elektronicznego obiegu dokumentacji projektowej dla GDDKiA — od koncepcji do wdrożenia produkcyjnego.',
    longDescription:
      'Przygotowałem dla GDDKiA (od koncepcji do wdrożenia) system umożliwiający składanie elektronicznego wniosku o posiedzenie zatwierdzającego dokumentację projektową, gromadzący dane dotyczące złożonych wniosków, wyszukiwarkę wniosków i odbytych posiedzeń, pozwalający na elektroniczne zgłaszanie uwag i ich zatwierdzanie.',
    stack: ['PHP', 'MySQL', 'Bootstrap', 'CSS', 'JavaScript'],
    impact:
      'Wyeliminowanie papierowego obiegu dokumentów, obsługa kilku departamentów, dziesiątki aktywnych użytkowników',
    status: 'Produkcja (wewnętrzny system GDDKiA)',
    date: 'październik 2018 – czerwiec 2021',
    flagship: false,
    page: '/ds_ai_portfolio/projects/kopi',
  },
  {
    slug: 'gabinet-okulistyczny',
    title: 'Gabinet okulistyczny',
    description:
      'System do rejestracji pacjentów, prowadzenia dokumentacji medycznej oraz rozliczania wizyt.',
    longDescription:
      'Aplikacja webowa do rejestracji pacjentów w gabinecie okulistycznym, prowadzenia dokumentacji medycznej oraz rozliczania wizyt. Wdrożyłem ją na prywatnym serwerze.',
    stack: ['PHP', 'MySQL', 'Bootstrap', 'CSS', 'JavaScript','Analiza danych'],
    impact:
      'Digitalizacja rejestracji i dokumentacji medycznej, automatyzacja rozliczeń',
    status: 'Produkcja (serwer prywatny)',
    date: '2020 – do dziś (ciągły rozwój)',
    page: '/ds_ai_portfolio/projects/gabinet-okulistyczny',
  },
  {
    slug: 'fiszki-system',
    title: 'System Fiszek Edukacyjnych',
    description: 'Aplikacja webowa do efektywnej nauki (Spaced Repetition) ze zautomatyzowanym systemem przypomnień na Discord.',
    longDescription: 'Aplikacja pozwalająca na efektywną naukę dzięki wdrożeniu algorytmu powtarzania w odstępach (Spaced Repetition). Projekt charakteryzuje się świetną wydajnością dzięki generowaniu statycznemu w Astro, bezpieczeństwem typów i zero JS po stronie klienta. Dodatkowo wzbogaciłem aplikację o automatyczne przypomnienia o nauce wysyłane bezpośrednio na serwer Discord przy użyciu bota.',
    stack: ['Astro', 'TypeScript', 'Tailwind CSS', 'Discord API', 'Automatyzacja'],
    impact: 'Eksploracja innowacyjnej architektury (Astro Islands), optymalizacja ładowania zasobów oraz budowa zautomatyzowanego kanału notyfikacji dla użytkowników.',
    status: 'Zakończony',
    page: '/ds_ai_portfolio/projects/fiszki-system',
  }
];

export const labProjects: Project[] = [
  {
    slug: 'flyer-engine',
    title: 'FlyerEngine',
    description:
      'System zasilany przez AI do zautomatyzowanego układania i generowania gazetek promocyjnych, skracający czas pracy z dni do minut.',
    longDescription:
      'Zbudowałem aplikację, która całkowicie automatyzuje tworzenie cotygodniowych gazetek promocyjnych gotowych do druku (TIFF 300 DPI). To, co wyróżnia ten projekt, to wdrożenie Sztucznej Inteligencji bezpośrednio do działania systemu. AI samodzielnie odczytuje chaotyczne cenniki z Excela, przypisuje produkty do odpowiednich kategorii i dobiera szablony. Co więcej, sam kod programu stworzyłem przy ścisłej współpracy z asystentami programistycznymi (Agentic AI), co potwierdza moją zdolność do niezwykle sprawnego dostarczania zaawansowanych produktów.',
    stack: ['Python', 'PostgreSQL', 'Vibe Engineering', 'Agentic AI', 'Pytest', 'GitHub Actions'],
    impact:
      'Automatyzacja składu gazetek oraz skuteczne wdrożenie AI zarówno do procesów biznesowych jak i do wytwarzania samego oprogramowania.',
    status: 'W warsztacie (R&D)',
    page: '/ds_ai_portfolio/projects/flyer-engine',
  },
  {
    slug: 'lens-system',
    title: 'Lens System (AI Medical CRM)',
    description:
      'Nowoczesny system CRM dla gabinetów okulistycznych rozbudowany o funkcje Sztucznej Inteligencji (Voice-to-Text, Vision, SMS).',
    longDescription:
      'Gruntowna refaktoryzacja i przebudowa starszego systemu gabinetu przy użyciu nowoczesnego backendu opartego na Pythonie i FastAPI. Nowa architektura pozwala na głęboką integrację z usługami AI, umożliwiając m.in. głosowe uzupełnianie historii chorób przez lekarza (Speech-to-Text), automatyczną analizę wyników badań z załączonych zdjęć za pomocą Computer Vision oraz zautomatyzowany system komunikacji z pacjentami wysyłający przypomnienia SMS.',
    stack: ['Python', 'FastAPI', 'OpenAI (Speech-to-Text)', 'Computer Vision', 'Twilio/SMS API'],
    impact:
      'Przyspieszenie pracy lekarzy dzięki dyktowaniu danych, automatyzacja diagnostyki, redukcja odwołanych wizyt dzięki notyfikacjom SMS',
    status: 'W warsztacie (R&D)',
    page: '/ds_ai_portfolio/projects/lens-system',
  }
];
