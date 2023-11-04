import { json } from '@sveltejs/kit';

export async function POST({ request }) {
    let { user, pass } = await request.json();
    let url = `https://inoc.libyana.ly/oss/login?username=${user}&password=${pass}`
    let res = await fetch(url, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    });
    let cookies = [];
    res.headers.getSetCookie().forEach(cookie => {
        cookie = cookie.split(';')[0];
        cookies.push(cookie);
    });
    return json({
        data: await res.json(),
        cookies: cookies,
    });
}