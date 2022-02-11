import { ObjectId } from 'mongodb'
import db from '../db.js'

async function homeProducts(req, res) {
  const token = req.headers.authorization?.replace('Bearer ', '')

  try {
    const session = await db.collection('sessions').findOne({ token })

    const products = await db.collection('products').find({}).toArray()
    if (!session) {
      res.status(401).send(products)
      return
    }
    res.status(200).send(products)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}

async function sendProduct(req, res) {
  const { productId } = req.params

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
