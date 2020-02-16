// Declaration
// Slush telent management
const applicantsContainer = document.querySelector(".applicants-container");
const testLoop = document.querySelector(".test");
const applicantCart = document.querySelector(".applicant")
// tabs
const sortBymatches = document.querySelector("#sort-by-matches");
const sortByExperince = document.querySelector("#sort-by-experince");
const sortBySkills = document.querySelector("#sort-by-skills");
const selectedForInterview = document.querySelector("#selected-for-interview");

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

//applicants
applicantCart.addEventListener("click", function () {
  window.location.href = "applicant-details.html"
})
// tabs
sortBymatches.addEventListener("click", function () {
  sortBymatches.classList.add("tab-active");
  sortByExperince.classList.remove("tab-active");
  sortBySkills.classList.remove("tab-active");
  selectedForInterview.classList.remove("tab-active");

});
sortByExperince.addEventListener("click", function () {
  sortBymatches.classList.remove("tab-active");
  sortByExperince.classList.add("tab-active");
  sortBySkills.classList.remove("tab-active");
  selectedForInterview.classList.remove("tab-active");

});

sortBySkills.addEventListener("click", function () {
  sortBymatches.classList.remove("tab-active");
  sortByExperince.classList.remove("tab-active");
  sortBySkills.classList.add("tab-active");
  selectedForInterview.classList.remove("tab-active");
});
selectedForInterview.addEventListener("click", function () {
  sortBymatches.classList.remove("tab-active");
  sortByExperince.classList.remove("tab-active");
  sortBySkills.classList.remove("tab-active");
  selectedForInterview.classList.add("tab-active");
});