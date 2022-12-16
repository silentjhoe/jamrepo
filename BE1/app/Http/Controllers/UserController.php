<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller {
    function getData() {
        $name = $_POST['name'];
        echo 'Greetings ';
        echo $name;
    }
}
