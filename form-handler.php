<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Your reCAPTCHA secret key
    $recaptchaSecret = '6Lf9jhcqAAAAAFSnZmE8OiugdGgn76ZNjML6UFcO'; // Replace with your actual secret key
    $recaptchaResponse = $_POST['g-recaptcha-response'];

    // URL for reCAPTCHA verification
    $recaptchaUrl = 'https://www.google.com/recaptcha/api/siteverify';

    // Prepare POST data
    $postData = [
        'secret' => $recaptchaSecret,
        'response' => $recaptchaResponse
    ];

    // Initialize cURL
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $recaptchaUrl);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($postData));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    // Execute cURL and fetch response
    $response = curl_exec($ch);
    curl_close($ch);

    // Decode JSON response
    $responseKeys = json_decode($response, true);

    // Check the `success` and optionally the `score`
    if ($responseKeys['success'] && $responseKeys['score'] >= 0.3) {
        // The token is valid, process the form data
        $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
        $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
        $message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);

        $to = "olga.leonovna@gmail.com"; // Replace with your email address
        $subject = "New message from contact form";
        $headers = "From: " . $email . "\r\n";
        $headers .= "Reply-To: " . $email . "\r\n";
        $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

        $email_message = "Name: " . htmlspecialchars($name) . "\n";
        $email_message .= "Email: " . htmlspecialchars($email) . "\n";
        $email_message .= "Message: " . htmlspecialchars($message) . "\n";

        if (mail($to, $subject, $email_message, $headers)) {
            echo "Thank you for your message.";
        } else {
            echo "There was a problem sending your message.";
        }
    } else {
        echo "reCAPTCHA verification failed. Please try again.";
    }
} else {
    echo "Invalid request.";
}
?>
