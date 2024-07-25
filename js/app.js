"use strict";

const cookName = document.querySelector("#cook-name"),
  submit = document.querySelector("#submit"),
  cookCount = document.querySelector("#cook-count"),
  cookPrice = document.querySelector("#cook-price span"),
  tableBody = document.querySelector("#tableBody"),
  service = document.querySelector("#service span"),
  general = document.querySelector("#general span");

const cookMenu = {
  palov: 20000,
  shorva: 16000,
  somsa: 10000,
  manti: 5000,
  shashlik: 21000,
};

function cookAddMenu() {
  for (const key in cookMenu) {
    cookName.innerHTML += `
            <option value="${key}">${key}</option>
    `;
  }
}

cookAddMenu();

function addMenuTable(params) {
  tableBody.innerHTML += `<tr class="cook-prise-td">
  <td class="cook-prise__name">${params.value}</td>
  <td class="cook-prise__count">${cookMenu[params.value]} * ${Number(
    cookCount.value
  )}</td>
  <td class="cook-prise__general">${
    cookMenu[params.value] * Number(cookCount.value)
  }</td>
</tr>`;
}


// const newObj = {}
// let newArr = []

// function newS(params, value) {

//   newArr.push(value)

//   newObj[params] = newArr
// }

// newS('ss',23)
// console.log(newObj);

let x = 0;


function  findElem(params,elems) {
  let bool;

  params.forEach(element => {
    
    if (element.innerText === elems.value) {
      bool = true
    } else {
      bool = false
    }
  })

  return bool
}



submit.addEventListener("click", () => {


  const cookPriseName = document.querySelectorAll(".cook-prise__name"),
  cookPriseCount = document.querySelectorAll(".cook-prise__count"),
  cookPriseTd = document.querySelectorAll(".cook-prise-td"),
  cookPriseGeneral = document.querySelectorAll(".cook-prise__general");

  
  if (findElem(cookPriseName, cookName)) {
    console.log(findElem(cookPriseName, cookName));
  } else {
    addMenuTable(cookName);
    console.log(findElem(cookPriseName, cookName));
  }

  let count = 0;

  cookPriseGeneral.forEach((element) => {
    count += +element.innerText;
  });

  cookPrice.innerHTML = `${count}`;
  service.innerHTML = `${count * 0.1}`;
  general.innerHTML = `${count + Number(service.innerHTML)}`;
  
});

