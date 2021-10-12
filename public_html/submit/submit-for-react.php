<?php
//$json = file_get_contents('php://input');
//$obj = json_decode($json);
$entityBody = json_decode(file_get_contents('php://input'), true);
//$obj = json_decode($entityBody);

$theme = $entityBody['title'];
$letter = "Данные сообщения:\r\n";
//$letter .= $entityBody;
$letter .= "Имя: " . $entityBody['name'] . " \r\n";
$letter .= "Телефон: " . $entityBody['phone'] . " \r\n";
$letter .= "Планировка: " . $entityBody['area'] . " \r\n";


if (mail("myatacallback@avbkuban.ru, mn@oasis23.ru, jkmyata@mail.ru, bv@vinograd23.com", $theme, $letter)) {
    $roistatData = array(
        'roistat'     => isset($_COOKIE['roistat_visit']) ? $_COOKIE['roistat_visit'] : null,
        'key'         => 'NjY0MTM1NTI5ZjQ1ZjVjMjZkZTFhOTNhNDNjNjgwYmE6MTgzNzM1',
        'title'        => $theme,
        'comment'    => "Планировка: " . $entityBody['area'] . "",
        'name'        => $entityBody['name'],
        'email'        => '',
        'phone'        => $entityBody['phone'],
        'is_need_callback' => '0',
        'callback_phone' => '',
        'sync'        => '0',
        'is_need_check_order_in_processing' => '1',
        'is_need_check_order_in_processing_append' => '1',
        "fields" => array(
            "ASSIGNED_BY_ID" => 6, // Ответственный по лиду
            "UTM_CAMPAIGN" => $_POST["utm_campaign"],
            "UTM_SOURCE" => $_POST["utm_source"],
            "UTM_MEDIUM" => $_POST["utm_medium"],
            "UTM_TERM" => $_POST["utm_term"],
            //"UTM_CONTENT" => $_POST["utm_content"],
            "SOURCE_DESCRIPTION" => "жкмята.рф"
        )
    );
    file_get_contents("https://cloud.roistat.com/api/proxy/1.0/leads/add?" . http_build_query($roistatData));
    //header("Location:/submit/thankyou.php");
} else {
    header("Location:/submit/error.php");
}
