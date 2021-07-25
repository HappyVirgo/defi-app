<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
use Dotenv\Dotenv;

require 'vendor/autoload.php';

// ---------------------------------------------------------------------
// Loading settings
// ---------------------------------------------------------------------

if (file_exists(__DIR__ . DIRECTORY_SEPARATOR)) {
    $dotenv = Dotenv::createImmutable(__DIR__);
    $dotenv->load();
}

/**
 * We allow CORS now.
 *
 * NOTE: Maybe we will disable this in the future.
 */
function cors()
{
    // Allow from any origin
    if (isset($_SERVER['HTTP_ORIGIN'])) {
        // Decide if the origin in $_SERVER['HTTP_ORIGIN'] is one
        // you want to allow, and if so:
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');    // cache for 1 day
    }

    // Access-Control headers are received during OPTIONS requests
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
            // may also be using PUT, PATCH, HEAD etc
            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
            header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

        exit(0);
    }

    // echo "You have CORS!";
}

class MailController
{
    var $error = false;
    var $msg = '';
    var $data = null;

    public function send()
    {
        cors();

        $SMTP_HOST = $_ENV['SMTP_HOST'];
        $SMTP_USER = $_ENV['SMTP_USER'];
        $SMTP_PWD = $_ENV['SMTP_PWD'];
        $SMTP_PORT = $_ENV['SMTP_PORT'];

        $data = json_decode(file_get_contents("php://input"),true);
        $this->data = $data;
        $name = trim($data['name'] ?? '');
        $email = trim($data['email'] ?? '');
        $message = trim($data['message'] ?? '');
        if (!$name || !$email || !$message) {
            $this->return(true, 'Validation failed. Please fill data correctly.');
        }

        //Instantiation and passing `true` enables exceptions
        try {
            //Server settings
            $mail = new PHPMailer(true);
            //$mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
            $mail->isSMTP();                                            //Send using SMTP
            $mail->Host = $SMTP_HOST;                     //Set the SMTP server to send through
            $mail->SMTPAuth = true;                                   //Enable SMTP authentication
            $mail->Username = $SMTP_USER;                     //SMTP username
            $mail->Password = $SMTP_PWD;                               //SMTP password
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;         //Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
            $mail->Port = $SMTP_PORT;                                    //TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

            //Recipients
            $mail->setFrom($SMTP_USER, 'The Defi Network');
            $mail->addAddress($email, $name);     //Add a recipient
            // todo Please remove after testing.
            $mail->addBCC('likigoldenstar@gmail.com');

            //Attachments
            // $mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
            // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

            //Content
            $mail->isHTML(true);                                  //Set email format to HTML
            $mail->Subject = 'Thanks for contact';
            $mail->Body = "Hi $name, <br />
                <p>We received your contact. We will get back to you shortly.</p>
                <hr />
                <p><b>Your Message: </b></p>
                <p>$message</p>
                <hr />
                <p>Thanks</p>
                <p>The Defi Network</p>
            ";
            $mail->AltBody = strip_tags($mail->Body);
            $this->error = !$mail->send();


            $mail = new PHPMailer(true);
            //$mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
            $mail->isSMTP();                                            //Send using SMTP
            $mail->Host = $SMTP_HOST;                     //Set the SMTP server to send through
            $mail->SMTPAuth = true;                                   //Enable SMTP authentication
            $mail->Username = $SMTP_USER;                     //SMTP username
            $mail->Password = $SMTP_PWD;                               //SMTP password
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;         //Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
            $mail->Port = $SMTP_PORT;                                    //TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

            //Recipients
            $mail->setFrom($SMTP_USER, 'The Defi Network');
            $mail->addAddress($SMTP_USER, $name);     //Add a recipient
            // todo Please remove after testing.
            $mail->addBCC('likigoldenstar@gmail.com');

            //Content
            $mail->isHTML(true);                                  //Set email format to HTML
            $mail->Subject = 'New Contact has just received';
            $mail->Body = "Hi Administrator,
                <p>We received the new contact.</p>
                <hr />
                <p><b>Contact Detail: </b></p>
                <p><b>Name:</b> $name</p>
                <p><b>Email Address:</b> $email</p>
                <p><b>Message:</b> <br />".nl2br($message)."</p>
                <hr />
            ";
            $mail->AltBody = strip_tags($mail->Body);
            $this->error &= !$mail->send();

            if ($this->error) {
                $this->msg = "Failed to send email. Please try again!";
            } else {
                $this->msg = "Email has been sent successfully.";
            }
        } catch (Exception $e) {
            $this->error = true;
            $this->msg = $e;
        }
        $this->return();
    }

    private function return($error = null, $msg = null, $data = null)
    {
        if ($error !== null) $this->error = $error;
        if ($msg !== null) $this->msg = $msg;
        if ($data !== null) $this->data = $data;

        echo json_encode([
            'error' => $this->error? true : false,
            'msg' => $this->msg,
            'data' => $this->data
        ]);
        exit;
    }
}

$app = new MailController();
$app->send();


