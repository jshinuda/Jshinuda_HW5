
const getBtn = document.getElementById('get-btn');

const getData = () => {

const xhr = XMLHttpRequest();
xhr.open('GET','https://jsonplaceholder.typicode.com/users');

xhr.responseType = 'JSON';


xhr.onload = () => {

  const data = JSON.parse(xhr.response);
  console.log (data);
}
xhr.send();

getBtn.addEventListener('click',getData);

};

