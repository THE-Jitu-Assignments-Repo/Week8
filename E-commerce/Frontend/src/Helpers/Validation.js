import * as yup from 'yup';

export const validateProductSchema = (product) => {
  const schema = yup.object().shape({
    name: yup.string().required(),
    imageurl: yup.string().required(),
    description: yup.string().required(),
    price: yup.number().required(),
    discount: yup.number().required()
  })
  return schema.validate(product);
} 