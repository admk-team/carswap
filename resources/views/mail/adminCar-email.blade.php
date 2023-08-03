<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Post Car</title>
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
    <h1> A New Car is Posted by {{ $data['first_name'] ?? ''.' '.$data['last_name'] ?? '' }}</h1>

    <p>Dear Admin</p>
    <p>A new car has been successfully posted on Carswap.ng. Here are the details:
    </p>
    <p>Car : {{ $data['title'] ?? 'N/A' }}</p>
    <p>Model : {{ $data['model'] ?? 'N/A' }}</p>
    <p>Condition : {{ $data['condition'] ?? 'N/A' }}</p>
    <p>Price : {{ $data['price'] ?? 'N/A' }}</p>
    <p>Engine Capacity : {{ $data['engine_capacity'] ?? 'N/A' }}</p>
    <p>Please review the listing and mark it as live if everything is in order</p>
    <p>
        <b>Best regards,</b>
    </p>
    <p>    
        Carswap.ng</p>
</div>
</body>
</html>
