<?php
    session_start();

    //  Define Database Variables
    $db_host = $_POST['db_host'];
    $db_name = $_POST['db_name'];
    $db_user = $_POST['db_user'];
    $db_pass = $_POST['db_pass'];
    $db_port = 3306;

    //  Include the config file
//    include_once 'config.php';

    //  Check if the user has submitted any data
    if(!empty($db_host) && !empty($db_name) && !empty($db_user) && !empty($db_pass)) {


        //  Call Connect Function
        $conn = mysqli_connect("$db_host", "$db_user", "$db_pass", "$db_name", "$db_port");

        //  Catch Connection Error
        if (!$conn) {

            if(strpos(mysqli_connect_error(), 'password') !== false) {
                echo 'Authentication Failure';
            }elseif(strpos(mysqli_connect_error(), 'denied for user') !== false) {
                echo 'Incorrect Database';
            } elseif(strpos(mysqli_connect_error(), 'getaddrinfo') !== false) {
                echo 'Cannot test to remote host. Please test with localhost only';
            }else {
                echo mysqli_connect_error();
            }
        } else {
            echo 'Database Connected!';
        }

    } else {
        echo 'All fields need to be completed';
    }