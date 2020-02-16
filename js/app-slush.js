// Declaration
// Slush telent management
const applicantsContainer = document.querySelector(".applicants-container");
const testLoop = document.querySelector(".test");
// tabs
const sortByName = document.querySelector("#sort-by-name");
const sortByCapital = document.querySelector("#sort-by-capital");
const sortByPopulation = document.querySelector("#sort-by-population");

// const displayApllicants = () => {
//   for (let i = 0; i < 10; i++) {
//     let applicant = document.createElement("div");
//     let picture = document.createElement("div");
//     let name = document.createElement("h2");
//     let progBar = document.createElement("progress");
//     let skillsDiv = document.createElement("div");
//     let skill = document.createElement("p");
//     let skillBar = document.createElement("progress");
//     let experince = document.createElement("p");
//     let interest = document.createElement("p");

//     applicant.setAttribute("class", "applicant");
//     picture.setAttribute("class", "applicant__picture");
//     name.setAttribute("class", "applicant__name");
//     progBar.setAttribute("class", "applicant__overall-matching");
//     skillsDiv.setAttribute("class", "applicant__skillbar");

//     name.textContent = "Md Atikur Rahman";
//     skill.textContent = "Skills";
//     experince.textContent = "Experience";
//     interest.textContent = "Interest";
//     testLoop.textContent = "test loop";

//     applicant.appendChild(picture);
//     applicant.appendChild(name);
//     applicant.appendChild(progBar);
//     skillsDiv.appendChild(skill);
//     skillsDiv.appendChild(experince);
//     skillsDiv.appendChild(interest);
//     applicant.appendChild(skillsDiv);
//     applicant.append(testLoop);
//     applicantsContainer.appendChild(testLoop);
//     applicantsContainer.appendChild(applicant);
//   }
// };
// displayApllicants();

// const name = () => {

// }
// const progressBar = () => {

// }
// const skills = () => {

// }

// add event lisner
sortByName.addEventListener("click", function () {
  sortByName.classList.add("tab-active");
  sortByCapital.classList.remove("tab-active");
  sortByPopulation.classList.remove("tab-active");
});
sortByCapital.addEventListener("click", function () {
  sortByName.classList.remove("tab-active");
  sortByCapital.classList.add("tab-active");
  sortByPopulation.classList.remove("tab-active");
});

sortByPopulation.addEventListener("click", function () {
  sortByName.classList.remove("tab-active");
  sortByCapital.classList.remove("tab-active");
  sortByPopulation.classList.add("tab-active");
});