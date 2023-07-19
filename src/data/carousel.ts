import { trainings } from './training';

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

export const carouselTestimonialsButtons = [
  {
    label: 'depoimento anterior',
    icon: prevIcon,
  },
  {
    label: 'próximo depoimento',
    icon: nextIcon,
  },
];

type CarouselTeamItem = {
  title: string;
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
