const countBtn = document.querySelector('#count__btn');
var numberOfLawyers;
var sortLawyers = [];
var ascSortedLawyers = [];
var descSortedLawyers = [];

setup();

function setup() {
    firebase.initializeApp(firebaseConfig);
    database = firebase.database();
    loadFirebase();
}

function loadFirebase() {
    var lawyersRef = database.ref('lawyers');
    lawyersRef.on('value', gotData, errData);
}

function loadSortedFirebase() {
    var lawyersRef = database.ref('lawyers');
    lawyersRef.on('value', sortData, errData);
}

function gotData(data) {
    var lawyers = data.val();
    var keys = Object.keys(lawyers);

    const lawyersHtmlWrapper = document.getElementById('lawyers__list');
    var innerItem = '';

    var sortLawyers = [];

    function bubble_SortAsc(a) {
        var swapp;
        var n = a.length - 1;
        var x = a;
        do {
            swapp = false;
            for (var i = 0; i < n; i++) {
                if (x[i].pricePerHourInDollars > x[i + 1].pricePerHourInDollars) {
                    var temp = x[i];
                    x[i] = x[i + 1];
                    x[i + 1] = temp;
                    swapp = true;
                }
            }
            n--;
        } while (swapp);
        return x;
    }
    for (var iter = 0; iter < keys.length; iter++) {
        key = keys[iter];
        lawyer = lawyers[key];
        sortLawyers.push(lawyer);
    }

    for (var iteration = 0; iteration < keys.length; iteration++) {
        var key = keys[iteration];
        ascSortedLawyers.push(bubble_SortAsc(sortLawyers)[iteration]);

        innerItem += `
            <li class="main_card-item">
                <a>
                    <div class="card_info">                 
                        <div class="first__name">
                            ${"First name: " + ascSortedLawyers[iteration].firstName}
                        </div>
                        <span class="card_line"></span>
                        <div class="second__name">
                            ${"Second name: " + ascSortedLawyers[iteration].secondName}
                        </div>
                        <span class="card_line"></span>
                        <div class="age">
                            ${"Age: " + ascSortedLawyers[iteration].age}
                        </div>
                        <span class="card_line"></span>
                        <div class="price">
                            ${"Price: " + ascSortedLawyers[iteration].pricePerHourInDollars}
                        </div>
                    </div>
                        
                    <div class="card_btn_wrapper">
                        <button id="btnEdit" class="btn__edit" onclick="editLawyer(${iteration})" type="button">
                            Edit
                        </button>
                        <button id="btnDelete" class="btn__del" onclick="deleteLawyer(${iteration})"  type="button">
                            Delete
                        </button>
                    </div>
                </a>
            </li>
        `;
        lawyersHtmlWrapper.innerHTML = innerItem;
    }

    console.log(ascSortedLawyers);
    const totalLawyersHtmlWrapper = document.getElementById('lawyersNumber');
    totalLawyersHtmlWrapper.innerHTML = keys.length;
}

function errData(err) {
    console.log('Error!');
    console.log(err);
}

function sortData(data) {

    var chkbox = document.getElementById('chbox_sort');

    var innerItem = '';
    const lawyersHtmlWrapper = document.getElementById('lawyers__list');

    firebase.database().ref('lawyers').once('value').then(function(snapshot) {
        var lawyers = snapshot.val();
        var keys = Object.keys(lawyers);

        if (chkbox.checked) {

            function bubble_SortDesc(a) {
                var swapp;
                var n = a.length - 1;
                var x = a;
                do {
                    swapp = false;
                    for (var i = 0; i < n; i++) {
                        if (x[i].pricePerHourInDollars < x[i + 1].pricePerHourInDollars) {
                            var temp = x[i];
                            x[i] = x[i + 1];
                            x[i + 1] = temp;
                            swapp = true;
                        }
                    }
                    n--;
                } while (swapp);
                return x;
            }
            for (var iter = 0; iter < keys.length; iter++) {
                key = keys[iter];
                lawyer = lawyers[key];
                sortLawyers.push(lawyer);
            }


            for (var iteration = 0; iteration < keys.length; iteration++) {
                var key = keys[iteration];
                descSortedLawyers.push(bubble_SortDesc(sortLawyers)[iteration]);

                innerItem += `
                    <li class="main_card-item">
                        <a>
                            <div class="card_info">                 
                                <div class="first__name">
                                    ${"First name: " + descSortedLawyers[iteration].firstName}
                                </div>
                                <span class="card_line"></span>
                                <div class="second__name">
                                    ${"Second name: " + descSortedLawyers[iteration].secondName}
                                </div>
                                <span class="card_line"></span>
                                <div class="age">
                                    ${"Age: " + descSortedLawyers[iteration].age}
                                </div>
                                <span class="card_line"></span>
                                <div class="price">
                                    ${"Price: " + descSortedLawyers[iteration].pricePerHourInDollars}
                                </div>
                            </div>
    
                            <div class="card_btn_wrapper">
                                <button id="btnEdit" class="btn__edit" onclick="editLawyer(${iteration})" type="button">
                                    Edit
                                </button>
                                <button id="btnDelete" class="btn__del" onclick="deleteLawyer(${iteration})"  type="button">
                                    Delete
                                </button>
                            </div>
                        </a>
                    </li>
                `;
                lawyersHtmlWrapper.innerHTML = innerItem;
            }
        } else {
            for (var iteration = 0; iteration < keys.length; iteration++) {
                var key = keys[iteration];

                innerItem += `
                    <li class="main_card-item">
                        <a>
                            <div class="card_info">                 
                                <div class="first__name">
                                    ${"First name: " + ascSortedLawyers[iteration].firstName}
                                </div>
                                <span class="card_line"></span>
                                <div class="second__name">
                                    ${"Second name: " + ascSortedLawyers[iteration].secondName}
                                </div>
                                <span class="card_line"></span>
                                <div class="age">
                                    ${"Age: " + ascSortedLawyers[iteration].age}
                                </div>
                                <span class="card_line"></span>
                                <div class="price">
                                    ${"Price: " + ascSortedLawyers[iteration].pricePerHourInDollars}
                                </div>
                            </div>
                                
                            <div class="card_btn_wrapper">
                                <button id="btnEdit" class="btn__edit" onclick="editLawyer(${iteration})" type="button">
                                    Edit
                                </button>
                                <button id="btnDelete" class="btn__del" onclick="deleteLawyer(${iteration})"  type="button">
                                    Delete
                                </button>
                            </div>
                        </a>
                    </li>
                `;
                lawyersHtmlWrapper.innerHTML = innerItem;
            }
        }
    });


}

function editLawyer(id) {

}

function deleteLawyer(id) {

}