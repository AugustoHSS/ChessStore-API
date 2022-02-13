import { ObjectId } from 'mongodb'
import db from '../db.js'
import dotenv from 'dotenv'
import sgMail from '@sendgrid/mail'
dotenv.config()
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

async function confirmPurchase(req, res) {
  const user = res.locals.user
  const purchase = req.body
  const products = purchase?.cart

  try {
    await products?.forEach(async (item) => {
      await db
        .collection('products')
        .updateOne(
          { _id: new ObjectId(item.productId) },
          { $inc: { stock: -1 } }
        )
    })

    await db.collection('checkout').insertOne({
      userId: user._id,
      ...purchase,
    })

    await db.collection('cart').deleteMany({ userId: user._id })

    const message = {
      to: user.email,
      from: 'chess.store.brasil@gmail.com',
      subject: 'Sua compra foi realizada com sucesso!',
      text: 'Obrigado pela preferência!',
      html: '<strong>Volte sempre!</strong>',
    }

    sgMail.send(message).then(
      () => {},
      (error) => {
        console.error(error)

        if (error.response) {
          console.error(error.response.body)
        }
      }
    )

    res.sendStatus(200)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}

export { confirmPurchase }
