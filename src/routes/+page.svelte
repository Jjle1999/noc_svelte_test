<script>
    let logged = false;
    let user = "admin";
    let pass = "Fuwa2022";
    $: pass64 = btoa(pass);

    function login() {
        let url_login = `/login`;
        fetch(url_login, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ user: user, pass: pass64 }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });
    }
</script>

<h1>Logged: {logged}</h1>

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
</ul>
