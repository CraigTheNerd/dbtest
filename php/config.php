<?php

     function db_connect() {

        //  Catch Data
        global $db_host;
        global $db_name;
        global $db_user;
        global $db_pass;
        global $db_port;

        $conn = mysqli_connect("$db_host", "$db_user", "$db_pass", "$db_name", "$db_port");

        //  Catch Connection Error
        if (!$conn) {

            if(strpos(mysqli_connect_error(), 'password') !== false) {
                echo '<p style="color: #f0506e;"><strong>Authentication Failure</strong></p>';
            }elseif(strpos(mysqli_connect_error(), 'denied for user') !== false) {
                echo '<p style="color: #f0506e;"><strong>Incorrect Database</strong></p>';
            } elseif(strpos(mysqli_connect_error(), 'getaddrinfo') !== false) {
                echo '<p style="color: #f0506e;"><strong>Cannot test to remote host. Please test with localhost only</strong></p>';
            }else {
                echo '<p style="color: #f0506e;"><strong>' . mysqli_connect_error() . '</strong></p>';
            }
        } else {
            echo 'success';
        }
    }



