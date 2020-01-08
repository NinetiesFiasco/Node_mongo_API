var $show;

$(()=>{
  $("#bAdd").click(addData);
  $("#getAll").click(showData);  
  $("#bRedact").click(redactData);
  $show = $("#showBlock");
  showData();
}); 

var addData = ()=>{
  let sendObj = {
    first: $("#new").val(),
    second: $("#new2").val(),
    third: $("#new3").val()
  };
  
  $.ajax({
    method: "POST",
    url: "/obj/add",
    data: JSON.stringify(sendObj),
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: (data)=>{
      showData();
    }
  });
}
var redactData = ()=>{
  let sendObj = {
    first: $("#redact").val(),
    second: $("#redact2").val(),
    third: $("#redact3").val()
  };
  
  $.ajax({
    method: "PUT",
    url: "/obj/update/"+$("#redactID").val(),
    data: JSON.stringify(sendObj),
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: (data)=>{
      showData();
    }
  });
}

var showData = ()=>{
  $.ajax({
    method: "GET",
    url: "/obj/getAll",
    dataType: "json",
    success: (response)=>{
      var data = response.data;
      var table = "<table class='coolTab'>";      
      for (var i=0;i<data.length;i++)      
        table+= "<tr>"+
          "<td class='first'>"+data[i].first+"</td>"+
          "<td class='second'>"+data[i].second+"</td>"+
          "<td class='third'>"+data[i].third+"</td>"+
          "<td><input type='button' value='Удалить' class='deleteThisShit' data-id='"+data[i]._id+"'/></td>"+
          "<td><input type='button' value='Редактировать' class='redactThisShit' data-id='"+data[i]._id+"'/></td>"+
          "</tr>";
      table += "</table>";
      $show.html(table);

      $(".deleteThisShit").click(function(){
        $.ajax({
          method: "DELETE",
          url: "/obj/delete/"+$(this).attr("data-id"),
          dataType: "json",
          success: (data)=>{
            showData();
          }
        });
      });

      $(".redactThisShit").click(function(){
        var $tr = $(this).parent().parent();
        var first = $('.first',$tr).first().text();
        var second = $('.second',$tr).first().text();
        var third = $('.third',$tr).first().text();
        
        $('#redact').val(first);
        $('#redact2').val(second);
        $('#redact3').val(third);

        $('#redactID').val($(this).attr("data-id"));
      });
    }
  });
}

