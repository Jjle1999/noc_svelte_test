<script>
    let logged = false;
    let user = "admin";
    let pass = "Fuwa2022";
    $: pass64 = btoa(pass);

    function login() {
        let url_login = `https://inoc.libyana.ly/oss/login?username=${user}&password=${pass64}`;
        alert(url_login);
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
        <button on:click={login}>登录</button>
    </li>
</ul>
