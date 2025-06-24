const hideNav = () => {
  const sideNav = document.getElementById('nav-expand');
  
  if(sideNav){
    sideNav.style.display = 'none';
  }
}

const showNav = () => {
  const sideNav = document.getElementById('nav-expand');
  
  if(sideNav){
    sideNav.style.display = 'inline-flex';

  }
}
export {hideNav, showNav}