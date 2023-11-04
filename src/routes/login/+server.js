import { json } from '@sveltejs/kit';

async function login(user, pass, cookies) {
    let url_login = `https://inoc.libyana.ly/oss/login?username=${user}&password=${pass}`
    let res = await fetch(url_login, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    });
    let data = await res.json();
    if (data.isSuccess === 1) {
        res.headers.getSetCookie().forEach(cookie => {
            cookie = cookie.split(';')[0];
            cookie = cookie.split('=');
            cookies.set(cookie[0].trim(), cookie[1].trim())
        });
    }
    return data;
}

async function logged() {
    let url_logged = 'https://inoc.libyana.ly/oss/logged';
    let res = await fetch(url_logged, {
        method: 'GET',
        credentials: 'include',
    });
    return await res.json();
}

export async function POST({ cookies, request }) {
    let { user, pass } = await request.json();
    let data = await login(user, pass, cookies);
    if (data.isSuccess !== 1) return json(data);
    let log = await logged();
    return json(log);
}