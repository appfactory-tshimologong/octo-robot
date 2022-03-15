"use strict";

const continueReading = document.getElementById("btn_CTA");
let lessText =
  "The app factory is an essential learning groung for teaching the language of technoogy, which is coding.  Collaborative partnerships remain key to addressing the increasing need for quality software development skills in the country.";

let moreText =
  " The app factory is an essential learning groung for teaching the language of technoogy, which is coding.  Collaborative partnerships remain key to addressing the increasing need for quality software development skills in the country. Fortunately, Samsung South Africa, through its partnership with Wits University’s Tshimologong Digital Innovation Precinct created the App Factory, an internship programme aimed at assisting interns to work on real-world projects under the guidance of a senior developer over the course of nine months. This intern-centered approach enables them to grow their competence and hone their skills. These skills are required by industry even when entering the job market as software developers. The practical learning serves as a foundation to allow the graduates to grow and be part of shaping the 4th Industrial Revolution.";

  continueReading.addEventListener("click", () => {
  if (continueReading.parentElement.children['btn_CTA'].innerText !== "reduce") {
    continueReading.parentElement.children['1'].innerText = moreText;

    continueReading.parentElement.children['btn_CTA'].innerText = "reduce";
  } else {
    continueReading.parentElement.children['1'].innerText = lessText;

    continueReading.parentElement.children['btn_CTA'].innerText = "Continue Reading";
  }
});