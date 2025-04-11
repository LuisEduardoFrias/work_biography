'use server';

export default async function ActionFetchApi(path_: string, method: string = 'GET', formData: FormData) {
  let body = null;

  if (method !== 'GET') {

    const props = Array.from(formData.keys());
    const _path_ = path_;

    const valoresARemover = ['$ACTION_REF_1', '$ACTION_1:0', '$ACTION_1:1'];

    const newProps = props.filter((valor) => !valoresARemover.includes(valor));

    const bodyObj: { [key: string]: FormDataEntryValue | null } = {};

    newProps.forEach((prop) => {
      bodyObj[prop] = formData.get(prop);
    });

    body = JSON.stringify(bodyObj);
  }

  try {
    const response = await fetch(`http://localhost:3000/api/${path_}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    });

    if (!response.ok) {
      console.error('Error en la petición:', response.status, response.statusText);
      return;
    }

    return await response.json();
  } catch (error) {
    console.error('Error al realizar la petición:', error);
    return null;
  }
}
