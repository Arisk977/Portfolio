<?php

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"): // Allow preflighting to take place.
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;

    case ("POST"): // Send the email;
        header("Access-Control-Allow-Origin: *");

        // Payload is not sent to $_POST variable,
        // it is sent to php://input as text
        $json = file_get_contents('php://input');

        // Parse the payload from text format to object
        $params = json_decode($json);

        $email = $params->email;
        $name = $params->name;
        $message = $params->message;
        $accepted = $params->accepted;

        $recipient = 'karamataris@gmail.com';
        $subject = "Contact From <$email>";
        $message = "
            <html>
            <head>
                <meta charset='UTF-8'>
                <style>
                    body { font-family: Arial, sans-serif; color: #333; }
                    .container { padding: 20px; border: 1px solid #ccc; background-color: #f9f9f9; }
                    .label { font-weight: bold; margin-top: 10px; }
                    .value { margin-bottom: 10px; }
                </style>
            </head>
            <body>
                <div class='container'>
                    <h2>Neue Kontaktanfrage</h2>
                    <p class='label'>Name:</p>
                    <p class='value'>{$name}</p>
                    <p class='label'>E-Mail:</p>
                    <p class='value'>{$email}</p>
                    <p class='label'>Nachricht:</p>
                    <p class='value'>" . nl2br(htmlspecialchars($message)) . "</p>
                    <hr>
                    <p style='font-size: 0.8em;'>Diese Nachricht wurde über das Kontaktformular auf deiner Website gesendet.</p>
                </div>
            </body>
            </html>";

        $headers = array();
        $headers[] = 'MIME-Version: 1.0';
        $headers[] = 'Content-type: text/html; charset=utf-8';
        $headers[] = "From: kontakt@aris-karamat.de";
        $headers[] = "Reply-To: $email";
        $headers[] = "Return-Path: kontakt@aris-karamat.de"; // Wichtig für Spamvermeidung
        $headers[] = "X-Mailer: PHP/" . phpversion();

        mail($recipient, $subject, $message, implode("\r\n", $headers));
        break;

    default: // Reject any non POST or OPTIONS requests.
        header("Allow: POST", true, 405);
        exit;
}
