<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>New User Registration</title>
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
    <h1> New User Registration on Carswap.ng</h1>
    <p>Hello Admin,</p>
    <p>A new user has registered on Carswap.ng. Below are the details of the new user:</p>
    <p>First Name: {{ $data['first_name'] ?? 'N/A' }}</p>
    <p>Last Name: {{ $data['last_name'] ?? 'N/A' }}</p>
    <p>Email: {{ $data['email'] ?? 'N/A' }}</p>
    <p>Phone Number: {{ $data['phone_no'] ?? 'N/A' }}</p>

    <p><strong>User Activity:</strong></p>
    <p>The user has just joined the Carswap.ng community and can now start exploring and interacting with the platform. Please ensure to welcome and assist them as needed.</p>

    <p>If you have any questions or need further information, you can contact the user using the provided email address or phone number.</p>

    <p>Thank you for your attention to this matter.</p>

    <p>
        <b>Best regards,</b>
    </p>
    <p>Carswap.ng</p>
</div>
</body>
</html>
