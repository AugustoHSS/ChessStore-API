import { ObjectId } from 'mongodb'
import db from '../db.js'

export async function insertProduct(request, response) {
  const product = request.body
  const { user } = response.locals
  try {
    await db.collection('cart').insertOne({ ...product, userId: user._id })
    response.sendStatus(201)
  } catch {
    response.sendStatus(500)
  }
}

export async function getCart(request, response) {
  const { user } = response.locals
  try {
    const cart = await db
      .collection('cart')
      .find({ userId: user._id })
      .toArray()
    response.send(cart)
  } catch {
    response.sendStatus(500)
  }
}

export async function deleteProduct(request, response) {
  const { user } = response.locals
  const { productId } = request.params
  console.log(productId)
  try {
    const product = await db
      .collection('cart')
      .findOne({ _id: new ObjectId(productId) })
    console.log(product)
    if (!product) {
      response.sendStatus(404)
      return
    }
    await db.collection('cart').deleteOne({
      $and: [{ _id: new ObjectId(productId) }, { userId: user._id }],
    })
    const cart = await db
      .collection('cart')
      .find({ userId: user._id })
      .toArray()
    response.status(200).send(cart)
  } catch (error) {
    console.log(error)
    response.sendStatus(500)
  }
}
