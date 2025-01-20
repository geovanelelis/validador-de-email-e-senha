function validateEmail(email) {
  if (!email.match(/\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/g)) {
    const err = new Error('Email inválido!')
    err.input = 'email'
    throw err
  }
}

function resetFormStyles(inputs) {
  Object.entries(inputs).forEach(([key, value]) => {
    value.classList.remove('success', 'error')
    document.querySelector(`#${key}-error`).textContent = ''
  })
}

const userInputs = {
  name: document.querySelector('#name'),
  email: document.querySelector('#email'),
  password: document.querySelector('#password'),
}

const form = document.querySelector('form')

form.addEventListener('submit', (ev) => {
  ev.preventDefault()
  resetFormStyles(userInputs)
  try {
    userInputs.name.classList.add('success')
    validateEmail(userInputs.email.value)
    userInputs.email.classList.add('success')
  } catch (err) {
    userInputs[err.input].classList.add('error')
    document.querySelector(`#${err.input}-error`).textContent = err.message
  }
})
