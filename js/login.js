document.getElementById("login-button").addEventListener("click", function () {
  console.log("hre");
  let email = document.getElementById("member-login-email").value;
  let password = document.getElementById("member-login-pw").value;
  const user = JSON.parse(localStorage.getItem("user"));
  if (user.email == user.email && user.password == password) {
    alert("로그인 성공 !");
    // 로그인 성공하면 index 페이지로 이동.
    localStorage.setItem("login", true);
    location.replace("index.html");
  } else {
    alert("로그인 실패 !");
  }
});
