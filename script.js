const form = document.querySelector("#contact-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const emailValidated = validateEmail(form.elements.email.value);
  const msgValidated = validateMessage(form.elements.message.value);
  const dateValidated = validateDate();
  if (emailValidated && msgValidated & dateValidated) {
    const contact = {
      name: form.elements.name.value.trim(),
      email: form.elements.email.value.trim(),
      message: form.elements.message.value.trim(),
    };
    console.log(contact);
    clearForm();
  }
});

function validateEmail(string) {
  const atIndex = string.indexOf("@");
  const domain = string.slice(atIndex + 1);
  if (domain == "cphbusiness.dk") {
    document.querySelector("#email-label").classList.remove("error");
    return true;
  } else {
    document.querySelector("#email-label").classList.add("error");
    return false;
  }
}

function validateMessage(string) {
  if (string.length < 8) {
    document.querySelector("#message-label").classList.add("error");
    return false;
  } else {
    document.querySelector("#message-label").classList.remove("error");
    return true;
  }
}

function validateDate() {
  const today = new Date();
  const dayOfWeek = today.getDay();
  if (dayOfWeek > 0 && dayOfWeek < 5) {
    document.querySelector("#date-error").classList.remove("error");
    return true;
  } else {
    document.querySelector("#date-error").classList.add("error");
    return false;
  }
}

function clearForm() {
  form.elements.name.value = "";
  form.elements.email.value = "";
  form.elements.message.value = "";
}
