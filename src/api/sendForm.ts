export type SendFormData = {
  name: string;
  email: string;
  phone: string;
  sheetName:
    | 'english'
    | 'rd_step_1'
    | 'voce_medico_nos_eua'
    | 'rd_clerkship'
    | 'rd_research'
    | 'time_do_match';
};

const sendForm = (data: SendFormData) => {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ ok: true, status: 200, statusText: 'OK' });
    }, 2000);
  });
};

export default sendForm;
