export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  stack: string[];
  impact?: string;
  status?: string;
  flagship?: boolean;
  github?: string;
  live?: string;
  page?: string;
}

export const projects: Project[] = [
  {
    slug: 'kopi',
    title: 'System KOPI',
    description:
      'Aplikacja webowa do elektronicznego obiegu dokumentacji projektowej dla GDDKiA.',
    longDescription:
      'Zaprojektowałem i wdrożyłem od koncepcji do produkcji system KOPI — aplikację webową zarządzającą elektronicznym obiegiem dokumentacji projektowej. System zdigitalizował proces składania wniosków, wyeliminował papierowy obieg i jest używany przez dziesiątki pracowników w kilku departamentach GDDKiA.',
    stack: ['Python', 'FastAPI', 'SQL', 'HTML/CSS', 'JavaScript'],
    impact:
      'Zdigitalizowała proces składania wniosków, wyeliminowała papierowy obieg, używana przez dziesiątki pracowników',
    status: 'Produkcja (wewnętrzny system GDDKiA)',
    flagship: true,
  },
  {
    slug: 'paysliper',
    title: 'Employee PaySliper',
    description:
      'System zamieniający dane z pliku Excel na profesjonalne paski wynagrodzeń PDF.',
    longDescription:
      'Automatyczny system generowania pasków wynagrodzeń — pobiera dane z pliku Excel, waliduje je, generuje profesjonalne dokumenty PDF i wysyła je e-mailem do pracowników.',
    stack: ['Python', 'Pandas', 'PDF Generation', 'SMTP/IMAP'],
    impact: 'Automatyzacja generowania i dystrybucji pasków wynagrodzeń',
    github: 'https://github.com/GrzesCz',
  },
  {
    slug: 'sklep-spozywczy',
    title: 'Analiza sklepu spożywczego',
    description:
      'Aplikacja do analizy danych zakupowych, rekomendacji produktów i chatbot obsługi klienta.',
    longDescription:
      'System analityczny łączący predykcję sprzedaży z modelami AI, rekomendacje produktowe oraz chatbota obsługi klienta. Generuje raporty Excel z kluczowymi metrykami.',
    stack: ['Python', 'AI/ML', 'Analiza danych', 'Excel'],
    impact: 'Predykcja sprzedaży, rekomendacje produktów, automatyczne raporty',
    github: 'https://github.com/GrzesCz',
  },
  {
    slug: 'ewidencja-pracownikow',
    title: 'Ewidencja pracowników',
    description:
      'Aplikacja do zarządzania danymi pracowników i automatyzacji procesów HR.',
    stack: ['MySQL', 'Python', 'FastAPI'],
    impact: 'Centralizacja danych HR i automatyzacja procesów kadrowych',
    github: 'https://github.com/GrzesCz',
  },
  {
    slug: 'iris',
    title: 'Analiza EDA Irysów',
    description:
      'Eksploracyjna analiza danych irysów z wnioskami domenowymi.',
    longDescription:
      'Kompleksowa eksploracyjna analiza danych (EDA) zbioru Iris. Analiza obejmuje statystyki opisowe, wizualizacje rozkładów, korelacje między cechami oraz wnioski klasyfikacyjne.',
    stack: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Jupyter'],
    page: '/ds_ai_portfolio/projects/iris',
    github: 'https://github.com/GrzesCz',
  },
];