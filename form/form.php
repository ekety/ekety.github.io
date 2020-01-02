<?php
$fio = $_POST['fio'];
$email = $_POST['email'];

$fio = htmlspecialchars($fio);
$email = htmlspecialchars($email);
    
$fio = urldecode($fio);
$email = urldecode($email);

$fio = trim($fio);
$email = trim($email);

mail("DenkowFalo@yandex.ru", "Заявка с сайта", "ФИО:".$fio.". E-mail: ".$email ,"From: DenkowFalo@yandex.ru \r\n");

if (mail("example@mail.ru", "Заказ с сайта", "ФИО:".$fio.". E-mail: ".$email ,"From: DenkowFalo@yandex.ru \r\n"))
 { 
    echo "сообщение успешно отправлено"; 
} else { 
    echo "при отправке сообщения возникли ошибки"; 
}
?>