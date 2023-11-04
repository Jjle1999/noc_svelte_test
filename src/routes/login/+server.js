import { json } from '@sveltejs/kit';

export function POST({ request }) {
    request.json()
        .then((data) => {
            console.log(data)
            return json({user: data.user});
        });
}