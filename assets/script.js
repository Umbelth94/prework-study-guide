var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];
var randomButton = document.getElementById('random-button');

randomButton.addEventListener('click', () => {
  randomize();
  removeSelector();
  selectTopic();
});

function listTopics() {
 for (var x = 0; x < topics.length; x++) {
   console.log(topics[x]);
 }
}

function randomize() {
  randomTopic = topics[Math.floor(Math.random() * topics.length)];
}

function removeSelector(){
  var selectedSection = document.querySelectorAll('section');
  selectedSection.forEach((e) => {
    if (e.className == 'card selected'){
      e.classList.remove('selected');
    }
  })}


function selectTopic() {
 if (randomTopic === 'HTML') {
   console.log("Let's study HTML!");
   let element = document.getElementById('html-section');
   element.classList.add('selected');
 } else if (randomTopic === 'CSS') {
   console.log("Let's study CSS!");
   let element = document.getElementById('css-section');
   element.classList.add('selected');
 } else if (randomTopic === 'Git') {
   console.log("Let's study Git!");
   let element = document.getElementById('git-section');
   element.classList.add('selected');
 } else if (randomTopic === 'JavaScript') {
   console.log("Let's study JavaScript!");
   let element = document.getElementById('javascript-section');
   element.classList.add('selected');
 } else {
   console.log('Please try again!');
 }
}

// console.log('Here are the topics we learned through Prework:');
// listTopics();
// console.log('Which topic should we study first?');
// selectTopic();