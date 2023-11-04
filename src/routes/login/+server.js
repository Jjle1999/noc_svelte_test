export function POST({ request }) {
    request.json()
        .then((data) => {
            return data;
        });
}