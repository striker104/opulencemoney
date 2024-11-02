<?php

$dsn = "mysql:host=localhost;dbname=Opulence_Money";
$dbusername = "root";
$dbpassword = "";

try {
    $pdo = new PDO($dsn, $dbusername, $dbpassword);
    $pdo -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

} catch (PDOException $e){
    echo "Connection failed: ".$e->getMessage();
}

echo "hihi";

    try {
        

        $query = "INSERT INTO `users`(`email`, `username`, `pwdhash`) VALUES ('[value-2]','[value-3]','[value-4]'); ";

        $stmt = $pdo->prepare($query);
        

        $stmt->execute();

        $pdo = null;
        $stmt = null;

        header("Location: index.php");

        die();
        

    } catch (PDOException $e){
        die("Query failed" .$e->getMessage());
    }