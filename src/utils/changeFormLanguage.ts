const changeFormLanguage = (lang: 'pt-BR' | 'en') => {
  const placeholderName =
    lang === 'pt-BR' ? 'Escreva seu nome aqui' : 'Write your name here';
  const placeholderEmail =
    lang === 'pt-BR' ? 'Escreva seu e-mail aqui' : 'Write your email here';
  const placeholderPhone =
    lang === 'pt-BR'
      ? 'Escreva seu número de celular aqui'
      : 'Write your phone number here';

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
