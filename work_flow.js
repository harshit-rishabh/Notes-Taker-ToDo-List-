
// Notes will be added to local storage

showmynotes();
let addNote = document.getElementById("addNote");
addNote.addEventListener("click", function (n) {

    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    showmynotes();
})


// Add Note Section

function showmynotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let notesadder = "";
    notesObj.forEach(function (element, index) {
        notesadder += `
        <div class="noteCard card my-2 mx-2" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Card ${index + 1}</h5>
                    <p class="card-text"> ${element}</p>
                    <button id = "${index}" onclick = "deletenote(this.id)" class="btn btn-primary">Delete Now</button>
                </div>
              </div>
        `
    });

    let noteselm = document.getElementById("notes");
    if(notesObj.length !=0){
        noteselm.innerHTML = notesadder;
    }
    else{
        noteselm.innerHTML = "Plz add note from 'Add Note' section.";
    }
}


// Delete Note Section

function deletenote(index){
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
     
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showmynotes();
}

// Search Notes Section

let searchTxt =  document.getElementById(`searchTxt`);
searchTxt.addEventListener("input", function(){
    let inputVal = searchTxt.value.toLowerCase();
    let noteCards = document.getElementsByClassName("noteCard");
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        console.log(cardTxt);
    })
})
