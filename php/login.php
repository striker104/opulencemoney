<?php

//require "session/config.php";
session_start();
$_SESSION["username"] = $_GET["username"];
header("Location: ../Dashboard Page/dashboard.php");
