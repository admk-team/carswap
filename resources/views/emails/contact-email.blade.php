<html>
        <head>
        <title>HTML email</title>
        </head>
        <body>
        <p>This email contains user Issues!</p>
        <table>
        <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
        <th>Phone Number</th>
        <th>Messag</th>
        </tr>
        <tr>
        <td>{{$data->first_name}}</td>
        <td>{{$data->last_name}}</td>
        <td>{{$data->email}}</td>
        <td>{{$data->phone_number}}</td>
        <td>{{$data->message}}</td>
        </tr>
        </table>
        </body>
        </html>
