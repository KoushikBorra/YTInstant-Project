$(document).ready(function(){

$("#searchBar").keyup(function(){
	$("#videoControl").replaceWith('<iframe id="videoControl" src = "https://www.youtube.com/embed/68TLDwtxmvM" ></iframe>');
	$("#myText").html(document.getElementById("searchBar").value);
	$("#linkBackGround").replaceWith('<input type="text" id="linkBackGround" placeholder = "http://ytinstant.com/#'+document.getElementById("searchBar").value+'" spellcheck="false">');
});

});