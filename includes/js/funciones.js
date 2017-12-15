	//parseFloat(json[i].PRECIO).formatMoney(2, ',', '.')
	// c = cant decimales
	// d = simbolo decimal
	// t = simbolo millar
	Number.prototype.formatMoney = function(c, d, t){
	var n = this, 
		c = isNaN(c = Math.abs(c)) ? 2 : c, 
		d = d == undefined ? "." : d, 
		t = t == undefined ? "," : t, 
		s = n < 0 ? "-" : "", 
		i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", 
		j = (j = i.length) > 3 ? j % 3 : 0;
		return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
	};

	function horaValida(h){
		if (h!=null && h!=""){
			if ((h.match(/:/g) || []).length==1){
					var hora = parseInt(h.split(':')[0]);
					var min = parseInt(h.split(':')[1]);
					return (0<=hora && hora<24 && 0<=min && min<60);
				}else{
					return false;
			}
		}
	}

	function fechaValida(x){
		// valida fechas con el formato dd/mm/YYYY
		var comp = x.split('/');
		var y = parseInt(comp[2], 10);
		var m = parseInt(comp[1], 10);
		var d = parseInt(comp[0], 10);
		var date = new Date(y,m-1,d);
		if (date.getFullYear() == y && date.getMonth() + 1 == m && date.getDate() == d) {
			return true;
		} else {
			return false;
		}
	}

	function fechaToDMAslashes(f){ //	AAAA-MM-DD => DD/MM/AAAA
		if (f!=null){
				var d = f.split('-')[2];
				var m = f.split('-')[1];
				var a = f.split('-')[0];
				return d+'/'+m+'/'+a;
			}else{
				return null;
		}
	}

	function fechaToDB(f){	//	DD/MM/AAAA => AAAA-MM-DD
		if (f!=null){
				var d = f.split('/')[0];
				var m = f.split('/')[1];
				var a = f.split('/')[2];
				return a+'-'+m+'-'+d;
			}else{
				return null;
		}
	}

	function getUrlParameter(sParam) {
		var sPageURL = decodeURIComponent(window.location.search.substring(1)),
			sURLVariables = sPageURL.split('&'),
			sParameterName,
			i;

		for (i = 0; i < sURLVariables.length; i++) {
			sParameterName = sURLVariables[i].split('=');

			if (sParameterName[0] === sParam) {
				return sParameterName[1] === undefined ? true : sParameterName[1];
			}
		}
	};
	
	function getHoyDMA(){ // devuelve DD/MM/AAAA
		var x = new Date();
		var d = (parseInt(x.getDate()) < 10 ? '0'+x.getDate() : parseInt(x.getDate()));
		var m = (parseInt(parseInt(x.getMonth())+1) < 10 ? '0'+parseInt(parseInt(x.getMonth())+1) : parseInt(parseInt(x.getMonth())+1));
		var a = x.getFullYear();
		return d+'/'+m+'/'+a;
	}

	window.alert = function(message) { $(document.createElement('div'))
				.attr({
						title: 'Mensaje',
						'class': 'alert'
					})
					.html(message)
					.dialog({
						buttons: {
							"cerrar": function() {
									$(this).dialog('close');
								}
							},
							close: function() {
								$(this).remove();
							},
						modal: true,
						resizable: false,
						width: 'auto'
					});
			};

	window.success = function(message) { 
				// requiere customDialog-messages.css
				var x = document.createElement('div');
				$(x).attr('id','customDialog');
				$(x).attr({
						title: 'Operación exitosa',
						'class': 'alert'
					})
					.html(message)
					.dialog({
						buttons: {
							"cerrar": function() {
									$(this).dialog('close');
								}
							},
							close: function() {
								$(this).remove();
							},
						modal: true,
						//dialogClass: 'rojoFuria',
						resizable: false,
						minWidth: 450,
						width: 'auto',
						heigth: 'auto'
					});
					setCustomMessage('success');
			};

	window.warning = function(message) {
				// requiere customDialog-messages.css
				var x = document.createElement('div');
				$(x).attr('id','customDialog');
				$(x).attr({
						title: 'Advertencia',
						'class': 'alert'
					})
					.html(message)
					.dialog({
						buttons: {
							"cerrar": function() {
									$(this).dialog('close');
								}
							},
							close: function() {
								$(this).remove();
							},
						modal: true,
						//dialogClass: 'rojoFuria',
						resizable: false,
						minWidth: 450,
						width: 'auto',
						heigth: 'auto'
					});
					setCustomMessage('warning');
			};

	window.error = function(message) {
				// requiere customDialog-messages.css
				var x = document.createElement('div');
				$(x).attr('id','customDialog');
				$(x).attr({
						title: 'Error',
						'class': 'alert'
					})
					.html(message)
					.dialog({
						buttons: {
							"cerrar": function() {
									$(this).dialog('close');
								}
							},
							close: function() {
								$(this).remove();
							},
						modal: true,
						//dialogClass: 'rojoFuria',
						resizable: false,
						minWidth: 450,
						width: 'auto',
						heigth: 'auto'
					});
					setCustomMessage('error');
			};

	function mensajeError(message){
		error(message);
	}

	function setCustomMessage(tipo){
		$('div[aria-describedby="customDialog"] .ui-widget').addClass('ui-widget-custom_Dialog');
		$('div[aria-describedby="customDialog"] .ui-widget').removeClass('ui-widget');
		
		$('div[aria-describedby="customDialog"] .ui-widget-content').addClass('ui-widget-content-custom_Dialog');
		$('div[aria-describedby="customDialog"] .ui-widget-content').removeClass('ui-widget-content');
		
		$('div[aria-describedby="customDialog"] .ui-dialog').addClass('ui-dialog-custom_Dialog');
		$('div[aria-describedby="customDialog"] .ui-dialog').removeClass('ui-dialog');
		
		$('div[aria-describedby="customDialog"] .ui-dialog .ui-dialog-content').addClass('ui-dialog-content-custom_Dialog');
		$('div[aria-describedby="customDialog"] .ui-dialog .ui-dialog-content').removeClass('ui-dialog-content');
		
		switch(tipo){
			case 'error' : 	$('div[aria-describedby="customDialog"] .ui-widget-header').addClass('ui-widget-header-custom_DialogError');
						$('div[aria-describedby="customDialog"] .ui-widget-header').removeClass('ui-widget-header');
					break;
			case 'warning' : $('div[aria-describedby="customDialog"] .ui-widget-header').addClass('ui-widget-header-custom_DialogWarning');
						$('div[aria-describedby="customDialog"] .ui-widget-header').removeClass('ui-widget-header');
					break;
			case 'success' : $('div[aria-describedby="customDialog"] .ui-widget-header').addClass('ui-widget-header-custom_DialogSuccess');
						$('div[aria-describedby="customDialog"] .ui-widget-header').removeClass('ui-widget-header');
					break;
			case 'confirm' : $('div[aria-describedby="customDialog"] .ui-widget-header').addClass('ui-widget-header-custom_DialogConfirm');
						$('div[aria-describedby="customDialog"] .ui-widget-header').removeClass('ui-widget-header');
					break; 
		}
		
		$('div[aria-describedby="customDialog"] .ui-dialog .ui-dialog-titlebar').addClass('ui-dialog-titlebar-custom_Dialog');
		$('div[aria-describedby="customDialog"] .ui-dialog .ui-dialog-titlebar').removeClass('ui-dialog-titlebar');

		//$('div[aria-describedby="customDialog"] .ui-widget-overlay').addClass('ui-widget-overlay-custom_dialog');
		//$('.ui-widget-overlay').addClass('ui-widget-overlay-custom_dialog');
		//$('div[aria-describedby="customDialog"] .ui-widget-overlay-custom_dialog').removeClass('ui-widget-overlay');
	}

	//$('div[aria-describedby="customDialog"]').

	// requiere customDialog-messages.css
	function confirma(message,funcionOyente,args) {
		//Uso: confirma('mensaje', funcionAejecutar, ["arg1","arg2","arg3",....]);
		//confirma('esta seguro?', mostrarHola, ["Juanchotazo"]);
		var x = document.createElement('div');
		$(x).attr('id','customDialog');
		$(x).attr({
				title: 'Mensaje de Confirmación',
				'class': 'alert'
			})
			.html(message)
			.dialog({
				buttons: {
					"Sí": function() {
							funcionOyente.apply(this,args);
							$(this).dialog('close');
					},
					"No": function() {
							$(this).dialog('close');
						}
					},
					close: function() {
						$(this).remove();
					},
				modal: true,
				//dialogClass: 'rojoFuria',
				resizable: false,
				minWidth: 400,
				heigth: 'auto',
				width: 'auto'
			});
			setCustomMessage('confirm');
	}

	function getFileExtension(filename){
		return filename.substr(filename.lastIndexOf('.')+1);
	}
	
	function mostrarImagenEmergente(path){
		alert('<a href="'+path+'" target="_blank"><img src="'+path+'" height="500"></a>');
	}

	function mostrarDocOffice(path){
		alert('<object height="500" width="900" src="'+path+'"><embed height="500" width="900" src="'+path+'"></embed></object> \
				<br><a href="'+path+'" target="_blank"><span class="glyphicon glyphicon-floppy-disk"></span> Descargar Contenido</a>');
	}

	function mostrarAudioEmergente(path){
		var ext = getFileExtension(path).toLowerCase();
		alert('<audio controls> \
					<source src="'+path+'" type="audio/'+ext+'"> \
				Your browser does not support the audio element. \
				</audio> \
				<br><a href="'+path+'" target="_blank"><span class="glyphicon glyphicon-floppy-disk"></span> Descargar Contenido</a>');
	}

	function mostrarVideoEmergente(path){
		var ext = getFileExtension(path).toLowerCase();
		alert('<video width="640" height="480" controls> \
					<source src="'+path+'" type="video/'+ext+'"> \
				Your browser does not support the audio element. \
				</video> \
				<br><a href="'+path+'" target="_blank"><span class="glyphicon glyphicon-floppy-disk"></span> Descargar Contenido</a>');

	}


	function dialogVisualizarArchivo(path){
		var ext = getFileExtension(path).toLowerCase();
		switch (ext){
			// archivo de imagen
			case 'png' : 
			case 'jpg' : 
			case 'jpeg' : 
			case 'bmp' : 
			case 'gif' : mostrarImagenEmergente(path);
					break;
			//documentos de office y Open Office y PDF
			case 'doc' : 
			case 'docx' : 
			case 'xls' : 
			case 'xlsx' : 
			case 'ppt' : 
			case 'pptx' : 
			case 'odt' : 
			case 'ods' : 
			case 'odp' : 
			case 'pdf' : mostrarDocOffice(path);
					break;
			// audio
			case 'mp3' : 
			case 'wav' : 
			case 'ogg' : mostrarAudioEmergente(path);
					break;
			// video
			case 'mkv' : 
			case 'mp4' : 
			case 'avi' : mostrarVideoEmergente(path);
					break;
			default: mostrarDocOffice(path);
		}
	}

	function imgError(image) {
		image.onerror = "";
		image.src = "imgs/errorImage2.png";
		return true;
	}

	/*$("<img/>")
    .on('load', function() { console.log("image loaded correctly"); })
    .on('error', function() { console.log("error loading image"); })
    .attr("src", $(originalImage).attr("src"));
    */