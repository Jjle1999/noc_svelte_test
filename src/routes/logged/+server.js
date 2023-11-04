import { json } from '@sveltejs/kit'
import { session, csrf_name, csrf_token } from '$lib/store.js'

let session_v
session.subscribe(value => session_v = value)

export async function POST() {
    let url_logged = 'https://inoc.libyana.ly/oss/logged'
    let res = await fetch(url_logged, {
        method: 'GET',
        headers: {
            'Cookie': `SESSION=${session_v}`,
        }
    })
    let result = await res.json()
    if ('_csrf' in result) {
        csrf_name.set(result._csrf.headerName)
        csrf_token.set(result._csrf.token)
    }
    return json(result)
}