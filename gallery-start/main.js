var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */
var images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

for (var i = 0; i < images.length; i++) {
  var newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/' + images[i]);
  newImage.onclick = function(e) {
    displayedImage.setAttribute('src', e.target.src);
  }
  thumbBar.appendChild(newImage);
}

btn.onclick = function() {
  if (btn.getAttribute('class') === 'dark') {
    btn.setAttribute('class', 'light')
    btn.textContent = 'light';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'dark';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
  }
}
