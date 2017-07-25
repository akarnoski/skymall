'use strict';

function Image(number) {
  this.name = number;
  this.source = '/Users/adriennekarnoski/codefellows/201/skymall/img/' + this.name + '.jpg';
  Image.all.push(this);
};

Image.all = [];

Image.allNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

for (var i = 0; i < Image.allNames.length; i++) {
  new Image(Image.allNames[i]);
}

Image.firstImgEl = document.getElementById('first_image');
Image.secondImgEl = document.getElementById('second_image');
Image.thirdImgEl = document.getElementById('third_image');


Image.productsDisplayed = [];


function randomImage() {
  for (var i = 0; i < 3; i++) {
    var randomIndex = Math.floor(Math.random() * Image.all.length);
    if (Image.productsDisplayed.includes(randomIndex)) {
      i--;
    } else {
      Image.productsDisplayed.push(randomIndex);
      console.log(randomIndex);
      }
    }

}
randomImage();
console.log([Image.productsDisplayed]);
var indexZero = Image.productsDisplayed[0];
var indexOne = Image.productsDisplayed[1];
var indexTwo = Image.productsDisplayed[2];
console.log('index one is ' + indexOne);

Image.firstImgEl.src = Image.all[indexZero].source;
Image.secondImgEl.src = Image.all[indexOne].source;
Image.thirdImgEl.src = Image.all[indexTwo].source;
