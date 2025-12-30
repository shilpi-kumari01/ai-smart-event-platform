import api from "./api";

export const createPayment = async (data) => {
  const res = await api.post("/payments", data);
  return res.data;
};

export const getUserPayments = async (userId) => {
  const res = await api.get(`/payments/user/${userId}`);
  return res.data;
};

export const getVendorPayments = async (vendorId) => {
  const res = await api.get(`/payments/vendor/${vendorId}`);
  return res.data;
};
