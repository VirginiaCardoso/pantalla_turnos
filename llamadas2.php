<!doctype html>
			<html>
				<head>
					<link href='../../imgs/favicon.png' rel='icon' type='image/png'/>
					<meta name="viewport" content="width=device-width,initial-scale=1">
					<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
					<link rel="icon" href="imgs/favicon.icon" type="image/x-icon" />
					<link rel="stylesheet" type="text/css" href="css/llamadas_turnos.css">
					<?php include('includes.php'); ?>
					<script type="text/javascript" async="" src="includes/js/clima.js"></script>	
					<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC3b6B7uatf3Z8Lzh-jyR2Hbg4RWsKqnPo"></script>

					<meta charset="utf-8"/>
					<title>Hospital Municipal de Agudos | Llamada turnos</title>
				</head>
				
				<body>
					<div>
						<div class="contenedor">
							<div class="row blanco banner">
								<div class="div_mitad">
									<img src="../../imgs/logo-2015.png" class="logoBanner">
								</div>
								<div class="div_mitad">
									<div class="tempDerecha">
										<img id="icon-hoy" src="">
										<div class="temp">
											<div id="temp-hoy"></div>
											<div class= "descrip" id="descripcion-hoy"></div>
										</div>
									</div>
									<div class="puesto">
											<p>Bahía Blanca
												<br>
												<?php 
													date_default_timezone_set('America/Buenos_Aires');
													/*setlocale(LC_ALL,"es_ES");
													echo strftime("%A %d de %B del %Y");*/

													$dias = array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
													$meses = array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
		 											echo $dias[date('w')]." ".date('d')." de ".$meses[date('n')-1];/*. " del ".date('Y') ;*/
													?>
												<br>
												<?php echo date('h:i')." hs"; ?></p>
									</div>
									
								</div>
							</div>
							<div class="row">
								<div class="col-lg-12 raya"></div>					
							</div>
							<div id="principal" >
								<div id="ultimo_llamado">
									CARDOSO VIRGINIA
								</div>
								<div id="mini_pool" >
									llamadas
								</div>
								
							</div>
						</div>
					</div>
					<script >buscar();</script>
				</body>
			</html>