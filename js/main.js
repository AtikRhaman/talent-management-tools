// Declaration
// Slush telent management
const applicantsDetailsContainer = document.querySelector(
  ".applicants-details-container"
);
const applicantCart = document.querySelectorAll(".applicant");
// tabs
const sortBymatches = document.querySelector("#sort-by-matches");
const sortByExperince = document.querySelector("#sort-by-experince");
const sortBySkills = document.querySelector("#sort-by-skills");
const selectedForInterview = document.querySelector("#selected-for-interview");

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