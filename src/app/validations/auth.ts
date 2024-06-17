import * as yup from "yup";

export const AUTH_LOGIN = yup.object().shape({
  email: yup
    .string()
    .required("You need to enter an email. This is a mandatory field.")
    .email("Please enter a valid email address."),
  password: yup
    .string()
    .required("You need to enter a password. This is a mandatory field.")
    .min(8, "Your password should have at least 8 characters."),
});

export const AUTH_REGISTER = yup.object().shape({
  email: yup
    .string()
    .required("You need to enter an email. This is a mandatory field.")
    .email("Please enter a valid email address."),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/\d/, "Password must contain at least one number"),
  confirmPassword: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("password"), null as any], "Passwords must match"),
  terms: yup
    .boolean()
    .required()
    .oneOf([true], "You need to consent to the terms."),
});

export const EMAIL = yup.object().shape({
  email: yup
    .string()
    .required("You need to enter an email. This is a mandatory field.")
    .email("Please enter a valid email address."),
});

export const AUTH_RESET = yup.object().shape({
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/\d/, "Password must contain at least one number"),
  confirmPassword: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("password"), null as any], "Passwords must match"),
});

export const COMPANY_REGISTRATION = yup.object().shape({
  name: yup
    .string()
    .required("You need to enter a Full name. This is a mandatory field."),
  email: yup
    .string()
    .required("You need to enter an email. This is a mandatory field.")
    .email("Please enter a valid email address."),
  phone: yup
    .string()
    .required("You need to enter a Phone Number. This is a mandatory field."),
  terms: yup
    .boolean()
    .required()
    .oneOf([true], "You need to consent to the terms."),
});

export const PASSWORD_UPDATE = yup.object().shape({
  currentPassword: yup
    .string()
    .required("Current Password is required")
    .min(8, "Current Password must be at least 8 characters long")
    .matches(
      /[a-z]/,
      "Current Password must contain at least one lowercase letter"
    )
    .matches(
      /[A-Z]/,
      "Current Password must contain at least one uppercase letter"
    )
    .matches(/\d/, "Current Password must contain at least one number"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/\d/, "Password must contain at least one number"),
  passwordConfirmation: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("password"), null as any], "Passwords must match"),
});

export const DEFAULT_VALIDATION = yup.object();
