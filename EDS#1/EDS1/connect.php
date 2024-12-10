<?php
$servername = "localhost";
$username = "root";
$password = "root"; 
$dbname = "login";  

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Redirect to page.php after successful connection
header("Location: https://tuskerai.netlify.app/");
exit;  // Always call exit after header redirection
?>
