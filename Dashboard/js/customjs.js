(function (){
	
	var app=angular.module('myApp',[]);
	app.controller('MyController',['$scope',myController]);
	
	var excelJsonObj =[];
	
	function myController($scope){
		$scope.uploadExcel = function(){
			var myFile = document.getElementById('file');
			var input = myFile;
			var reader =new FileReader();
			reader.onload = function(){
				var fileData = reader.result;
				var workbook = XLSX.read(fileData, {type: 'binary'});
				workbook.SheetNames.forEach(function(sheetName){
					var rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
				    excelJsonObj = rowObject;
				});
				
				for(var i=0; i < excelJsonObj.length; i++){
					
					var data = excelJsonObj[i];
					
					$('#myTable tbody:last-child').append("<tr><td>"+data.SNO+"</td><td>"+data.STATE+"</td><td>"+data.TOTAL_CASES+"</td><td>"+data.CURED_CASES+"</td><td>"+data.DEATH_CASES+"</td></tr>");
				}
				
				
			};
			
			reader.readAsBinaryString(input.files[0]);
		};
	}
})();