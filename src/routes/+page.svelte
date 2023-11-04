<script>
    import { session, csrf_name, csrf_token } from "$lib/store";
    let session_v;
    session.subscribe((value) => (session_v = value));
    let csrf_name_v;
    csrf_name.subscribe((value) => (csrf_name_v = value));
    let csrf_token_v;
    csrf_token.subscribe((value) => (csrf_token_v = value));

    let user = "admin";
    let pass = "Fuwa2022";
    $: pass64 = btoa(pass);

    async function login() {
        let url = "/api/login";
        await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ user: user, pass: pass64 }),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
            });
    }

    async function logged() {
        let url = "/api/logged";
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ session: session_v }),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
            });
    }
</script>

<h1>Session: {session_v}</h1>
<h2>CSRF({csrf_name_v}): {csrf_token_v}</h2>

<ul>
    <li>
        <label for="user">user</label>
        <input type="text" bind:value={user} />
    </li>
    <li>
        <label for="pass">user</label>
        <input type="password" bind:value={pass} />
    </li>
    <li>
        <button on:click={login}>Login</button>
    </li>
    <li>
        <button on:click={logged}>Logged</button>
    </li>
</ul>
