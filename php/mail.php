<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

// Set default contact flag to true
$contact = true;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Check if it's the first form (contact form)
    if (isset($_POST['your-name']) && isset($_POST['your-email']) && isset($_POST['your-subject']) && isset($_POST['your-message'])) {
        $name = $_POST['your-name'];
        $email = $_POST['your-email'];
        $subject = "Contact Form: " . $_POST['your-subject'];
        $message = $_POST['your-message'];
    }
    // Check if it's the second form (hiring form)
    elseif (isset($_POST['hiring-name']) && isset($_POST['hiring-email']) && isset($_POST['hiring-phone-number']) && isset($_POST['roles'])) {
        $name = $_POST['hiring-name'];
        $email = $_POST['hiring-email'];
        $subject = "Application: " . $_POST['roles'];
        $message = $_POST['your-message'];
        $role = $_POST['roles'];
        $contact = false;
    }
    else {
        error_log("Invalid form data received."); // Log error
        echo "Invalid form data.";
        exit;
    }

    // Prepare mail content
    if ($contact == true) {
        $messagecontent = "Name: $name\n";
        $messagecontent .= "Email: $email\n";
        $messagecontent .= "Message: $message\n";
    } else {
        $messagecontent = "Name: $name\n";
        $messagecontent .= "Email: $email\n";
        $messagecontent .= "Message: $message\n";
        $messagecontent .= "Role : $role\n";
    }

    // Create a PHPMailer instance
    $mail = new PHPMailer(true);

    try {
        // Server settings
        // $mail->SMTPDebug = SMTP::DEBUG_SERVER; // Set debug level
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'rajesh@drongoai.com';
        $mail->Password = 'ywvu zdkg zmol hzjr';
        $mail->Port = 587;

        // Recipients
        $mail->setFrom('rajesh@drongoai.com', 'Drongo AI Contact Form');
        $mail->addAddress('rajesh@drongoai.com', 'Drongo AI Contact Form ');
        $mail->addReplyTo($email, $name);

        //ADD BCC
        $mail->addBCC('founders@drongoai.com', 'BCC Recipient');

        // Content
        $mail->isHTML(false);
        $mail->Subject = $subject;
        $mail->Body = $messagecontent;

        // Attach file if it's the second form
        if ($contact == false && isset($_FILES['file-input'])) {
            $file_tmp = $_FILES['file-input']['tmp_name'];
            $mail->addAttachment($file_tmp, 'resume.pdf'); // Change file name if needed
        }

        // Send email
        $mail->send();
        // echo 'Message has been sent ashish is sexy';
    } catch (Exception $e) {
        error_log("Message could not be sent. Mailer Error: {$mail->ErrorInfo}"); // Log error
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>
