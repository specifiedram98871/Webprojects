<?php
// Set a cookie with the name "user" and value "JohnDoe"
setcookie("user", "JohnDoe", time() + 3600, "/"); // Cookie expires in 1 hour
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Set Cookie</title>
</head>
<body>
    <h1>Cookie Set Successfully</h1>
    <p>A cookie named "user" with the value "JohnDoe" has been set.</p>
</body>
</html>
