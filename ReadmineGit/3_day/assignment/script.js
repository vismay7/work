function initiate() {
  var saveButton = document.getElementById("save");
  saveButton.addEventListener("click", saveItem);
}

function saveItem() {
  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;
  var gender = document.getElementById("gender").value;
  var desi = document.getElementById("desi").value;
  var salary = document.getElementById("salary").value;
  var location = document.getElementById("location").value;
  var email = document.getElementById("email").value;
  var doj = document.getElementById("doj").value;
  var contnum = document.getElementById("contnum").value;

  var data = [
    { name: name },
    { age: age },
    { gender: gender },
    { desi: desi },
    { salary: salary },
    { location: location },
    { email: email },
    { doj: doj },
    { contnum: contnum },
  ];
  var test = JSON.stringify(data);
  sessionStorage.setItem(name, test);
  localStorage.setItem(name, test);
}

function onSubmit() {}
addEventListener("load", initiate);
