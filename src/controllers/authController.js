import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';
import db from '../db.js';

export async function signUp(request, response) {
  const passwordHashed = bcrypt.hashSync(request.body.password, 10);
  const user = {
    name: request.body.name,
    email: request.body.email,
    password: passwordHashed,
  };
  try {
    const checkEmail = await db.collection('users').findOne({ email: user.email });
    if (checkEmail) {
      response.status(409).send('Este email já está em uso');
      return;
    }
    await db.collection('users').insertOne(user);
    response.sendStatus(201);
  } catch {
    response.sendStatus(500);
  }
}

