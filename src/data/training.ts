import type { CardIcon } from 'components/CardIcon';

type TrainingData = {
  coordName: string;
  coordDescription: string;
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
    coordName: 'Mariana Montebeller, MD',
    coordDescription:
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
        titleEn: 'extensive course',
        description:
          'Curso extensivo para o STEP 1 em inglês e português com didática simples e sistema de revisões constantes dado por professores com as maiores notas do Brasil e hoje residentes nas maiores  instituições americanas.',
        descriptionEn:
          'Extensive course for STEP 1 in English and Portuguese with simple didactics and a system of constant revisions given by professors with the highest grades in Brazil and currently residing in the largest American institutions.',
      },
      {
        icon: 'tv',
        title: 'Ciclos de aula',
        titleEn: 'class cycles',
        description:
          'Caminhamos em ciclos de aula seguidos de revisão. Se na semana você teve aulas de 3 matérias diferentes em inglês, na semana seguinte temos aulas de revisão ao vivo em português baseadas em questões para revisarmos os assuntos estudados.',
        descriptionEn:
          'We walked in class cycles followed by review. If in the week you had classes in 3 different subjects in English, the following week we have live review classes in Portuguese based on questions to review the subjects studied.',
      },
      {
        icon: 'map',
        title: 'Cronograma de estudos',
        titleEn: 'study schedule',
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
        titleEn: 'weekly simulations',
        description: 'Simulados semanais sobre os temas da semana anterior.',
        descriptionEn: 'Weekly simulations on the themes of the previous week.',
      },
      {
        icon: 'bar-chart',
        title: 'Processo eficaz',
        titleEn: 'effective process',
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
        img: '',
        name: 'Nayani Teixeira de Oliveira Maciel',
        description:
          'O grupo Rd step 1 tem sido fundamental no meu processo para validação de diploma nos EUA, eles são extremamente competentes e são muito comprometidos com nossa aprendizagem,além de tudo são acessíveis, neste pouco tempo que estou com eles já sou muito grata por todo conhecimento compartilhado',
        descriptionEn:
          'The Rd step 1 group has been fundamental in my process for validating a diploma in the USA, they are extremely competent and are very committed to our learning, in addition to everything they are accessible, in the short time that I have been with them I am already very grateful for all the knowledge shared',
      },
      {
        img: '',
        name: 'Matheus Souza',
        description:
          'Estou no último ano da faculdade de medicina e faço parte do Rd step 1 e da mentoria você médico nos EUA. Estou extremamente satisfeito de fazer parte do curso. O cronograma de estudo me dá um caminho todos os dias na hora de estudar, algo que antes era muito difícil de se organizar sozinho pela quantidade de conteúdo necessária para a prova. As aulas são muito didáticas, rápidas, com destaque para os pontos mais importantes, que aparecem mais nas provas! Além disso, os encontros ao vivo para revisão são essenciais para manter o foco e dar uma renovada no incentivo de continuar estudando. A equipe toda esta de parabéns, são profissionais excepcionais e atenciosos! Se não fosse o Rd step 1, com certeza estaria muito mais longe de alcançar meu objetivo!',
        descriptionEn:
          "I'm in the last year of medical school and I'm part of the Rd step 1 and mentoring you doctor in the USA. I am extremely pleased to be part of the course. The study schedule gives me a path every day when it comes to studying, something that was previously very difficult to organize on my own due to the amount of content needed for the test. Classes are very didactic, fast, highlighting the most important points, which appear more in the tests! In addition, live review meetings are essential to maintain focus and renew the incentive to continue studying. The whole team is to be congratulated, they are exceptional and attentive professionals! If it weren't for Rd step 1, I would definitely be much further away from reaching my goal!",
      },
      {
        img: '',
        name: 'Juliana Secomandi Machado',
        description:
          'O RD Step1 é sensacional, super organizado e com professores excepcionais! Já havia começado a estudar sozinha e parado algumas vezes e nunca estive tão empolgada e confiante como estou agora. Não tenho dúvidas que foi um dos melhores  investimentos da minha vida. Tenho muito orgulho de fazer parte da primeira turma desse curso incrível!',
        descriptionEn:
          "RD Step1 is sensational, super organized and with exceptional teachers! I had already started studying on my own and stopped a few times and I was never as excited and confident as I am now. I have no doubt that it was one of the best investments of my life. I'm very proud to be part of the first class of this amazing course!",
      },
      {
        img: '',
        name: 'Júlia B. Q. dos Reis',
        description:
          'Com certeza o melhor investimento que eu poderia ter feito! Os professores dão tudo de si, e é notável a paixão o engajamento e cada um com a qualidade das aulas!Além disso, a equipe está sempre atenta e procurando inovar, oferecendo cada vez mais! Já me sinto vencedora!! Rumo ao match com o RD step 1!!!',
        descriptionEn:
          'Definitely the best investment I could have made! The teachers give their all, and the passion, engagement and each one with the quality of the classes is remarkable! In addition, the team is always attentive and looking to innovate, offering more and more! I already feel like a winner!! Towards the match with RD step 1!!!',
      },
      {
        img: '',
        name: 'Carlos Eduardo de Macedo Marins',
        description:
          'Meu nome é Carlos Macedo, sou old graduate, já com esposa, filha, subespecialista, tinha o desejo de ir pros EUA, mas achava o processo difícil, longo e a medida que o tempo passava até inalcançável… Até que há uns meses decidimos entrar nesse projeto, inicialmente no VMEUA e curso de inglês médico… E desde Fevereiro no RD Step1, que eu considero uma revolução no modo como encarar o processo de validação, desde a forma de estudar, aulas super completas, professores extremamente didáticos e a turma que, literalmente, se apoia! Recomendo de olhos fechados!',
        descriptionEn:
          'My name is Carlos Macedo, I am an old graduate, already with a wife, daughter, subspecialist, I wanted to go to the USA, but I found the process difficult, long and as time went by, even unattainable… Until a few months ago we decided to enter in this project, initially at VMEUA and the medical English course… And since February at RD Step1, which I consider a revolution in the way we face the validation process, from the way of studying, super complete classes, extremely didactic teachers and the class that literally leans on! I recommend with eyes closed!',
      },
      {
        img: '',
        name: 'Daniella Cabral de Freitas',
        description:
          '“pós mais de 20 anos de formada já havia desistido de revalidar o meu diploma, pois já haviam me desestimulado ao máximo. Despretensiosamente agendei um Meet com o Rafael Duarte, que de uma maneira ímpar me explicou sobre todo o processo e de que maneira iria me auxiliar em tudo! Conversa que literalmente mudou a minha vida! Estudando e me preparando para as provas! Sim, é possível.',
        descriptionEn:
          '“After more than 20 years of graduation, I had already given up trying to revalidate my diploma, as they had already discouraged me to the maximum extent. I unpretentiously scheduled a Meet with Rafael Duarte, who in a unique way explained to me about the whole process and how he would help me with everything! Conversation that literally changed my life! Studying and preparing for exams! Yes, it is possible.',
      },
      {
        img: '',
        name: 'Josiane Pereira',
        description:
          'Quando eu mesma me questiono porque estou nesse caminho e isso já aconteceu,me lembro que tomei uma decisão porque sentia que profissionalmente eu queria mais, eu precisava de um outro foco profissional,e quando o sonho é grande é bom se aliar aqueles que te ajudarão a moldar o teu sucesso,eis que aqui estou unida com a família RD,nessa família todos se ajudam a manter o foco e o caminho certo ao tão desejado PASS.',
        descriptionEn:
          "When I ask myself why I'm on this path and it's already happened, I remember that I made a decision because I felt that professionally I wanted more, I needed another professional focus, and when the dream is big it's good to ally yourself with those who will help you shaping your success, behold, here I am united with the RD family, in this family everyone helps each other to keep the focus and the right path to the much desired PASS.",
      },
      {
        img: '',
        name: 'Bruno Sena Simões',
        description:
          'Os cursos são incríveis e com pessoas mais incríveis ainda! Estou atualmente no VMEUA e no English MD, com planos de entrar logo logo no RD Step 1! Meu único arrependimento é não ter conhecido esses cursos antes!',
        descriptionEn:
          "The courses are amazing and with even more amazing people! I'm currently on VMEUA and English MD, with plans to join RD Step 1 soon! My only regret is not having known about these courses sooner!",
      },
    ],
  },
];
