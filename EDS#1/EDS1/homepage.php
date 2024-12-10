<?php
session_start();
include("connect.php");

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $password = mysqli_real_escape_string($conn, $_POST['password']);

    // Query to check if the user exists
    $query = "SELECT * FROM users WHERE email='$email' AND password='$password'";
    $result = mysqli_query($conn, $query);

    if (mysqli_num_rows($result) == 1) {
        // Fetch user details and set session
        $user = mysqli_fetch_assoc($result);
        $_SESSION['email'] = $user['email'];
        $_SESSION['firstName'] = $user['firstName'];
        $_SESSION['lastName'] = $user['lastName'];

        // Redirect to page.php
        header("Location: https://tuskerai.netlify.app/");
        exit();
    } else {
        echo "Invalid email or password!";
    }
}
?>
