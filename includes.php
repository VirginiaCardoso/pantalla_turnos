<?php

	//Esto espara devolverlo a como estaba antes:
	// 0 = no embeber código, 1 = embeber js y css en el fuente solicitante
	$embeberCodigo = 0;
	
	// lo sigte aplica a bootstrap, jquery (afecta a la performance de la red)
	$cachearLibsComunes=0;

	function incluirJS($path=null){
		global $embeberCodigo;
		if ($path!=null){
			if (file_exists($path)){
				if ($embeberCodigo){
						echo '<script type="text/javascript">'.file_get_contents($path).'</script>';
					}else{
						echo '<script src="'.$path.'"></script>';
				}
			}
		}
	}

	function incluirCSS($path=null){
		global $embeberCodigo;
		if ($path!=null){
			if (file_exists($path)){
				if ($embeberCodigo){
						echo '<style type="text/css">'.file_get_contents($path).'</style>';
					}else{
						echo '<link rel="stylesheet" type="text/css" href="'.$path.'">';
				}
			}
		}
	}

	incluirJS("../../includes/jquery/1.11.1/jquery.min.js");
	incluirJS("../../includes/bootstrap-3.3.7-dist/js/bootstrap.min.js");
	incluirCSS("../../includes/bootstrap-3.3.7-dist/css/bootstrap.min.css");
	incluirJS("../includes/jquery-ui-1.11.4/jquery-ui.js");
	incluirCSS("../includes/jquery-ui-themes-1.11.4/themes/smoothness/jquery-ui.css");
	//incluirJS("../includes/bootstrap-select-1.10.0/dist/js/bootstrap-select.js");
	//incluirJS("../includes/bootstrap-select-1.10.0/dist/js/i18n/defaults-es_CL.min.js");
	//incluirCSS("../includes/bootstrap-select-1.10.0/dist/css/bootstrap-select.css");	
?>

		<!-- librarias comunes que deben estar en todos lso modulos -->	
		<!--	<script src="../../includes/jquery/1.11.1/jquery.min.js"></script>
			<script src="../../includes/bootstrap-3.3.7-dist/js/bootstrap.min.js"></script>
			<link rel="stylesheet" href="../../includes/bootstrap-3.3.7-dist/css/bootstrap.min.css">
			<script src="../includes/jquery-ui-1.11.4/jquery-ui.js"></script>
			<link href="../includes/jquery-ui-themes-1.11.4/themes/smoothness/jquery-ui.css" rel="stylesheet" type="text/css">
			<script src="../includes/bootstrap-select-1.10.0/dist/js/bootstrap-select.js"></script>
			<script src="../includes/bootstrap-select-1.10.0/dist/js/i18n/defaults-es_CL.min.js"></script>
			<link rel="stylesheet" type="text/css" href="../includes/bootstrap-select-1.10.0/dist/css/bootstrap-select.css"> -->
		<!-- librarias comunes que deben estar en todos lso modulos -->
