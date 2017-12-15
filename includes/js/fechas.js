
	function getMondayJSON(d) {
		//Obtiene el string de la fecha lunes a partir de la fecha actual
		var d = new Date(d);
		var day = d.getDay();
		var diff = d.getTime() - (day * 86400000) + (day == 0 ? -(6 * 86400000) : 86400000); // adjust when day is sunday
		var dd = new Date(diff).getDate() < 10 ? '0'+new Date(diff).getDate() : new Date(diff).getDate();
		var mm = parseInt(new Date(diff).getMonth())+parseInt(1) < 10 ? '0'+(parseInt(new Date(diff).getMonth())+parseInt(1)) : parseInt(new Date(diff).getMonth())+parseInt(1);
		var y = new Date(diff).getFullYear();
		return {'year' : y, 
				'month' : mm,
				'day' : dd
				};
	}

	function getFridayJSON(fromMondayJSON) {
		var date = new Date(fromMondayJSON.year, fromMondayJSON.month-1, fromMondayJSON.day);
		var newdate = new Date(date.getTime()+(4 * 86400000));
		var dd = (newdate.getDate() < 10 ? '0'+newdate.getDate() : newdate.getDate());
		var mm = (newdate.getMonth() < 9 ? '0'+ (newdate.getMonth() + 1) : newdate.getMonth()+1);
		var y = newdate.getFullYear();
		return {'year' : y, 
				'month' : mm,
				'day' : dd
				};
	}

	function getNextDayJSON(anyDayOfWeekDate){
		var newdate = new Date(anyDayOfWeekDate);
		newdate = new Date(newdate.getTime() + 86400000);
		var dd = (newdate.getDate() < 10 ? '0'+newdate.getDate() : newdate.getDate());
		var mm = (newdate.getMonth() < 9 ? '0'+(newdate.getMonth()+1) : (newdate.getMonth()+1));
		var y = newdate.getFullYear();
		return {'year' : y, 
				'month' : mm,
				'day' : dd
				};
	}

	function getNextMondayJSON(anyDayOfWeekDate){
		//recibe cualquier un dia de la semana actual y devuelve el string del dia lunes de la sigte semana
		var date = new Date(anyDayOfWeekDate.year, anyDayOfWeekDate.month-1, anyDayOfWeekDate.day);
		var newdate = getMondayDate(date);
		newdate = new Date(newdate.getTime()+(7 * 86400000));
		var dd = newdate.getDate() < 10 ? '0'+newdate.getDate() : newdate.getDate();
		var mm = newdate.getMonth() < 9 ? '0'+(newdate.getMonth()+1) : newdate.getMonth()+1;
		var y = newdate.getFullYear();
		return {'year' : y, 
				'month' : mm,
				'day' : dd
				};
	}

	function getMondayDate(d) {
		//Obtiene el objeto date de la fecha lunes a partir del objeto date(F) con una fecha F='YYYY,MM,DD'
		var d = new Date(d);
		var day = d.getDay(),
		diff = d.getTime() - (day * 86400000) + (day == 0 ? -(6 * 86400000): 86400000); // adjust when day is sunday
		return new Date(diff);
	}

	function get_json_from_date(date){
		var dd = (date.getDate() < 10 ? '0'+date.getDate() : date.getDate());
		var mm = (date.getMonth() < 9 ? '0'+(date.getMonth()+1) : (date.getMonth()+1));
		var y = date.getFullYear();
		return {'year' : y, 
				'month' : mm,
				'day' : dd
				};
	}

	function fechaValida(id){
		// valida fechas con el formato dd/mm/yyyy
		var x = $("#"+id).val();
		var comp = x.split('/');
		var d = parseInt(comp[0], 10);
		var m = parseInt(comp[1], 10);
		var y = parseInt(comp[2], 10);
		var date = new Date(y,m-1,d);
		if (date.getFullYear() == y && date.getMonth() + 1 == m && date.getDate() == d) {
				return true;
			} else {
				return false;
		}
	}

	function numeroDia(dd_mm_yyyy){
		var comp = yyyy_mm_dd.split('-');
		var d = parseInt(comp[0], 10);
		var m = parseInt(comp[1], 10);
		var y = parseInt(comp[2], 10);
		var date = new Date(y,m-1,d);
		return date.getDay();
	}

	function stringToDate(dd_mm_yyyy){
		var comp = dd_mm_yyyy.split('-');
		var d = parseInt(comp[0], 10);
		var m = parseInt(comp[1], 10);
		var y = parseInt(comp[2], 10);
		var date = new Date(y,m-1,d);
		return date;
	}
