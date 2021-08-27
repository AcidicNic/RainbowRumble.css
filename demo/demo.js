const toggleAnimationElems = document.getElementsByClassName("toggle-animation");

for (var i = 0; i < toggleAnimationElems.length; i++) {
  toggleAnimationElems[i].addEventListener("click", toggleAnimations);
}

document.getElementById("disable-animations").addEventListener("click", disableAllAnimations);
document.getElementById("enable-animations").addEventListener("click", enableAllAnimations);

function toggleAnimations(e) {
  if (e.target.parentElement.classList.contains('disable-animation')) {
    e.target.parentElement.classList.remove('disable-animation');
  } else {
    e.target.parentElement.classList.add('disable-animation');
  }
}

function enableAllAnimations() {
  for (var i = 0; i < toggleAnimationElems.length; i++) {
    if (toggleAnimationElems[i].classList.contains('disable-animation')) {
      toggleAnimationElems[i].classList.remove('disable-animation');
    }
  }
}

function disableAllAnimations() {
  for (var i = 0; i < toggleAnimationElems.length; i++) {
    if (!toggleAnimationElems[i].classList.contains('disable-animation')) {
      toggleAnimationElems[i].classList.add('disable-animation');
    }
  }
}
