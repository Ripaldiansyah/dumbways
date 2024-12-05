const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  submit(e);
});

function submit(e) {
  const form = e.target;
  const formData = new FormData(form);

  const data = Object.fromEntries(formData.entries());

  const name = data.name;
  const email = data.email;
  const phoneNumber = data.phoneNumber;
  const subject = data.subject;
  const message = data.message;

  const link = document.createElement("a");
  link.href = `mailto:${email}?subject=${subject}&body=${message}`;
  link.click();
}
