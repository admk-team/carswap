<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Account Registration</title>
    <style type="text/css">
        /* Body */
        body {
            font-family: Arial, sans-serif;
            font-size: 14px;
            line-height: 1.5;
            color: #333;
            background-color: #f5f5f5;
            margin: 0;
            padding: 0;
        }
        /* Container */
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #fff;
        }
        /* Heading */
        h1 {
            font-size: 24px;
            font-weight: 700;
            margin-top: 0;
        }
        /* Paragraph */
        p {
            margin-top: 0;
            margin-bottom: 1em;
        }
        /* Button */
        .button {
            display: inline-block;
            padding: 10px 20px;
            font-size: 16px;
            font-weight: 600;
            text-decoration: none;
            color: #fff;
            background-color: #007bff;
            border-radius: 4px;
        }
    </style>
</head>
<body>
  <div class="container">
    <h1> Welcome to Carswap.ng!</h1>
    <p>Dear {{ $data['first_name'] ?? ''.' '.$data['last_name'] ?? '' }}</p>
<p>We're excited to have you on board as a new member of Carswap.ng! Your registration is complete, and you can now start exploring a world of cars, connecting with potential buyers, and engaging with fellow car enthusiasts.</p>

<p>Here are the details you provided during registration:</p>
<p>First Name: {{ $data['first_name'] ?? 'N/A' }}</p>
<p>Last Name: {{ $data['last_name'] ?? 'N/A' }}</p>
<p>Phone Number: {{ $data['phone_no'] ?? 'N/A' }}</p>

<p><strong>Get Started:</strong></p>
<p>Now that you're a member, you can take advantage of the following features:</p>
<ul>
    <li>Post and showcase your cars for sale.</li>
    <li>Browse through a wide selection of cars from various sellers.</li>
    <li>Contact sellers and negotiate deals.</li>
    <li>Stay updated with the latest car listings and community activities.</li>
</ul>

<p><strong>Important Note:</strong></p>
<p>Your account is now active and ready for use. Please ensure that you keep your login details secure and do not share them with anyone. If you ever forget your password, you can use the "Forgot Password" feature to reset it.</p>

<p>If you have any questions or need assistance, feel free to reach out to our support team at <b>support@carswap.ng</b> or call us at <b>08120222922</b>. We're here to help you have a smooth experience on Carswap.ng.</p>

<p>Thank you for joining our community of car enthusiasts. Happy car hunting and selling!</p>

<p>
    <b>Best regards,</b>
</p>
<p>The Carswap.ng Team</p>
</div>
</body>
</html>