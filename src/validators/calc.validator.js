import * as yup from "yup";

export const schema = yup.object().shape({
  installments: yup.number().required("Campo obrigatório.").max(12),
  amount: yup.number().min(1000).required("Campo obrigatório."),
  mdr: yup.number().required("Campo obrigatório."),
});
