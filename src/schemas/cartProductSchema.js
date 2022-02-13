import joi from 'joi'

const cartProductSchema = joi.object({
  productId: joi.string().required(),
  name: joi.string().required(),
  image: joi.string().required(),
  price: joi.number().required(),
})
export default cartProductSchema
