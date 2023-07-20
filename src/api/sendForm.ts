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

  return fetch(
    'https://jtawbc5wzj4qjdnr5dxnd4d4ua0iulpm.lambda-url.sa-east-1.on.aws/',
    {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data),
    },
  )
    .then((response) => response.json())
    .catch((error) => error);
};

export default sendForm;
