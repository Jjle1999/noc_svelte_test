/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies }) {
    return {
        session: cookies.get('session'),
    };
}