
var chk=0; 

//배우미 추가
$(document).on("click", "button[id=newLearn]", function() {
	
	if(chk>0)
		$('#application > tbody:last > tr:last > td:last').remove();

	$('#application')
	var add='<tr><td></td>'
	+ '<td><input style="margin-left: 20px;" type="text" name="nameL" list="nameList"></td>'
	+ '<td><input style="margin-left: 20px;" type="text" name="nameL" list="nameList"></td>'
	+ '<td><input style="margin-left: 20px;" type="text" name="nameL" list="nameList"></td>'
	+ '<td><input style="margin-left: 20px;" type="text" name="nameL" list="nameList"></td>'
	+ '<td style="width: 8%"><button id="delLearn" class="btn btn-danger btn1" type="button">삭제</button></td></tr>';

	chk++;
    $('#application > tbody:last').append(add);
 
  });

//배우미 삭제
$(document).on("click", "button[id=delLearn]", function(){
	chk--;
	var add='<td style="width: 8%"><button id="delLearn" class="btn btn-danger btn1" type="button">삭제</button></td>';
	$('#application > tbody:last > tr:last').remove();
	if(chk>0)
		$('#application > tbody:last > tr:last').append(add);
});

var mptNum=0; //현재 mpt 수
//신청하기
$(document).on("click", "button[id=newMPT]", function(){
	if($("#subject").val()==='')
		alert("과목을 입력해주세요")
	else if($("input[name=nameL]:first").val()==='')
		alert("첫번째 배우미를 입력해주세요");
	else{
		mptNum++;
		var index=0;
		var subject=$('#subject').val();
		var learner='';
		var helper="21홍지민"
		while(index<(4*chk+4)){
			if($("input[name=nameL]:eq("+index+")").val()!=='')
				learner+=$("input[name=nameL]:eq("+index+")").val()+' ';
			index++;
		}
		var add='<tr name="assigned" class="list">'
		+ '<th>'+ mptNum +'</th>'
		+ '<td>'+ subject+ '</td>'
		+ '<td>'+ helper +'</td>'
		+ '<td>'+ learner +'</td>'
		+ '<td class="tBut"><button name="delMpt" class="btn btn-outline-danger" type="button">취소/변경</button></td>'
		+ '</tr>';
		$('#teachTable > tbody:last').append(add);
		$('form[name=assign]')[0].reset();
	}
});

$(document).on("click", "button[name=delMpt]", function(){
	$(this).parents("tr").remove();
	mptNum--;
	$("tr[name=assigned]").each(function(index){
		$(this).children("th").text(index+1);
	});
});