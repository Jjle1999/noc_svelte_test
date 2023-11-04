import { json } from '@sveltejs/kit';

export async function POST({ request }) {
    let data = await request.json();
    return json(data);
}