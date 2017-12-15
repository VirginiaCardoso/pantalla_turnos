<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="author" content="HMABB">
	<meta charset="utf-8"/>

    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">

    <script type="text/javascript" async="" src="includes/js/clima.js"></script>
	
	<title>Hospital Municipal de Agudos | Llamada turnos</title>

  </head>
  <body class="">

    <div class="container-fluid">
	<div class="row banner blanco">
		<div class="col-md-6">
			<img id="logo" alt="Hospital Municipal Bahía Blanca" src="../../imgs/logo-2015.png">
		</div>
		<div class="col-md-6">
			<div class="row">
				<div class="col-md-12"><!--  8"> -->
					<p class="text-right lead text-info">
						Bahía Blanca
						<br>
						<?php 
							date_default_timezone_set('America/Buenos_Aires');
							$dias = array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
							$meses = array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
	 						echo $dias[date('w')]." ".date('d')." de ".$meses[date('n')-1];/*. " del ".date('Y') ;*/
							?>
						<br>
						<?php echo date('h:i')." hs"; ?>
					</p>
				</div>
				<!--<div class="col-md-4 ">
					<p class="text-right text-info lead"> 
						<img id="icon-hoy" src="">
						<div class="text-right text-info lead">
							<div id="temp-hoy"></div>
							<div class= "descrip" id="descripcion-hoy"></div>
						</div>
					</p>
				</div> -->
			</div>
		</div>
	</div>
	<div class="row filaraya ">
		<div class="col-md-12 raya ">
		</div>
	</div>
	<div class="row ">
		<div class="col-md-12" id="ultimo_llamado">
			
				<div class="row ">
					<div class="col-md-6 box_azul div_pac">
						<p class="letra">
							CARDOSO
							<br>
							VIRGINIA
							<br>
							CLINICA Medica
						</p>

					</div>
					<div class="col-md-2 box_azul div_cons">
						CONSULT 1
						Pasillo 2
					</div>
				
			</div>
		</div>
		<!--<div class="col-md-4">
				Ultimos llamados
		</div> -->
	</div>
</div>

    <script src="js/jquery.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/scripts.js"></script>
    <script >buscar();</script>
  </body>
</html>