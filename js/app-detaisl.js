// Declaration
// Slush telent management
const applicantsContainer = document.querySelector(".applicants-container");

applicantsContainer.innerHTML = "";

applicantsContainer.innerHTML = "";
let content;
for (let i = 0; i < 10; i++) {
  let content = `<div class="applicant" onclick = "newpages()" >
  <div class="applicant__item">
    <div class="picture">
      <img src="./img/atik.png" alt="">
    </div>
  </div>
  <div class="applicant__item">
    <div class="name">
      <div class="name__rank">
        <h2>${i + 1}</h2>
      </div>
      <div class="name__person">
        <h3>Md Atikur Rahman</h3>
        <p>Interior designer</p>
      </div>
    </div>
  </div>
  <div class="applicant__item">
    <div class="progress">
      <div class="progress__text">
        <p>Overall matching</p>
        <p>90%</p>
      </div>
      <div class="progress__bar">
        <div class="loading"></div>
      </div>
    </div>
  </div>
  <div class="applicant__item--skills">
    <div class="skills-list">
      <div class="skills-list__item">
        <p class="skills__name">Skills</p>
        <div class="loading-thin"></div>
      </div>
      <div class="skills-list__item">
        <p class="skills__name">Experience</p>
        <div class="loading-thin"></div>
      </div>
      <div class="skills-list__item">
        <p class="skills__name">Interest</p>
        <div class="loading-thin"></div>
      </div>
    </div>
  </div>
  </div>`;
  applicantsContainer.innerHTML += content;
}
//applicants
function newpages() {
  window.location.href = "applicant-details.html";
}