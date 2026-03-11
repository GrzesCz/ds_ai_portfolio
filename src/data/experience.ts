export interface Position {
  title: string;
  period: string;
  description?: string[];
}

export interface ExperienceEntry {
  company: string;
  logo?: string;
  positions: Position[];
}

export const experience: ExperienceEntry[] = [
  {
    company: 'Generalna Dyrekcja Dróg Krajowych i Autostrad (GDDKiA)',
    positions: [
      {
        title: 'Główny Specjalista w Wydziale Monitoringu Inwestycji',
        period: 'sty 2022 – obecnie',
        description: [
          'Zaawansowane przetwarzanie, analiza i wizualizacja danych z różnorodnych źródeł (SQL, MySQL, SharePoint, Power BI)',
          'Tworzenie dynamicznych dashboardów Power BI monitorujących KPI projektów',
          'Pisanie skryptów Python automatyzujących rutynowe zadania analityczne',
          'Współpraca z działami w celu identyfikacji potrzeb analitycznych i dostarczania rekomendacji',
        ],
      },
      {
        title: 'Naczelnik Wydziału Monitoringu Inwestycji',
        period: 'sty 2019 – sty 2022',
      },
      {
        title: 'Naczelnik Wydziału Przygotowania Inwestycji',
        period: 'mar 2017 – sty 2019',
      },
      {
        title: 'Naczelnik Wydziału Dokumentacji Wstępnej',
        period: 'sty 2016 – mar 2017',
      },
      {
        title: 'Starszy Specjalista w Wydziale Dokumentacji Wstępnej',
        period: 'gru 2014 – sty 2016',
      },
      {
        title: 'Specjalista',
        period: 'gru 2013 – gru 2014',
      },
    ],
  },
  {
    company: 'Biuro Projektowo-Konsultingowe Eurostrada',
    positions: [
      {
        title: 'Projektant Drogowy',
        period: 'cze 2003 – cze 2013',
      },
    ],
  },
];