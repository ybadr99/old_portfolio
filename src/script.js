const menuIcon = document.querySelector(".menu-icon");
const navMenu = document.querySelector(".nav-menu");
const navItem = document.querySelectorAll(".nav-item");
const logo = document.querySelector(".logo");
const modal = document.querySelector(".modal");
const spanClose = document.querySelector(".close");
const form = document.querySelector("#contact-form");

// -----------navbar menu----------
menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("active");
  navMenu.classList.toggle("active");
  navItem.forEach((li) => li.classList.toggle("active"));
  logo.classList.toggle("hide");
  document.querySelector("header").classList.toggle("fixed");
});

navItem.forEach((n) => {
  n.addEventListener("click", () => {
    menuIcon.classList.remove("active");
    navMenu.classList.remove("active");
    navItem.forEach((li) => li.classList.remove("active"));
    logo.classList.remove("hide");
    document.querySelector("header").classList.remove("fixed");
  });
});

// -----------end navbar menu----------

// ------------pop-up modal

// Get the button that opens the modal
window.addEventListener("load", () => {
  const projectBtns = document.querySelectorAll(".see-project");

  projectBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.style.display = "block";
    });
  });
});

spanClose.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
// ------------end pop-up modal

// ------------render projects dynamically------------------------
const projects = [
  {
    id: 1,
    name: "Profesional Art Printing Data",
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    imageUrl: "../images/Img-Placeholder.png",
    skills: ["html", "css", "js", "bootstrap"],
    liveVersion: "https://ybadr99.github.io/portfolio/",
    sourceCode: "https://github.com/ybadr99/portfolio",
  },
  {
    id: 2,
    name: "Profesional Art Printing Data",
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    imageUrl: "../images/Img-Placeholder2.png",
    skills: ["html", "css", "js", "bootstrap"],
    liveVersion: "https://ybadr99.github.io/portfolio/",
    sourceCode: "https://github.com/ybadr99/portfolio",
  },
  {
    id: 3,
    name: "Profesional Art Printing Data",
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    imageUrl: "../images/p2.png",
    skills: ["html", "css", "js", "bootstrap"],
    liveVersion: "https://ybadr99.github.io/portfolio/",
    sourceCode: "https://github.com/ybadr99/portfolio",
  },
  {
    id: 4,
    name: "Profesional Art Printing Data",
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    imageUrl: "../images/Img-Placeholder.png",
    skills: ["html", "css", "js", "bootstrap"],
    liveVersion: "https://ybadr99.github.io/portfolio/",
    sourceCode: "https://github.com/ybadr99/portfolio",
  },
  {
    id: 5,
    name: "Profesional Art Printing Data",
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    imageUrl: "../images/Img-Placeholder2.png",
    skills: ["html", "css", "js", "bootstrap"],
    liveVersion: "https://ybadr99.github.io/portfolio/",
    sourceCode: "https://github.com/ybadr99/portfolio",
  },
  {
    id: 6,
    name: "Profesional Art Printing Data",
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    imageUrl: "../images/p2.png",
    skills: ["html", "css", "js", "bootstrap"],
    liveVersion: "https://ybadr99.github.io/portfolio/",
    sourceCode: "https://github.com/ybadr99/portfolio",
  },
];

const renderProject = (project) => {
  const section = document.createElement("section");
  section.classList.add("p2");
  section.style.backgroundImage = `url(${project.imageUrl})`;

  // the name of the project
  const h3 = document.createElement("h3");
  h3.innerHTML = project.name;
  // description
  const p = document.createElement("p");
  p.innerHTML = project.desc;

  // skills ul,li
  const ul = document.createElement("ul");
  ul.classList.add("skills");

  project.skills.forEach((skill) => {
    const li = document.createElement("li");
    li.innerHTML = skill;
    ul.appendChild(li);
  });

  // button
  const button = document.createElement("button");
  button.classList.add("see-project");
  button.innerText = "See Project";

  section.appendChild(h3);
  section.appendChild(p);
  section.appendChild(ul);
  section.appendChild(button);

  return section;
};

projects.forEach((project) => {
  document.querySelector(".projects").appendChild(renderProject(project));
});
// ------------end render projects dynamically--------------------

// ------------form validation------------------------

// show a message with a type of the input
function showMessage(input, message, type) {
  // get the <small> element and set the message
  const msg = input.parentNode.querySelector("small");
  msg.innerText = message;
  // update the class for the input
  input.className = type ? "" : "error";
}

form.addEventListener("submit", (e) => {
  // select the inputs
  const { fname } = form.elements;
  const { lname } = form.elements;
  const { message } = form.elements;
  const { email } = form.elements;

  // validate inputs
  if (fname.value.trim().length === 0) {
    e.preventDefault();
    showMessage(fname, "Please enter a valid name", false);
  } else {
    showMessage(fname, "", true);
  }

  if (lname.value.trim().length === 0) {
    e.preventDefault();
    showMessage(lname, "Please enter a valid name", false);
  } else {
    showMessage(lname, "", true);
  }

  if (message.value.trim().length === 0) {
    e.preventDefault();
    showMessage(message, "Please enter a valid text", false);
  } else {
    showMessage(message, "", true);
  }
  // validate the email and email should be lowercase
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (
    email.value.trim().length === 0 ||
    email.value.trim().toLowerCase() !== email.value.trim() ||
    !emailRegex.test(email.value.trim())
  ) {
    e.preventDefault();
    showMessage(email, "Please enter a valid Email", false);
  } else {
    showMessage(email, "", true);
  }
});

// ------------end form validation------------------------

// ------------ preserve data into local storage------------

const inputs = ["fname", "lname", "email", "message"];

const formData = JSON.parse(localStorage.getItem("formData"));
if (!formData) {
  formData = {};
}

inputs.forEach((el) => {
  form.elements[el].addEventListener("change", (e) => {
    formData[el] = e.target.value;
    saveToLocalStorage(formData[el]);
  });
});

const saveToLocalStorage = (input) => {
  formData[input];
  localStorage.setItem("formData", JSON.stringify(formData));
};

// ------------ end  preserve data into local storage------------
