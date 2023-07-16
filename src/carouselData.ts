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

type CarouselTeamItem = {
  title: string;
  description: string;
  img: string;
};

export const carouselTeamItems: CarouselTeamItem[] = [
  {
    title: 'Rafael Duarte, MD',
    description: 'Professor de pneumologia do curso RD Step 1.',
    img: 'rafael-duarte',
  },
  {
    title: 'Eduado Antônio, MD',
    description:
      'Coordenador geral da RD medicine e Professor de Cardiologia do RD Step 1',
    img: 'eduardo-antonio',
  },
  {
    title: 'Mariana Montebeller, MD',
    description:
      'Coordenadora e professora de patologia geral e bioquímica do curso RD Step 1.',
    img: 'mariana-montebeller',
  },
  {
    title: 'Juliana Guerra, MD',
    description: 'Professora de Endocrino do curso RD Step 1.',
    img: 'juliana-guerra',
  },
  {
    title: 'Priscila Almeida, MD',
    description: 'Professora de Microbiologia no RD Step 1',
    img: 'priscila-almeida',
  },
  {
    title: 'Lucas Mitre, MS',
    description: 'Professor de Musculoskeletal & Dermatology no RD Step 1.',
    img: 'lucas-mitre',
  },
  {
    title: 'Lucas Chierici, MD',
    description:
      'Professor de Pharmacology e Reproductive System no RD Step 1.',
    img: 'lucas-chierici',
  },
  {
    title: 'Ramon M M Vilela MD, MBA',
    description: 'Professor de GI no curso RD Step 1',
    img: 'ramon-vilela',
  },
  {
    title: 'Sávio Carvalho, MD',
    description: 'Professor de Nefrologia do curso RD Step 1',
    img: 'savio-carvalho',
  },
  {
    title: 'Ana David, MD',
    description: 'Professora de Psiquiatria do curso RD step 1',
    img: 'ana-david',
  },
  {
    title: 'Marcos Firme, MD',
    description: 'Professor de Neurology do curso RD Step 1',
    img: 'marcos-firme',
  },
  {
    title: 'Nome 1',
    description:
      'Clinical Research Coordinator no Miami VA Geriatric Department (GRECC). Médico ECFMG certified. Clínico pelo IAMSPE  e Cardiologista pelo Instituto Dante Pazzanase.',
    img: 'nome-1',
  },
  {
    title: 'Leonardo Saraiva, MD',
    description:
      'Professor de Immunology, Biostatistics, Public Health Sciences no RD Step 1.',
    img: 'leonardo-saraiva',
  },
  {
    title: 'Nome 2',
    description:
      'Médica formada pela Faculdade Ciencias Medicas de Minas Gerais (FCMMG) em 2021. Atualmente trabalha como Post-doctoral Research Fellow no Massachusetts General Hospital (MGH), afilido a Harvard. ECFMG certified, aplicando para o MATCH 2024 em Pediatria.',
    img: 'nome-2',
  },
  {
    title: 'Nome 3',
    description:
      'Médico formado pela Universidade Estadual de Pernambuco (UPE – 2021). Research Fellow em Neurologia no Mass General Hospital junto a Harvard Medical School. É aplicante para a residência de Neurologia para o MATCH 2024.',
    img: 'nome-3',
  },
];

type CarouselTrainingItem = CarouselTeamItem & {
  aspectRatio: number;
}

export const carouselTrainingsItems: CarouselTrainingItem[] = [
  {
    title: 'RD Step 1',
    description:
      'Vença a principal barreira para se tornar médico nos EUA em 9 meses com um curso extensivo em inglês e português baseado em didática simples e múltiplas revisões, dado por professores com as maiores notas do Brasil.',
    img: 'rd-step-1',
    aspectRatio: 1
  },
  {
    title: 'English, MD',
    description:
      'Inglês real do dia a dia médico americano, do básico ao avançado, com estudos de textos, flash cards, exercícios e 2 encontros ao vivo de conversação semanal. É a sua preparação perfeita para os estágios, pesquisa e residência médica nos EUA.',
    img: 'english-md',
    aspectRatio: 2.1
  },
  {
    title: 'Você Médico nos EUA',
    description:
      'Mentoria personalizada e detalhada do inicio ao fim do seu processo de validação. O VMEUA ensina todo o processo, promove mesas redondas e meetings de networking, te posiciona nos estágios, cuida da sua aplicação para a residência e te treina para as entrevistas.',
    img: 'voce-medico-nos-eua',
    aspectRatio: 1
  },
  {
    title: 'RD Clerkship and Observership Program',
    description:
      'a RD med busca as oportunidades de estágios nos EUA de acordo com o seu perfil, cuida da sua documentação de aplicação e escreve os modelos de email para você enviar aos departamentos.',
    img: 'rd-clerkship-and-observership-program',
    aspectRatio: 1.49
  },
  {
    title: 'RD Research Fellow Program',
    description:
      'Procuramos oportunidades remuneradas ou não de pesquisa nos EUA. Em geral são programas de 1 ano e você não precisa ter o diploma validado. Uma oportunidade de fortalecer muito a sua aplicação para especialidades competitivas ou especialidades menos concorridas',
    img: 'rd-research-fellow-program',
    aspectRatio: 1.26
  },
];
