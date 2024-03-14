<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST['your-name'];
    $email = $_POST['your-email'];
    $subject = $_POST['your-subject'];
    $message = $_POST['your-message'];

    // Prepare mail content
    $messagecontent = "Name: $name\n";
    $messagecontent .= "Email: $email\n";
    $messagecontent .= "Subject: $subject\n";
    $messagecontent .= "Message: $message\n";

    // Create a PHPMailer instance
    $mail = new PHPMailer(true);

    try {
        // Server settings
        $mail->SMTPDebug = SMTP::DEBUG_SERVER;
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'hellojaikrishna@gmail.com';
        $mail->Password = 'wpfk phba yshq lfop';
        $mail->Port = 587;

        // Recipients
        $mail->setFrom('fhellojaikrishna@gmail.com', 'Mailer');
        $mail->addAddress('hellojaikrishna@gmail.com', 'Joe User');
        $mail->addReplyTo($email, $name);

        // Content
        $mail->isHTML(false);
        $mail->Subject = $subject;
        $mail->Body = $messagecontent;

        // Send email
        $mail->send();
        echo 'Message has been sent';
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>
