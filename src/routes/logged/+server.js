import { json } from '@sveltejs/kit';

export async function POST({ request }) {
    let { session } = await request.json();
    let url_logged = 'https://inoc.libyana.ly/oss/logged';
    let res = await fetch(url_logged, {
        method: 'GET',
        headers: {
            'Cookie': `SESSION=${session}`,
        }
    });
    return json(await res.json());
}