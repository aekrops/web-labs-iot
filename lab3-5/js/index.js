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
let lawyersFinded;
var keys;

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
    var ref = database.ref("lawyers");
    ref.on("value", readData, errData);

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

    priceCount = 0;

    keys = Object.keys(data.val());
    keys.forEach((lawyer, index) => {
        key = keys[index];
        lawyer = lawyers[key];
        priceCount += Number.parseInt(lawyer.pricePerHourInDollars);
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
                        <button id="btnEdit" class="btn__edit" onclick="editLawyer(${index})" type="button">
                            Edit
                        </button>
                        <button id="btnDelete" class="btn__del" onclick="deleteLawyer(${index})"  type="button">
                            Delete
                        </button>
                    </div>
                </a>
            </li>
        `;
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
                        <button id="btnEdit" class="btn__edit" onclick="editLawyer()" type="button">
                            Edit
                        </button>
                        <button id="btnDelete" class="btn__del" onclick="deleteLawyer()"  type="button">
                            Delete
                        </button>
                    </div>
                </a>
            </li>
    `
    }).join('');
    lawyersHtmlWrapper.innerHTML = displayItems;
}

function cleanPage() {
    let innerItem = ``;
    lawyersHtmlWrapper.innerHTML = innerItem;
}

function sortData() {
    if (chkbox.checked) {
        listOfLawyer = []
        loadFirebaseToSort();
        cleanPage();
        listOfLawyer.sort(priceSort);
        displayLawyers(listOfLawyer);

    } else {
        listOfLawyer = []
        loadFirebaseToSort();
        cleanPage();
        displayLawyers(listOfLawyer);

    }

}

function priceSort(priceF, priceS) {
    return priceF.pricePerHourInDollars - priceS.pricePerHourInDollars;
}

function createLawyer() {
    var data = {
        firstName: firstName.value,
        secondName: secondName.value,
        age: age.value,
        pricePerHourInDollars: pricePerHourInDollars.value
    }
    if (validation() === false) {
        lawyersManager = database.ref('lawyers').push(data, finished);
    } else {
        alert("Empty fields!");
    }

    cleanInputs();

    function finished(err) {
        if (err) {
            console.log("Something went wrong.");
            console.log(err);
        } else {
            console.log('Data saved successfully');
        }
    }
}

function cleanInputs() {
    document.getElementById('firstName').value = '';
    document.getElementById('secondName').value = '';
    document.getElementById('age').value = '';
    document.getElementById('pricePerHourInDollars').value = '';
}

function validation() {
    if (firstName__input.value == "") {
        alert("Enter first name");
        return true;
    }
    if (secondName__input.value == "") {
        alert("Enter second name");
        return true;
    }
    if (age__input.value == "") {
        alert("Enter age");
        return true;
    }
    if (pricePerHourInDollars__input.value == "") {
        alert("Enter price");
        return true;
    } else {
        return false;
    }
}

function editLawyer(index) {
    key = keys[index];
    if (validation() === false) {
        firebase.database().ref("lawyers/" + key).set({
            firstName: firstName__input.value,
            secondName: secondName__input.value,
            age: age__input.value,
            pricePerHourInDollars: pricePerHourInDollars__input.value
        });
    } else {
        alert("alert")
    }

    cleanInputs();
}

function deleteLawyer(index) {
    key = keys[index]
    database.ref("lawyers/" + key).remove();
}

searchList.addEventListener('keyup', (searchedString) => {
    const filterString = searchedString.target.value.toLowerCase();
    let findLawyer = listOfLawyer.filter(lawyer => {
        return lawyer.firstName.toLowerCase().includes(filterString);
    });
    lawyersTest = findLawyer;
    cleanPage();
    displayLawyers(lawyersTest);
});

clearBtn.addEventListener('click', () => {
    searchList.value = '';
    lawyersTest = listOfLawyer;

    loadFirebase();
})