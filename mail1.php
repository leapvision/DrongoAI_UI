<?php
// function sendEmail($mail_to, $mail_subject, $mail_body)
// {

//     $cURL_key = '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';
//     $mail_from = 'rajesh@drongoai.com';

//     $curl = curl_init();


//     curl_setopt_array($curl, array(
//         CURLOPT_URL => "https://api.sendgrid.com/v3/mail/send",
//         CURLOPT_RETURNTRANSFER => true,
//         CURLOPT_ENCODING => "",
//         CURLOPT_MAXREDIRS => 10,
//         CURLOPT_TIMEOUT => 30,
//         CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
//         CURLOPT_CUSTOMREQUEST => "POST",
//         CURLOPT_HTTPHEADER => array(
//             "authorization: Bearer $cURL_key",
//             "cache-control: no-cache",
//             "content-type: application/json"
//         ),
//         // CURLOPT_POSTFIELDS => ($attachment != null) ? "{\n  \"personalizations\": [\n    {\n      \"to\": [\n        {\n          \"email\": \"$mail_to\"\n        }\n      ],\n      \"subject\": \"$mail_subject\"\n    }\n  ],\n  \"from\": {\n    \"email\": \"$mail_from\"\n  },\n  \"content\": [\n    {\n      \"type\": \"text/plain\",\n      \"value\": \"$mail_body\"\n    }\n  ],\n  \"attachments\": [\n    {\n      \"content\": \"$attachment\",\n      \"type\": \"application/pdf\",\n      \"filename\": \"$file_name\",\n      \"disposition\": \"attachment\"\n    }\n  ]\n}" : "{\n  \"personalizations\": [\n    {\n      \"to\": [\n        {\n          \"email\": \"$mail_to\"\n        }\n      ],\n      \"subject\": \"$mail_subject\"\n    }\n  ],\n  \"from\": {\n    \"email\": \"$mail_from\"\n  },\n  \"content\": [\n    {\n      \"type\": \"text/plain\",\n      \"value\": \"$mail_body\"\n    }\n  ]\n}",
//         CURLOPT_POSTFIELDS => "{\n  \"personalizations\": [\n    {\n      \"to\": [\n        {\n          \"email\": \"$mail_to\"\n        }\n      ],\n      \"subject\": \"$mail_subject\"\n    }\n  ],\n  \"from\": {\n    \"email\": \"$mail_from\"\n  },\n  \"content\": [\n    {\n      \"type\": \"text/plain\",\n      \"value\": \"$mail_body\"\n    }\n  ]\n}",
//     ));

//     $response = curl_exec($curl);
//     $err = curl_error($curl);

//     curl_close($curl);

//     if ($err) {
//         echo "cURL Error #:" . $err;
//     } else {
//         echo $response;
//     }
// }

// if (isset($_POST['submit'])) {
//     print($_POST)
//     if ($_POST['submit'] == 'APPLY'){
//         print("Application form")
//         $name = $_POST['hiring-name'];
//         $email = $_POST['hiring-email'];
//         $phone = $_POST['hiring-phone-number'];
//         $message = $_POST['your-message'];
//         $role = $_POST['roles'];
//         print($_FILES)
//         // $resumePDF = $_FILES['resume']['tmp_name'];
//         // print($resumePDF)
//         // $resume = file_get_contents($resumePDF);
//         // $resume = base64_encode($resume);
//         // $resume = chunk_split($resume);
//         $subject = "Application for $role - $name";
//         $message = "Name: $name\nEmail: $email\nPhone: $phone\nRole: $role\nMessage: $message";
//         sendEmail($email, $subject, $message);
//         print("Mail sent")
//     }
// }

// sendEmail("hellojaikrishna@gmail.com","hello","hello")
// function sendEmail($mail_to, $mail_subject, $mail_body){

//     $cURL_key = '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';
//     $mail_from = 'rajesh@drongoai.com';
//     $curl = curl_init();
//     curl_setopt_array($curl, array(
//         CURLOPT_URL => "https://api.sendgrid.com/v3/mail/send",
//         CURLOPT_RETURNTRANSFER => true,
//         CURLOPT_ENCODING => "",
//         CURLOPT_MAXREDIRS => 10,
//         CURLOPT_TIMEOUT => 30,
//         CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
//         CURLOPT_CUSTOMREQUEST => "POST",
//         CURLOPT_POSTFIELDS => "{\"personalizations\": [{\"to\": [{\"email\": \"$mail_to\"}]}],\"from\": {\"email\": \"$mail_from\"},\"subject\": \"$mail_subject\",\"content\": [{\"type\": \"text/plain\", \"value\": \"$mail_body\"}]}",
//         CURLOPT_HTTPHEADER => array(
//             "authorization: Bearer $cURL_key",
//             "cache-control: no-cache",
//             "content-type: application/json"
//         ),
//     ));

//     $response = curl_exec($curl);
//     $err = curl_error($curl);
//     curl_close($curl);
//     if ($err) {
//         echo "cURL Error #:" . $err;
//     } else {
//         echo $response;
//     }
// }

// sendEmail("hellojaikrishna@gmail.com","Hello World", "Hi, welcome to programming");

// ?>
