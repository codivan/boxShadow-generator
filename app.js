let elem = document.getElementById("element");
let code = document.getElementById("code");
let inputs = document.querySelectorAll(".sliders input");

inputs.forEach((inp) => inp.addEventListener("input",generateShadow));

function generateShadow() {
  let hShadow = document.getElementById("h-shadow").value;
  let vShadow = document.getElementById("v-shadow").value;
  let blurRadius = document.getElementById("Blur-radius").value;
  let spreadRadius = document.getElementById("Spread-radius").value;
  let shadowColor = document.getElementById("Shadow-color").value;
  let shadowColorOpacity =document.getElementById("Shadow-color-opacity").value;
  let shadowinset = document.getElementById("shadow-inset").checked;
  // using ternary operator to check if inset checkbox is checked or not
  let boxShadow = shadowinset ? `inset ${hShadow}px ${vShadow}px ${blurRadius}px ${spreadRadius}px ${hexToRgba(shadowColor,shadowColorOpacity)}` : ` ${hShadow}px ${vShadow}px ${blurRadius}px ${spreadRadius}px ${hexToRgba(shadowColor,shadowColorOpacity)}`;
  
  elem.style.boxShadow = boxShadow;
  code.textContent = `box-shadow: ${boxShadow};`;
}
// converting hex value to rgba
function hexToRgba (shadowColor,shadowColorOpacity){
  let r = parseInt(shadowColor.substr(1,2),16);
  let g = parseInt(shadowColor.substr(3,2),16);
  let b = parseInt(shadowColor.substr(5,2),16)
  return `rgba(${r},${g},${b},${shadowColorOpacity})`;
}
function copyCode() {
  code.select();
  document.execCommand("copy");
  alert("code copied to Clipboard");


}

window.onload = generateShadow();