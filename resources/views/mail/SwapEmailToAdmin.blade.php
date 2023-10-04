<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Car Swap Request</title>
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
    <h1>Car Swap Request</h1>

    <p>Dear {{ $data1['first_name'] ?? 'Seller' }}</p>
    <p>A user   <p>Name: {{ $data1['first_name'] ?? 'N/A' }} {{ $data1['last_name'] ?? 'N/A' }}</p> on Carswap.ng is interested in swapping their car with yours. Here are the details:</p>
    
    <p>User Details:</p>
    <p>Name: {{ $data['first_name'] ?? 'N/A' }} {{ $data['last_name'] ?? 'N/A' }}</p>
    
    <p>Your Car Details:</p>
    <p>Car Title: {{ $data1['title'] ?? 'N/A' }}</p>
    <p>Car Model: {{ $data1['model'] ?? 'N/A' }}</p>
    <p>Car Condition: {{ $data1['condition'] ?? 'N/A' }}</p>
    <p>Car Price: {{ $data1['price'] ?? 'N/A' }}</p>
    <p>Car Engine Capacity: {{ $data1['engine_capacity'] ?? 'N/A' }}</p>
    <p>Car Inspection Date: {{ $data1['Inspection_date'] ?? 'N/A' }}</p>
    <p>Car Inspection Time: {{ $data1['Inspection_Time'] ?? 'N/A' }}</p>
    
    <p>Please review the details and respond to the user if you are open to the car swap.</p>
    
    <p>
        <b>Best regards,</b>
    </p>
    <p>    
        Carswap.ng</p>
</div>
</body>
</html>
