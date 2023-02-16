import { fetchData } from "./fethcData";


const listTitle = document.querySelector('.list_title');

/*
  Функция запускающая через лоадер получение данных в зависимости либо от числа по умолчанию, 
  либо от числа по умолчанию
*/
export function getNumber(numbersOfElemtnts){  
    const form = document.getElementById('form');
    const {description} = form.elements;
    if(description.value != numbersOfElemtnts && description.value != undefined) {
      form.addEventListener('submit', event => {
        event.preventDefault();
        const todoEl = description.value;
        form.reset();
        listTitle.innerHTML='';
        Loader(todoEl);
       
      });
    }
    Loader(numbersOfElemtnts);

  }
  
/*
 Ждем получение данных
*/
async function Loader(numbersOfElemtnts) {

  loaderApp();
  await fetchData(numbersOfElemtnts);

}
  
/*
  Отображает загрузку вместо приложения
*/
function loaderApp() {
  let loader = document.getElementById('loader');
  let app = document.getElementById('app');
  app.style.display = 'none';
  loader.style.display = 'block';
}

