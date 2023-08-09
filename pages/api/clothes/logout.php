<?php
session_start();
session_unset();
setcookie('jwt', "", time()-(1), '/');
?>