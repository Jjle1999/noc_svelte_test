import { json } from '@sveltejs/kit';

export async function POST({ request }) {
    let { user, pass } = await request.json();
    let res = await fetch(`https://inoc.libyana.ly/oss/login?username={user}&password={pass}`, {
        method: 'POST',
        credentials: 'include',
    })
    return json(await res.json());
}