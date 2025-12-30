import api from "./api";

export const getAllEvents = async () => {
  const res = await api.get("/events");
  return res.data;
};

export const getEventById = async (id) => {
  const res = await api.get(`/events/${id}`);
  return res.data;
};

export const getEventsByCategory = async (category) => {
  const res = await api.get(`/events/category/${category}`);
  return res.data;
};
