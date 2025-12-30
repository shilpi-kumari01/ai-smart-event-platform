// src/utils/validators.js

/**
 * Validate Email
 */
export const isValidEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

/**
 * Validate Password (min 6 chars)
 */
export const isValidPassword = (password) => {
  return password && password.length >= 6;
};

/**
 * Validate Name (only letters and spaces)
 */
export const isValidName = (name) => {
  const regex = /^[A-Za-z\s]+$/;
  return regex.test(name);
};

/**
 * Validate Number (positive integer)
 */
export const isValidNumber = (number) => {
  return Number.isInteger(number) && number > 0;
};

/**
 * Validate Required Field
 */
export const isRequired = (value) => {
  return value !== undefined && value !== null && value !== "";
};
