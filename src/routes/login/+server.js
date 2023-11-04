import { json } from '@sveltejs/kit';

export async function POST({ request }) {
    let data = await request.json()
    console.log(data);
    return json('OK');
}