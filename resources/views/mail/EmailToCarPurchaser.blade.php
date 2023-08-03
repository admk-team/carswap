<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Car Purchased on Carswap.ng</title>
    <!-- Add any additional styles if needed -->
</head>
<body>
    
  <div class="container">
    <h1> Car Purchased on Carswap.ng</h1>

    <p>Dear {{ $data['first_name'] ?? ''.' '.$data['last_name'] ?? '' }}</p>
    <p>Congratulations on your new car purchase! The car purchase request on Carswap.ng has been successfully completed.</p>
    <p>Here are the details of the purchased car:</p>
    <p>Car Title: {{ $data['title'] ?? 'N/A' }}</p>
    <p>Car Model: {{ $data['model'] ?? 'N/A' }}</p>
    <p>Car Condition: {{ $data['condition'] ?? 'N/A' }}</p>
    <p>Car Price: {{ $data['price'] ?? 'N/A' }}</p>
    <p>Car Engine Capacity: {{ $data['engine_capacity'] ?? 'N/A' }}</p>
    <p>Inspection Date: {{ $data['Inspection_date'] ?? 'N/A' }}</p>
    <p>Inspection Time: {{ $data['Inspection_Time'] ?? 'N/A' }}</p>
    <p>If you have any further questions or need assistance, please don't hesitate to reach out to our support team at [08120222922].</p>
    <p>Thank you for using Carswap.ng for your car purchase. We wish you the best with your new car!</p>
    <p>
        <b>Best regards,</b>
    </p>
    <p>    
        Carswap.ng</p>
</div>
</body>
</html>
