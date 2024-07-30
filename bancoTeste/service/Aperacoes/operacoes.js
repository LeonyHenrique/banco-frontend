import { api } from "../Api/api";

export const getSaldo = async () => {
  const url = '/api/saldo';
  return api.get(url);
};

export const depositar = async (valor) => {
  const url = '/api/depositar';
  return api.post(url, new URLSearchParams({ valor: valor.toString() }));
};

export const sacar = async (valor) => {
  const url = '/api/sacar';
  return api.post(url, new URLSearchParams({ valor: valor.toString() }));
};