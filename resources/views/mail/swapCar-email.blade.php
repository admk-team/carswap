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
    <h1> Car Swap Successful on Carswap.ng</h1>

    <p>Dear {{ $data['first_name'] ?? ''.' '.$data['last_name'] ?? '' }}</p>
    <p>Congratulations! We're excited to inform you that the car swap on your Carswap.ng account has been successfully completed. Your listing has been updated with the new car details.
    </p>
    <p>Here are the details of  swap car</p>
    <p>Swap Car : {{ $data['title'] ?? 'N/A' }}</p>
    <p>Swap Model : {{ $data['model'] ?? 'N/A' }}</p>
    <p>Swap Condition : {{ $data['condition'] ?? 'N/A' }}</p>
    <p>Swap Price : {{ $data['price'] ?? 'N/A' }}</p>
    <p>Swap Engine Capacity : {{ $data['engine_capacity'] ?? 'N/A' }}</p>
    <p>Inspection Date: {{ $data['Inspection_date'] ?? 'N/A' }}</p>
    <p>Inspection Time: {{ $data['Inspection_Time'] ?? 'N/A' }}</p>
    <p>Your updated listing is now live and visible to potential buyers. If you have any further questions or need assistance, please don't hesitate to reach out to our support team at [08120222922].</p>
    <p>Thank you for using Carswap.ng for your car needs. We wish you the best with your new car!
    </p>
    <p>
        <b>Best regards,</b>
    </p>
    <p>    
        Carswap.ng</p>
</div>
</body>
</html>
