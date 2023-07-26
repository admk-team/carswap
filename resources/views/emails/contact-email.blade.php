<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Inquirey Form</title>
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
    </style>
</head>
<body>
    <div class="container">
        <h1>{{ $data['first_name'] }} Want's to connect thorugh contact us</h1>
        <p>Hello Admin</p>
        <p>{{ $data['message'] }}</p>
        <ul>
            <li><strong>Name :</strong> {{ $data['first_name']." ".$data['last_name'] }}</li>
            <li><strong>Email:</strong> {{ $data['email'] ?? 'N/A'  }}</li>
            <li><strong>Phone:</strong> {{ $data['phone'] ?? 'N/A' }}</li>
        </ul>
        <p>
            Thank you for your attention.
        </p>
        <p>Best regards,</p>
        <p>Carswap</p>
    </div>
</body>
</html>
