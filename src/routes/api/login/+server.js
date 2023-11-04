import { json } from '@sveltejs/kit'
import { session } from '$lib/store.js'

export async function POST({ request }) {
    let { user, pass } = await request.json()
    let url_login = `https://inoc.libyana.ly/oss/login?username=${user}&password=${pass}`
    let res = await fetch(url_login, {
        method: 'POST',
    })
    let session_value
    res.headers.getSetCookie().forEach(cookie => {
        cookie = cookie.split(';')[0];
        cookie = cookie.split('=');
        if (cookie[0].trim().toUpperCase().startsWith('SESSION')) {
            session_value = cookie[1].trim()
            session.set(session_value)
        }
    })
    return json({
        session: session_value,
        data: await res.json()
    })
}