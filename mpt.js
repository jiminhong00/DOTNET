
var chk=0; 

$(document).on("click", "button[id=newLearn]", function() {
	
	if(chk>0)
		$('#application > tbody:last > tr:last > td:last').remove();

	$('#application')
	var add='<tr><td></td>'
	+ '<td><input style="margin-left: 20px;" type="text" id="name" list="nameList"></td>'
	+ '<td><input style="margin-left: 20px;" type="text" id="name" list="nameList"></td>'
	+ '<td><input style="margin-left: 20px;" type="text" id="name" list="nameList"></td>'
	+ '<td><input style="margin-left: 20px;" type="text" id="name" list="nameList"></td>'
	+ '<td style="width: 8%"><button id="delLearn" class="btn btn-danger btn1" type="button">삭제</button></td>';

	chk++;
    $('#application > tbody:last').append(add);
 
  });

$(document).on("click", "button[id=delLearn]", function(){
	chk--;
	var add='<td style="width: 8%"><button id="delLearn" class="btn btn-danger btn1" type="button">삭제</button></td>';
	$('#application > tbody:last > tr:last').remove();
	if(chk>0)
		$('#application > tbody:last > tr:last').append(add);
})

