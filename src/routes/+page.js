/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies }) {
    return {
        session: cookies.get('session'),
        csrf: {
            name: cookies.get('csrf_name'),
            token: cookies.get('csrf_token'),
        },
    };
}