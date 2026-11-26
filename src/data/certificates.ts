export interface Certificate {
  name: string;
  institution: string;
  date: string;
  url?: string;
  courseUrl?: string;
  certificateUrl?: string;
  logo?: string;
  skills?: string[];
}

export interface CertificateBadge {
  icon: string;
  name: string;
  text: string;
  highlight?: boolean;
}

export interface FeaturedCertificate {
  name: string;
  institution: string;
  instructors: string;
  date: string;
  courseUrl: string;
  certificateUrl: string;
  image: string;
  certificateNo: string;
  postUrl: string;
  badges: CertificateBadge[];
}

// Wyróżniony kurs: pierwsza karta w sekcji „Certyfikaty & Ciągły rozwój”.
export const featuredCertificate: FeaturedCertificate = {
  name: '10xDevs 4.0 — AI-Native Software Engineering',
  institution: 'Przeprogramowani',
  instructors: 'Przemek Smyrdek, Marcin Czarkowski',
  date: '19.11.2026',
  courseUrl: 'https://www.10xdevs.pl/',
  certificateUrl: '/ds_ai_portfolio/certificates/10xdevs-4-certyfikat.pdf',
  image: '/ds_ai_portfolio/certificates/10xdevs-4-certyfikat.webp',
  certificateNo: '8d5a2fca-8250-41a5-96f7-b45c976e923e',
  postUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7529137833085648896/',
  badges: [
    {
      icon: '🚀',
      name: '10xBuilder',
      text: 'Projekt zaliczeniowy LENS Scribe dla kliniki okulistycznej: lekarz dyktuje wizytę, AI proponuje wypełnienie formularza, a lekarz je poprawia i zatwierdza. FastAPI, React, PostgreSQL, testy E2E w Playwright, CI/CD i wdrożenie produkcyjne.',
    },
    {
      icon: '🔧',
      name: '10xArchitect',
      text: 'Raport architektoniczny z analizy repozytorium open source Langflow: mapa, analiza przepływu, plan refaktoryzacji i model domeny (DDD).',
    },
    {
      icon: '🤖',
      name: '10xChampion',
      text: 'Własny agent do code review w pipelinie CI/CD, zbudowany na Claude Agent SDK w Pythonie: przy każdym pull requeście wystawia werdykt.',
    },
    {
      icon: '⭐',
      name: 'Best Project',
      text: 'Wyróżnienie projektu zaliczeniowego za własny pomysł i jakość zgłoszenia.',
      highlight: true,
    },
  ],
};

export const certificates: Certificate[] = [
  {
    name: 'The Complete Agentic AI Engineering Course',
    institution: 'Udemy',
    date: 'czerwiec 2026',
    courseUrl: 'https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/',
    skills: ['Agentic AI', 'LLM', 'AI Agents'],
  },
  {
    name: 'Python w Excel: Analiza, wizualizacja i Machine Learning',
    institution: 'Udemy',
    date: 'październik 2025',
    courseUrl: 'https://www.udemy.com/course/python-w-excelu-analiza-wizualizacja-i-machine-learning-ai/',
    certificateUrl: 'https://www.udemy.com/certificate/UC-b4ddbbe0-7678-4e24-9308-2c1179df8449/',
  },
  {
    name: 'FastAPI — The Complete Course',
    institution: 'Udemy',
    date: 'lipiec 2025',
    courseUrl: 'https://www.udemy.com/course/fastapi-the-complete-course/',
    certificateUrl: 'https://www.udemy.com/certificate/UC-d12b5036-4637-4d69-b2b6-f723e8aa2d99/',
  },
  {
    name: 'Git & GitHub',
    institution: 'Udemy',
    date: 'luty 2025',
    courseUrl: 'https://www.udemy.com/course/git_github/',
    certificateUrl: 'https://www.udemy.com/certificate/UC-790bbc9d-8685-4773-9c3e-aee1ee6538da/',
  },
  {
    name: 'Pracuj w AI: Zostań Data Scientist od Zera — MASTERCLASS',
    institution: 'GOTOIT sp. z o.o. / IMPRV.AI Sp. z o.o.',
    date: 'styczeń 2025',
    certificateUrl: '/ds_ai_portfolio/certificates/gotoit-masterclass.pdf',
  },
  {
    name: 'Pracuj w AI: Zostań Data Scientist od Zera',
    institution: 'GOTOIT sp. z o.o. / IMPRV.AI Sp. z o.o.',
    date: 'październik 2024',
    certificateUrl: '/ds_ai_portfolio/certificates/gotoit-data-scientist.pdf',
  },
  {
    name: 'Data Analysis with Pandas',
    institution: 'imprv.ai',
    date: 'sierpień 2022',
    courseUrl: 'https://www.udemy.com/course/analiza-danych-w-python-i-pandas/',
    certificateUrl: 'https://www.udemy.com/certificate/UC-4ce7f089-b675-4f08-8d7e-33772ed0384c/',
  },
];