const menuIcon = document.querySelector('.menu-icon');
const navMenu = document.querySelector('.nav-menu');
const navItem = document.querySelectorAll('.nav-item');
const logo = document.querySelector('.logo');
const modal = document.querySelector('.modal');
// Get the <span> element that closes the modal
const spanClose = document.querySelector('.close');
const projects = [
  {
    id: 1,
    name: 'Profesional Art Printing Data',
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    imageUrl: '../images/Img-Placeholder.png',
    skills: ['html', 'css', 'js', 'bootstrap'],
    liveVersion: 'https://ybadr99.github.io/portfolio/',
    sourceCode: 'https://github.com/ybadr99/portfolio',
  },
  {
    id: 2,
    name: 'Profesional Art Printing Data',
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    imageUrl: '../images/Img-Placeholder2.png',
    skills: ['html', 'css', 'js', 'bootstrap'],
    liveVersion: 'https://ybadr99.github.io/portfolio/',
    sourceCode: 'https://github.com/ybadr99/portfolio',
  },
  {
    id: 3,
    name: 'Profesional Art Printing Data',
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    imageUrl: '../images/p2.png',
    skills: ['html', 'css', 'js', 'bootstrap'],
    liveVersion: 'https://ybadr99.github.io/portfolio/',
    sourceCode: 'https://github.com/ybadr99/portfolio',
  },
  {
    id: 4,
    name: 'Profesional Art Printing Data',
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    imageUrl: '../images/Img-Placeholder.png',
    skills: ['html', 'css', 'js', 'bootstrap'],
    liveVersion: 'https://ybadr99.github.io/portfolio/',
    sourceCode: 'https://github.com/ybadr99/portfolio',
  },
  {
    id: 5,
    name: 'Profesional Art Printing Data',
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    imageUrl: '../images/Img-Placeholder2.png',
    skills: ['html', 'css', 'js', 'bootstrap'],
    liveVersion: 'https://ybadr99.github.io/portfolio/',
    sourceCode: 'https://github.com/ybadr99/portfolio',
  },
  {
    id: 6,
    name: 'Profesional Art Printing Data',
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    imageUrl: '../images/p2.png',
    skills: ['html', 'css', 'js', 'bootstrap'],
    liveVersion: 'https://ybadr99.github.io/portfolio/',
    sourceCode: 'https://github.com/ybadr99/portfolio',
  },
];

// -----------functions-----------
const renderProject = (project) => {
  const section = document.createElement('section');
  section.classList.add('p2');
  section.style.backgroundImage = `url(${project.imageUrl})`;

  // the name of the project
  const h3 = document.createElement('h3');
  h3.innerHTML = project.name;
  // description
  const p = document.createElement('p');
  p.innerHTML = project.desc;

  // skills ul,li
  const ul = document.createElement('ul');
  ul.classList.add('skills');

  project.skills.forEach((skill) => {
    const li = document.createElement('li');
    li.innerHTML = skill;
    ul.appendChild(li);
  });

  // button
  const button = document.createElement('button');
  button.id = project.id;
  button.classList.add('see-project');
  button.innerText = 'See Project';

  section.appendChild(h3);
  section.appendChild(p);
  section.appendChild(ul);
  section.appendChild(button);

  return section;
};

const changeModalContent = (project) => {
  const modalEl = `
    <div class="modal-content container">
      <div class="head">
        <h5>${project.name}</h5>
        <span class="close">&times;</span>
      </div>
      <ul class="skills">
        <li>html</li>
        <li>Bootstrap</li>
        <li>Ruby on rails</li>
      </ul>
      <div class="content">
        <div class="modal-img">
          <img src="${project.imageUrl}" alt="" />
        </div>
        <div class="modal-details">
          <p class="para">
            ${project.desc}
          </p>
          <div class="btnWrapper">
            <a href="${project.liveVersion}" class="p-button">
              See Live
              <img src="./images/Icon - Export.png" alt="See Live " />
            </a>
            <a href="${project.sourceCode}" class="p-button">
              See Source
              <img src="./images/github3.png" alt="See Source " />
            </a>
          </div>
        </div>
      </div>
    </div>
  `;

  modal.innerHTML = modalEl;
};

// --------functions--------

// /////////////////navbar menu
menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('active');
  navMenu.classList.toggle('active');
  navItem.forEach((li) => li.classList.toggle('active'));
  logo.classList.toggle('hide');
  document.querySelector('header').classList.toggle('fixed');
});

navItem.forEach((n) => {
  n.addEventListener('click', () => {
    menuIcon.classList.remove('active');
    navMenu.classList.remove('active');
    navItem.forEach((li) => li.classList.remove('active'));
    logo.classList.remove('hide');
    document.querySelector('header').classList.remove('fixed');
  });
});

// end navbar menu

// pop-up modal ////////////////////////

// Get the button that opens the modal
window.addEventListener('load', () => {
  const projectBtns = document.querySelectorAll('.see-project');
  projectBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      // console.log(typeof +btn.id);
      const project = projects.find((project) => project.id === +btn.id);
      changeModalContent(project);
      modal.style.display = 'block';
    });
  });
});

spanClose.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
// end pop-up modal ////////////////////////

projects.forEach((project) => {
  document.querySelector('.projects').appendChild(renderProject(project));
});
