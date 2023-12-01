<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Registration Form</title>
</head>
<body>

<?php
    // PHP Validation
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = $_POST["name"];
        $email = $_POST["email"];
        $dob = $_POST["dob"];
        $course = $_POST["course"];

        // Simple validation
        if (empty($name) || empty($email) || empty($dob) || empty($course)) {
            echo "<p style='color: red;'>All fields are required.</p>";
        } else {
            // Display submitted data
            echo "<p><strong>Name:</strong> $name</p>";
            echo "<p><strong>Email:</strong> $email</p>";
            echo "<p><strong>Date of Birth:</strong> $dob</p>";
            echo "<p><strong>Course:</strong> $course</p>";
        }
    }
?>

<!-- HTML Form -->
<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
    <label for="name">Name:</label>
    <input type="text" name="name" id="name" required><br>

    <label for="email">Email:</label>
    <input type="email" name="email" id="email" required><br>

    <label for="dob">Date of Birth:</label>
    <input type="date" name="dob" id="dob" required><br>

    <label for="course">Select Course:</label>
    <select name="course" id="course" required>
        <option value="" disabled selected>Select a course</option>
        <option value="programming">Programming</option>
        <option value="design">Design</option>
        <option value="marketing">Marketing</option>
    </select><br>

    <input type="submit" value="Submit">
</form>

</body>
</html>
