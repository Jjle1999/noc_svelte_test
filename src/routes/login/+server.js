import { json } from '@sveltejs/kit';

export async function POST({ request }) {
    let { user, pass } = await request.json();
    let url = `https://inoc.libyana.ly/oss/login?username={user}&password={pass}`
    let res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    })
    return json({ url: url, data: await res.json() });
}