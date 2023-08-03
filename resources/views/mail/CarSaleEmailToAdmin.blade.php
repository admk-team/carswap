<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Car Purchase Request</title>
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
    <h1>Car Purchase Request</h1>

    <p>Dear Admin</p>
    <p>A user <strong>{{ $data1['first_name'] ?? ''.' '.$data1['last_name'] ?? '' }} </strong>on Carswap.ng is interested in purchasing your car. Here are the details:</p>
    
    <p>User Details:</p>
    <p>Name: {{ $data['first_name'] ?? 'N/A' }} {{ $data['last_name'] ?? 'N/A' }}</p> 
    <p>Car Details:</p>
    <p>Car Title: {{ $data['title'] ?? 'N/A' }}</p>
    <p>Car Model: {{ $data['model'] ?? 'N/A' }}</p>
    <p>Car Condition: {{ $data['condition'] ?? 'N/A' }}</p>
    <p>Car Price: {{ $data['price'] ?? 'N/A' }}</p>
    <p>Car Engine Capacity: {{ $data['engine_capacity'] ?? 'N/A' }}</p>
    <p>Car Inspection Date: {{ $data['Inspection_date'] ?? 'N/A' }}</p>
    <p>Car Inspection Time: {{ $data['Inspection_Time'] ?? 'N/A' }}</p>
    
    <p>Please review the details and contact the user if you are interested in proceeding with the purchase.</p>
    
    <p>
        <b>Best regards,</b>
    </p>
    <p>    
        Carswap.ng</p>
</div>
</body>
</html>
