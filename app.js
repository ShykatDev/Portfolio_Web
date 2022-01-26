const loginName = document.querySelector(".nam");
const loginType = document.querySelector(".type");
const loginBtn = document.querySelector(".login");
const logPage = document.querySelector(".loginPage");
const fullPage = document.querySelector(".fullWebPage");
const logoutBtn = document.querySelector(".logout");

loginBtn.addEventListener("click", function () {
  if (loginType.value == "teacher" || loginType.value == "Teacher") {
    logPage.classList.add("displayNone");
    fullPage.classList.remove("displayNone");
    alert(`Welcome ${loginName.value}`);
  } else {
    alert("Please fillup correctly");
  }
});
