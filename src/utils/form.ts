import type { SendFormData } from 'api/sendForm';

export const openForm = (sheet: SendFormData['sheetName']) => {
  const form = document.querySelector('#form') as HTMLFormElement;
  const sheetInput = document.querySelector(
    'form input[name="sheetName"]',
  ) as HTMLInputElement;

  sheetInput.value = sheet;

  form.classList.remove('hidden');
  document.documentElement.style.overflow = 'hidden';

  const phone = document.querySelector(
    'input[name="phone"]',
  ) as HTMLInputElement;

  const mask =
    document.documentElement.lang === 'pt-BR'
      ? '+55 (99) 99999-9999'
      : '+1 (999) 999-9999';

  const im = new Inputmask(mask);
  im.mask(phone);
};

export const closeForm = () => {
  const form = document.querySelector('#form') as HTMLFormElement;
  form.classList.add('hidden');
  document.documentElement.style.overflow = 'auto';
  const phone = document.querySelector(
    'input[name="phone"]',
  ) as HTMLInputElement;

  phone.inputmask!.remove();
};
