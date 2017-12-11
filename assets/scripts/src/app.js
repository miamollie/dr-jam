
const toggleResumeItem = (e) => {
  const resumeItems = document.querySelectorAll(`[data-resume-item]`);
  const targetId = e.target.id
  resumeItems.forEach(item => {
    if (item.dataset.resumeItem === targetId) {
      show(item)
    } else {
      hide(item)
    }
  })
}

const show = (el) => {
  el.classList.remove("hide");
  el.classList.add("block");
}

const hide = (el) => {
  el.classList.add("hide");
  el.classList.remove("block");
}

const setUpMenu = () => {
    const menuItems = document.querySelectorAll("#menu button");
    menuItems.forEach( menuItem => {
      menuItem.addEventListener("click", toggleResumeItem);
    })
}

document.addEventListener('DOMContentLoaded', () => {
  setUpMenu();
});



  // spinner until loaded
  //and then remove that class and let the menu softly fade
  // and animate in from the right
