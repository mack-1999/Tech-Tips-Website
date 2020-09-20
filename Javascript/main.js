/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav_link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== ACTIVE AND REMOVE MENU =====*/
const postLink = document.querySelectorAll('.post_link');   

function linkAction2(){
  /*Active link*/
  postLink.forEach(n => n.classList.remove('active2'));
  this.classList.add('active2');
  
  /*Remove menu mobile*/
  const postMenu = document.getElementById('post-menu')
  postMenu.classList.remove('show')
}
postLink.forEach(n => n.addEventListener('click', linkAction2));
