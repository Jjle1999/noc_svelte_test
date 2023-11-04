/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, cookies }) {
    let session = cookies.get('SESSION');
    if (!session) {
        return { logged: false };
    }
    let res = await fetch('https://inoc.libyana.ly/oss/logged', {
        method: 'post',
        credentials: 'include',
    });
    let res_json = await res.json();
    if ('_csrf' in res_json) {
        let csrf = res_json['_csrf']['token']
        cookies.set('csrf', csrf);
        return {
            logged: true,
            session: session,
            csrf: csrf,
        };
    }
    return { logged: false };
}

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ fetch, cookies, request }) => {
        const data = await request.formData();
        const user = data.get('user');
        const pass = data.get('pass');
        const pass64 = Buffer.from(pass).toString('base64');
        const url_login = `https://inoc.libyana.ly/oss/login?username=${user}&password=${pass64}`;
        let res = await fetch(url_login, {
            method: 'post',
            credentials: 'include',
            headers: {
                'Accept': '*/*',
                'Host': 'inoc.libyana.ly',
                'Referer': 'https://inoc.libyana.ly/oss/',
            },
        });
        cookies.set('url', url_login);
        cookies.set('code', res.status);
    }
};
