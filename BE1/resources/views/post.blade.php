<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=q, initial-scale=1.0">
    <link rel="stylesheet" href="resource">
    <title>Laravel</title>

    <style>
        body {
            background-color: pink;
            font-family: tahoma;
            font-size: 22px;
        }

        .container {
            text-align: center;
            padding: 10em;
        }

        input {
            background: skyblue;
            color: black;
            width: 300px;
            height: 50px;      
            border: 2px solid red;
        }

        button {
            background: blue;
            color: white;
            width: 90px;
            height: 50px;
            border: 2px solid red;
        }
    </style>

</head>
<body>
    <div class="container">
        <h1>Enter your name below</h1>
        <form action="display" method="post">
            @csrf
            <input type="text" name="name">
            <button type="submit">Enter</button>
        </form>
    </div>  
</body>
</html>