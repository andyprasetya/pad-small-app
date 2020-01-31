<?php
error_reporting(E_ALL);
ini_set("display_errors", 1);
require_once dirname(__FILE__) . '/./config.php';
header("Access-Control-Allow-Origin: *");
$items = null;
try {
  $dbcon = new PDO("sqlite:./".$appconfig['_auth_db_file_']."");
  $dbcon->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $stmt = $dbcon->prepare("SELECT * FROM main_data WHERE context = 'TRANSAKSI' AND text_b = '4' AND text_c = '1' AND text_d = '1' AND text_e = '01' ORDER BY id");
  if ($stmt->execute()) {
    while($rowset = $stmt->fetch(PDO::FETCH_ASSOC)){
      $items[] = $rowset;
    }
    $response = array("status"=>201,"dataarray"=>$items);
    header('Content-Type: application/json');
    echo json_encode($response);
    $dbcon = null;
    exit;
  } else {
    $response = array("status"=>501,"message"=>$e->getMessage());
    header('Content-Type: application/json');
    echo json_encode($response);
    $dbcon = null;
    exit;
  }
} catch(PDOException $e) {
  $response = array("status"=>501,"message"=>$e->getMessage());
  header('Content-Type: application/json');
  echo json_encode($response);
  $dbcon = null;
  exit;
}
?>