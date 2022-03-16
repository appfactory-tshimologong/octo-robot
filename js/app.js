"use strict";

const continueReading = document.getElementById("btn_CTA");
let lessText =
  "The app factory is an essential learning groung for teaching the language of technoogy, which is coding.  Collaborative partnerships remain key to addressing the increasing need for quality software development skills in the country.";

let moreText =
  " The app factory is an essential learning groung for teaching the language of technoogy, which is coding.  Collaborative partnerships remain key to addressing the increasing need for quality software development skills in the country. Fortunately, Samsung South Africa, through its partnership with Wits University’s Tshimologong Digital Innovation Precinct created the App Factory, an internship programme aimed at assisting interns to work on real-world projects under the guidance of a senior developer over the course of nine months. This intern-centered approach enables them to grow their competence and hone their skills. These skills are required by industry even when entering the job market as software developers. The practical learning serves as a foundation to allow the graduates to grow and be part of shaping the 4th Industrial Revolution.";

continueReading.addEventListener("click", () => {
  if (
    continueReading.parentElement.children["btn_CTA"].innerText !== "Reduce"
  ) {
    continueReading.parentElement.children["1"].innerText = moreText;

    continueReading.parentElement.children["btn_CTA"].innerText = "Reduce";
  } else {
    continueReading.parentElement.children["1"].innerText = lessText;

    continueReading.parentElement.children["btn_CTA"].innerText =
      "Continue Reading";
  }
});

// let drp = document.querySelector(".dropbtn");
// drp.addEventListener("mouseover", AddArray);

// function AddArray() {
//   let a = document.getElementById("dropdown");
//   const myArray = a.children;
//   let pos = 0;
//   let prevPos = 0;
//   const check = [];
//   for (let i = 0; i < myArray.length; i++) {
//     const icon = document.createElement("i");
//     myArray[i].addEventListener("mouseover", () => {
//       pos = i;

//       if (pos !== 0) {
//         myArray[prevPos].classList.remove("fa");
//         myArray[prevPos].classList.remove("fa-arrow-right");
//       }
//     });
//     check.push(pos);
//     // let ishover = true;
//     // console.log(ishover);
//     // if (ishover)

//     icon.classList.add("fa");
//     icon.classList.add("fa-arrow-right");
//     myArray[pos].appendChild(icon);
//     //   ishover = false;
//     // }
//   }
// }
