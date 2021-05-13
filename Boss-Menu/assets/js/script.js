var xx = [
   {
      "grade":5,
      "hex":"9a29b8356fed6fd73326fa442277b4e30e90c9b0",
      "user":"Connor Elith",
       "rank":"Oficer III"
   },
   {
      "grade":19,
      "hex":"d967aec4c1dcc791af5455410134689028bfd04f",
      "user":"Mike Hoover",
      "rank":"Chief of police"
   }
]

var yy = {
    "STANKONTA":997997,
    "WYPLAC":false,
    "ZARZADZANIEP":true,
    "WPLAC":true
}



xx.forEach(element => {
    console.log(element.user)
    
});

// const contCategory = document.querySelector('categoryContainer-cont');
// const box = document.createElement('div');
// box.setAttribute('class', 'categoryContainer-box');
// contCategory.append(box)
// box.setAttribute('name')
const finance = `
<div class="categoryContainer-bussiness-account-balance finance">
                    <div class="categoryContainer-bussiness-account-balance-text-one">
                        <h1 class="categoryContainer-bussiness-account-balance-text">Stan konta firmowego</h1>
                    </div>
                    <div class="categoryContainer-bussiness-account-balance-text-two">
                        <h1 class="categoryContainer-bussiness-account-balance-amount-text"><span class="balance"></span> <span class="dollar">$</span></h1>
                    </div>
                </div>
`;

const mainTabb = `<div class="categoryContainer-box" name="Panel zarządzania pracownikami" data-category="employee-management-panel">
<img src="assets/img/clipboard.png" alt="" name="Panel zarządzania pracownikami" data-category="employee-management-panel">
<h1 name="Panel zarządzania pracownikami" data-category="employee-management-panel">Panel zarządzania pracownikami</h1>
</div>
<div class="categoryContainer-box" name="Wpłać pieniądze" data-category="donate-money">
<img src="assets/img/give.png" name="Wpłać pieniądze" alt="" data-category="donate-money">
<h1 data-category="donate-money" name="Wpłać pieniądze">Wpłać pieniądze</h1>
</div>
<div class="categoryContainer-box" name="Wypłać pieniądze" data-category="withdraw-the-money">
<img src="assets/img/wass.png" name="Wypłać pieniądze" alt="" data-category="withdraw-the-money">
<h1 name="Wypłać pieniądze" data-category="withdraw-the-money">Wypłać pieniądze</h1>
</div>`;

//     box.append(image)

const mainTab = document.querySelector('.main-tab');
const financeContichuj = document.querySelector('.financeContichuj');
// console.log(financeContichuj)
// window.onload = () => {
    financeContichuj.innerHTML = finance;
    mainTab.innerHTML = mainTabb;
// }

console.log(yy["STANKONTA"])
let balance = document.querySelector('.balance');
balance.innerHTML = `${yy["STANKONTA"]}`

const categoryName = document.querySelector('.categoryName');
const categoryContainer = document.querySelector('.categoryContainer-list');
// const finance = document.querySelector('.finance');
let elements = document.querySelectorAll('.categoryContainer-box');

// let elements = document.querySelectorAll('.categoryContainer-box');
// 
elements.forEach(element => {
        element.addEventListener('click', (el) => {
        const dataCategoryTarget = el.target.getAttribute("data-category");
        const nameCategoryTarget = el.target.getAttribute("name");
    //   console.log(dataCategoryTarget);
        if (yy["ZARZADZANIEP"] == true) {
            if (dataCategoryTarget == "employee-management-panel") {
                console.log("employee-management-panel")
                console.log(nameCategoryTarget);
                categoryContainer.innerHTML = '';
                // console.log(el)
                categoryName.innerHTML = `${nameCategoryTarget}`
                finance.style.display = "none";
                mainTab.style.display = "none";
            }
        } else {
            console.log("false")
        }
        ////////////////////////////////////////////
        ////////////////////////////////////////////
        if (yy["WPLAC"] == true) {
            if (dataCategoryTarget == "donate-money"){
                console.log("donate-money")
                categoryName.innerHTML = `${nameCategoryTarget}`
                mainTab.innerHTML = ``;
                financeContichuj.innerHTML = '';
                const div = document.createElement('div');
                div.setAttribute('class', 'kurwa-bialy-kwadrat');

                div.innerHTML = `<h1 class="kurwa-bialy-kwadrat-title">Wpłata na konto firmowe</h1> <input class="kurwa-bialy-kwadrat-input" placeholder="Wprowadź kwotę" type="text"> <div class="kurwa-buttons"> <button class="btn cancel">Anuluj</button> <button class="btn donate">Wpłać</button> </div>`
                

                categoryContainer.appendChild(div)
                const kurwaBialyKwadrat = document.querySelector('.kurwa-bialy-kwadrat');
                const cancelBtn = document.querySelector('.cancel');
                // const kurwaBialyKwadratdwa = document.querySelector('.kurwa-bialy-kwadrat');
                cancelBtn.addEventListener('click', () => {
                    kurwaBialyKwadrat.remove();
                    categoryName.innerHTML = '';
                    financeContichuj.innerHTML = finance;
                    mainTab.innerHTML = mainTabb;
                    console.log(yy["STANKONTA"])
                    let balance = document.querySelector('.balance');
                    balance.innerHTML = `${yy["STANKONTA"]}`
                    console.log(balance)
                    // let elements = document.querySelectorAll('.categoryContainer-box');
                })
            }
        } else {
            
            console.log("false")
        }

        ////////////////////////////////////////////
        ////////////////////////////////////////////
        if (yy["WYPLAC"] == true) {
            if (dataCategoryTarget == "withdraw-the-money") {
                console.log("withdraw-the-money")
                categoryName.innerHTML = `${nameCategoryTarget}`
                categoryContainer.innerHTML = '';
                finance.style.display = "none";
            }
        } else {
            console.log("false")
        }
    });
});
