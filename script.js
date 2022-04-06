const dice = document.querySelector('.dice');
const advice = document.querySelector('.advice');
const note = document.querySelector('.note');

const getAdvice = async function () {
  const data = await fetch('https://api.adviceslip.com/advice');
  const { slip } = await data.json();

  advice.innerText = `Advice#${slip.id}`;
  note.innerText = `${slip.advice}`;
};

getAdvice();

dice.addEventListener('click', getAdvice);
