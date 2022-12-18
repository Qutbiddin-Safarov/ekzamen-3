let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".menu");
menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
});

const myModal = new bootstrap.Modal(
  document.getElementById("modalId"),
  options
);

const myModal2 = new bootstrap.Modal(document.getElementById('modalId-2'), options);
const myModal3 = new bootstrap.Modal(document.getElementById('modalId-3'), options);
const myModal4 = new bootstrap.Modal(document.getElementById('modalId-4'), options);
const myModal5 = new bootstrap.Modal(document.getElementById('modalId-5'), options);


function info() {
  let info_btn = document.getElementById("info_btn");
  if (info_btn.innerText == "£5.99 per month") {
    info_btn.innerHTML = '<span id="span__btnga" class="button__span"> £70.8</span> per year';
  }
  else if(info_btn.innerText == "£70.8 per year"){
    info_btn.innerHTML = '<span id="span__btnga" class="button__span"> £5.99</span> per month';
  }
}
function info2() {
  let info_btn2 = document.getElementById("info_btn2");
  if (info_btn2.innerText == "£12.99 per month") {
    info_btn2.innerHTML = '<span id="span__btnga" class="button__span">£155.88</span> per year';
  }
  else if(info_btn2.innerText == "£155.88 per year"){
    info_btn2.innerHTML = '<span id="span__btnga" class="button__span"> £12.99 </span> per month';
  }
}
function info3() {
  let info_btn3 = document.getElementById("info_btn3");
  if (info_btn3.innerText == "£20.99 per month") {
    info_btn3.innerHTML = '<span id="span__btnga" class="button__span">£251.88</span> per year';
  }
  else if(info_btn3.innerText == "£251.88 per year"){
    info_btn3.innerHTML = '<span id="span__btnga" class="button__span"> £20.99 </span> per month';
  }
}