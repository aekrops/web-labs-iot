const countBtn = document.querySelector('#count__btn');
const chkbox = document.getElementById('chbox_sort');
const searchList = document.getElementById('filter__input');
const clearBtn = document.getElementById('filter_option__clean');
const sumOfPrice = document.getElementById('lawyersNumber');

const firstName__input = document.getElementById('firstName');
const secondName__input = document.getElementById('secondName');
const age__input = document.getElementById('age');
const pricePerHourInDollars__input = document.getElementById('pricePerHourInDollars');

const lawyersHtmlWrapper = document.getElementById('lawyers__list');
var priceCount;
var listOfLawyer = [];
let lawyersFinded = [];
var keys;
var id;

setup();

function setup() {
    firebase.initializeApp(firebaseConfig);
    database = firebase.database();
    loadFirebase();
}

function loadFirebase() {
    var firebaseRef = database.ref('lawyers');
    firebaseRef.on('value', getData, errData);
}

function loadSortedFirebase() {
    var firebaseRef = database.ref('lawyers');
    firebaseRef.on('value', sortData, errData);
}

function loadFirebaseToSort() {
    var firebaseRef = database.ref("lawyers");
    firebaseRef.on("value", readData, errData);

}

function readData(data) {
    var lawyers = data.val();
    keys = Object.keys(data.val());
    keys.forEach((lawyer, index) => {
        key = keys[index];
        lawyer = lawyers[key];
        listOfLawyer.push(lawyer);
    });
}

function getData(data) {
    var lawyers = data.val();
    let innerItem = ` `;
    lawyersFinded = []
    priceCount = 0;
    id = 0;
    cleanPage();
    keys = Object.keys(data.val());
    keys.forEach((lawyer, index) => {
        key = keys[index];
        lawyer = lawyers[key];
        if (!isNaN(lawyer.pricePerHourInDollars)) {
            priceCount += Number.parseInt(lawyer.pricePerHourInDollars);
        }
        listOfLawyer.push(lawyer);
        innerItem += `
        <li class="main_card-item">
                <a>
                    <div class="card_info">                 
                        <div class="first__name">
                            ${"First name: " + lawyer.firstName}
                        </div>
                        <span class="card_line"></span>
                        <div class="second__name">
                            ${"Second name: " + lawyer.secondName}
                        </div>
                        <span class="card_line"></span>
                        <div class="age">
                            ${"Age: " + lawyer.age}
                        </div>
                        <span class="card_line"></span>
                        <div class="price">
                            ${"Price: " + lawyer.pricePerHourInDollars}
                        </div>
                    </div>
                        
                    <div class="card_btn_wrapper">
                        <button id="btnEdit" class="btn__edit" onclick="editLawyer(${id})" type="button">
                            Edit
                        </button>
                        <button id="btnDelete" class="btn__del" onclick="deleteLawyer(${id})"  type="button">
                            Delete
                        </button>
                    </div>
                </a>
            </li>
        `;
        id++;
    });
    lawyersHtmlWrapper.innerHTML = innerItem;
    sumOfPrice.innerText = priceCount;
}

function errData(err) {
    console.log('Error!');
    console.log(err);
}

const displayLawyers = (lawyers) => {
    const displayItems = lawyers.map((lawyer) => {
        return `
        <li class="main_card-item">
                <a>
                    <div class="card_info">                 
                        <div class="first__name">
                            ${"First name: " + lawyer.firstName}
                        </div>
                        <span class="card_line"></span>
                        <div class="second__name">
                            ${"Second name: " + lawyer.secondName}
                        </div>
                        <span class="card_line"></span>
                        <div class="age">
                            ${"Age: " + lawyer.age}
                        </div>
                        <span class="card_line"></span>
                        <div class="price">
                            ${"Price: " + lawyer.pricePerHourInDollars}
                        </div>
                    </div>
                        
                    <div class="card_btn_wrapper">
                        <button id="btnEdit" class="btn__edit" onclick="editLawyer(${lawyer.id})" type="button">
                            Edit
                        </button>
                        <button id="btnDelete" class="btn__del" onclick="deleteLawyer(${lawyer.id})"  type="button">
                            Delete
                        </button>
                    </div>
                </a>
            </li>
    `
    }).join('');
    lawyersHtmlWrapper.innerHTML = displayItems;
    sumOfPrice.innerText = priceCount;
}

function cleanPage() {
    let innerItem = ``;
    lawyersHtmlWrapper.innerHTML = innerItem;
}

function sortData() {
    if (chkbox.checked) {
        listOfLawyer = []
        lawyersFinded = []
        loadFirebaseToSort();
        cleanPage();
        listOfLawyer.sort(priceSort);
        displayLawyers(listOfLawyer);

    } else {
        listOfLawyer = []
        lawyersFinded = []
        loadFirebase();
        cleanPage();
        displayLawyers(listOfLawyer);

    }

}

function priceSort(priceA, priceB) {
    return priceB.pricePerHourInDollars - priceA.pricePerHourInDollars;
}

function writeData() {
    var data = {
        firstName: firstName.value,
        secondName: secondName.value,
        age: age.value,
        pricePerHourInDollars: pricePerHourInDollars.value,
        id: id
    }
    if (validation()) {
        lawyersManager = database.ref('lawyers').push(data, savedData);
    } else {
        console.log("Validation error!");
    }

    cleanInputs();

    function savedData(err) {
        if (err) {
            console.log("Something went wrong.");
            console.log(err);
        } else {
            console.log('Data saved');
        }
    }
    listOfLawyer = [];
    loadFirebase();
}

function cleanInputs() {
    document.getElementById('firstName').value = '';
    document.getElementById('secondName').value = '';
    document.getElementById('age').value = '';
    document.getElementById('pricePerHourInDollars').value = '';
}

function validation() {
    if (firstName__input.value == "" && secondName__input.value == "" && age__input.value == "" && pricePerHourInDollars__input.value == "") {
        alert("Enter inputs area")
        return false;
    } else if (secondName__input.value == "" && age__input.value == "" && pricePerHourInDollars__input.value == "") {
        alert("Enter second name, age, price");
        return false;
    } else if (firstName__input.value == "" && age__input.value == "" && pricePerHourInDollars__input.value == "") {
        alert("Enter first name, age, price");
        return false;
    } else if (firstName__input.value == "" && secondName__input.value == "" && pricePerHourInDollars__input.value == "") {
        alert("Enter first name, second name, price");
        return false;
    } else if (firstName__input.value == "" && secondName__input.value == "" && age__input.value == "") {
        alert("Enter first name, second name, age");
        return false;
    } else if (firstName__input.value == "" && secondName__input.value == "") {
        alert("Enter first name, second name");
        return false;
    } else if (firstName__input.value == "" && age__input.value == "") {
        alert("Enter first name, age")
        return false;
    } else if (firstName__input.value == "" && pricePerHourInDollars__input.value == "") {
        alert("Enter first name, price");
        return false;
    } else if (secondName__input.value == "" && age__input.value == "") {
        alert("Enter second name, age");
        return false;
    } else if (secondName__input.value == "" && pricePerHourInDollars__input.value == "") {
        alert("Enter second name, price");
        return false;
    } else if (age__input.value == "" && pricePerHourInDollars__input.value == "") {
        alert("Enter age, price");
        return false;
    } else if (firstName__input.value == "") {
        alert("Enter first name");
        return false;
    } else if (secondName__input.value == "") {
        alert("Enter second name");
        return false;
    } else if (age__input.value == "") {
        alert("Enter age");
        return false;
    } else if (pricePerHourInDollars__input.value == "") {
        alert("Enter price");
        return false;
    } else if (typeof pricePerHourInDollars__input.value !== "number") {
        alert("Enter correct price");
        return false;
    } else {
        return true;
    }
}

function editLawyer(index) {
    key = keys[index];
    if (validation()) {
        firebase.database().ref("lawyers/" + key).set({
            firstName: firstName__input.value,
            secondName: secondName__input.value,
            age: age__input.value,
            pricePerHourInDollars: pricePerHourInDollars__input.value,
            id: index
        });
    } else {
        console.log("Data was not saved");
    }

    cleanInputs();
    listOfLawyer = [];
    loadFirebase();
}

function deleteLawyer(index) {
    key = keys[index]
    database.ref("lawyers/" + key).remove();
    listOfLawyer = [];
    loadFirebase();
}

searchList.addEventListener('keyup', (searchedString) => {
    const filterString = searchedString.target.value.toLowerCase();
    priceCount = 0;
    lawyersFinded = listOfLawyer.filter(lawyer => lawyer.firstName.toLowerCase().includes(filterString));
    lawyersFinded.forEach(lawyer => { if (!isNaN(lawyer.pricePerHourInDollars)) priceCount += Number.parseInt(lawyer.pricePerHourInDollars) });
    cleanPage();
    displayLawyers(lawyersFinded);
});

clearBtn.addEventListener('click', () => {
    searchList.value = '';
    listOfLawyer = [];
    loadFirebase();
})