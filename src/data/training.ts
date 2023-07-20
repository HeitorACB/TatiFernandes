import type { CardIcon } from 'components/CardIcon';
import type { SendFormData } from 'api/sendForm';

type TrainingData = {
  name: string;
  sheet: SendFormData['sheetName'];
  description: string;
  descriptionEn: string;
  img: string;
  aspectRatio: number;
  coordName: string;
  coordDescription: string;
  coordDescriptionEn: string;
  coordImg: string;
  video: string;
  modules: {
    title: string;
    titleEn: string;
    description: string;
    descriptionEn: string;
  }[];
  differentials: {
    icon: CardIcon;
    title: string;
    titleEn: string;
    description: string;
    descriptionEn: string;
  }[];
  testimonials: {
    img: string;
    name: string;
    description: string;
    descriptionEn: string;
  }[];
};

export const trainings: TrainingData[] = [
  {
    name: 'RD Step 1',
    sheet: 'rd_step_1',
    description:
      'Vença a principal barreira para se tornar médico nos EUA em 9 meses com um curso extensivo em inglês e português baseado em didática simples e múltiplas revisões, dado por professores com as maiores notas do Brasil.',
    descriptionEn:
      'Overcome the main barrier to becoming a doctor in the USA in 9 months with an extensive course in English and Portuguese based on simple didactics and multiple revisions, given by professors with the highest grades in Brazil.',
    img: 'rd-step-1',
    aspectRatio: 1,
    coordName: 'Mariana Montebeller, MD',
    coordDescription:
      'Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Dolig makrore hbt hypodat, exosk. ',
    coordDescriptionEn:
      'Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Dolig makrore hbt hypodat, exosk. ',
    coordImg: 'mariana-montebeller',
    video: '47935e3b-265f-4f95-8bb4-b06ca1f57dcd',
    modules: [
      {
        title: 'Lorem ipsum dolor',
        titleEn: 'Lorem ipsum dolor',
        description:
          'Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade ',
        descriptionEn:
          'Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade ',
      },
      {
        title: 'Lorem ipsum dolor',
        titleEn: 'Lorem ipsum dolor',
        description:
          'Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade ',
        descriptionEn:
          'Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade ',
      },
      {
        title: 'Lorem ipsum dolor',
        titleEn: 'Lorem ipsum dolor',
        description:
          'Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade ',
        descriptionEn:
          'Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade ',
      },
      {
        title: 'Lorem ipsum dolor',
        titleEn: 'Lorem ipsum dolor',
        description:
          'Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade ',
        descriptionEn:
          'Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade ',
      },
      {
        title: 'Lorem ipsum dolor',
        titleEn: 'Lorem ipsum dolor',
        description:
          'Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade ',
        descriptionEn:
          'Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade ',
      },
      {
        title: 'Lorem ipsum dolor',
        titleEn: 'Lorem ipsum dolor',
        description:
          'Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade ',
        descriptionEn:
          'Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade ',
      },
    ],
    differentials: [
      {
        icon: 'graduate',
        title: 'Curso extensivo',
        titleEn: 'Extensive course',
        description:
          'Curso extensivo para o STEP 1 em inglês e português com didática simples e sistema de revisões constantes dado por professores com as maiores notas do Brasil e hoje residentes nas maiores  instituições americanas.',
        descriptionEn:
          'Extensive course for STEP 1 in English and Portuguese with simple didactics and a system of constant revisions given by professors with the highest grades in Brazil and currently residing in the largest American institutions.',
      },
      {
        icon: 'tv',
        title: 'Ciclos de aula',
        titleEn: 'Class cycles',
        description:
          'Caminhamos em ciclos de aula seguidos de revisão. Se na semana você teve aulas de 3 matérias diferentes em inglês, na semana seguinte temos aulas de revisão ao vivo em português baseadas em questões para revisarmos os assuntos estudados.',
        descriptionEn:
          'We walked in class cycles followed by review. If in the week you had classes in 3 different subjects in English, the following week we have live review classes in Portuguese based on questions to review the subjects studied.',
      },
      {
        icon: 'map',
        title: 'Cronograma de estudos',
        titleEn: 'Study schedule',
        description:
          'Cronograma diário de estudos, direcionando páginas a serem lidas, videos a serem assistidos, flash cards a serem feitos e número de questões a serem executados.',
        descriptionEn:
          'Daily study schedule, directing pages to be read, videos to be watched, flash cards to be made and number of questions to be executed.',
      },
      {
        icon: 'users',
        title: 'Mentoria 1:1',
        titleEn: 'Mentoring 1:1',
        description:
          'O RD Step 1 inclui o programa RD produtividade, que é uma Mentoria 1:1 de estudos, produtividade e otimização de tempo para adequar o cronograma de estudos à sua rotina.',
        descriptionEn:
          'RD Step 1 includes the RD Productivity program, which is a 1:1 Mentorship of studies, productivity and time optimization to adapt the study schedule to your routine.',
      },
      {
        icon: 'book',
        title: 'Simulados semanais',
        titleEn: 'Weekly simulations',
        description: 'Simulados semanais sobre os temas da semana anterior.',
        descriptionEn: 'Weekly simulations on the themes of the previous week.',
      },
      {
        icon: 'bar-chart',
        title: 'Processo eficaz',
        titleEn: 'Effective process',
        description: '36 semanas (9 meses) para o seu pass no STEP 1.',
        descriptionEn: '36 weeks (9 months) for your STEP 1 pass.',
      },
      {
        icon: 'pencil',
        title: 'Revisões',
        titleEn: 'Revisions',
        description:
          '3 horas de revisões ao vivo baseadas em questões toda segunda e quarta à noite ministradas em português.',
        descriptionEn:
          '3 hours of live question-based reviews every Monday and Wednesday night taught in Portuguese.',
      },
    ],
    testimonials: [
      {
        img: 'nayani-teixeira',
        name: 'Nayani Teixeira de Oliveira Maciel',
        description:
          'O grupo Rd step 1 tem sido fundamental no meu processo para validação de diploma nos EUA, eles são extremamente competentes e são muito comprometidos com nossa aprendizagem,além de tudo são acessíveis, neste pouco tempo que estou com eles já sou muito grata por todo conhecimento compartilhado',
        descriptionEn:
          'The Rd step 1 group has been fundamental in my process for validating a diploma in the USA, they are extremely competent and are very committed to our learning, in addition to everything they are accessible, in the short time that I have been with them I am already very grateful for all the knowledge shared',
      },
      {
        img: 'matheus-souza',
        name: 'Matheus Souza',
        description:
          'Estou no último ano da faculdade de medicina e faço parte do Rd step 1 e da mentoria você médico nos EUA. Estou extremamente satisfeito de fazer parte do curso. O cronograma de estudo me dá um caminho todos os dias na hora de estudar, algo que antes era muito difícil de se organizar sozinho pela quantidade de conteúdo necessária para a prova. As aulas são muito didáticas, rápidas, com destaque para os pontos mais importantes, que aparecem mais nas provas! Além disso, os encontros ao vivo para revisão são essenciais para manter o foco e dar uma renovada no incentivo de continuar estudando. A equipe toda esta de parabéns, são profissionais excepcionais e atenciosos! Se não fosse o Rd step 1, com certeza estaria muito mais longe de alcançar meu objetivo!',
        descriptionEn:
          "I'm in the last year of medical school and I'm part of the Rd step 1 and mentoring you doctor in the USA. I am extremely pleased to be part of the course. The study schedule gives me a path every day when it comes to studying, something that was previously very difficult to organize on my own due to the amount of content needed for the test. Classes are very didactic, fast, highlighting the most important points, which appear more in the tests! In addition, live review meetings are essential to maintain focus and renew the incentive to continue studying. The whole team is to be congratulated, they are exceptional and attentive professionals! If it weren't for Rd step 1, I would definitely be much further away from reaching my goal!",
      },
      {
        img: 'juliana-secomandi',
        name: 'Juliana Secomandi Machado',
        description:
          'O RD Step1 é sensacional, super organizado e com professores excepcionais! Já havia começado a estudar sozinha e parado algumas vezes e nunca estive tão empolgada e confiante como estou agora. Não tenho dúvidas que foi um dos melhores  investimentos da minha vida. Tenho muito orgulho de fazer parte da primeira turma desse curso incrível!',
        descriptionEn:
          "RD Step1 is sensational, super organized and with exceptional teachers! I had already started studying on my own and stopped a few times and I was never as excited and confident as I am now. I have no doubt that it was one of the best investments of my life. I'm very proud to be part of the first class of this amazing course!",
      },
      {
        img: 'julia-reis',
        name: 'Júlia B. Q. dos Reis',
        description:
          'Com certeza o melhor investimento que eu poderia ter feito! Os professores dão tudo de si, e é notável a paixão o engajamento e cada um com a qualidade das aulas!Além disso, a equipe está sempre atenta e procurando inovar, oferecendo cada vez mais! Já me sinto vencedora!! Rumo ao match com o RD step 1!!!',
        descriptionEn:
          'Definitely the best investment I could have made! The teachers give their all, and the passion, engagement and each one with the quality of the classes is remarkable! In addition, the team is always attentive and looking to innovate, offering more and more! I already feel like a winner!! Towards the match with RD step 1!!!',
      },
      {
        img: 'carlos-macedo',
        name: 'Carlos Eduardo de Macedo Marins',
        description:
          'Meu nome é Carlos Macedo, sou old graduate, já com esposa, filha, subespecialista, tinha o desejo de ir pros EUA, mas achava o processo difícil, longo e a medida que o tempo passava até inalcançável… Até que há uns meses decidimos entrar nesse projeto, inicialmente no VMEUA e curso de inglês médico… E desde Fevereiro no RD Step1, que eu considero uma revolução no modo como encarar o processo de validação, desde a forma de estudar, aulas super completas, professores extremamente didáticos e a turma que, literalmente, se apoia! Recomendo de olhos fechados!',
        descriptionEn:
          'My name is Carlos Macedo, I am an old graduate, already with a wife, daughter, subspecialist, I wanted to go to the USA, but I found the process difficult, long and as time went by, even unattainable… Until a few months ago we decided to enter in this project, initially at VMEUA and the medical English course… And since February at RD Step1, which I consider a revolution in the way we face the validation process, from the way of studying, super complete classes, extremely didactic teachers and the class that literally leans on! I recommend with eyes closed!',
      },
      {
        img: 'daniella-cabral',
        name: 'Daniella Cabral de Freitas',
        description:
          '“pós mais de 20 anos de formada já havia desistido de revalidar o meu diploma, pois já haviam me desestimulado ao máximo. Despretensiosamente agendei um Meet com o Rafael Duarte, que de uma maneira ímpar me explicou sobre todo o processo e de que maneira iria me auxiliar em tudo! Conversa que literalmente mudou a minha vida! Estudando e me preparando para as provas! Sim, é possível.',
        descriptionEn:
          '“After more than 20 years of graduation, I had already given up trying to revalidate my diploma, as they had already discouraged me to the maximum extent. I unpretentiously scheduled a Meet with Rafael Duarte, who in a unique way explained to me about the whole process and how he would help me with everything! Conversation that literally changed my life! Studying and preparing for exams! Yes, it is possible.',
      },
      {
        img: 'josiane-pereira',
        name: 'Josiane Pereira',
        description:
          'Quando eu mesma me questiono porque estou nesse caminho e isso já aconteceu,me lembro que tomei uma decisão porque sentia que profissionalmente eu queria mais, eu precisava de um outro foco profissional,e quando o sonho é grande é bom se aliar aqueles que te ajudarão a moldar o teu sucesso,eis que aqui estou unida com a família RD,nessa família todos se ajudam a manter o foco e o caminho certo ao tão desejado PASS.',
        descriptionEn:
          "When I ask myself why I'm on this path and it's already happened, I remember that I made a decision because I felt that professionally I wanted more, I needed another professional focus, and when the dream is big it's good to ally yourself with those who will help you shaping your success, behold, here I am united with the RD family, in this family everyone helps each other to keep the focus and the right path to the much desired PASS.",
      },
      {
        img: 'bruno-sena',
        name: 'Bruno Sena Simões',
        description:
          'Os cursos são incríveis e com pessoas mais incríveis ainda! Estou atualmente no VMEUA e no English MD, com planos de entrar logo logo no RD Step 1! Meu único arrependimento é não ter conhecido esses cursos antes!',
        descriptionEn:
          "The courses are amazing and with even more amazing people! I'm currently on VMEUA and English MD, with plans to join RD Step 1 soon! My only regret is not having known about these courses sooner!",
      },
    ],
  },
  {
    name: 'English, MD',
    sheet: 'english',
    description:
      'Inglês real do dia a dia médico americano, do básico ao avançado, com estudos de textos, flash cards, exercícios e 2 encontros ao vivo de conversação semanal. É a sua preparação perfeita para os estágios, pesquisa e residência médica nos EUA.',
    descriptionEn:
      'Real American medical everyday English, from basic to advanced, with text studies, flash cards, exercises and 2 live weekly conversation meetings. Its your perfect preparation for internships, research, and medical residency in the US.',
    img: 'english-md',
    aspectRatio: 2.1,
    coordName: 'Karin Maria, MD',
    coordDescription:
      'Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Dolig makrore hbt hypodat, exosk. ',
    coordDescriptionEn:
      'Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Dolig makrore hbt hypodat, exosk. ',
    coordImg: 'mariana-montebeller',
    video: 'b473db26-9b3d-4afb-a8d3-617a893d0113',
    modules: [
      {
        title: 'Lorem ipsum dolor',
        titleEn: 'Lorem ipsum dolor',
        description:
          'Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade ',
        descriptionEn:
          'Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade ',
      },
      {
        title: 'Lorem ipsum dolor',
        titleEn: 'Lorem ipsum dolor',
        description:
          'Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade ',
        descriptionEn:
          'Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade ',
      },
      {
        title: 'Lorem ipsum dolor',
        titleEn: 'Lorem ipsum dolor',
        description:
          'Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade ',
        descriptionEn:
          'Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade ',
      },
      {
        title: 'Lorem ipsum dolor',
        titleEn: 'Lorem ipsum dolor',
        description:
          'Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade ',
        descriptionEn:
          'Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade ',
      },
    ],
    differentials: [
      {
        icon: 'graduate',
        title: 'Aulas de gramática',
        titleEn: 'Grammar classes',
        description:
          'Aulas de gramática e estudos de texto para melhorar também o seu inglês geral e não apenas o inglês médico.',
        descriptionEn:
          'Grammar classes and text studies to improve your general English as well, not just your medical English.',
      },
      {
        icon: 'announcement',
        title: 'Flash cards',
        titleEn: 'Flash cards',
        description:
          'Flash cards com áudio nativo com trechos dos textos estudados, para revisão e ganho de pronuncia e vocabulário.',
        descriptionEn:
          'Flash cards with native audio with excerpts from the texts studied, for review and gain in pronunciation and vocabulary.',
      },
      {
        icon: 'file-search',
        title: 'Situações médicas',
        titleEn: 'Medical situations',
        description:
          'Áudios de situações médicas diárias com conversas entre o médico e o paciente para estudantes de nível básico a intermediário.',
        descriptionEn:
          'Audios of daily medical situations with doctor-patient conversations for basic to intermediate students.',
      },
      {
        icon: 'users',
        title: 'sala de conversação',
        titleEn: 'Chat room',
        description:
          'Salas de conversação às terças à noite sobre notícias americanas em geral relacionando medicina e politica, meio ambiente, economia e temas polêmicos.',
        descriptionEn:
          'Tuesday night talk rooms on general American news relating to medicine and politics, the environment, the economy and hot topics.',
      },
      {
        icon: 'tv',
        title: 'Aula ao vivo',
        titleEn: 'Live class',
        description:
          'Aulas ao vivo de inglês médico básico às quintas à noite. Nas aulas ao vivo de inglês médico básico o aluno aprende as frases e termos mais comuns, e pratica o entendimento e a pronuncia num ambiente totalmente protegido.',
        descriptionEn:
          'Live Basic Medical English classes on Thursday nights. In Basic Medical English live classes, the student learns the most common phrases and terms, and practices understanding and pronunciation in a fully protected environment.',
      },
      {
        icon: 'tv',
        title: 'Aula avançada',
        titleEn: 'Advanced class',
        description:
          'Aulas ao vivo de inglês médico avançado: as aulas de inglês médico avançado fazemos simulação de atendimento real em inglês, discussão de casos no modelo das residências americanas e simulações para o OET, teste de inglês cobrado na validação.',
        descriptionEn:
          'Live advanced medical English classes: in advanced medical English classes we simulate real care in English, discuss cases based on the model of American residences and simulations for the OET, an English test charged at validation.',
      },
      {
        icon: 'book',
        title: 'Apostilas',
        titleEn: 'Books',
        description: 'Apostilas de exercícios de inglês geral e médico.',
        descriptionEn: 'Handouts for general and medical English exercises.',
      },
      {
        icon: 'map',
        title: 'Estágios',
        titleEn: 'Stages',
        description:
          'Preparo para os estágios nos EUA. Estar habituado a apresentar casos em inglês e entendendo o funcionamento da medicina nos EUA melhora a performance dos alunos nos estágios, melhorando a impressão que causam, o que resulta em maior chance de boas cartas de recomendação e maior chance de Match.',
        descriptionEn:
          "Preparation for internships in the USA. Being used to presenting cases in English and understanding how medicine works in the US improves students' performance in internships, improving the impression they make, which results in a greater chance of good letters of recommendation and a greater chance of Match.",
      },
    ],
    testimonials: [
      {
        img: 'nayani-teixeira',
        name: 'Nayani Teixeira de Oliveira Maciel',
        description:
          'O grupo Rd step 1 tem sido fundamental no meu processo para validação de diploma nos EUA, eles são extremamente competentes e são muito comprometidos com nossa aprendizagem,além de tudo são acessíveis, neste pouco tempo que estou com eles já sou muito grata por todo conhecimento compartilhado',
        descriptionEn:
          'The Rd step 1 group has been fundamental in my process for validating a diploma in the USA, they are extremely competent and are very committed to our learning, in addition to everything they are accessible, in the short time that I have been with them I am already very grateful for all the knowledge shared',
      },
      {
        img: 'matheus-souza',
        name: 'Matheus Souza',
        description:
          'Estou no último ano da faculdade de medicina e faço parte do Rd step 1 e da mentoria você médico nos EUA. Estou extremamente satisfeito de fazer parte do curso. O cronograma de estudo me dá um caminho todos os dias na hora de estudar, algo que antes era muito difícil de se organizar sozinho pela quantidade de conteúdo necessária para a prova. As aulas são muito didáticas, rápidas, com destaque para os pontos mais importantes, que aparecem mais nas provas! Além disso, os encontros ao vivo para revisão são essenciais para manter o foco e dar uma renovada no incentivo de continuar estudando. A equipe toda esta de parabéns, são profissionais excepcionais e atenciosos! Se não fosse o Rd step 1, com certeza estaria muito mais longe de alcançar meu objetivo!',
        descriptionEn:
          "I'm in the last year of medical school and I'm part of the Rd step 1 and mentoring you doctor in the USA. I am extremely pleased to be part of the course. The study schedule gives me a path every day when it comes to studying, something that was previously very difficult to organize on my own due to the amount of content needed for the test. Classes are very didactic, fast, highlighting the most important points, which appear more in the tests! In addition, live review meetings are essential to maintain focus and renew the incentive to continue studying. The whole team is to be congratulated, they are exceptional and attentive professionals! If it weren't for Rd step 1, I would definitely be much further away from reaching my goal!",
      },
      {
        img: 'juliana-secomandi',
        name: 'Juliana Secomandi Machado',
        description:
          'O RD Step1 é sensacional, super organizado e com professores excepcionais! Já havia começado a estudar sozinha e parado algumas vezes e nunca estive tão empolgada e confiante como estou agora. Não tenho dúvidas que foi um dos melhores  investimentos da minha vida. Tenho muito orgulho de fazer parte da primeira turma desse curso incrível!',
        descriptionEn:
          "RD Step1 is sensational, super organized and with exceptional teachers! I had already started studying on my own and stopped a few times and I was never as excited and confident as I am now. I have no doubt that it was one of the best investments of my life. I'm very proud to be part of the first class of this amazing course!",
      },
      {
        img: 'julia-reis',
        name: 'Júlia B. Q. dos Reis',
        description:
          'Com certeza o melhor investimento que eu poderia ter feito! Os professores dão tudo de si, e é notável a paixão o engajamento e cada um com a qualidade das aulas!Além disso, a equipe está sempre atenta e procurando inovar, oferecendo cada vez mais! Já me sinto vencedora!! Rumo ao match com o RD step 1!!!',
        descriptionEn:
          'Definitely the best investment I could have made! The teachers give their all, and the passion, engagement and each one with the quality of the classes is remarkable! In addition, the team is always attentive and looking to innovate, offering more and more! I already feel like a winner!! Towards the match with RD step 1!!!',
      },
      {
        img: 'carlos-macedo',
        name: 'Carlos Eduardo de Macedo Marins',
        description:
          'Meu nome é Carlos Macedo, sou old graduate, já com esposa, filha, subespecialista, tinha o desejo de ir pros EUA, mas achava o processo difícil, longo e a medida que o tempo passava até inalcançável… Até que há uns meses decidimos entrar nesse projeto, inicialmente no VMEUA e curso de inglês médico… E desde Fevereiro no RD Step1, que eu considero uma revolução no modo como encarar o processo de validação, desde a forma de estudar, aulas super completas, professores extremamente didáticos e a turma que, literalmente, se apoia! Recomendo de olhos fechados!',
        descriptionEn:
          'My name is Carlos Macedo, I am an old graduate, already with a wife, daughter, subspecialist, I wanted to go to the USA, but I found the process difficult, long and as time went by, even unattainable… Until a few months ago we decided to enter in this project, initially at VMEUA and the medical English course… And since February at RD Step1, which I consider a revolution in the way we face the validation process, from the way of studying, super complete classes, extremely didactic teachers and the class that literally leans on! I recommend with eyes closed!',
      },
      {
        img: 'daniella-cabral',
        name: 'Daniella Cabral de Freitas',
        description:
          '“pós mais de 20 anos de formada já havia desistido de revalidar o meu diploma, pois já haviam me desestimulado ao máximo. Despretensiosamente agendei um Meet com o Rafael Duarte, que de uma maneira ímpar me explicou sobre todo o processo e de que maneira iria me auxiliar em tudo! Conversa que literalmente mudou a minha vida! Estudando e me preparando para as provas! Sim, é possível.',
        descriptionEn:
          '“After more than 20 years of graduation, I had already given up trying to revalidate my diploma, as they had already discouraged me to the maximum extent. I unpretentiously scheduled a Meet with Rafael Duarte, who in a unique way explained to me about the whole process and how he would help me with everything! Conversation that literally changed my life! Studying and preparing for exams! Yes, it is possible.',
      },
      {
        img: 'josiane-pereira',
        name: 'Josiane Pereira',
        description:
          'Quando eu mesma me questiono porque estou nesse caminho e isso já aconteceu,me lembro que tomei uma decisão porque sentia que profissionalmente eu queria mais, eu precisava de um outro foco profissional,e quando o sonho é grande é bom se aliar aqueles que te ajudarão a moldar o teu sucesso,eis que aqui estou unida com a família RD,nessa família todos se ajudam a manter o foco e o caminho certo ao tão desejado PASS.',
        descriptionEn:
          "When I ask myself why I'm on this path and it's already happened, I remember that I made a decision because I felt that professionally I wanted more, I needed another professional focus, and when the dream is big it's good to ally yourself with those who will help you shaping your success, behold, here I am united with the RD family, in this family everyone helps each other to keep the focus and the right path to the much desired PASS.",
      },
      {
        img: 'bruno-sena',
        name: 'Bruno Sena Simões',
        description:
          'Os cursos são incríveis e com pessoas mais incríveis ainda! Estou atualmente no VMEUA e no English MD, com planos de entrar logo logo no RD Step 1! Meu único arrependimento é não ter conhecido esses cursos antes!',
        descriptionEn:
          "The courses are amazing and with even more amazing people! I'm currently on VMEUA and English MD, with plans to join RD Step 1 soon! My only regret is not having known about these courses sooner!",
      },
    ],
  },
  {
    name: 'Você Médico nos EUA',
    sheet: 'voce_medico_nos_eua',
    description:
      'Mentoria personalizada e detalhada do inicio ao fim do seu processo de validação. O VMEUA ensina todo o processo, promove mesas redondas e meetings de networking, te posiciona nos estágios, cuida da sua aplicação para a residência e te treina para as entrevistas.',
    descriptionEn:
      'Personalized and detailed mentoring from beginning to end of your validation process. VMEUA teaches the entire process, promotes round tables and networking meetings, positions you in internships, takes care of your residency application and trains you for interviews.',
    img: 'voce-medico-nos-eua',
    aspectRatio: 1,
    coordName: 'Breno Andrade, MD',
    coordDescription:
      'Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Dolig makrore hbt hypodat, exosk. ',
    coordDescriptionEn:
      'Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Dolig makrore hbt hypodat, exosk. ',
    coordImg: 'mariana-montebeller',
    video: 'd1bd315b-b974-4034-8076-9ff2a0338429',
    modules: [
      {
        title: 'Lorem ipsum dolor',
        titleEn: 'Lorem ipsum dolor',
        description:
          'Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade ',
        descriptionEn:
          'Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade ',
      },
      {
        title: 'Lorem ipsum dolor',
        titleEn: 'Lorem ipsum dolor',
        description:
          'Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade ',
        descriptionEn:
          'Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade ',
      },
      {
        title: 'Lorem ipsum dolor',
        titleEn: 'Lorem ipsum dolor',
        description:
          'Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade ',
        descriptionEn:
          'Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade ',
      },
      {
        title: 'Lorem ipsum dolor',
        titleEn: 'Lorem ipsum dolor',
        description:
          'Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade ',
        descriptionEn:
          'Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade ',
      },
    ],
    differentials: [
      {
        icon: 'graduate',
        title: 'Curso extensivo',
        titleEn: 'Extensive course',
        description:
          '1 reunião ao vivo mensal de mentoria para tiragem de dúvidas no processo e para prática ao vivo do speaking do Ocupacional English Test (OET).',
        descriptionEn:
          '1 live monthly mentoring meeting to answer questions about the process and to practice speaking in the Ocupacional English Test (OET).',
      },
      {
        icon: 'tv',
        title: 'Ciclos de aula',
        titleEn: 'Class cycles',
        description:
          'Reuniões todos os sábados de manhã para mentoria e discussão de questões em português.',
        descriptionEn:
          'Reuniões todos os sábados de manhã para mentoria e discussão de questões em português.',
      },
      {
        icon: 'clipboard',
        title: 'Cronograma de estudos',
        titleEn: 'Study schedule',
        description:
          'Aulas dissecando cada parte do processo, desde as burocracias iniciais até as estratégias de estudo, materiais, simulados, construção da aplicação e Match.',
        descriptionEn:
          'Classes dissecting each part of the process, from the initial bureaucracies to study strategies, materials, simulations, application construction and Match.',
      },
      {
        icon: 'users',
        title: 'Mentoria 1:1',
        titleEn: 'Mentoring 1:1',
        description:
          '1 reunião mensal ao vivo de networking, com brasileiros que estão nos EUA em diferentes especialidades, com o objetivo de conectar os alunos e gerar oportunidades.',
        descriptionEn:
          '1 monthly live networking meeting, with Brazilians who are in the US in different specialties, with the aim of connecting students and generating opportunities.',
      },
      {
        icon: 'book',
        title: 'Simulados semanais',
        titleEn: 'Weekly simulations',
        description:
          'O time do Match também está incluído no VMEUA e engloba o cuidado completo e detalhado para a sua aplicação para residência médica ou clinical fellowship nos EUA. Os mentores participam como entrevistadores na seleção real para os programas de residência nos EUA e usam essa habilidade para treinar você 1:1 para as entrevistas.',
        descriptionEn:
          'The Match team is also included in the VMEUA and encompasses complete and detailed care for your application for medical residency or clinical fellowship in the USA. Mentors participate as interviewers in the actual selection for US residency programs and use this skill to coach you 1:1 for interviews.',
      },
      {
        icon: 'bar-chart',
        title: 'Processo eficaz',
        titleEn: 'Effective process',
        description:
          'O RD Clerkship and Observship Program estão incluídos no VMEUA. Aqui nós procuramos as oportunidades de estágios para você de acordo com o seu perfil, cuidamos do seu currículo e documentos de aplicação e criamos os modelos de email personalidades que você precisa enviar às instituições.',
        descriptionEn:
          'The RD Clerkship and Observation Program are included in the VMEUA. Here we look for internship opportunities for you according to your profile, take care of your CV and application documents and create the personal email templates you need to send to institutions.',
      },
    ],
    testimonials: [
      {
        img: 'nayani-teixeira',
        name: 'Nayani Teixeira de Oliveira Maciel',
        description:
          'O grupo Rd step 1 tem sido fundamental no meu processo para validação de diploma nos EUA, eles são extremamente competentes e são muito comprometidos com nossa aprendizagem,além de tudo são acessíveis, neste pouco tempo que estou com eles já sou muito grata por todo conhecimento compartilhado',
        descriptionEn:
          'The Rd step 1 group has been fundamental in my process for validating a diploma in the USA, they are extremely competent and are very committed to our learning, in addition to everything they are accessible, in the short time that I have been with them I am already very grateful for all the knowledge shared',
      },
      {
        img: 'matheus-souza',
        name: 'Matheus Souza',
        description:
          'Estou no último ano da faculdade de medicina e faço parte do Rd step 1 e da mentoria você médico nos EUA. Estou extremamente satisfeito de fazer parte do curso. O cronograma de estudo me dá um caminho todos os dias na hora de estudar, algo que antes era muito difícil de se organizar sozinho pela quantidade de conteúdo necessária para a prova. As aulas são muito didáticas, rápidas, com destaque para os pontos mais importantes, que aparecem mais nas provas! Além disso, os encontros ao vivo para revisão são essenciais para manter o foco e dar uma renovada no incentivo de continuar estudando. A equipe toda esta de parabéns, são profissionais excepcionais e atenciosos! Se não fosse o Rd step 1, com certeza estaria muito mais longe de alcançar meu objetivo!',
        descriptionEn:
          "I'm in the last year of medical school and I'm part of the Rd step 1 and mentoring you doctor in the USA. I am extremely pleased to be part of the course. The study schedule gives me a path every day when it comes to studying, something that was previously very difficult to organize on my own due to the amount of content needed for the test. Classes are very didactic, fast, highlighting the most important points, which appear more in the tests! In addition, live review meetings are essential to maintain focus and renew the incentive to continue studying. The whole team is to be congratulated, they are exceptional and attentive professionals! If it weren't for Rd step 1, I would definitely be much further away from reaching my goal!",
      },
      {
        img: 'juliana-secomandi',
        name: 'Juliana Secomandi Machado',
        description:
          'O RD Step1 é sensacional, super organizado e com professores excepcionais! Já havia começado a estudar sozinha e parado algumas vezes e nunca estive tão empolgada e confiante como estou agora. Não tenho dúvidas que foi um dos melhores  investimentos da minha vida. Tenho muito orgulho de fazer parte da primeira turma desse curso incrível!',
        descriptionEn:
          "RD Step1 is sensational, super organized and with exceptional teachers! I had already started studying on my own and stopped a few times and I was never as excited and confident as I am now. I have no doubt that it was one of the best investments of my life. I'm very proud to be part of the first class of this amazing course!",
      },
      {
        img: 'julia-reis',
        name: 'Júlia B. Q. dos Reis',
        description:
          'Com certeza o melhor investimento que eu poderia ter feito! Os professores dão tudo de si, e é notável a paixão o engajamento e cada um com a qualidade das aulas!Além disso, a equipe está sempre atenta e procurando inovar, oferecendo cada vez mais! Já me sinto vencedora!! Rumo ao match com o RD step 1!!!',
        descriptionEn:
          'Definitely the best investment I could have made! The teachers give their all, and the passion, engagement and each one with the quality of the classes is remarkable! In addition, the team is always attentive and looking to innovate, offering more and more! I already feel like a winner!! Towards the match with RD step 1!!!',
      },
      {
        img: 'carlos-macedo',
        name: 'Carlos Eduardo de Macedo Marins',
        description:
          'Meu nome é Carlos Macedo, sou old graduate, já com esposa, filha, subespecialista, tinha o desejo de ir pros EUA, mas achava o processo difícil, longo e a medida que o tempo passava até inalcançável… Até que há uns meses decidimos entrar nesse projeto, inicialmente no VMEUA e curso de inglês médico… E desde Fevereiro no RD Step1, que eu considero uma revolução no modo como encarar o processo de validação, desde a forma de estudar, aulas super completas, professores extremamente didáticos e a turma que, literalmente, se apoia! Recomendo de olhos fechados!',
        descriptionEn:
          'My name is Carlos Macedo, I am an old graduate, already with a wife, daughter, subspecialist, I wanted to go to the USA, but I found the process difficult, long and as time went by, even unattainable… Until a few months ago we decided to enter in this project, initially at VMEUA and the medical English course… And since February at RD Step1, which I consider a revolution in the way we face the validation process, from the way of studying, super complete classes, extremely didactic teachers and the class that literally leans on! I recommend with eyes closed!',
      },
      {
        img: 'daniella-cabral',
        name: 'Daniella Cabral de Freitas',
        description:
          '“pós mais de 20 anos de formada já havia desistido de revalidar o meu diploma, pois já haviam me desestimulado ao máximo. Despretensiosamente agendei um Meet com o Rafael Duarte, que de uma maneira ímpar me explicou sobre todo o processo e de que maneira iria me auxiliar em tudo! Conversa que literalmente mudou a minha vida! Estudando e me preparando para as provas! Sim, é possível.',
        descriptionEn:
          '“After more than 20 years of graduation, I had already given up trying to revalidate my diploma, as they had already discouraged me to the maximum extent. I unpretentiously scheduled a Meet with Rafael Duarte, who in a unique way explained to me about the whole process and how he would help me with everything! Conversation that literally changed my life! Studying and preparing for exams! Yes, it is possible.',
      },
      {
        img: 'josiane-pereira',
        name: 'Josiane Pereira',
        description:
          'Quando eu mesma me questiono porque estou nesse caminho e isso já aconteceu,me lembro que tomei uma decisão porque sentia que profissionalmente eu queria mais, eu precisava de um outro foco profissional,e quando o sonho é grande é bom se aliar aqueles que te ajudarão a moldar o teu sucesso,eis que aqui estou unida com a família RD,nessa família todos se ajudam a manter o foco e o caminho certo ao tão desejado PASS.',
        descriptionEn:
          "When I ask myself why I'm on this path and it's already happened, I remember that I made a decision because I felt that professionally I wanted more, I needed another professional focus, and when the dream is big it's good to ally yourself with those who will help you shaping your success, behold, here I am united with the RD family, in this family everyone helps each other to keep the focus and the right path to the much desired PASS.",
      },
      {
        img: 'bruno-sena',
        name: 'Bruno Sena Simões',
        description:
          'Os cursos são incríveis e com pessoas mais incríveis ainda! Estou atualmente no VMEUA e no English MD, com planos de entrar logo logo no RD Step 1! Meu único arrependimento é não ter conhecido esses cursos antes!',
        descriptionEn:
          "The courses are amazing and with even more amazing people! I'm currently on VMEUA and English MD, with plans to join RD Step 1 soon! My only regret is not having known about these courses sooner!",
      },
    ],
  },
  {
    name: 'RD Clerkship and Observership Program',
    sheet: 'rd_clerkship',
    description:
      'a RD med busca as oportunidades de estágios nos EUA de acordo com o seu perfil, cuida da sua documentação de aplicação e escreve os modelos de email para você enviar aos departamentos.',
    descriptionEn:
      'RD med searches for internship opportunities in the USA according to your profile, takes care of your application documentation and writes email templates for you to send to departments.',
    img: 'rd-clerkship-and-observership-program',
    aspectRatio: 1.49,
    coordName: 'RD Clerkship and Observership Program',
    coordDescription:
      'Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Dolig makrore hbt hypodat, exosk. ',
    coordDescriptionEn:
      'Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Dolig makrore hbt hypodat, exosk. ',
    coordImg: 'mariana-montebeller',
    video: '47935e3b-265f-4f95-8bb4-b06ca1f57dcd',
    modules: [
      {
        title: 'Lorem ipsum dolor',
        titleEn: 'Lorem ipsum dolor',
        description:
          'Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade ',
        descriptionEn:
          'Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade ',
      },
      {
        title: 'Lorem ipsum dolor',
        titleEn: 'Lorem ipsum dolor',
        description:
          'Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade ',
        descriptionEn:
          'Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade ',
      },
      {
        title: 'Lorem ipsum dolor',
        titleEn: 'Lorem ipsum dolor',
        description:
          'Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade ',
        descriptionEn:
          'Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade ',
      },
      {
        title: 'Lorem ipsum dolor',
        titleEn: 'Lorem ipsum dolor',
        description:
          'Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade ',
        descriptionEn:
          'Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade ',
      },
      {
        title: 'Lorem ipsum dolor',
        titleEn: 'Lorem ipsum dolor',
        description:
          'Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade ',
        descriptionEn:
          'Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade ',
      },
      {
        title: 'Lorem ipsum dolor',
        titleEn: 'Lorem ipsum dolor',
        description:
          'Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade ',
        descriptionEn:
          'Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade ',
      },
    ],
    differentials: [
      {
        icon: 'graduate',
        title: 'Curso extensivo',
        titleEn: 'Extensive course',
        description:
          'Curso extensivo para o STEP 1 em inglês e português com didática simples e sistema de revisões constantes dado por professores com as maiores notas do Brasil e hoje residentes nas maiores  instituições americanas.',
        descriptionEn:
          'Extensive course for STEP 1 in English and Portuguese with simple didactics and a system of constant revisions given by professors with the highest grades in Brazil and currently residing in the largest American institutions.',
      },
      {
        icon: 'tv',
        title: 'Ciclos de aula',
        titleEn: 'Class cycles',
        description:
          'Caminhamos em ciclos de aula seguidos de revisão. Se na semana você teve aulas de 3 matérias diferentes em inglês, na semana seguinte temos aulas de revisão ao vivo em português baseadas em questões para revisarmos os assuntos estudados.',
        descriptionEn:
          'We walked in class cycles followed by review. If in the week you had classes in 3 different subjects in English, the following week we have live review classes in Portuguese based on questions to review the subjects studied.',
      },
      {
        icon: 'map',
        title: 'Cronograma de estudos',
        titleEn: 'Study schedule',
        description:
          'Cronograma diário de estudos, direcionando páginas a serem lidas, videos a serem assistidos, flash cards a serem feitos e número de questões a serem executados.',
        descriptionEn:
          'Daily study schedule, directing pages to be read, videos to be watched, flash cards to be made and number of questions to be executed.',
      },
      {
        icon: 'users',
        title: 'Mentoria 1:1',
        titleEn: 'Mentoring 1:1',
        description:
          'O RD Step 1 inclui o programa RD produtividade, que é uma Mentoria 1:1 de estudos, produtividade e otimização de tempo para adequar o cronograma de estudos à sua rotina.',
        descriptionEn:
          'RD Step 1 includes the RD Productivity program, which is a 1:1 Mentorship of studies, productivity and time optimization to adapt the study schedule to your routine.',
      },
      {
        icon: 'book',
        title: 'Simulados semanais',
        titleEn: 'Weekly simulations',
        description: 'Simulados semanais sobre os temas da semana anterior.',
        descriptionEn: 'Weekly simulations on the themes of the previous week.',
      },
      {
        icon: 'bar-chart',
        title: 'Processo eficaz',
        titleEn: 'Effective process',
        description: '36 semanas (9 meses) para o seu pass no STEP 1.',
        descriptionEn: '36 weeks (9 months) for your STEP 1 pass.',
      },
      {
        icon: 'pencil',
        title: 'Revisões',
        titleEn: 'Revisions',
        description:
          '3 horas de revisões ao vivo baseadas em questões toda segunda e quarta à noite ministradas em português.',
        descriptionEn:
          '3 hours of live question-based reviews every Monday and Wednesday night taught in Portuguese.',
      },
    ],
    testimonials: [
      {
        img: 'nayani-teixeira',
        name: 'Nayani Teixeira de Oliveira Maciel',
        description:
          'O grupo Rd step 1 tem sido fundamental no meu processo para validação de diploma nos EUA, eles são extremamente competentes e são muito comprometidos com nossa aprendizagem,além de tudo são acessíveis, neste pouco tempo que estou com eles já sou muito grata por todo conhecimento compartilhado',
        descriptionEn:
          'The Rd step 1 group has been fundamental in my process for validating a diploma in the USA, they are extremely competent and are very committed to our learning, in addition to everything they are accessible, in the short time that I have been with them I am already very grateful for all the knowledge shared',
      },
      {
        img: 'matheus-souza',
        name: 'Matheus Souza',
        description:
          'Estou no último ano da faculdade de medicina e faço parte do Rd step 1 e da mentoria você médico nos EUA. Estou extremamente satisfeito de fazer parte do curso. O cronograma de estudo me dá um caminho todos os dias na hora de estudar, algo que antes era muito difícil de se organizar sozinho pela quantidade de conteúdo necessária para a prova. As aulas são muito didáticas, rápidas, com destaque para os pontos mais importantes, que aparecem mais nas provas! Além disso, os encontros ao vivo para revisão são essenciais para manter o foco e dar uma renovada no incentivo de continuar estudando. A equipe toda esta de parabéns, são profissionais excepcionais e atenciosos! Se não fosse o Rd step 1, com certeza estaria muito mais longe de alcançar meu objetivo!',
        descriptionEn:
          "I'm in the last year of medical school and I'm part of the Rd step 1 and mentoring you doctor in the USA. I am extremely pleased to be part of the course. The study schedule gives me a path every day when it comes to studying, something that was previously very difficult to organize on my own due to the amount of content needed for the test. Classes are very didactic, fast, highlighting the most important points, which appear more in the tests! In addition, live review meetings are essential to maintain focus and renew the incentive to continue studying. The whole team is to be congratulated, they are exceptional and attentive professionals! If it weren't for Rd step 1, I would definitely be much further away from reaching my goal!",
      },
      {
        img: 'juliana-secomandi',
        name: 'Juliana Secomandi Machado',
        description:
          'O RD Step1 é sensacional, super organizado e com professores excepcionais! Já havia começado a estudar sozinha e parado algumas vezes e nunca estive tão empolgada e confiante como estou agora. Não tenho dúvidas que foi um dos melhores  investimentos da minha vida. Tenho muito orgulho de fazer parte da primeira turma desse curso incrível!',
        descriptionEn:
          "RD Step1 is sensational, super organized and with exceptional teachers! I had already started studying on my own and stopped a few times and I was never as excited and confident as I am now. I have no doubt that it was one of the best investments of my life. I'm very proud to be part of the first class of this amazing course!",
      },
      {
        img: 'julia-reis',
        name: 'Júlia B. Q. dos Reis',
        description:
          'Com certeza o melhor investimento que eu poderia ter feito! Os professores dão tudo de si, e é notável a paixão o engajamento e cada um com a qualidade das aulas!Além disso, a equipe está sempre atenta e procurando inovar, oferecendo cada vez mais! Já me sinto vencedora!! Rumo ao match com o RD step 1!!!',
        descriptionEn:
          'Definitely the best investment I could have made! The teachers give their all, and the passion, engagement and each one with the quality of the classes is remarkable! In addition, the team is always attentive and looking to innovate, offering more and more! I already feel like a winner!! Towards the match with RD step 1!!!',
      },
      {
        img: 'carlos-macedo',
        name: 'Carlos Eduardo de Macedo Marins',
        description:
          'Meu nome é Carlos Macedo, sou old graduate, já com esposa, filha, subespecialista, tinha o desejo de ir pros EUA, mas achava o processo difícil, longo e a medida que o tempo passava até inalcançável… Até que há uns meses decidimos entrar nesse projeto, inicialmente no VMEUA e curso de inglês médico… E desde Fevereiro no RD Step1, que eu considero uma revolução no modo como encarar o processo de validação, desde a forma de estudar, aulas super completas, professores extremamente didáticos e a turma que, literalmente, se apoia! Recomendo de olhos fechados!',
        descriptionEn:
          'My name is Carlos Macedo, I am an old graduate, already with a wife, daughter, subspecialist, I wanted to go to the USA, but I found the process difficult, long and as time went by, even unattainable… Until a few months ago we decided to enter in this project, initially at VMEUA and the medical English course… And since February at RD Step1, which I consider a revolution in the way we face the validation process, from the way of studying, super complete classes, extremely didactic teachers and the class that literally leans on! I recommend with eyes closed!',
      },
      {
        img: 'daniella-cabral',
        name: 'Daniella Cabral de Freitas',
        description:
          '“pós mais de 20 anos de formada já havia desistido de revalidar o meu diploma, pois já haviam me desestimulado ao máximo. Despretensiosamente agendei um Meet com o Rafael Duarte, que de uma maneira ímpar me explicou sobre todo o processo e de que maneira iria me auxiliar em tudo! Conversa que literalmente mudou a minha vida! Estudando e me preparando para as provas! Sim, é possível.',
        descriptionEn:
          '“After more than 20 years of graduation, I had already given up trying to revalidate my diploma, as they had already discouraged me to the maximum extent. I unpretentiously scheduled a Meet with Rafael Duarte, who in a unique way explained to me about the whole process and how he would help me with everything! Conversation that literally changed my life! Studying and preparing for exams! Yes, it is possible.',
      },
      {
        img: 'josiane-pereira',
        name: 'Josiane Pereira',
        description:
          'Quando eu mesma me questiono porque estou nesse caminho e isso já aconteceu,me lembro que tomei uma decisão porque sentia que profissionalmente eu queria mais, eu precisava de um outro foco profissional,e quando o sonho é grande é bom se aliar aqueles que te ajudarão a moldar o teu sucesso,eis que aqui estou unida com a família RD,nessa família todos se ajudam a manter o foco e o caminho certo ao tão desejado PASS.',
        descriptionEn:
          "When I ask myself why I'm on this path and it's already happened, I remember that I made a decision because I felt that professionally I wanted more, I needed another professional focus, and when the dream is big it's good to ally yourself with those who will help you shaping your success, behold, here I am united with the RD family, in this family everyone helps each other to keep the focus and the right path to the much desired PASS.",
      },
      {
        img: 'bruno-sena',
        name: 'Bruno Sena Simões',
        description:
          'Os cursos são incríveis e com pessoas mais incríveis ainda! Estou atualmente no VMEUA e no English MD, com planos de entrar logo logo no RD Step 1! Meu único arrependimento é não ter conhecido esses cursos antes!',
        descriptionEn:
          "The courses are amazing and with even more amazing people! I'm currently on VMEUA and English MD, with plans to join RD Step 1 soon! My only regret is not having known about these courses sooner!",
      },
    ],
  },
  {
    name: 'RD Research Fellow Program',
    sheet: 'rd_research',
    description:
      'Procuramos oportunidades remuneradas ou não de pesquisa nos EUA. Em geral são programas de 1 ano e você não precisa ter o diploma validado. Uma oportunidade de fortalecer muito a sua aplicação para especialidades competitivas ou especialidades menos concorridas',
    descriptionEn:
      'We seek paid and unpaid research opportunities in the US. In general, they are 1-year programs and you do not need to have your diploma validated. An opportunity to greatly strengthen your application for competitive or less competitive specialties',
    img: 'rd-research-fellow-program',
    aspectRatio: 1.26,
    coordName: 'RD Research Fellow Program',
    coordDescription:
      'Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Dolig makrore hbt hypodat, exosk. ',
    coordDescriptionEn:
      'Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Dolig makrore hbt hypodat, exosk. ',
    coordImg: 'mariana-montebeller',
    video: '47935e3b-265f-4f95-8bb4-b06ca1f57dcd',
    modules: [
      {
        title: 'Lorem ipsum dolor',
        titleEn: 'Lorem ipsum dolor',
        description:
          'Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade ',
        descriptionEn:
          'Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade ',
      },
      {
        title: 'Lorem ipsum dolor',
        titleEn: 'Lorem ipsum dolor',
        description:
          'Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade ',
        descriptionEn:
          'Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade ',
      },
      {
        title: 'Lorem ipsum dolor',
        titleEn: 'Lorem ipsum dolor',
        description:
          'Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade ',
        descriptionEn:
          'Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade ',
      },
      {
        title: 'Lorem ipsum dolor',
        titleEn: 'Lorem ipsum dolor',
        description:
          'Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade ',
        descriptionEn:
          'Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade ',
      },
      {
        title: 'Lorem ipsum dolor',
        titleEn: 'Lorem ipsum dolor',
        description:
          'Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade ',
        descriptionEn:
          'Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade ',
      },
      {
        title: 'Lorem ipsum dolor',
        titleEn: 'Lorem ipsum dolor',
        description:
          'Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade ',
        descriptionEn:
          'Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade ',
      },
    ],
    differentials: [
      {
        icon: 'graduate',
        title: 'Curso extensivo',
        titleEn: 'Extensive course',
        description:
          'Curso extensivo para o STEP 1 em inglês e português com didática simples e sistema de revisões constantes dado por professores com as maiores notas do Brasil e hoje residentes nas maiores  instituições americanas.',
        descriptionEn:
          'Extensive course for STEP 1 in English and Portuguese with simple didactics and a system of constant revisions given by professors with the highest grades in Brazil and currently residing in the largest American institutions.',
      },
      {
        icon: 'tv',
        title: 'Ciclos de aula',
        titleEn: 'Class cycles',
        description:
          'Caminhamos em ciclos de aula seguidos de revisão. Se na semana você teve aulas de 3 matérias diferentes em inglês, na semana seguinte temos aulas de revisão ao vivo em português baseadas em questões para revisarmos os assuntos estudados.',
        descriptionEn:
          'We walked in class cycles followed by review. If in the week you had classes in 3 different subjects in English, the following week we have live review classes in Portuguese based on questions to review the subjects studied.',
      },
      {
        icon: 'map',
        title: 'Cronograma de estudos',
        titleEn: 'Study schedule',
        description:
          'Cronograma diário de estudos, direcionando páginas a serem lidas, videos a serem assistidos, flash cards a serem feitos e número de questões a serem executados.',
        descriptionEn:
          'Daily study schedule, directing pages to be read, videos to be watched, flash cards to be made and number of questions to be executed.',
      },
      {
        icon: 'users',
        title: 'Mentoria 1:1',
        titleEn: 'Mentoring 1:1',
        description:
          'O RD Step 1 inclui o programa RD produtividade, que é uma Mentoria 1:1 de estudos, produtividade e otimização de tempo para adequar o cronograma de estudos à sua rotina.',
        descriptionEn:
          'RD Step 1 includes the RD Productivity program, which is a 1:1 Mentorship of studies, productivity and time optimization to adapt the study schedule to your routine.',
      },
      {
        icon: 'book',
        title: 'Simulados semanais',
        titleEn: 'Weekly simulations',
        description: 'Simulados semanais sobre os temas da semana anterior.',
        descriptionEn: 'Weekly simulations on the themes of the previous week.',
      },
      {
        icon: 'bar-chart',
        title: 'Processo eficaz',
        titleEn: 'Effective process',
        description: '36 semanas (9 meses) para o seu pass no STEP 1.',
        descriptionEn: '36 weeks (9 months) for your STEP 1 pass.',
      },
      {
        icon: 'pencil',
        title: 'Revisões',
        titleEn: 'Revisions',
        description:
          '3 horas de revisões ao vivo baseadas em questões toda segunda e quarta à noite ministradas em português.',
        descriptionEn:
          '3 hours of live question-based reviews every Monday and Wednesday night taught in Portuguese.',
      },
    ],
    testimonials: [
      {
        img: 'nayani-teixeira',
        name: 'Nayani Teixeira de Oliveira Maciel',
        description:
          'O grupo Rd step 1 tem sido fundamental no meu processo para validação de diploma nos EUA, eles são extremamente competentes e são muito comprometidos com nossa aprendizagem,além de tudo são acessíveis, neste pouco tempo que estou com eles já sou muito grata por todo conhecimento compartilhado',
        descriptionEn:
          'The Rd step 1 group has been fundamental in my process for validating a diploma in the USA, they are extremely competent and are very committed to our learning, in addition to everything they are accessible, in the short time that I have been with them I am already very grateful for all the knowledge shared',
      },
      {
        img: 'matheus-souza',
        name: 'Matheus Souza',
        description:
          'Estou no último ano da faculdade de medicina e faço parte do Rd step 1 e da mentoria você médico nos EUA. Estou extremamente satisfeito de fazer parte do curso. O cronograma de estudo me dá um caminho todos os dias na hora de estudar, algo que antes era muito difícil de se organizar sozinho pela quantidade de conteúdo necessária para a prova. As aulas são muito didáticas, rápidas, com destaque para os pontos mais importantes, que aparecem mais nas provas! Além disso, os encontros ao vivo para revisão são essenciais para manter o foco e dar uma renovada no incentivo de continuar estudando. A equipe toda esta de parabéns, são profissionais excepcionais e atenciosos! Se não fosse o Rd step 1, com certeza estaria muito mais longe de alcançar meu objetivo!',
        descriptionEn:
          "I'm in the last year of medical school and I'm part of the Rd step 1 and mentoring you doctor in the USA. I am extremely pleased to be part of the course. The study schedule gives me a path every day when it comes to studying, something that was previously very difficult to organize on my own due to the amount of content needed for the test. Classes are very didactic, fast, highlighting the most important points, which appear more in the tests! In addition, live review meetings are essential to maintain focus and renew the incentive to continue studying. The whole team is to be congratulated, they are exceptional and attentive professionals! If it weren't for Rd step 1, I would definitely be much further away from reaching my goal!",
      },
      {
        img: 'juliana-secomandi',
        name: 'Juliana Secomandi Machado',
        description:
          'O RD Step1 é sensacional, super organizado e com professores excepcionais! Já havia começado a estudar sozinha e parado algumas vezes e nunca estive tão empolgada e confiante como estou agora. Não tenho dúvidas que foi um dos melhores  investimentos da minha vida. Tenho muito orgulho de fazer parte da primeira turma desse curso incrível!',
        descriptionEn:
          "RD Step1 is sensational, super organized and with exceptional teachers! I had already started studying on my own and stopped a few times and I was never as excited and confident as I am now. I have no doubt that it was one of the best investments of my life. I'm very proud to be part of the first class of this amazing course!",
      },
      {
        img: 'julia-reis',
        name: 'Júlia B. Q. dos Reis',
        description:
          'Com certeza o melhor investimento que eu poderia ter feito! Os professores dão tudo de si, e é notável a paixão o engajamento e cada um com a qualidade das aulas!Além disso, a equipe está sempre atenta e procurando inovar, oferecendo cada vez mais! Já me sinto vencedora!! Rumo ao match com o RD step 1!!!',
        descriptionEn:
          'Definitely the best investment I could have made! The teachers give their all, and the passion, engagement and each one with the quality of the classes is remarkable! In addition, the team is always attentive and looking to innovate, offering more and more! I already feel like a winner!! Towards the match with RD step 1!!!',
      },
      {
        img: 'carlos-macedo',
        name: 'Carlos Eduardo de Macedo Marins',
        description:
          'Meu nome é Carlos Macedo, sou old graduate, já com esposa, filha, subespecialista, tinha o desejo de ir pros EUA, mas achava o processo difícil, longo e a medida que o tempo passava até inalcançável… Até que há uns meses decidimos entrar nesse projeto, inicialmente no VMEUA e curso de inglês médico… E desde Fevereiro no RD Step1, que eu considero uma revolução no modo como encarar o processo de validação, desde a forma de estudar, aulas super completas, professores extremamente didáticos e a turma que, literalmente, se apoia! Recomendo de olhos fechados!',
        descriptionEn:
          'My name is Carlos Macedo, I am an old graduate, already with a wife, daughter, subspecialist, I wanted to go to the USA, but I found the process difficult, long and as time went by, even unattainable… Until a few months ago we decided to enter in this project, initially at VMEUA and the medical English course… And since February at RD Step1, which I consider a revolution in the way we face the validation process, from the way of studying, super complete classes, extremely didactic teachers and the class that literally leans on! I recommend with eyes closed!',
      },
      {
        img: 'daniella-cabral',
        name: 'Daniella Cabral de Freitas',
        description:
          '“pós mais de 20 anos de formada já havia desistido de revalidar o meu diploma, pois já haviam me desestimulado ao máximo. Despretensiosamente agendei um Meet com o Rafael Duarte, que de uma maneira ímpar me explicou sobre todo o processo e de que maneira iria me auxiliar em tudo! Conversa que literalmente mudou a minha vida! Estudando e me preparando para as provas! Sim, é possível.',
        descriptionEn:
          '“After more than 20 years of graduation, I had already given up trying to revalidate my diploma, as they had already discouraged me to the maximum extent. I unpretentiously scheduled a Meet with Rafael Duarte, who in a unique way explained to me about the whole process and how he would help me with everything! Conversation that literally changed my life! Studying and preparing for exams! Yes, it is possible.',
      },
      {
        img: 'josiane-pereira',
        name: 'Josiane Pereira',
        description:
          'Quando eu mesma me questiono porque estou nesse caminho e isso já aconteceu,me lembro que tomei uma decisão porque sentia que profissionalmente eu queria mais, eu precisava de um outro foco profissional,e quando o sonho é grande é bom se aliar aqueles que te ajudarão a moldar o teu sucesso,eis que aqui estou unida com a família RD,nessa família todos se ajudam a manter o foco e o caminho certo ao tão desejado PASS.',
        descriptionEn:
          "When I ask myself why I'm on this path and it's already happened, I remember that I made a decision because I felt that professionally I wanted more, I needed another professional focus, and when the dream is big it's good to ally yourself with those who will help you shaping your success, behold, here I am united with the RD family, in this family everyone helps each other to keep the focus and the right path to the much desired PASS.",
      },
      {
        img: 'bruno-sena',
        name: 'Bruno Sena Simões',
        description:
          'Os cursos são incríveis e com pessoas mais incríveis ainda! Estou atualmente no VMEUA e no English MD, com planos de entrar logo logo no RD Step 1! Meu único arrependimento é não ter conhecido esses cursos antes!',
        descriptionEn:
          "The courses are amazing and with even more amazing people! I'm currently on VMEUA and English MD, with plans to join RD Step 1 soon! My only regret is not having known about these courses sooner!",
      },
    ],
  },
  {
    name: 'Time do Match',
    sheet: 'time_do_match',
    description:
      'Nós cuidamos de tudo multiplicar as suas chances e evitar erros no momento crucial da aplicação. O time do match conta com mentores que são Diretores de Programa de residência nos EUA, Diretores de internato (clerkship) nos EUA e muito mais.',
    descriptionEn:
      'We take care of everything to multiply your chances and avoid mistakes at the crucial moment of the application. The match team features mentors who are US Residency Program Directors, US Clerkship Directors and more.',
    img: 'time-do-match',
    aspectRatio: 2.08,
    coordName: 'Time do Match',
    coordDescription:
      'Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Dolig makrore hbt hypodat, exosk. ',
    coordDescriptionEn:
      'Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Dolig makrore hbt hypodat, exosk. ',
    coordImg: 'mariana-montebeller',
    video: '47935e3b-265f-4f95-8bb4-b06ca1f57dcd',
    modules: [
      {
        title: 'Lorem ipsum dolor',
        titleEn: 'Lorem ipsum dolor',
        description:
          'Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade ',
        descriptionEn:
          'Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade ',
      },
      {
        title: 'Lorem ipsum dolor',
        titleEn: 'Lorem ipsum dolor',
        description:
          'Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade ',
        descriptionEn:
          'Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade ',
      },
      {
        title: 'Lorem ipsum dolor',
        titleEn: 'Lorem ipsum dolor',
        description:
          'Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade ',
        descriptionEn:
          'Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade ',
      },
      {
        title: 'Lorem ipsum dolor',
        titleEn: 'Lorem ipsum dolor',
        description:
          'Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade ',
        descriptionEn:
          'Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade ',
      },
      {
        title: 'Lorem ipsum dolor',
        titleEn: 'Lorem ipsum dolor',
        description:
          'Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade ',
        descriptionEn:
          'Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade ',
      },
      {
        title: 'Lorem ipsum dolor',
        titleEn: 'Lorem ipsum dolor',
        description:
          'Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade ',
        descriptionEn:
          'Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade bide i osål Lörem ipsum dora decibel mikrobulig och speng att ultrajaska. Pogiment omiv angar i niktiga i dihyre lamysk. Dolig makrore hbt hypodat, exosk. Tepp polyrade rude. Anenade ',
      },
    ],
    differentials: [
      {
        icon: 'graduate',
        title: 'Curso extensivo',
        titleEn: 'Extensive course',
        description:
          'Curso extensivo para o STEP 1 em inglês e português com didática simples e sistema de revisões constantes dado por professores com as maiores notas do Brasil e hoje residentes nas maiores  instituições americanas.',
        descriptionEn:
          'Extensive course for STEP 1 in English and Portuguese with simple didactics and a system of constant revisions given by professors with the highest grades in Brazil and currently residing in the largest American institutions.',
      },
      {
        icon: 'tv',
        title: 'Ciclos de aula',
        titleEn: 'Class cycles',
        description:
          'Caminhamos em ciclos de aula seguidos de revisão. Se na semana você teve aulas de 3 matérias diferentes em inglês, na semana seguinte temos aulas de revisão ao vivo em português baseadas em questões para revisarmos os assuntos estudados.',
        descriptionEn:
          'We walked in class cycles followed by review. If in the week you had classes in 3 different subjects in English, the following week we have live review classes in Portuguese based on questions to review the subjects studied.',
      },
      {
        icon: 'map',
        title: 'Cronograma de estudos',
        titleEn: 'Study schedule',
        description:
          'Cronograma diário de estudos, direcionando páginas a serem lidas, videos a serem assistidos, flash cards a serem feitos e número de questões a serem executados.',
        descriptionEn:
          'Daily study schedule, directing pages to be read, videos to be watched, flash cards to be made and number of questions to be executed.',
      },
      {
        icon: 'users',
        title: 'Mentoria 1:1',
        titleEn: 'Mentoring 1:1',
        description:
          'O RD Step 1 inclui o programa RD produtividade, que é uma Mentoria 1:1 de estudos, produtividade e otimização de tempo para adequar o cronograma de estudos à sua rotina.',
        descriptionEn:
          'RD Step 1 includes the RD Productivity program, which is a 1:1 Mentorship of studies, productivity and time optimization to adapt the study schedule to your routine.',
      },
      {
        icon: 'book',
        title: 'Simulados semanais',
        titleEn: 'Weekly simulations',
        description: 'Simulados semanais sobre os temas da semana anterior.',
        descriptionEn: 'Weekly simulations on the themes of the previous week.',
      },
      {
        icon: 'bar-chart',
        title: 'Processo eficaz',
        titleEn: 'Effective process',
        description: '36 semanas (9 meses) para o seu pass no STEP 1.',
        descriptionEn: '36 weeks (9 months) for your STEP 1 pass.',
      },
      {
        icon: 'pencil',
        title: 'Revisões',
        titleEn: 'Revisions',
        description:
          '3 horas de revisões ao vivo baseadas em questões toda segunda e quarta à noite ministradas em português.',
        descriptionEn:
          '3 hours of live question-based reviews every Monday and Wednesday night taught in Portuguese.',
      },
    ],
    testimonials: [
      {
        img: 'nayani-teixeira',
        name: 'Nayani Teixeira de Oliveira Maciel',
        description:
          'O grupo Rd step 1 tem sido fundamental no meu processo para validação de diploma nos EUA, eles são extremamente competentes e são muito comprometidos com nossa aprendizagem,além de tudo são acessíveis, neste pouco tempo que estou com eles já sou muito grata por todo conhecimento compartilhado',
        descriptionEn:
          'The Rd step 1 group has been fundamental in my process for validating a diploma in the USA, they are extremely competent and are very committed to our learning, in addition to everything they are accessible, in the short time that I have been with them I am already very grateful for all the knowledge shared',
      },
      {
        img: 'matheus-souza',
        name: 'Matheus Souza',
        description:
          'Estou no último ano da faculdade de medicina e faço parte do Rd step 1 e da mentoria você médico nos EUA. Estou extremamente satisfeito de fazer parte do curso. O cronograma de estudo me dá um caminho todos os dias na hora de estudar, algo que antes era muito difícil de se organizar sozinho pela quantidade de conteúdo necessária para a prova. As aulas são muito didáticas, rápidas, com destaque para os pontos mais importantes, que aparecem mais nas provas! Além disso, os encontros ao vivo para revisão são essenciais para manter o foco e dar uma renovada no incentivo de continuar estudando. A equipe toda esta de parabéns, são profissionais excepcionais e atenciosos! Se não fosse o Rd step 1, com certeza estaria muito mais longe de alcançar meu objetivo!',
        descriptionEn:
          "I'm in the last year of medical school and I'm part of the Rd step 1 and mentoring you doctor in the USA. I am extremely pleased to be part of the course. The study schedule gives me a path every day when it comes to studying, something that was previously very difficult to organize on my own due to the amount of content needed for the test. Classes are very didactic, fast, highlighting the most important points, which appear more in the tests! In addition, live review meetings are essential to maintain focus and renew the incentive to continue studying. The whole team is to be congratulated, they are exceptional and attentive professionals! If it weren't for Rd step 1, I would definitely be much further away from reaching my goal!",
      },
      {
        img: 'juliana-secomandi',
        name: 'Juliana Secomandi Machado',
        description:
          'O RD Step1 é sensacional, super organizado e com professores excepcionais! Já havia começado a estudar sozinha e parado algumas vezes e nunca estive tão empolgada e confiante como estou agora. Não tenho dúvidas que foi um dos melhores  investimentos da minha vida. Tenho muito orgulho de fazer parte da primeira turma desse curso incrível!',
        descriptionEn:
          "RD Step1 is sensational, super organized and with exceptional teachers! I had already started studying on my own and stopped a few times and I was never as excited and confident as I am now. I have no doubt that it was one of the best investments of my life. I'm very proud to be part of the first class of this amazing course!",
      },
      {
        img: 'julia-reis',
        name: 'Júlia B. Q. dos Reis',
        description:
          'Com certeza o melhor investimento que eu poderia ter feito! Os professores dão tudo de si, e é notável a paixão o engajamento e cada um com a qualidade das aulas!Além disso, a equipe está sempre atenta e procurando inovar, oferecendo cada vez mais! Já me sinto vencedora!! Rumo ao match com o RD step 1!!!',
        descriptionEn:
          'Definitely the best investment I could have made! The teachers give their all, and the passion, engagement and each one with the quality of the classes is remarkable! In addition, the team is always attentive and looking to innovate, offering more and more! I already feel like a winner!! Towards the match with RD step 1!!!',
      },
      {
        img: 'carlos-macedo',
        name: 'Carlos Eduardo de Macedo Marins',
        description:
          'Meu nome é Carlos Macedo, sou old graduate, já com esposa, filha, subespecialista, tinha o desejo de ir pros EUA, mas achava o processo difícil, longo e a medida que o tempo passava até inalcançável… Até que há uns meses decidimos entrar nesse projeto, inicialmente no VMEUA e curso de inglês médico… E desde Fevereiro no RD Step1, que eu considero uma revolução no modo como encarar o processo de validação, desde a forma de estudar, aulas super completas, professores extremamente didáticos e a turma que, literalmente, se apoia! Recomendo de olhos fechados!',
        descriptionEn:
          'My name is Carlos Macedo, I am an old graduate, already with a wife, daughter, subspecialist, I wanted to go to the USA, but I found the process difficult, long and as time went by, even unattainable… Until a few months ago we decided to enter in this project, initially at VMEUA and the medical English course… And since February at RD Step1, which I consider a revolution in the way we face the validation process, from the way of studying, super complete classes, extremely didactic teachers and the class that literally leans on! I recommend with eyes closed!',
      },
      {
        img: 'daniella-cabral',
        name: 'Daniella Cabral de Freitas',
        description:
          '“pós mais de 20 anos de formada já havia desistido de revalidar o meu diploma, pois já haviam me desestimulado ao máximo. Despretensiosamente agendei um Meet com o Rafael Duarte, que de uma maneira ímpar me explicou sobre todo o processo e de que maneira iria me auxiliar em tudo! Conversa que literalmente mudou a minha vida! Estudando e me preparando para as provas! Sim, é possível.',
        descriptionEn:
          '“After more than 20 years of graduation, I had already given up trying to revalidate my diploma, as they had already discouraged me to the maximum extent. I unpretentiously scheduled a Meet with Rafael Duarte, who in a unique way explained to me about the whole process and how he would help me with everything! Conversation that literally changed my life! Studying and preparing for exams! Yes, it is possible.',
      },
      {
        img: 'josiane-pereira',
        name: 'Josiane Pereira',
        description:
          'Quando eu mesma me questiono porque estou nesse caminho e isso já aconteceu,me lembro que tomei uma decisão porque sentia que profissionalmente eu queria mais, eu precisava de um outro foco profissional,e quando o sonho é grande é bom se aliar aqueles que te ajudarão a moldar o teu sucesso,eis que aqui estou unida com a família RD,nessa família todos se ajudam a manter o foco e o caminho certo ao tão desejado PASS.',
        descriptionEn:
          "When I ask myself why I'm on this path and it's already happened, I remember that I made a decision because I felt that professionally I wanted more, I needed another professional focus, and when the dream is big it's good to ally yourself with those who will help you shaping your success, behold, here I am united with the RD family, in this family everyone helps each other to keep the focus and the right path to the much desired PASS.",
      },
      {
        img: 'bruno-sena',
        name: 'Bruno Sena Simões',
        description:
          'Os cursos são incríveis e com pessoas mais incríveis ainda! Estou atualmente no VMEUA e no English MD, com planos de entrar logo logo no RD Step 1! Meu único arrependimento é não ter conhecido esses cursos antes!',
        descriptionEn:
          "The courses are amazing and with even more amazing people! I'm currently on VMEUA and English MD, with plans to join RD Step 1 soon! My only regret is not having known about these courses sooner!",
      },
    ],
  },
];
