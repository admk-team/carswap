<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Car Swap</title>
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
    <h1> Car Swap Interest - User Inquiry</h1>

    <p>Dear {{ $data1['first_name'] ?? ''.' '.$data1['last_name'] ?? '' }}</p>
    <p>We hope this message finds you well. We wanted to inform you that a user
        <strong>{{ $data['first_name'] ?? ''.' '.$data['last_name'] ?? '' }} </strong>on Carswap.ng has expressed interest in purchasing your car. Here are the details of the user's inquiry:</p>
    <p>Car Title: {{ $data['title'] ?? 'N/A' }}</p>
    <p>Car Model: {{ $data['model'] ?? 'N/A' }}</p>
    <p>Car Condition: {{ $data['condition'] ?? 'N/A' }}</p>
    <p>Car Price: {{ $data['price'] ?? 'N/A' }}</p>
    <p>Car Engine Capacity: {{ $data['engine_capacity'] ?? 'N/A' }}</p>
    <p>Car Inspection Date: {{ $data['Inspection_date'] ?? 'N/A' }}</p>
    <p>Car Inspection Time: {{ $data['Inspection_Time'] ?? 'N/A' }}</p>
    
    <p>If you're open to the possibility of selling your car to this user, please log in to your Carswap.ng account to review the your details and initiate a conversation with them.</p>
    
    <p>If you have any questions or need assistance, please don't hesitate to reach out to our support team at <b>[08120222922]</b>.</p>
    
    <p>Thank you for being a part of the Carswap.ng community.</p>
    
    <p>
        <b>Best regards,</b>
    </p>
    <p>    
        Carswap.ng</p>
</div>
</body>
</html>
