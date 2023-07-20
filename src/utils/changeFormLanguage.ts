const changeFormLanguage = (lang: 'pt-BR' | 'en') => {
  const placeholderName =
    lang === 'pt-BR' ? 'Escreva seu nome' : 'Write your name';
  const placeholderEmail =
    lang === 'pt-BR' ? 'Escreva seu e-mail' : 'Write your email';
  const placeholderPhone =
    lang === 'pt-BR'
      ? 'Escreva seu número de celular'
      : 'Write your phone number';

  document
    .querySelector('form input[name="name"]')
    ?.setAttribute('placeholder', placeholderName);
  document
    .querySelector('form input[name="email"]')
    ?.setAttribute('placeholder', placeholderEmail);
  document
    .querySelector('form input[name="phone"]')
    ?.setAttribute('placeholder', placeholderPhone);
};

export default changeFormLanguage;
