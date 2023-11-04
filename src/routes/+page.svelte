<script>
    let log_success;
    let user = "admin";
    let pass = "Fuwa2022";
    $: pass64 = btoa(pass);

    async function login() {
        let url = "/login";
        log_success = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ user: user, pass: pass64 }),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                return result.session;
            });
    }

    async function logged() {
        let url = "/logged";
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ session: session }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });
    }

    $: if (log_success) {
        logged();
    }
</script>

<h1>Logged: {log_success}</h1>

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
