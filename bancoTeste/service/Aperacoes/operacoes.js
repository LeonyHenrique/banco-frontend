import { api } from "../Api/api";

export const getSaldo = async (id) => {
  const url = "/api/saldo";
  return api.get(url, { params: { id } });
};

export const depositar = async (id, valor) => {
  const url = "/api/depositar";
  return api.post(url, null, { params: { id, valor } });
};

export const sacar = async (id, valor) => {
  const url = '/api/sacar';
  return api.post(url, null, { params: { id, valor } });
};

export const criarConta = async (conta) => {
  const url = '/api/criar';
  return api.post(url, conta);
};