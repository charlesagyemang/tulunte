$("#logout").unbind("click").click(function(){
  // alert("heyyyy");
  // console.log("hehhehe");
  localStorage.clear();
  location.href = "/";
})
