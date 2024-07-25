<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Verify reCAPTCHA response
    $recaptchaSecret = '6Lf9jhcqAAAAAFSnZmE8OiugdGgn76ZNjML6UFcO';
    $recaptchaResponse = $_POST['g-recaptcha-response'];
    $recaptchaUrl = 'https://www.google.com/recaptcha/api/siteverify';

    $response = file_get_contents($recaptchaUrl . '?secret=' . $recaptchaSecret . '&response=' . $recaptchaResponse);
    $responseKeys = json_decode($response, true);

    if ($responseKeys["success"] && $responseKeys["score"] >= 0.5) {
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
        echo "reCAPTCHA verification failed. Please try again.";
    }
} else {
    // Handle error - form not submitted via POST
    echo "Ungültige Anforderung.";
}
?>

