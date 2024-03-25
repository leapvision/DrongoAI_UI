<?php
$email = $_POST['email'];
$password = $_POST['password'];
$token = $_POST['token'];

// call curl to POST request 
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL,"https://www.google.com/recaptcha/api/siteverify");
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query(array('secret' => '6LeHn6MpAAAAAN7nXLIXrRQrur0yszi424359s1a', 'response' => $token)));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
$arrResponse = json_decode($response, true);
//print_r($arrResponse); 
// verify the response 
if($arrResponse["success"] == '1' && $arrResponse["score"] >= 0.5) {
    // valid submission 
    // demo purpose
	$data = array(
		'status' => true,
		'score' => $arrResponse["score"],
		'msg' => 'Spam submission.',
	);
	
	
	
} else {
    // spam submission 
    // show error message 
	$data = array(
				'status' => true,
				'score' => $arrResponse["score"],
				'msg' => 'Spam submission.',
			);
}
echo json_encode($data);	
?>
