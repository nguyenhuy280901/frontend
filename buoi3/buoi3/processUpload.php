<?php 
var_dump($_POST);
var_dump($_FILES);

$from = $_FILES["avatar"]["tmp_name"];
$to = "files/" . $_FILES["avatar"]["name"];
move_uploaded_file($from, $to);
 ?>