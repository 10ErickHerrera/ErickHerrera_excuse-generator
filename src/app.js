window.onload = function() {
  let who = ["The dog ", "My grandma ", "The mailman ", "My bird "];
  let action = ["ate ", "peed ", "crushed ", "broke "];
  let what = ["my homework ", "my phone ", "the car "];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];
  function generateExcuse() {
    let primeraSentencia = Math.floor(Math.random() * who.length);
    let segundaSentencia = Math.floor(Math.random() * action.length);
    let terceraSentencia = Math.floor(Math.random() * what.length);
    let cuartaSentencia = Math.floor(Math.random() * when.length);

    document.querySelector("#excuse").innerHTML =
      `<span class="who">${who[primeraSentencia]}</span> ` +
      `<span class="action">${action[segundaSentencia]}</span> ` +
      `<span class="what">${what[terceraSentencia]}</span> ` +
      `<span class="when">${when[cuartaSentencia]}</span>`;
  }
  generateExcuse();
  document.getElementById("generateButton").onclick = generateExcuse;
};
