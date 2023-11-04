import { json } from '@sveltejs/kit'

import { session, csrf_name, csrf_token } from '$lib/store.js'
let session_v;
session.subscribe((value) => (session_v = value));
let csrf_name_v;
csrf_name.subscribe((value) => (csrf_name_v = value));
let csrf_token_v;
csrf_token.subscribe((value) => (csrf_token_v = value));

export async function GET() {
    let url_logged = 'https://inoc.libyana.ly/oss/ucp/CollectAlarmSyncController/getEmsState'
    let headers = {
        'Cookie': `SESSION=${session_v}`,
    }
    headers[csrf_name_v] = csrf_token_v
    let res = await fetch(url_logged, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
            sortName: 'NE_NAME',
            sortOrder: "asc",
        })
    })
    let result = await res.text()
    return json(result)
}

export async function POST() {

}