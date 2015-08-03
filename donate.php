<?php

require('db.php');

$donation = $_POST['donation'];
$statement = $db->prepare('insert into donations(amount) values(:donation)');
$result = $statement->execute(array('donation' => $donation));

$response = array();

if($result == 1) echo json_encode(array('status' => 'okay'));
else echo json_encode(array('status' => 'fail'));
