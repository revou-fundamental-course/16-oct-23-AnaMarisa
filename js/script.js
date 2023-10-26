// function replaceName() {
//   let name = prompt("Siapakah nama anda?", "");
//   document.getElementById("name").innerHTML = name;
// }

// document.getElementById("tombol").addEventListener("click", function () {
//   replaceName();
// });

// Get references to the necessary HTML elements
const greetingElement = document.getElementById("greeting");
const usernameInput = document.getElementById("username");
const updateButton = document.getElementById("updateName");

// Add an event listener to the "Submit" button
updateButton.addEventListener("click", function () {
  const userName = usernameInput.value;

  if (userName) {
    greetingElement.textContent = `Hi, ${userName}`;
    usernameInput.value = ""; // Clear the input field
  }
});

// Form validation
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const form2 = document.querySelector(".form-2");
  const submitButton = document.querySelector("#tombol");

  // Get a reference to the createdAt element
  const createdAtElement = document.getElementById("createdAt");

  function clearErrorMessages() {
    document.querySelector("#nama-error").textContent = "";
    document.querySelector("#date-error").textContent = "";
    document.querySelector("#gender-error").textContent = "";
    document.querySelector("#message-error").textContent = "";
  }

  function updateCurrentTime() {
    const now = new Date();
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

    const day = days[now.getDay()];
    const month = months[now.getMonth()];
    const date = now.getDate();
    const year = now.getFullYear();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    const timeZoneOffset = -now.getTimezoneOffset() / 60;

    const formattedTime = `${day} ${month} ${date} ${year} ${hours}:${minutes}:${seconds} GMT ${timeZoneOffset >= 0 ? "+" : "-"}${Math.abs(timeZoneOffset).toString().padStart(2, "0")}:00`;
    createdAtElement.textContent = formattedTime;
  }

  updateCurrentTime();

  setInterval(updateCurrentTime, 1000);

  // Event listener untuk input nama
  document.querySelector("#nama").addEventListener("input", function () {
    clearErrorMessages();
  });

  // Event listener untuk input date
  document.querySelector('input[type="date"]').addEventListener("input", function () {
    clearErrorMessages();
  });

  // Event listener untuk input gender
  const genderRadios = document.querySelectorAll('input[name="gender"]');
  genderRadios.forEach(function (radio) {
    radio.addEventListener("input", function () {
      clearErrorMessages();
    });
  });

  // Event listener untuk textarea message
  document.querySelector("textarea").addEventListener("input", function () {
    clearErrorMessages();
  });

  submitButton.addEventListener("click", function (e) {
    e.preventDefault();
    const nama = document.querySelector("#nama").value;
    const date = document.querySelector('input[type="date"]').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const message = document.querySelector("textarea").value;

    if (nama && date && gender && message) {
      document.querySelector("#submittedNama").textContent = nama;
      document.querySelector("#submittedDate").textContent = date;
      document.querySelector("#submittedGender").textContent = gender.value;
      document.querySelector("#submittedMessage").textContent = message;

      form2.style.display = "block";
    } else {
      if (!nama) {
        document.querySelector("#nama-error").textContent = "Nama harus diisi";
      }
      if (!date) {
        document.querySelector("#date-error").textContent = "Tanggal lahir harus diisi";
      }
      if (!gender) {
        document.querySelector("#gender-error").textContent = "Pilih jenis kelamin";
      }
      if (!message) {
        document.querySelector("#message-error").textContent = "Pesan harus diisi";
      }
    }
  });
});
