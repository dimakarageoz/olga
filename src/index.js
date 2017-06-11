// import countries from './data.json';

const countries = [
  {"name": "Afghanistan", "code": "AF"},
  {"name": "land Islands", "code": "AX"},
  {"name": "Albania", "code": "AL"},
  {"name": "Algeria", "code": "DZ"},
  {"name": "American Samoa", "code": "AS"},
  {"name": "AndorrA", "code": "AD"},
  {"name": "Angola", "code": "AO"},
  {"name": "Anguilla", "code": "AI"},
  {"name": "Antarctica", "code": "AQ"},
  {"name": "Antigua and Barbuda", "code": "AG"},
  {"name": "Argentina", "code": "AR"},
  {"name": "Armenia", "code": "AM"},
  {"name": "Aruba", "code": "AW"},
  {"name": "Australia", "code": "AU"},
  {"name": "Austria", "code": "AT"}
];

const filterFunc = (countriItem, nowInput) => (
  (countriItem.name.toLowerCase()
  .slice(0, nowInput.length)===nowInput)
  ? true : false
)

const autocomplete = (countries, nowInput) => (
  countries.filter((item)=>filterFunc(item, nowInput))
)
const removeAllSuggestions = () => {
    listOfCountries = [];
    result.innerHTML = null;
}


const input = document.getElementById("autocomplete");
const result = document.getElementById("result");
let listOfCountries;

input.oninput = (e) => {

  const arrayAnswer = autocomplete(countries, e.target.value.toLowerCase());

  if( e.target.value.length > 0){
    removeAllSuggestions();
    if(arrayAnswer.length < 5 )
      arrayAnswer.map(item =>
        result.innerHTML += '<li>' + item.name + '</li>'
    )
    else
      result.innerHTML =  arrayAnswer.slice(0, 5).map(item =>
        result.innerHTML += '<li>' + item.name + '</li>'
    )
  } else {
    removeAllSuggestions();
  }
}



 function loadJSON(callback) {

     var xobj = new XMLHttpRequest();
         xobj.overrideMimeType("application/json");
     xobj.open('GET', 'my_data.json', true); // Replace 'my_data' with the path to your file
     xobj.onreadystatechange = function () {
           if (xobj.readyState == 4 && xobj.status == "200") {
             // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
             callback(xobj.responseText);
           }
     };
     xobj.send(null);
  }
