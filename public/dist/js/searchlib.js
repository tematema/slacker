var liveurl="/api?q=",searchurl="/api?q=",Search={liveSearch:function(e){return $(".content_ul").empty(),0==e.length?void $(".searchresult").css({display:"none"}):void $.ajax({dataType:"JSON",type:"get",url:liveurl+e,error:function(){$(".errorlog").empty(),$(".errorlog").append("Server is not responding.")},success:function(e){return e=$.parseJSON(JSON.stringify(e)),""==e?($(".searchresult").css({display:"none"}),void $(".searchresult_ul").empty()):($(".searchresult_ul").empty(),$(".searchresult").css({display:"block"}),void $.each(e,function(e,a){if(a.vacancy[e]==a.vacancy[e++]&&console.log(a.vacancy+" has same results"),null!==a.vacancy&&(Start=a.vacancy.substring(0,$("#searchText").val().length),End=a.vacancy.substring($("#searchText").val().length,a.vacancy.length),$("#searchText").val().toLowerCase()==Start.toLowerCase())){var r="<li>"+Start+End.bold()+"</li>";$(".searchresult_ul").append(r)}}))}})},simpleSearch:function(e){0!=e.length&&(changeState(1),$.ajax({dataType:"JSON",type:"get",url:liveurl+e,error:function(){$(".errorlog").empty(),$(".errorlog").append("Server is not responding.")},success:function(e){e=$.parseJSON(JSON.stringify(e)),""!=e&&($(".content_ul").empty(),$("content").css({display:"block"}),$.each(e,function(e,a){var r='<li><div class = "vacancy">'+a.vacancy+'</div><div class = "description"> Условия работы: '+a.text+"<br> Телефон: "+a.tel+"</div></li>";$(".content_ul").append(r)}))}}))}};$("#search").on("click",function(){var e=$(this).val();Search.simpleSearch(e)}),$(".searchresult").on("click",".searchresult_ul li",function(){var e=$(this).text(),a="?search="+e;$("#searchText").val(e),Search.simpleSearch(e),History.pushState(null,null,a)}),$("#searchText").on("input",function(){var e=$(this).val();Search.liveSearch(e)}),$("#searchText").on("keydown",detectKeys);