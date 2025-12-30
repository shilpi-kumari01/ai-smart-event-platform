import api from "./api";

export const createBooking = async (data) => {
  const res = await api.post("/bookings", data);
  return res.data;
};

export const getUserBookings = async (userId) => {
  const res = await api.get(`/bookings/user/${userId}`);
  return res.data;
};

export const getVendorBookings = async (vendorId) => {
  const res = await api.get(`/bookings/vendor/${vendorId}`);
  return res.data;
};
