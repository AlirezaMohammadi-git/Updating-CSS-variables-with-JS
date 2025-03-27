
const colorPicker = document.querySelector("#colorPicker")
const spacingRange = document.querySelector('#spacingRange')
const blurRange = document.querySelector("#blurRange")
const image = document.querySelector("#main-img")
const borderRadius = document.querySelector('#borderRange')

// initial values
colorPicker.value = '#ffffff';
spacingRange.value = 0;
blurRange.value = 0;
borderRadius.value = 0;


// events to change values
colorPicker.addEventListener('change', updateColor)
spacingRange.addEventListener('change', updateSpacing)
blurRange.addEventListener('change', updateBlur)
borderRadius.addEventListener('change', updateBorderRadius)

// functions
function updateColor() {
  document.documentElement.style.setProperty('--base-color', colorPicker.value)
  // second way to change css variable
  //document.documentElement.style.cssText = `--base-color:${colorPicker.value}`; 
  // third way to change
  //document.documentElement.setAttribute("style", `--base-color:${colorPicker.value}`)
  console.log(`color picker value : ${colorPicker.value}`)
}

function updateSpacing() {
  document.documentElement.style.setProperty('--spacing', `${spacingRange.value / 10}px`)
  console.log(`spacing value : ${(spacingRange.value / 10)}`)
}

function updateBlur() {
  document.documentElement.style.setProperty('--blur-size', `${blurRange.value}px`)
  console.log(`blur value : ${blurRange.value}`)
}

function updateBorderRadius() {
  document.documentElement.style.setProperty('--border-radius', `${borderRadius.value}px`)
  console.log(`border radius value : ${borderRadius.value}`)
}