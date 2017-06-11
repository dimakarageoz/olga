import dataJson from './data.json';


const countries = Object.keys(dataJson).map(item => (
  dataJson[item]
));

const filterFunc = (countriItem, nowInput) => (
  (countriItem.toLowerCase()
  .slice(0, nowInput.length) === nowInput)
  ? true : false
);

const autocomplete = (countries, nowInput) => (
  countries.filter((item)=>filterFunc(item, nowInput))
);

const allOffer = (arrayAnswer = []) => {
  arrayAnswer.map(item => {
    let elem  = document.createElement('li');
    elem.addEventListener('click', (e)=> {
    input.value = e.target.textContent;
    })
    let content = document.createTextNode(item);
    result.setAttribute("style", "height: 300px;overflow: auto;width: 200px;");
    elem.appendChild(content);
    result.appendChild(elem);
  });
};

const onHangEvent = (arrayLi=[]) => {

}

const getOffer = (arrayAnswer = [], wordStart=[]) => {
  input.style.borderColor = '';
  if(arrayAnswer.length > 5 )
    arrayAnswer.slice(0, 5).map(item => {
    let elem  = document.createElement('li');
    elem.addEventListener('click', (e)=> {
    input.value = e.target.textContent;
  })
    let content = document.createTextNode(item);
    elem.appendChild(content);
    result.appendChild(elem);
  }
  );
  else if(arrayAnswer.length <=5 && arrayAnswer.length > 0 )
    arrayAnswer.map(item => {
      let elem  = document.createElement('li');
      elem.addEventListener('click', (e)=> {
        input.value = e.target.textContent;
      })
      let content = document.createTextNode(item);
      elem.appendChild(content);
      result.appendChild(elem);
    });
  else if(arrayAnswer.length === 0 && wordStart.length > 0) {
    let elem  = document.createElement('p');
    let content = document.createTextNode("Нет совпадений");
    elem.appendChild(content);
    result.appendChild(elem);
    input.style.borderColor = 'red';
  }
};

const clear = () => {
  while (result.hasChildNodes()) {
    result.removeChild(result.lastChild);
  }
}

const input = document.getElementById("autocomplete");
const result = document.getElementById("result");


input.oninput = (e) => {
  clear();
  const word = e.target.value;
  getOffer();

  const arrayAnswer = autocomplete(countries, word.toLowerCase());

  if( word.length > 0) getOffer(arrayAnswer, word); else allOffer(countries);

  onHangEvent(result.children);
}
