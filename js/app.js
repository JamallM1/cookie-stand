
let tableElem = document.getElementById('table');
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let myForm = document.getElementById('my-form');
let myFormSection = document.getElementById('table-names');

LocationSales.prototype.getCustNumber = function() {
  return Math.floor(Math.random() * (this.maxCust-this.minCust+1)+this.minCust);
} ;

//console.log(salesData);

let locations = [];

function LocationSales ( name, minCust, maxCust, avg ){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avg = avg;
  this.cookies = [];


  locations.push(this);
}

LocationSales.prototype.getTotalCookies = function () {
  for(let i = 0; i < hours.length; i++){
    let custNum = this.getCustNumber();
    let cookieNum = custNum * this.avg;
    cookieNum = Math.ceil(cookieNum);
    this.cookies.push(cookieNum);

  }
};

LocationSales.prototype. render = function () {
  let row2 = document.createElement('tr');
  tableElem.appendChild(row2);

  let th2Elem = document.createElement('th');
  th2Elem.textContent = this.name;
  row2.appendChild(th2Elem);

  for(let i = 0; i < hours.length; i++){
    let td1Elem = document.createElement('td');
    td1Elem.textContent = this.cookies[i];
    row2.appendChild(td1Elem);
  }
};

function displayHeader(){
  let row = document.createElement('tr');
  tableElem.appendChild(row);

  let space = document.createElement('th');
  row.appendChild(space);

  for(let i = 0; i < hours.length; i++){
    let hoursElem = document.createElement('th');
    hoursElem.textContent = hours[i];
    row.appendChild(hoursElem);
  }
}



// let number = getRandomInt(this.minCust, this.maxCust);
// this.custArr.push(number);

new LocationSales('Seattle', 23, 65, 6.3);
new LocationSales('Tokyo', 3, 24, 1.2);
new LocationSales('Dubai', 11, 38, 3.7);
new LocationSales('Paris', 20, 38, 2.3);
new LocationSales('Lima', 2, 16, 4.6);
console.log(locations);
function renderAllLocations(){
  for (let i = 0; i < locations.length; i++) {
    locations[i].getTotalCookies();
    locations[i].render();
  }
}

displayHeader();
renderAllLocations();


function handleSubmit(event){
  event.preventDefault();
  let name = event.target.FullName.value;
  let LocationSales = event.target.interests.value;

  let newLocationSales = new LocationSales (name);

  newLocationSales.getTotalCookies();
  newLocationSales.render();

  myFormSection.reset();
}

myForm.addEventListener('submit', handleSubmit);

// let time = document.createElement('li');
//    time.textContent = hours[i] + - this.cookies[i] + '     cookies';
//    salesData.appendChild(time);
// let seattle = {
//   name: 'Seattle',
//   minCust: 23,
//   maxCust: 65,
//   avg: 6.5,
//   custArr:[],
//   cookies: [],
//   getCust: function(){
//     for(let i = 0; i < hours.length; i++){
//       let number = getRandomInt(this.minCust, this.maxCust);
//       this.custArr.push(number);
//     }
//     console.log(this.custArr);
//   },
//   getCookies: function(){
//     this.getCust();
//     for(let i = 0; i < this.custArr.length; i++){
//       let cookiesSold = this.custArr[i]* this.avg;
//       this.cookies.push(cookiesSold);
//       this.cookies.push(Math.ceil(cookiesSold));
//     }
//     console.log('cookies; ', this.cookies);
//   },
//   render: function(){
//     this.getCookies();
//     let storeName = document.createElement('p');
//     storeName.textContent = this.name;
//     salesData.appendChild(storeName);

//     let uList = document.createElement('ul');
//     salesData.appendChild(uList);


//     for(let i = 0; i < hours.length; i++){
//       let time = document.createElement('li');
//       time.textContent = hours[i] + - this.cookies[i] + '     cookies';
//       salesData.appendChild(time);
//     }

//     //let test = document.createElement('li');
//     //test.textContent = 'test';
//     //salesData.appendChild(test);
//   }
// };
// seattle.getCust();
// seattle.render();
// console.log(seattle);

// let tokyo = {
//   name: 'Tokyo',
//   minCust: 3,
//   maxCust: 24,
//   avg: 1.2,
//   custArr: [],
//   cookies: [],
//   getCust: function(){
//     for(let i = 0; i < hours.length; i++){
//       let number = getRandomInt(this.minCust, this.maxCust);
//       this.custArr.push(number);
//     }
//     console.log(this.custArr);
//   },
//   getCookies: function(){
//     this.getCust();
//     for(let i = 0; i < this.custArr.length; i++){
//       let cookiesSold = this.custArr[i]* this.avg;
//       this.cookies.push(Math.ceil(cookiesSold));
//     }
//     console.log('cookies; ', this.cookies);
//   },
//   render: function(){
//     this.getCookies();
//     let storeName = document.createElement('p');
//     storeName.textContent = this.name;
//     salesData.appendChild(storeName);

//     let uList = document.createElement('ul');
//     salesData.appendChild(uList);

//     for(let i = 0; i < hours.length; i++){
//       let time = document.createElement('li');
//       time.textContent = hours[i] + - this.cookies[i] + '     cookies';
//       salesData.appendChild(time);
//     }

//   }
// };

// tokyo.getCust();
// tokyo.render();
// console.log(tokyo);

// let dubai = {
//   name: 'Dubai',
//   minCust: 11,
//   maxCust: 38,
//   avg: 3.7,
//   custArr: [],
//   cookies: [],
//   getCust: function(){
//     for(let i = 0; i < hours.length; i++){
//       let number = getRandomInt(this.minCust, this.maxCust);
//       this.custArr.push(number);
//     }
//     console.log(this.custArr);
//   },
//   getCookies: function(){
//     this.getCust();
//     for(let i = 0; i < this.custArr.length; i++){
//       let cookiesSold = this.custArr[i]* this.avg;
//       this.cookies.push(Math.ceil(cookiesSold));
//     }
//     console.log('cookies; ', this.cookies);
//   },
//   render: function(){
//     this.getCookies();
//     let storeName = document.createElement('p');
//     storeName.textContent = this.name;
//     salesData.appendChild(storeName);

//     let uList = document.createElement('ul');
//     salesData.appendChild(uList);

//     for(let i = 0; i < hours.length; i++){
//       let time = document.createElement('li');
//       time.textContent = hours[i] + - this.cookies[i] + '     cookies';
//       salesData.appendChild(time);
//     }
//   }
// };

// dubai.render();
// dubai.getCust();
// console.log(tokyo);

// let paris = {
//   name: 'Paris',
//   minCust: 20,
//   maxCust: 38,
//   avg: 2.3,
//   custArr: [],
//   cookies: [],
//   getCust: function(){
//     for (let i = 0; i < hours.length; i++){
//       let number = getRandomInt(this.minCust,  this.maxCust);
//       this.custArr.push(number);
//     }
//     console.log(this.custArr);
//   },
//   getCookies: function(){
//     this.getCust();
//     for(let i = 0; i < this.custArr.length; i++){
//       let cookiesSold = this.custArr[i]* this.avg;
//       this.cookies.push(Math.ceil(cookiesSold));
//     }
//     console.log('cookies; ', this.cookies);
//   },
//   render: function(){
//     this.getCookies();
//     let storeName = document.createElement('p');
//     storeName.textContent = this.name;
//     salesData.appendChild(storeName);

//     let uList = document.createElement('ul');
//     salesData.appendChild(uList);

//     for(let i = 0; i < hours.length; i++){
//       let time = document.createElement('li');
//       time.textContent = hours[i] + - this.cookies[i] + '     cookies';
//       salesData.appendChild(time);
//     }
//   }
// };

// paris.render();
// paris.getCust();
// console.log(paris);

// let lima = {
//   name: 'Lima',
//   minCust: 2,
//   maxCust: 16,
//   avg: 4.6,
//   custArr: [],
//   cookies: [],
//   getCust: function(){
//     for (let i = 0; i < hours.length; i++){
//       let number = getRandomInt(this.minCust, this.maxCust);
//       this.custArr.push(number);
//     }
//     console.log(this.custArr);
//   },
//   getCookies: function(){
//     this.getCust();
//     for(let i = 0; i < this.custArr.length; i++){
//       let cookiesSold = this.custArr[i]* this.avg;
//       this.cookies.push(Math.ceil(cookiesSold));
//     }
//     console.log('cookies; ', this.cookies);
//   },
//   render: function(){
//     this.getCookies();
//     let storeName = document.createElement('p');
//     storeName.textContent = this.name;
//     salesData.appendChild(storeName);

//     let uList = document.createElement('ul');
//     salesData.appendChild(uList);

//     for(let i = 0; i < hours.length; i++){
//       let time = document.createElement('li');
//       time.textContent = hours[i] + - this.cookies[i] + '     cookies';
//       salesData.appendChild(time);
//     }
//   }
// };

// lima.render();
// lima.getCust(){
