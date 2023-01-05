/*const applicantForm = document.getElementById('dialog-content');
applicantForm.addEventListener('submit', event => {
    event.preventDefault();
    console.log('отправка');
    serializeForm(applicantForm);
});

*/

// export function serializeForm(formNode) {
//     const { elements } = formNode

//     const data = new FormData();
  
//     Array.from(elements)
//     .filter((item) => !!item.name)
//     .forEach((element) => {
//       const { name, type } = element
//       const value = type === 'checkbox' ? element.checked : element.value

//       data.append(name, value)
//     })

//     console.log(Array.from(data.entries()))
  
//     return data;
  
// }
  
export function serializeForm(formNode) {
  return new FormData(formNode);
}


