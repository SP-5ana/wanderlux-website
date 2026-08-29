function validateAppointment(event) {
  event.preventDefault(); // stops auto-clear

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const date = document.getElementById("date").value;
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !phone || !date || !message) {
    alert("⚠️ Please fill in all fields before submitting.");
    return;
  }

  if (!email.includes("@")) {
    alert("⚠️ Please enter a valid email address.");
    return;
  }

  document.getElementById("confirmation").innerText =
    `✅ Thank you, ${name}! Your appointment request for ${date} has been submitted. We’ll contact you soon.`;
}
