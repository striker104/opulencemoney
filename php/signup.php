<?php
//require_once "session/config.php";
session_start();

echo "lol";

if ($_SERVER["REQUEST_METHOD"] == "POST"){

    echo "jiji";
    $username = $_POST["username"];
    $pwd = $_POST["pwd"];
    $email = $_POST["email"];

    $_SESSION["username"] = $username;

   
    try {
        require_once "dbh.inc.php";

        $query = "INSERT INTO users (email, username, pwdhash) VALUES (:email, :username, :pwdhash); ";

        $stmt = $pdo->prepare($query);
        $stmt -> bindParam(":email",$email);
        $stmt -> bindParam(":username",$username);
        $stmt -> bindParam(":pwdhash",$pwd);

        $stmt->execute();

        $pdo = null;
        $stmt = null;
       
        header("Location: ../Dashboard Page/dashboard.php");

        die();
        

    } catch (PDOException $e){
        die("Query failed" .$e->getMessage());
    }
}
else{
    header("Location: index.php");
}