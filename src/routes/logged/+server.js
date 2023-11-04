import { json } from '@sveltejs/kit';

export async function POST() {
    let url_logged = 'https://inoc.libyana.ly/oss/logged';
    let res = await fetch(url_logged, {
        method: 'GET',
        credentials: 'same-origin',
    });
    return json(await res.json());
}