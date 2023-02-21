/* eslint-disable import/prefer-default-export */
const url = 'http://localhost:4000/clientes';

export const nuevoCliente = async (cliente) => {
  try {
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(cliente),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    window.location.href = 'index.html';
  } catch (error) {
    console.error(error);
  }
};
