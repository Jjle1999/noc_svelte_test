import { json } from '@sveltejs/kit';

export async function POST({ request }) {
    let { user, pass } = await request.json();
    let res = await fetch(`https://inoc.libyana.ly/oss/login?username={user}&password={pass}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    })
    return json(await res.json());
}