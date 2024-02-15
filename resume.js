console.log("script are working");

// Add more Input--->

let addmore1 = document.querySelector(".edubtn");
let addmore2 = document.querySelector(".expbtn");
let addmore3 = document.querySelector(".skillbtn");

function eduadd(e) {
  // console.log("edu");
  let newNode = document.createElement("textarea");
  newNode.classList.add("eduField");
  newNode.setAttribute("rows", 4);
  let div = document.querySelector(".edudiv");

  div.insertBefore(newNode, addmore1);
}

function expadd(e) {
  console.log("exp");
  let newNode = document.createElement("textarea");
  newNode.classList.add("expField");
  newNode.setAttribute("rows", 4);
  let div = document.querySelector(".expdiv");

  div.insertBefore(newNode, addmore2);
}

function skilladd(e) {
  // console.log("skill");
  let newNode = document.createElement("input");
  newNode.classList.add("skillField");
  // newNode.setAttribute('rows',4)
  let div = document.querySelector(".skilldiv");

  div.insertBefore(newNode, addmore3);
}

// Template Logic -->

let generateResume = document.querySelector(".generatebtn");
generateResume.addEventListener("click", () => {
  // console.log('Generating resume');

  // left-side template -->
  let nameField = document.getElementById("nameField").value;
  let nameT = document.getElementById("nameT");
  nameT.innerHTML = nameField;

  document.getElementById("jobtitleT").innerHTML =
    document.getElementById("jobTitle").value;
  document.getElementById("contactT").innerHTML =
    document.getElementById("contactField").value;
  let emailField = document.getElementById("emailField").value;
  let emailT = document.getElementById("emailT");
  emailT.href = emailField;
  emailT.innerHTML = emailField;

  document.getElementById("portfolioT").href =
    document.getElementById("portfolioField").value;
  document.getElementById("linkdinT").href.innerHTML =
    document.getElementById("linkdinField").value;
  document.getElementById("githubT").href.innerHTML =
    document.getElementById("githubField").value;
  document.getElementById("aboutT").innerHTML =
    document.getElementById("aboutField").value;
    
  // right-side Template 
  let eduField = document.getElementsByClassName("eduField");
  let str = "";
  for (let e of eduField) {
    str += `<li>${e.value}</li>`;
  }
  document.getElementById("eduT").innerHTML = str;

  let skillField = document.getElementsByClassName("skillField");
  let str1 = "";
  for (let e of skillField) {
    str1 += `<li>${e.value}</li>`;
  }
  document.getElementById("skillT").innerHTML = str1;

  let expField = document.getElementsByClassName("expField");
  let str2 = "";
  for (let e of expField) {
    str2 += `<li>${e.value}</li>`;
  }
  document.getElementById("expT").innerHTML = str2;

  // Image Upload code-->
  let file = document.getElementById("profileImg").files[0];
  console.log(file);

  let reader = new FileReader();
  reader.readAsDataURL(file);
  // console.log(reader.result);
  reader.onloadend = ()=>{

    document.getElementById('imgT').src=reader.result;
  }

  document.querySelector(".resume-form").style.display = "none";
  document.querySelector(".resume-template").style.display = "block";
});

// download Pdf -->
let pdf = document.querySelector(".pdf-btn");
pdf.addEventListener("click", () => {
  console.log("pdf");
  pdf.style.display = "none";
  window.print();
});
