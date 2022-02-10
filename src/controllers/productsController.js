import { ObjectId } from 'mongodb'
import db from '../db.js'

async function homeProducts(req, res) {
  const products = await db.collection('products').find({}).toArray()
  res.status(200).send(products)
}

async function sendProduct(req, res) {
  const productId = req.params.productId

  try {
    const productData = await db
      .collection('products')
      .findOne({ _id: new ObjectId(productId) })

    if (!productData) {
      res.sendStatus(404)
      return
    }

    res.status(200).send(productData)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}

export { homeProducts, sendProduct }
