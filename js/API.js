/* eslint-disable import/prefer-default-export */
const url = 'http://localhost:4000/clientes';
// Cuando se crea nuevo cliente
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
// Obtiene todos los clientes
export const obtenerClientes = async () => {
  try {
    const resultado = await fetch(url); // Si no se le especifica metodo toma por default GET
    const clientes = await resultado.json();
    return clientes;
  } catch (error) {
    console.log(error);
  }
};
