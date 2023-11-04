import { json } from '@sveltejs/kit';

export async function POST({ cookies, request }) {
    let { session } = await request.json();
    let url_logged = 'https://inoc.libyana.ly/oss/logged';
    let res = await fetch(url_logged, {
        method: 'GET',
        headers: {
            'Cookie': `SESSION=${session}`,
        }
    });
    let result = await res.json();
    if ('_csrf' in result) {
        cookies.set('csrf_name', result._csrf.headerName);
        cookies.set('csrf_token', result._csrf.token);
    }
    return json(result);
}