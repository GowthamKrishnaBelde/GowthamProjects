function sub() {
    var state=document.getElementById("S1").value;
    var Constituency=document.getElementById("S2").value;
    var a = state+Constituency;
    $.ajax({
  				type:"GET",
  				url:"data1/"+a+".csv",
  				dataType:"text",
  				success: function(data) {
  					processData(data);
  				}
  			});
}
function processData(data){
	refinedata=data.split(/\r\n|\n/);
  Constituency=[];
  party=[];
  votes=[];
  for(var i=0;i<refinedata.length;i++)
  {
    var refined =refinedata[i].split(',');
    Constituency.push(refined[0]);
    party.push(refined[1]);
    votes.push(refined[2]);
  }
  var data = [
  {
    x: Constituency,
    y: votes,
    marker : {	color:['red','blue','green','yellow','orange','grey']	},
    type: 'bar'
  }
];

Plotly.newPlot('myDiv', data);
}