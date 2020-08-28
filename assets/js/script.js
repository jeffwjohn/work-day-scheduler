var tasks = {};


// $("#time").on("change", function() {

// console.log($("#time").val());


// DISPLAY CURRENT DATE IN HEADER
$("#year").text(moment().format('YYYY'));
$("#currentDay").text(moment().format('dddd, MMMM DD'));
$("#time").text(moment().format('hh:mm a'));

// ONE BUTTON SAVES ALL INPUTS
// $(document).ready(function () {

//     var saveBtn = document.querySelector(".saveBtn");

//     for (var i = 0; i < 9; i++) {
//         $("#slot" + i).val(localStorage.getItem("slot" + i));
//     }

//     function saveEntry() {
//         for (var i = 0; i < 9; i++) {
//             localStorage.setItem("slot" + i, $("#slot" + i).val());
//         }
//     };

//     saveBtn.addEventListener("click", saveEntry);
// })


// SAVE USER INPUT TO LOCAL STORAGE
$(".saveBtn").click(function (event) {
    localStorage.setItem($(this).attr("id"), $(this).siblings(".user-input").val());

})
// 
// window.onload = function () {
//     // alert("welcome");
//     // var textArea = $("#textarea");
//     //         if ($.trim(textArea.val()) == '') {
//             for (i = 0; i < 9; i++) {
//                 $("#saveBtn" + i).val(localStorage.getItem("saveBtn" + i));

//             }

//             function saveEntry() {
//                 for (var i = 0; i < 9; i++) {
//                    localStorage.setItem($(this).attr("id"), $(this).siblings(".user-input").val());

//                    var list = JSON.parse(localStorage.getItem($(this).attr("id")) || [];

//                     console.log(list);


//                     // var userInput = $(".user-input").val(storedItem).val();


//                     // console.log(textArea.attr("id"));
//                 }
//                 console.log(list);
//             };
//              saveEntry();

//       };


//         // var textArea = $("#textarea");
//         // if ($.trim(textArea.val()) == '') {
//         for (i = 0; i < 9; i++) {
//             $("#saveBtn" + i).val(localStorage.getItem("saveBtn" + i));

//         }

//         function saveEntry() {
//             for (var i = 0; i < 9; i++) {
//                 localStorage.setItem($(this).attr("id"), $(this).siblings(".user-input").val());




// var userInput = $(".user-input").val(storedItem).val();


// console.log(textArea.attr("id"));
//         }

//     };
//     saveEntry();
// })
// var storedItem = localStorage.getItem(textArea.attr("id"), $(this).siblings(".user-input").val());
// textArea.val(storedItem); $(".user-input").val(storedItem);

// var list1 = JSON.parse(localStorage.getItem('entry1')) || [];
// var list2 = JSON.parse(localStorage.getItem('entry2')) || [];
// var list3 = JSON.parse(localStorage.getItem('entry3')) || [];
// var list4 = JSON.parse(localStorage.getItem('entry4')) || [];
// var list5 = JSON.parse(localStorage.getItem('entry5')) || [];
// var list6 = JSON.parse(localStorage.getItem('entry6')) || [];
// var list7 = JSON.parse(localStorage.getItem('entry7')) || [];
// var list8 = JSON.parse(localStorage.getItem('entry8')) || [];
// var list9 = JSON.parse(localStorage.getItem('entry9')) || [];

// function renderEntries(list1) {
//     for (var i = 0; i < list1.length; i++) {
//         var hourBar1 = $('#textarea1');
//         hourBar1.text(list1[i]);
//     }
// }

// var userEntry1 = $('#textarea1').val().trim();

// list1.push(userEntry1);

// renderEntries(list1);

// localStorage.setItem('entry1', JSON.stringify(list1));
var textArea = $(".user-input");
var now = moment().format('h A');
var time = $(".hour").text();
var hourBlocks = document.getElementsByClassName("hour"); 
var currentHour = parseInt(moment().format('H'));


function changeColor() {
    for (i = 0; i < 9; i++)
    if  (hourBlocks[i].id  < currentHour) {
        $(hourBlocks[i]).siblings(".user-input").addClass('bg-secondary');

    } else if (hourBlocks[i].id == currentHour) {
        $(hourBlocks[i]).siblings(".user-input").addClass('bg-danger');

    } else if (hourBlocks[i].id > currentHour) {
        $(hourBlocks[i]).siblings(".user-input").addClass('bg-success');   
    }
}

changeColor();


console.log(now);
console.log(time);
console.log(currentHour);
console.log(hourBlocks[8].id);
console.log(hourBlocks[0])
