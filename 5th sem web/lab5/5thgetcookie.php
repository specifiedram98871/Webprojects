<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Read Cookie</title>
</head>
<body>
    <h1>Read Cookie</h1>

    <?php
    // Check if the cookie named "user" is set
    if(isset($_COOKIE["user"])) {
        $username = $_COOKIE["user"];
        echo "<p>Welcome, $username!</p>";
    } else {
        echo "<p>Cookie named 'user' not found.</p>";
    }
    ?>
</body>
</html>
