function validateEmail(email) {
  if (!email.match(/\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/g)) {
    const err = new Error('Email inválido!')
    err.input = 'email'
    throw err
  }
}

function validatePassword(password) {
  if (
    password.lenght < 8 ||
    !password.match(/[a-z]/) ||
    !password.match(/[A-Z]/) ||
    !password.match(/\d/) ||
    !password.match(/[^a-zA-Z0-9\s]/)
  ) {
    const err = new Error('Senha inválida!')
    err.input = 'password'
    throw err
  }
}

function validateName(name) {
  if (name.match(/[^a-zA-Z\s]/)) {
    const err = new Error('Nome inválido!')
    err.input = 'name'
    throw err
  }
}

function resetFormStyles(inputs) {
  Object.entries(inputs).forEach(([key, value]) => {
    value.classList.remove('success', 'error')
    document.querySelector(`#${key}-error`).textContent = ''
  })
}

function registrationSuccess() {
  setTimeout(() => {
    alert(`Usuário ${userInputs.name.value} cadastrado com sucesso!`)
    userInputs.name.value = ''
    userInputs.email.value = ''
    userInputs.password.value = ''
    resetFormStyles(userInputs)
  }, 1 * 1000)
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

  let hasError = false
  try {
    validateEmail(userInputs.email.value)
    userInputs.email.classList.add('success')
  } catch (err) {
    hasError = true
    userInputs[err.input].classList.add('error')
    document.querySelector(`#${err.input}-error`).textContent = err.message
  }

  try {
    validatePassword(userInputs.password.value)
    userInputs.password.classList.add('success')
  } catch (err) {
    hasError = true
    userInputs[err.input].classList.add('error')
    document.querySelector(`#${err.input}-error`).textContent = err.message
  }

  try {
    validateName(userInputs.name.value)
    userInputs.name.classList.add('success')
  } catch (err) {
    hasError = true
    userInputs[err.input].classList.add('error')
    document.querySelector(`#${err.input}-error`).textContent = err.message
  }

  if (!hasError) {
    registrationSuccess()
  }
})
