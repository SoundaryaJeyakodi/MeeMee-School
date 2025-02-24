const line1 = "Learning  Today";
const line2 = "Leading  Tomorrow!!";
let index1 = -1;
let index2 = 0;
let displayingLine = 1;

import { includeHTML } from './script1.js';

function displayLetter() 
{
    
        if (displayingLine === 1) {
            if(index1 < 0)
            {
                document.getElementById('slogan').innerHTML=" ";
                index1++;
            }
            else if (index1 < line1.length) {
                document.getElementById('slogan').innerText += line1[index1];
                index1++;
            } else {
                displayingLine = 2; // Move to the second line
                setTimeout(displayLetter, 1000); // Wait before starting second line
                return;
            }
        } else {
            if (index2 < line2.length) {
                document.getElementById('nextline').innerText += line2[index2];
                index2++;
            }
        }
    
        setTimeout(displayLetter, 200); // Adjust the speed here (in milliseconds)
    
}




    

window.onload = () => 
    {
    
    displayLetter();
    includeHTML();
};

function slideInOnScroll() {
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
      const sectionPosition = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionPosition < windowHeight - 100) {
        section.classList.add('slide-in');
      }
    });
  }

  window.addEventListener('scroll', slideInOnScroll);
  window.addEventListener('load', slideInOnScroll); 



  