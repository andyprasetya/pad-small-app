<?php
error_reporting(E_ALL);
ini_set("display_errors", 1);
require_once dirname(__FILE__) . '/./config.php';
header("Access-Control-Allow-Origin: *");
if(strcasecmp($_SERVER['REQUEST_METHOD'], 'POST') != 0){
	throw new Exception('Request method must be POST!');
}
$contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';
if(strcasecmp($contentType, 'application/json') != 0){
	// throw new Exception('Content type must be: application/json');
	$response = array("response"=>"501");
	header('Content-Type: application/json');
	echo json_encode($response);
	exit;
} else {
	$rawData = trim(file_get_contents("php://input"));
	$data = json_decode($rawData, true);
	if(!is_array($data)){
		// throw new Exception('Received content contained invalid JSON!');
		$response = array("response"=>"501");
		header('Content-Type: application/json');
		echo json_encode($response);
		exit;
	} else {
		$cdatetime = Date('YmdHis');
		$username = $data["username"];
		$password = hash_hmac('sha1', $data["password"], '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz');
		$codex = hash_hmac('sha1', $data["password"], $cdatetime);
		try {
			$dbcon = new PDO("sqlite:./".$appconfig['_auth_db_file_']."");
			$dbcon->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
			/* ============================================================ */
			$stmt_check_count = $dbcon->prepare("SELECT COUNT(*) AS countrows FROM users WHERE username = :username AND password LIKE :password AND status = 1");
			$stmt_check_count->bindValue(":username", $username, PDO::PARAM_STR);
			$stmt_check_count->bindValue(":password", $password, PDO::PARAM_STR);
			if ($stmt_check_count->execute()) {
				while($rowset_check_count = $stmt_check_count->fetch(PDO::FETCH_ASSOC)){
					$rowscount = $rowset_check_count['countrows'];
				}
				if (intval($rowscount)==1) {
					$stmt_select_user = $dbcon->prepare("SELECT * FROM users WHERE username = :username AND password LIKE :password AND status = 1");
					$stmt_select_user->bindValue(":username", $username, PDO::PARAM_STR);
					$stmt_select_user->bindValue(":password", $password, PDO::PARAM_STR);
					if ($stmt_select_user->execute()) {
						while($rowset_select_user = $stmt_select_user->fetch(PDO::FETCH_ASSOC)){
							if (!empty($rowset_select_user)) {
								$userid = $rowset_select_user['id'];
                $usernm = $rowset_select_user['username'];
                $userpw = $rowset_select_user['password'];
                $userrn = $rowset_select_user['realname'];
								$module = $rowset_select_user['module'];
								$stmt_authorised_register = $dbcon->prepare("INSERT INTO logs(uid,codex,context,status) VALUES(:uid,:codex,'PROCEDURAL_LOGIN',1)");
								$stmt_authorised_register->bindValue(":uid", $userid, PDO::PARAM_INT);
								$stmt_authorised_register->bindValue(":codex", $codex, PDO::PARAM_STR);
								if ($stmt_authorised_register->execute()) {
									$response = array("response"=>201,"id"=>$userid,"username"=>$usernm,"hashedpassword"=>$userpw,"realname"=>$userrn,"module"=>$module);
									header('Content-Type: application/json');
									echo json_encode($response);
									$dbcon = null;
									exit;
								} else {
									$response = array("response"=>404,"message"=>$e->getMessage());
									header('Content-Type: application/json');
									echo json_encode($response);
									$dbcon = null;
									exit;
								}
							} else {
								$response = array("response"=>404,"message"=>"Empty rows found.");
								header('Content-Type: application/json');
								echo json_encode($response);
								$dbcon = null;
								exit;
							}
						}
					} else {
						$response = array("response"=>404,"message"=>$e->getMessage());
						header('Content-Type: application/json');
						echo json_encode($response);
						$dbcon = null;
						exit;
					}
				} else {
					$response = array("response"=>404,"message"=>"No username/password match.");
					header('Content-Type: application/json');
					echo json_encode($response);
					$dbcon = null;
					exit;
				}
			} else {
				$response = array("response"=>404,"message"=>$e->getMessage());
				header('Content-Type: application/json');
				echo json_encode($response);
				$dbcon = null;
				exit;
			}
			/* ============================================================ */
		} catch (PDOException $e) {
			$response = array("response"=>404,"message"=>$e->getMessage());
			header('Content-Type: application/json');
			echo json_encode($response);
			$dbcon = null;
			exit;
		}
	}
}
?>