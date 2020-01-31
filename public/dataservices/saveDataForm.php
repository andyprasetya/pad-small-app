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
  $response = array("status"=>501,"message"=>"Content type must be: application/json");
  header('Content-Type: application/json');
  echo json_encode($response);
  exit;
} else {
  $rawData = trim(file_get_contents("php://input"));
  $data = json_decode($rawData, true);
  if(!is_array($data)){
    // throw new Exception('Received content contained invalid JSON!');
    $response = array("status"=>501,"message"=>"Received content contained invalid JSON!");
    header('Content-Type: application/json');
    echo json_encode($response);
    exit;
  } else {
    $datadate = $data["tanggal"];
    $arrdate = explode("-", $datadate);
    $taxyear = $arrdate[0];
    $context = $data["context"];
    $taxobject = $data["op"];
    $text_b = $data["text_b"];
    $text_c = $data["text_c"];
    $text_d = $data["text_d"];
    $text_e = $data["text_e"];
    $text_f = $data["text_f"];
    $nominal = $data["jumlah"];
    try {
      $dbcon = new PDO("sqlite:./".$appconfig['_auth_db_file_']."");
      $dbcon->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
      $stmt = $dbcon->prepare("INSERT INTO main_data(date_a,context,integer_a,integer_b,text_b,text_c,text_d,text_e,text_f,long_text_c) VALUES(:datetrx,:context,:taxyear,:payment,:textb,:textc,:textd,:texte,:textf,:taxobject)");
      $stmt->bindValue(":datetrx", $datadate, PDO::PARAM_STR);
      $stmt->bindValue(":context", $context, PDO::PARAM_STR);
      $stmt->bindValue(":taxyear", $taxyear, PDO::PARAM_INT);
      $stmt->bindValue(":payment", $nominal, PDO::PARAM_INT);
      $stmt->bindValue(":textb", $text_b, PDO::PARAM_STR);
      $stmt->bindValue(":textc", $text_c, PDO::PARAM_STR);
      $stmt->bindValue(":textd", $text_d, PDO::PARAM_STR);
      $stmt->bindValue(":texte", $text_e, PDO::PARAM_STR);
      $stmt->bindValue(":textf", $text_f, PDO::PARAM_STR);
      $stmt->bindValue(":taxobject", $taxobject, PDO::PARAM_STR);
      if ($stmt->execute()) {
        $stmt_acc_4 = $dbcon->prepare("UPDATE main_data SET integer_d = integer_d + :payment WHERE context = 'ACTIVE_ANGGARAN_PENDAPATAN' AND integer_b = :taxyear AND text_b = :textb AND text_c = :textc AND text_d = :textd AND text_e = :texte AND text_f = :textf");
        $stmt_acc_4->bindValue(":taxyear", $taxyear, PDO::PARAM_INT);
        $stmt_acc_4->bindValue(":payment", $nominal, PDO::PARAM_INT);
        $stmt_acc_4->bindValue(":textb", $text_b, PDO::PARAM_STR);
        $stmt_acc_4->bindValue(":textc", $text_c, PDO::PARAM_STR);
        $stmt_acc_4->bindValue(":textd", $text_d, PDO::PARAM_STR);
        $stmt_acc_4->bindValue(":texte", $text_e, PDO::PARAM_STR);
        $stmt_acc_4->bindValue(":textf", $text_f, PDO::PARAM_STR);
        if ($stmt_acc_4->execute()) {
          $stmt_acc_3 = $dbcon->prepare("UPDATE main_data SET integer_d = integer_d + :payment WHERE context = 'ACTIVE_ANGGARAN_PENDAPATAN' AND integer_b = :taxyear AND text_b = :textb AND text_c = :textc AND text_d = :textd AND text_e = :texte AND text_f = '00'");
          $stmt_acc_3->bindValue(":taxyear", $taxyear, PDO::PARAM_INT);
          $stmt_acc_3->bindValue(":payment", $nominal, PDO::PARAM_INT);
          $stmt_acc_3->bindValue(":textb", $text_b, PDO::PARAM_STR);
          $stmt_acc_3->bindValue(":textc", $text_c, PDO::PARAM_STR);
          $stmt_acc_3->bindValue(":textd", $text_d, PDO::PARAM_STR);
          $stmt_acc_3->bindValue(":texte", $text_e, PDO::PARAM_STR);
          if ($stmt_acc_3->execute()) {
            $stmt_acc_2 = $dbcon->prepare("UPDATE main_data SET integer_d = integer_d + :payment WHERE context = 'ACTIVE_ANGGARAN_PENDAPATAN' AND integer_b = :taxyear AND text_b = :textb AND text_c = :textc AND text_d = :textd AND text_e = '00' AND text_f = '00'");
            $stmt_acc_2->bindValue(":taxyear", $taxyear, PDO::PARAM_INT);
            $stmt_acc_2->bindValue(":payment", $nominal, PDO::PARAM_INT);
            $stmt_acc_2->bindValue(":textb", $text_b, PDO::PARAM_STR);
            $stmt_acc_2->bindValue(":textc", $text_c, PDO::PARAM_STR);
            $stmt_acc_2->bindValue(":textd", $text_d, PDO::PARAM_STR);
            if ($stmt_acc_2->execute()) {
              $stmt_acc_1 = $dbcon->prepare("UPDATE main_data SET integer_d = integer_d + :payment WHERE context = 'ACTIVE_ANGGARAN_PENDAPATAN' AND integer_b = :taxyear AND text_b = :textb AND text_c = :textc AND text_d = '0' AND text_e = '00' AND text_f = '00'");
              $stmt_acc_1->bindValue(":taxyear", $taxyear, PDO::PARAM_INT);
              $stmt_acc_1->bindValue(":payment", $nominal, PDO::PARAM_INT);
              $stmt_acc_1->bindValue(":textb", $text_b, PDO::PARAM_STR);
              $stmt_acc_1->bindValue(":textc", $text_c, PDO::PARAM_STR);
              if ($stmt_acc_1->execute()) {
                $stmt_acc_0 = $dbcon->prepare("UPDATE main_data SET integer_d = integer_d + :payment WHERE context = 'ACTIVE_ANGGARAN_PENDAPATAN' AND integer_b = :taxyear AND text_b = :textb AND text_c = '0' AND text_d = '0' AND text_e = '00' AND text_f = '00'");
                $stmt_acc_0->bindValue(":taxyear", $taxyear, PDO::PARAM_INT);
                $stmt_acc_0->bindValue(":payment", $nominal, PDO::PARAM_INT);
                $stmt_acc_0->bindValue(":textb", $text_b, PDO::PARAM_STR);
                if ($stmt_acc_0->execute()) {
                  $response = array("status"=>201);
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
              } else {
                $response = array("status"=>501,"message"=>$e->getMessage());
                header('Content-Type: application/json');
                echo json_encode($response);
                $dbcon = null;
                exit;
              }
            } else {
              $response = array("status"=>501,"message"=>$e->getMessage());
              header('Content-Type: application/json');
              echo json_encode($response);
              $dbcon = null;
              exit;
            }
          } else {
            $response = array("status"=>501,"message"=>$e->getMessage());
            header('Content-Type: application/json');
            echo json_encode($response);
            $dbcon = null;
            exit;
          }
        } else {
          $response = array("status"=>501,"message"=>$e->getMessage());
          header('Content-Type: application/json');
          echo json_encode($response);
          $dbcon = null;
          exit;
        }
      } else {
        $response = array("status"=>501,"message"=>$e->getMessage());
        header('Content-Type: application/json');
        echo json_encode($response);
        $dbcon = null;
        exit;
      }
    } catch (PDOException $e) {
      $response = array("status"=>501,"message"=>$e->getMessage());
      header('Content-Type: application/json');
      echo json_encode($response);
      $dbcon = null;
      exit;
    }
  }
}
?>