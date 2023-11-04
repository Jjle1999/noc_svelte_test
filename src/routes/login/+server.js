import { json } from '@sveltejs/kit';

export async function POST({ cookies, request }) {
    let { user, pass } = await request.json();
    let url_login = `https://inoc.libyana.ly/oss/login?username=${user}&password=${pass}`
    let res = await fetch(url_login, {
        method: 'POST',
        credentials: 'include',
        // headers: {
        //     'Content-Type': 'application/x-www-form-urlencoded',
        // },

    });
    res.headers.getSetCookie().forEach(cookie => {
        cookie = cookie.split(';')[0];
        cookie = cookie.split('=');
        cookies.set(cookie[0].trim(), cookie[1].trim(), { Domain: '.inoc.libyana.ly' })
    });
    return json(await res.json());
}