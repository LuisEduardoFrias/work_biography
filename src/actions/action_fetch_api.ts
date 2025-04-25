'use client';

export default function ActionFetchApi(path_: string, method: string = 'GET', formData?: FormData) {
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
        return; // No necesitamos un return explícito de una promesa rechazada aquí, el error no se propagará automáticamente
      }
      return response.json(); // Esto devuelve otra promesa
    })
    .then(data => {
      return data; // Aquí puedes retornar los datos procesados si es necesario
    })
    .catch(error => {
      console.error('Error al realizar la petición:', error);
      return null; // Indica que hubo un error y devuelve null
    });

}
