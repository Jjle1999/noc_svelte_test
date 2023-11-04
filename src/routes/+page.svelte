<script>
    export let data;
</script>

<h1>Logged: {data.logged}</h1>

<form method="post">
    <ul>
        <li>
            <label for="user">user</label>
            <input type="text" name="user" id="user" />
        </li>
        <li>
            <label for="pass">user</label>
            <input type="password" name="pass" id="pass" />
        </li>
        <li>
            <input type="submit" value="login" />
        </li>
    </ul>
</form>
