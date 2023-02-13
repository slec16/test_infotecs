const height = 31;

const link = "https://dummyjson.com/products";



let product = {
    id: 1, 
    brand: "apple",
    title: "Samsung 9",
    price: 100,
  };
  

let productsArray = [];

export async function fetchData(numbersOfElemtnts) {
  for(let i = 1; i <= numbersOfElemtnts; i++){
        const result = await fetch(`${link}/${i}`);
        const data = await result.json();

        const {
          id,
          brand,
          title,
          price,
        } = data;
    
        product = {
          ...product,
          id,
          brand,
          title,
          price,
        };     
        productsArray[i-1] = product;
        console.log(product);
      }

      let titles = document.querySelectorAll('.title');
      let popupWindow = document.querySelector('.pop-up-panel');
      for(let i = 0; i < titles.length; i++) {
          titles[i].addEventListener("mouseover", (event) => {
              if(event.type == 'mouseover') {
                  // console.log('mouseon');
                  // console.log(i);
                  popupWindow.style.marginTop = i*height+'px';
                  popupWindow.style.display = 'block'
                  popupWindow.innerHTML = `<div>Brand: ${productsArray[i].brand}</div> <div>Title: ${productsArray[i].title}</div> <div>Price: ${productsArray[i].price}$</div>`;
              }
          })
          titles[i].addEventListener("mouseout", (event) => {
              if(event.type == 'mouseout') {
                  // console.log('mouseoff');
                  popupWindow.style.display = 'none'
              }
          })
      } 
}




