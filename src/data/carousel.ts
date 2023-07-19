const prevIcon = 'M15 18L9 12L15 6';
const nextIcon = 'M9 18L15 12L9 6';

export const carouselTeamButtons = [
  {
    label: 'especialista anterior',
    icon: prevIcon,
  },
  {
    label: 'próximo especialista',
    icon: nextIcon,
  },
];

export const carouselTrainingsButtons = [
  {
    label: 'treinamento anterior',
    icon: prevIcon,
  },
  {
    label: 'próximo treinamento',
    icon: nextIcon,
  },
];

export const carouselModuleButtons = [
  {
    label: 'módulo anterior',
    icon: prevIcon,
  },
  {
    label: 'próximo módulo',
    icon: nextIcon,
  },
];

type CarouselTeamItem = {
  title: string;
  titleEn?: string;
  description: string;
  descriptionEn: string;
  img: string;
};

export const carouselTeamItems: CarouselTeamItem[] = [
  {
    title: 'Rafael Duarte, MD',
    description: 'Professor de pneumologia do curso RD Step 1.',
    descriptionEn: 'Professor of Pulmonology at the RD Step 1 course.',
    img: 'rafael-duarte',
  },
  {
    title: 'Eduado Antônio, MD',
    description:
      'Coordenador geral da RD medicine e Professor de Cardiologia do RD Step 1',
    descriptionEn:
      'General Coordinator of RD Medicine and Professor of Cardiology at RD Step 1',
    img: 'eduardo-antonio',
  },
  {
    title: 'Mariana Montebeller, MD',
    description:
      'Coordenadora e professora de patologia geral e bioquímica do curso RD Step 1.',
    descriptionEn:
      'Coordinator and professor of general pathology and biochemistry of the RD Step 1 course.',
    img: 'mariana-montebeller',
  },
  {
    title: 'Juliana Guerra, MD',
    description: 'Professora de Endocrino do curso RD Step 1.',
    descriptionEn: 'Endocrine Professor of the RD Step 1 course.',
    img: 'juliana-guerra',
  },
  {
    title: 'Priscila Almeida, MD',
    description: 'Professora de Microbiologia no RD Step 1',
    descriptionEn: 'Professor of Microbiology at RD Step 1',
    img: 'priscila-almeida',
  },
  {
    title: 'Lucas Mitre, MS',
    description: 'Professor de Musculoskeletal & Dermatology no RD Step 1.',
    descriptionEn: 'Professor of Musculoskeletal & Dermatology at RD Step 1.',
    img: 'lucas-mitre',
  },
  {
    title: 'Lucas Chierici, MD',
    description:
      'Professor de Pharmacology e Reproductive System no RD Step 1.',
    descriptionEn:
      'Professor of Pharmacology and Reproductive System at RD Step 1.',
    img: 'lucas-chierici',
  },
  {
    title: 'Ramon M M Vilela MD, MBA',
    description: 'Professor de GI no curso RD Step 1',
    descriptionEn: 'GI teacher in the RD Step 1 course',
    img: 'ramon-vilela',
  },
  {
    title: 'Sávio Carvalho, MD',
    description: 'Professor de Nefrologia do curso RD Step 1',
    descriptionEn: 'Professor of Nephrology at the RD Step 1 course',
    img: 'savio-carvalho',
  },
  {
    title: 'Ana David, MD',
    description: 'Professora de Psiquiatria do curso RD step 1',
    descriptionEn: 'Professor of Psychiatry at the RD step 1 course',
    img: 'ana-david',
  },
  {
    title: 'Marcos Firme, MD',
    description: 'Professor de Neurology do curso RD Step 1',
    descriptionEn: 'Professor of Neurology of the RD Step 1 course',
    img: 'marcos-firme',
  },
  {
    title: 'Nome 1',
    description:
      'Clinical Research Coordinator no Miami VA Geriatric Department (GRECC). Médico ECFMG certified. Clínico pelo IAMSPE  e Cardiologista pelo Instituto Dante Pazzanase.',
    descriptionEn:
      'Clinical Research Coordinator at the Miami VA Geriatric Department (GRECC). ECFMG certified physician. Clinic by IAMSPE and Cardiologist by Instituto Dante Pazzanase.',
    img: 'nome-1',
  },
  {
    title: 'Leonardo Saraiva, MD',
    description:
      'Professor de Immunology, Biostatistics, Public Health Sciences no RD Step 1.',
    descriptionEn:
      'Professor of Immunology, Biostatistics, Public Health Sciences at RD Step 1.',
    img: 'leonardo-saraiva',
  },
  {
    title: 'Nome 2',
    description:
      'Médica formada pela Faculdade Ciencias Medicas de Minas Gerais (FCMMG) em 2021. Atualmente trabalha como Post-doctoral Research Fellow no Massachusetts General Hospital (MGH), afiliado a Harvard. ECFMG certified, aplicando para o MATCH 2024 em Pediatria.',
    descriptionEn:
      'Doctor graduated from Faculdade Ciencias Medicas de Minas Gerais (FCMMG) in 2021. She currently works as a Post-doctoral Research Fellow at Massachusetts General Hospital (MGH), affiliated with Harvard. ECFMG certified, applying for MATCH 2024 in Pediatrics.',
    img: 'nome-2',
  },
  {
    title: 'Nome 3',
    description:
      'Médico formado pela Universidade Estadual de Pernambuco (UPE – 2021). Research Fellow em Neurologia no Mass General Hospital junto a Harvard Medical School. É aplicante para a residência de Neurologia para o MATCH 2024.',
    descriptionEn:
      'Doctor graduated from the State University of Pernambuco (UPE – 2021). Research Fellow in Neurology at Mass General Hospital at Harvard Medical School. He is an applicant for the residency in Neurology for MATCH 2024.',
    img: 'nome-3',
  },
];

type CarouselTrainingItem = CarouselTeamItem & {
  aspectRatio: number;
};

export const carouselTrainingsItems: CarouselTrainingItem[] = [
  {
    title: 'RD Step 1',
    titleEn: 'RD Step 1',
    description:
      'Vença a principal barreira para se tornar médico nos EUA em 9 meses com um curso extensivo em inglês e português baseado em didática simples e múltiplas revisões, dado por professores com as maiores notas do Brasil.',
    descriptionEn:
      'Overcome the main barrier to becoming a doctor in the USA in 9 months with an extensive course in English and Portuguese based on simple didactics and multiple revisions, given by professors with the highest grades in Brazil.',
    img: 'rd-step-1',
    aspectRatio: 1,
  },
  {
    title: 'English, MD',
    titleEn: 'English, MD',
    description:
      'Inglês real do dia a dia médico americano, do básico ao avançado, com estudos de textos, flash cards, exercícios e 2 encontros ao vivo de conversação semanal. É a sua preparação perfeita para os estágios, pesquisa e residência médica nos EUA.',
    descriptionEn:
      'Real American medical everyday English, from basic to advanced, with text studies, flash cards, exercises and 2 live weekly conversation meetings. Its your perfect preparation for internships, research, and medical residency in the US.',
    img: 'english-md',
    aspectRatio: 2.1,
  },
  {
    title: 'Você Médico nos EUA',
    titleEn: 'You Doctor in the USA',
    description:
      'Mentoria personalizada e detalhada do inicio ao fim do seu processo de validação. O VMEUA ensina todo o processo, promove mesas redondas e meetings de networking, te posiciona nos estágios, cuida da sua aplicação para a residência e te treina para as entrevistas.',
    descriptionEn:
      'Personalized and detailed mentoring from beginning to end of your validation process. VMEUA teaches the entire process, promotes round tables and networking meetings, positions you in internships, takes care of your residency application and trains you for interviews.',
    img: 'voce-medico-nos-eua',
    aspectRatio: 1,
  },
  {
    title: 'RD Clerkship and Observership Program',
    titleEn: 'RD Clerkship and Observership Program',
    description:
      'a RD med busca as oportunidades de estágios nos EUA de acordo com o seu perfil, cuida da sua documentação de aplicação e escreve os modelos de email para você enviar aos departamentos.',
    descriptionEn:
      'RD med searches for internship opportunities in the USA according to your profile, takes care of your application documentation and writes email templates for you to send to departments.',
    img: 'rd-clerkship-and-observership-program',
    aspectRatio: 1.49,
  },
  {
    title: 'RD Research Fellow Program',
    titleEn: 'RD Research Fellow Program',
    description:
      'Procuramos oportunidades remuneradas ou não de pesquisa nos EUA. Em geral são programas de 1 ano e você não precisa ter o diploma validado. Uma oportunidade de fortalecer muito a sua aplicação para especialidades competitivas ou especialidades menos concorridas',
    descriptionEn:
      'We seek paid and unpaid research opportunities in the US. In general, they are 1-year programs and you do not need to have your diploma validated. An opportunity to greatly strengthen your application for competitive or less competitive specialties',
    img: 'rd-research-fellow-program',
    aspectRatio: 1.26,
  },
  {
    title: 'Time do Match',
    titleEn: 'Match Team',
    description:
      'Nós cuidamos de tudo multiplicar as suas chances e evitar erros no momento crucial da aplicação. O time do match conta com mentores que são Diretores de Programa de residência nos EUA, Diretores de internato (clerkship) nos EUA e muito mais.',
    descriptionEn:
      'We take care of everything to multiply your chances and avoid mistakes at the crucial moment of the application. The match team features mentors who are US Residency Program Directors, US Clerkship Directors and more.',
    img: 'time-do-match',
    aspectRatio: 2.08,
  },
];
