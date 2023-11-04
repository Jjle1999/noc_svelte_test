import { json } from '@sveltejs/kit';

export function POST({ request }) {
    request.json()
        .then((data) => {
            return json(data);
        });
}