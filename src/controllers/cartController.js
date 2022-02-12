import db from '../db.js';

export async function insertProduct(request, response) {
    const product = request.body
    const { user } = response.locals;
    try {
        await db.collection('cart').insertOne({ ...product, userId: user._id });
        response.sendStatus(201)
    } catch {
        response.sendStatus(500);
    }
}

export async function getCart(request, response) {
    const { user } = response.locals;
    try {
        const cart = await db.collection('cart').find({ userId: user._id }).toArray();
        response.send(cart)
    } catch {
        response.sendStatus(500);
    }
}

export async function deleteProduct(request, response) {
    const { user } = response.locals;
    try {
        console.log(user)
    } catch {
        response.sendStatus(500);
    }
}