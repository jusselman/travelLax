var faded_i = 0;
var faded_array = [
  'Discover a world of tranquility',
  'Descrubre un mundo de tranquilidad',
  'Descubra um mundo de tranquilidade',
  'découvrir un monde de tranquillité'
];
var faded_elem;
faded_elem = document.getElementById('fade');
fadedSlide();
function fadedNext() {
  faded_i++;
  faded_elem.style.opacity = 0;
  if (faded_i > faded_array.length - 1) {
    faded_i = 0;
  }
  setTimeout('fadedSlide()', 1500);
}
function fadedSlide() {
  faded_elem.innerHTML = faded_array[faded_i];
  faded_elem.style.opacity = 1;
  setTimeout('fadedNext()', 6000);
}
