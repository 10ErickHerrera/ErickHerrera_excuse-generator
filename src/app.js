window.onload = function() {
  // array with the words
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
    // declaring random variables
    let sentence1 = Math.floor(Math.random() * who.length);
    let sentence2 = Math.floor(Math.random() * action.length);
    let sentence3 = Math.floor(Math.random() * what.length);
    let sentence4 = Math.floor(Math.random() * when.length);

    // creating a sentence (the excuse)
    document.querySelector("#excuse").innerHTML =
      `<span class="who">${who[sentence1]}</span> ` +
      `<span class="action">${action[sentence2]}</span> ` +
      `<span class="what">${what[sentence3]}</span> ` +
      `<span class="when">${when[sentence4]}</span>`;
  }
  generateExcuse();
  document.getElementById("generateButton").onclick = generateExcuse;
};
