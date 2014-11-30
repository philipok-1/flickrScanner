// get photo info

//api_key=aaebf33764521f4c6bf19716da24b6fd

var output

function getResult(res){

//d=document.createElement("div");

//$(d).html(res).appendTo($("#pictures"));
output= res;

return output;


}


function getInfo(id, secret, callback){

var url="http://api.flickr.com/services/rest/?method=flickr.photos.getInfo&photo_id="+id+"&secret="+secret+"&api_key=aaebf33764521f4c6bf19716da24b6fd&format=json&jsoncallback=?";

  $.getJSON(url,

                    function (data) {
callback(data)
})
}
//.done(function(){getResult(output.photo.title._content)});
