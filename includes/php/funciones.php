<?php

	include('../../../conexion.php');
	$link = new mysqli($host, $user, $pass, $db);
	$link -> set_charset("utf8");

	function getIp(){
		return $_SERVER['REMOTE_ADDR'];
	}

	function getCodServicio($ip){
		if ($ip!=null){
				$link = $GLOBALS['link'];
				$result = $link->query("SELECT cod_servicio cs FROM parametros_globales WHERE IP='$ip'");
				if($result-> num_rows > 0){
						$row = $result-> fetch_assoc();
						return $row['cs'];
					}else{
						return null;
				}
			}else{
				return null;
		}
	}

	/*function getCodServicioXespec($ip){
		if ($ip!=null){
				$link = $GLOBALS['link'];
				$result = $link->query("SELECT cod_servicio cs FROM parametros_globales WHERE IP='$ip'");
				if($result-> num_rows > 0){
						$row = $result-> fetch_assoc();
						return $row['cs'];
					}else{
						return null;
				}
			}else{
				return null;
		}
	}*/


	//echo getCodServicio('127.0.0.1');

?>
