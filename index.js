const body = document.querySelector('body')

const submitData = (name, email) => {
  const formData = {
    name,
    email
  };
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  };

  return fetch("http://localhost:3000/users", configurationObject)
    .then(res => res.json())
    .then(data => body.textContent = data.id)
    .catch((error) => body.textContent = error.message)
};