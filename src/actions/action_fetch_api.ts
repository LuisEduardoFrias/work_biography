'use server';

export default async function ActionFetchApi(path_: string, method: string = 'GET', formData?: FormData) {
  let body = null;

  if (method !== 'GET' && method !== 'DELETE' && formData) {

    const props = Array.from(formData.keys());

    const valoresARemover = ['$ACTION_REF_1', '$ACTION_1:0', '$ACTION_1:1'];

    const newProps = props.filter((valor) => !valoresARemover.includes(valor));

    const bodyObj: { [key: string]: FormDataEntryValue | null } = {};

    newProps.forEach((prop) => {
      bodyObj[prop] = formData.get(prop);
    });

    body = JSON.stringify(bodyObj);
  }

  return fetch(`${process.env.NEXT_PUBLIC_URL_BASE}api/${path_}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body,
  })
    .then(response => {
      if (!response.ok) {
        console.error('Error en la petición:', response.status, response.statusText);
        return;
      }
      return response.json();
    })
    .then(data => {
      return data
    })
    .catch(error => {
      console.error('Error al realizar la petición:', error);
      return null;
    });
}
