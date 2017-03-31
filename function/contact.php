<?php
  $to = 'mxczpiscioneri@gmail.com' . "\r\n";
  $subject = 'Mensagem Casamento';
  $name = $_POST['name'];
  $email = 'mxczpiscioneri@gmail.com'; 

  $message = "Nome: " . $name . "\r\n" .
  	         "Mensagem: " . $_POST["message"] . "\r\n"; 

  $headers = "From: " . $name . "<" . $email . "> \r\n" .
  	         "Reply-To: " . $email . "\r\n" .
             "MIME-Version: 1.0" . "\r\n" .
             "Content-type:text/html;charset=UTF-8" . "\r\n";

	mail($to, $subject, $message, $headers); 
 ?>