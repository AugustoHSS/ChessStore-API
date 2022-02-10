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

export async function signIn(request, response) {
  const { email, password } = request.body;

  try {
    const user = await db.collection('users').findOne({ email });
    if (user && bcrypt.compareSync(password, user.password)) {
      const token = uuid();
      await db.collection('sessions').insertOne({
        token,
        userId: user._id,
      });
      delete user.password;
      response.status(200).send({ ...user, token });
    } else {
      response.status(401).send('email ou senha invalidos');
    }
  } catch {
    response.sendStatus(500);
  }
}
