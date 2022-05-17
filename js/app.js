'use strict';
let salesData = document.getElementById('SalesData');
console.log(salesData);


let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function getRandomInt(min ,max) {
  return Math.floor(Math.random() * (max-min+1))+min;
}


let seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avg: 6.5,
  custArr:[],
  cookies: [],
  getCust: function(){
    for(let i = 0; i < hours.length; i++){
      let number = getRandomInt(this.minCust, this.maxCust);
      this.custArr.push(number);
    }
    console.log(this.custArr);
  },
  getCookies: function(){
    this.getCust();
    for(let i = 0; i < this.custArr.length; i++){
      let cookiesSold = this.custArr[i]* this.avg;
      this.cookies.push(cookiesSold);
    }
    console.log('cookies; ', this.cookies);
  },
  render: function(){
    this.getCookies();
    let storeName = document.createElement('p');
    storeName.textContent = this.name;
    salesData.appendChild(storeName);

    let uList = document.createElement('ul');
    salesData.appendChild(uList);

    for(let i = 0; i < hours.length; i++){
      let time = document.createElement('li');
      time.textContent = hours[i];
      salesData.appendChild(time);
    }

    //let test = document.createElement('li');
    //test.textContent = 'test';
    //salesData.appendChild(test);
  }
};

seattle.getCust();
seattle.render();
console.log(seattle);

let tokyo = {
  minCust: 3,
  maxCust: 24,
  avg: 1.2,
  custArr: [],
  getCust: function(){
    for(let i = 0; i < hours.length; i++){
      let number = getRandomInt(this.minCust, this.maxCust);
      this.custArr.push(number);
    }
  }
};

tokyo.getCust();
console.log(tokyo);

let dubai = {
  minCust: 11,
  maxCust: 38,
  avg: 3.7,
  custArr: [],
  getCust: function(){
    for(let i = 0; i < hours.length; i++){
      let number = getRandomInt(this.minCust, this.maxCust);
      this.custArr.push(number);
    }
  }
};

dubai.getCust();
console.log(tokyo);

let paris = {
  minCust: 20,
  maxCust: 38,
  avg: 2.3,
  custArr: [],
  getCust: function(){
    for (let i = 0; i < hours.length; i++){
      let number = getRandomInt(this.minCust,  this.maxCust);
      this.custArr.push(number);
    }
  }
};

paris.getCust();
console.log(paris);

let lima = {
  minCust: 2,
  maxCust: 16,
  avg: 4.6,
  custArr: [],
  getCust: function(){
    for (let i = 0; i < hours.length; i++){
      let number = getRandomInt(this.minCust, this.maxCust);
      this.custArr.push(number);
    }
  }
};

lima.getCust();
console.log(lima);
