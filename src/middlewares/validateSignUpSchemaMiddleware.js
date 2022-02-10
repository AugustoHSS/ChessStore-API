import signUpSchema from '../schemas/signUpSchema.js';

export default function validateSignUpSchema(request, response, next) {
  const validation = signUpSchema.validate(request.body);
  if (validation.error) {
    response.status(422).send(validation.error.details.message);
    return;
  }

  next();
}
