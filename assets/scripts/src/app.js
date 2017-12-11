const toggleMenuDeSelect = () => {
  const siblings = document.querySelectorAll("#menu *");
  siblings.forEach(s => {
    s.classList.remove("selected");
  });
}

const toggleResumeItem = event => {
  const resumeItems = document.querySelectorAll("[data-resume-item]");
  const targetId = event.target.id;
  resumeItems.forEach(r => {
    if (r.dataset.resumeItem === targetId) {
      show(r);
    } else {
      hide(r);
    }
  });
}

const toggle = event => {

  toggleMenuDeSelect();

  toggleResumeItem(event);

  event.target.classList.add("selected");

}

const show = el => {
  el.classList.remove("hide");
  el.classList.add("flex");
}

const hide = el => {
  el.classList.add("hide");
  el.classList.remove("flex");
}

const hideAll = () => {
  toggleMenuDeSelect();
  const resumeItems = document.querySelectorAll("[data-resume-item]");
  resumeItems.forEach(item => {
      hide(item);
    });
}

const setUpMenu = () => {
  const menuItems = document.querySelectorAll("#menu button");
  menuItems.forEach( menuItem => {
    menuItem.addEventListener("click", toggle);
  });

  const title = document.querySelector("#menu h1");
  title.addEventListener("click", hideAll);
}

document.addEventListener('DOMContentLoaded', () => {
  setUpMenu();
});



  // spinner until loaded
  //and then remove that class and let the menu softly fade
  // and animate in from the right
