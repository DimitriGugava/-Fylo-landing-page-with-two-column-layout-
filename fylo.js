// document.querySelector(".getstartedbutton").addeEventListener("click", function(){

// }

function validate() {
  var mail = document.getElementsByClassName("enteryouremailbox").value;

  //   regular expression
  let regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;

  if (regx.test(mail)) {
    alert("Valid email");
    return true;
  } else {
    document.querySelector("getstartedbutton");
    alert("Please check your email");
    return false;
  }
}
// (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))

// ([a-zA-Z0-9\.]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
