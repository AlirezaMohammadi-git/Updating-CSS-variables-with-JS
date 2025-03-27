

const inputs = document.querySelectorAll(".controls-container input")


inputs.forEach(input => input.addEventListener('change', updaetPhoto))
inputs.forEach(input => input.addEventListener('mousemove', updaetPhoto))
inputs.forEach(initialPage)

function updaetPhoto() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
  console.log(this.value)
}

function initialPage(input) {
  switch (input.name) {
    case 'base-color': {
      input.value = '#ffffff';
    }
    default: {
      input.value = 0;
    }
  }
}
