<?php
echo "lol";
if ($_SERVER["REQUEST_METHOD"] == "POST"){
    $username = $_POST["username"];
    $pwd = $_POST["pwd"];
    $email = $_POST["email"];

    echo "hihi";

    try {
        require_once "dbh.inc.php";

        $query = "INSERT INTO users (email, username, pwdhash) VALUES (:email :username, :pwdhash); ";

        $stmt = $pdo->prepare($query);
        $stmt -> bindParam(":email",$email);
        $stmt -> bindParam(":username",$username);
        $stmt -> bindParam(":pwdhash",$pwd);

        $stmt->execute();

        $pdo = null;
        $stmt = null;

        header("Location: index.php");

        die();
        

    } catch (PDOException $e){
        die("Query failed" .$e->getMessage());
    }
}
else{
    header("Location: index.php");
}