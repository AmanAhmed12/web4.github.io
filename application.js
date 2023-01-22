function display() {
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let dob = document.getElementById("dob").value;
  let mail = document.getElementById("mail").value;
  let tel = document.getElementById("tel").value;
  let streetaddr = document.getElementById("streetaddr").value;
  let streetaddr2 = document.getElementById("streetaddr2").value;
  let city = document.getElementById("city").value;
  let region = document.getElementById("region").value;
  let postal = document.getElementById("postal").value;
  let occupation = document.getElementById("occupation").value;
  let bloodgroup = document.getElementById("bloodgroup").value;
  let donate = document.getElementsByName("donate");
  let disease = document.getElementsByName("disease");
  let allergies = document.getElementsByName("allergies");

  document
    .getElementById("display")
    .insertAdjacentHTML(
      "beforeend",
      "<p><span>First Name :</span>  " + fname + "</p>"
    );
  document
    .getElementById("display")
    .insertAdjacentHTML(
      "beforeend",
      "<p><span>Last Name : </span> " + lname + "</p>"
    );
  document
    .getElementById("display")
    .insertAdjacentHTML("beforeend", "<p><span>DOB : </span> " + dob + "</p>");
  document
    .getElementById("display")
    .insertAdjacentHTML(
      "beforeend",
      "<p><span>E-mail : </span> " + mail + "</p>"
    );
  document
    .getElementById("display")
    .insertAdjacentHTML(
      "beforeend",
      "<p><span>Mobile : </span> " + tel + "</p>"
    );
  document
    .getElementById("display")
    .insertAdjacentHTML(
      "beforeend",
      "<p><span>Street Adrress :</span>  " + streetaddr + "</p>"
    );
  document
    .getElementById("display")
    .insertAdjacentHTML(
      "beforeend",
      "<p><span>Street Adrress :</span>  " + streetaddr2 + "</p>"
    );
  document
    .getElementById("display")
    .insertAdjacentHTML(
      "beforeend",
      "<p><span>City : </span> " + city + "</p>"
    );
  document
    .getElementById("display")
    .insertAdjacentHTML(
      "beforeend",
      "<p><span>Region :</span>  " + region + "</p>"
    );
  document
    .getElementById("display")
    .insertAdjacentHTML(
      "beforeend",
      "<p><span>Postal code : </span> " + postal + "</p>"
    );
  document
    .getElementById("display")
    .insertAdjacentHTML(
      "beforeend",
      "<p><span>Occupation : </span> " + occupation + "</p>"
    );
  document
    .getElementById("display")
    .insertAdjacentHTML(
      "beforeend",
      "<p><span>Blood type :</span>  " + bloodgroup + "</p>"
    );

  for (i = 0; i < donate.length; i++) {
    if (donate[i].checked) {
      document
        .getElementById("display")
        .insertAdjacentHTML(
          "beforeend",
          "<p><span>ever donated blood before : </span>  " +
            donate[i].value +
            "</p>"
        );
    }
  }
  for (i = 0; i < disease.length; i++) {
    if (disease[i].checked) {
      document
        .getElementById("display")
        .insertAdjacentHTML(
          "beforeend",
          "<p><span>Suffering from any diseases : </span> " +
            disease[i].value +
            "</p>"
        );
    }
  }
  for (i = 0; i < allergies.length; i++) {
    if (allergies[i].checked) {
      document
        .getElementById("display")
        .insertAdjacentHTML(
          "beforeend",
          "<p><span>Any allergies :  </span> " + allergies[i].value + "</p>"
        );
    }
  }
}

function erase() {
  document.getElementById("fname").value = "";
  document.getElementById("lname").value = "";
  document.getElementById("dob").value = "";
  document.getElementById("mail").value = "";
  document.getElementById("tel").value = "";
  document.getElementById("streetaddr").value = "";
  document.getElementById("streetaddr2").value = "";
  document.getElementById("city").value = "";
  document.getElementById("region").value = "";
  document.getElementById("postal").value = "";
  document.getElementById("occupation").value = "";
  document.getElementById("bloodgroup").value = "";
  document.getElementById("radiobt1").checked = "";
  document.getElementById("radiobt2").checked = "";
  document.getElementById("radiobt3").checked = "";
  document.getElementById("radiobt4").checked = "";
  document.getElementById("radiobt5").checked = "";
  document.getElementById("radiobt6").checked = "";
  document.getElementById("display").innerHTML = "";
}
