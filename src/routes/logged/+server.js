import { json } from '@sveltejs/kit'
import { session, csrf_name, csrf_token } from '$lib/store.js'
import { onDestroy } from 'svelte'

let session_value
// const session_unsub = 
session.subscribe(value => session_value=value)
// onDestroy(session_unsub)

export async function POST() {
    let url_logged = 'https://inoc.libyana.ly/oss/logged'
    let res = await fetch(url_logged, {
        method: 'GET',
        headers: {
            'Cookie': `SESSION=${session_value}`,
        }
    })
    let result = await res.json()
    if ('_csrf' in result) {
        csrf_name.set(result._csrf.headerName)
        csrf_token.set(result._csrf.token)
    }
    return json(result)
}