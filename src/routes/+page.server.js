/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies }) {
    const session = cookies.get('session');
    return { session: session ? session : undefined };
}