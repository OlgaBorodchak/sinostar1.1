<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" type="image/x-icon" href="sinostar.ico" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet">
  <title>Kontaktformular</title>
</head>
<body>
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize input data
    $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);

    // Prepare email
    $to = "olga.leonovna@gmail.com"; // Replace with your email address
    $subject = "Neue Nachricht von Kontaktformular";
    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    $email_message = "Name/Firma: " . htmlspecialchars($name) . "\n";
    $email_message .= "Email: " . htmlspecialchars($email) . "\n";
    $email_message .= "Nachricht: " . htmlspecialchars($message) . "\n";

    // Send email
    if (mail($to, $subject, $email_message, $headers)) {
        echo "Vielen Dank für Ihre Nachricht.";
    } else {
        echo "Es gab ein Problem beim Senden Ihrer Nachricht.";
    }
} else {
    // Handle error - form not submitted via POST
    echo "Ungültige Anforderung.";
}
?>
</body>
</html>

