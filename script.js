const circles = document.querySelectorAll('.circle');

circles.forEach(function(circle){
  circle.addEventListener('mouseout', function() {
    
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    
    circle.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    
    circle.classList.add('visited');
  });
});

const jys =  document.querySelectorAll('.jy');
jys.forEach(function(jy){
  jy.addEventListener('mouseout', function(){
    jy.classList.add('visited2')
  });
});

const welcomeTexts = document.querySelectorAll('.text');
welcomeTexts.forEach(function(text){
  text.addEventListener('mouseout', function() {
    
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    
    text.style.color = `rgb(${r}, ${g}, ${b})`;
    
    text.classList.add('visited3');
  });
});
