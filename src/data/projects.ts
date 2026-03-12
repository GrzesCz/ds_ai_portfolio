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
    'System do zarządzania danymi zatrudnionych, ewidencji czasu pracy, organizacji grafików pracy zmianowej, list płac oraz faktur. Zaawansowane tworzenie grafików pracowniczych, automatyczne powiadomienia e-mail (koniec umowy, badania lekarskie, szkolenia BHP), generowanie list płac, informowanie o nieuregulowanych fakturach. Wdrożony na zewnętrznym serwerze komercyjnym.',
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
      'Aplikacja webowa do rejestracji pacjentów w gabinecie okulistycznym, prowadzenia dokumentacji medycznej oraz rozliczania wizyt. Wdrożona na prywatnym serwerze.',
    stack: ['PHP', 'MySQL', 'Bootstrap', 'CSS', 'JavaScript','Analiza danych'],
    impact:
      'Digitalizacja rejestracji i dokumentacji medycznej, automatyzacja rozliczeń',
    status: 'Produkcja (serwer prywatny)',
    date: '2020 – do dziś (ciągły rozwój)',
    page: '/ds_ai_portfolio/projects/gabinet-okulistyczny',
  },
];

export const labProjects: Project[] = [
  {
    slug: 'flyer-engine',
    title: 'FlyerEngine',
    description:
      'Zautomatyzowany system do tworzenia gazetek promocyjnych. Umożliwia pracę na szablonach i generuje pliki gotowe do profesjonalnego druku.',
    longDescription:
      'Aplikacja powstała w odpowiedzi na realne zapotrzebowanie klienta z branży retail (sklep spożywczy). Jej celem jest drastyczne skrócenie czasu potrzebnego na przygotowanie cotygodniowych gazetek promocyjnych. System pozwala na definiowanie stałych szablonów graficznych, szybkie przypisywanie asortymentu wraz z cenami i automatyczne wygenerowanie plików TIFF o wysokiej rozdzielczości (300 DPI, A3), które są w pełni gotowe do druku offsetowego. Narzędzie automatyzuje pracę powtarzalną, zmniejsza koszty i eliminuje konieczność ręcznego przygotowania DTP.',
    stack: ['Python', 'PostgreSQL', 'pypika', 'psycopg3', 'Pydantic', 'Pytest', 'GitHub Actions'],
    impact:
      'Automatyzacja składu DTP, oszczędność czasu, eliminacja błędów graficznych, pliki zgodne ze standardami drukarni',
    status: 'W warsztacie (R&D)',
    page: '/ds_ai_portfolio/projects/flyer-engine',
  },
  {
    slug: 'fiszki-system',
    title: 'System Fiszek Edukacyjnych',
    description: 'Aplikacja webowa do efektywnej nauki (Spaced Repetition). Eksperymentalny projekt budowany z naciskiem na ekstremalną wydajność i zero JS.',
    longDescription: 'Projekt powstał jako laboratorium do eksploracji możliwości frameworka Astro i TypeScriptu w budowaniu błyskawicznie działających interfejsów webowych. Głównym założeniem jest stworzenie aplikacji pozwalającej na efektywną naukę dzięki wdrożeniu algorytmu powtarzania w odstępach (Spaced Repetition). Aplikacja ma charakteryzować się świetną wydajnością dzięki generowaniu statycznemu, pełnym bezpieczeństwem typów i nowoczesnym, minimalistycznym wyglądem.',
    stack: ['Astro', 'TypeScript', 'Tailwind CSS', 'Nano Stores'],
    impact: 'Eksploracja innowacyjnej architektury (Astro Islands), optymalizacja ładowania zasobów i budowa responsywnego UI',
    status: 'W warsztacie (R&D)',
    page: '/ds_ai_portfolio/projects/fiszki-system',
  }
];
