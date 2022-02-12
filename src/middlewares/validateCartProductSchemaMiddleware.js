import cartProductSchema from '../schemas/cartProductSchema.js';

export default function validateCartProductSchemaMiddleware(request, response, next) {
    const validation = cartProductSchema.validate(request.body);
    if (validation.error) {
        console.log(validation.error.details)
        response.status(422).send(validation.error.details[0].message);
        return;
    }

    next();
}