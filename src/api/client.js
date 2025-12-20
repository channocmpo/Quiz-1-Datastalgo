import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export async function getProducts() {
  const res = await api.get('/products/');
  return res.data;
}

export async function getProduct(pk) {
  const res = await api.get(`/products/${encodeURIComponent(pk)}/`);
  return res.data;
}
