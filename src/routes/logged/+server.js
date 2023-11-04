import { json } from '@sveltejs/kit';

export async function POST() {
    let url_logged = 'https://inoc.libyana.ly/oss/logged';
    let res = await fetch(url_logged, {
        method: 'GET',
        credentials: 'include',
        // referrer: 'https://inoc.libyana.ly/oss/',
        referrerPolicy: 'no-referrer',
        cache: 'no-cache',
        mode: 'no-cors',
    });
    return json(await res.json());
}