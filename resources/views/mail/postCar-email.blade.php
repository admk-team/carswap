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
    <h1> Car Posted Successfully on <a href="carswap.ng" target="_blank">Carswap.ng</a></h1>

    <p>Dear {{ $data['first_name'] ?? ''.' '.$data['last_name'] ?? '' }}</p>
    <p>We're thrilled that you've chosen Carswap.ng to showcase your car! Your listing is almost ready to go live and connect with potential buyers. However, before it becomes visible to our community, it needs to undergo a quick review process.</p>

    <p>Here's the information you provided for your car listing:</p>
    <p>Car : {{ $data['title'] ?? 'N/A' }}</p>
    <p>Model : {{ $data['model'] ?? 'N/A' }}</p>
    <p>Condition : {{ $data['condition'] ?? 'N/A' }}</p>
    <p>Price : {{ $data['price'] ?? 'N/A' }}</p>
    <p>Engine Capacity : {{ $data['engine_capacity'] ?? 'N/A' }}</p>
    <p><strong>What's Next?</strong></p>
    <p>Your listing is currently pending review by our team. To expedite the process and have your car listing marked as live, please follow these steps:</p>
    <p>1. <strong>Make a Payment:</strong>A small review fee of 1000ng is required to ensure the quality and authenticity of listings on Carswap.ng. You can make the payment by visiting <a href="{{ url('/user/dashboard') }}" target="_blank" rel="noopener noreferrer">Payment</a>. Once your payment is processed, your listing will be prioritized for review.</p>
    <p>2. <strong>Review and Approval:</strong> Our team will review your listing within [Review Timeframe]. We'll assess the details and ensure that it meets our quality standards. If any changes are needed, we'll reach out to you via email.</p>
    <p>3. <strong>Go Live:</strong>  Once your listing is approved, it will be marked as live and visible to car enthusiasts on Carswap.ng. Your car will be showcased prominently, increasing its chances of finding the right buyer.</p>
    <p>Please keep an eye on your email for updates on the status of your listing. If you have any questions or encounter any issues, our support team is here to assist you. Reach out to us at </p>
    <p><b>08120222922</b></p>
    <p>Thank you for choosing Carswap.ng to list your car. We look forward to helping you connect with potential buyers and enthusiasts!
    </p>
    <p>
        <b>Best regards,</b>
    </p>
    <p>    
        The Carswap.ng Team</p>
</div>
</body>
</html>
