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

    <p>Dear {{ $data['first_name'] ?? ''.' '.$data['last_name'] ?? '' }}</p>
    <p>We hope this message finds you well. We wanted to inform you that a user on Carswap.ng has expressed interest in swapping their car with yours. Here are the details of the user's car:
    </p>
    <p>Here are the details of  swap car</p>
    @foreach ($data['cars'] as $car)
    <h1>Car #{{ $loop->iteration }}</h1>
        <p>Car : {{ $car['title'] ?? 'N/A' }}</p>
        <p>Model : {{ $car['model'] ?? 'N/A' }}</p>
        <p>Condition : {{ $car['condition'] ?? 'N/A' }}</p>
        <p>Price : {{ $car['price'] ?? 'N/A' }}</p>
        <p>Engine Capacity : {{ $car['engine_capacity'] ?? 'N/A' }}</p>
    @endforeach
    <p>If you're open to the possibility of a car swap, please log in to your Carswap.ng account to review the user's car details and initiate a conversation with them.</p>
    <p>If you have any questions or need assistance, please don't hesitate to reach out to our support team at <b>[08120222922]</b></p>
    <p>Thank you for being a part of the Carswap.ng community.
    </p>
    <p>
        <b>Best regards,</b>
    </p>
    <p>    
        Carswap.ng</p>
</div>
</body>
</html>
