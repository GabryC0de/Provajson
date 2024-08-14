<?php

session_start();

if (isset($_SESSION['ID']) && isset($_SESSION['userName'])) {
?>
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Purple-V Admin</title>
        <link rel="icon" type="immage/png?v=2" href="../../logo.png">
        <link rel="stylesheet" href="admin.css">
    </head>

    <body>
        <header class="top">
            <div class="welcome">
                <Fieldset>
                    <h1>Admin Page</h1>
                </Fieldset>
            </div>
            <a href="logout.php">
                <button type="button" class="logout">LOGOUT</button>
            </a>
        </header>


        <script>

        </script>
    </body>

    </html>
<?php
} else {
    header("Location: ../login.html");
    exit();
}
?>