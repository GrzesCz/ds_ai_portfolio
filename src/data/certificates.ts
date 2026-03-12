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

export const certificates: Certificate[] = [
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