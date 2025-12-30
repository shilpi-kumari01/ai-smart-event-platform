import api from "./api";

export const loginUser = async (data) => {
  const res = await api.post("/auth/login", data);
  return res.data;
};

export const signupUser = async (data) => {
  const res = await api.post("/auth/signup", data);
  return res.data;
};

export const loginVendor = async (data) => {
  const res = await api.post("/auth/vendor/login", data);
  return res.data;
};

export const signupVendor = async (data) => {
  const res = await api.post("/auth/vendor/signup", data);
  return res.data;
};

export const loginAdmin = async (data) => {
  const res = await api.post("/auth/admin/login", data);
  return res.data;
};
