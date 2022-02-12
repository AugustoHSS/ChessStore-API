import db from '../db.js';

export async function getCupom(request, response) {
    const { cupomName } = request.params;
    try {
        const cupom = await db.collection('cupons').findOne({ name: cupomName });
        console.log(cupom)
        if (!cupom) {
            return response.sendStatus(404)
        }
        response.send(cupom.value)
    } catch {
        response.sendStatus(500);
    }
}
