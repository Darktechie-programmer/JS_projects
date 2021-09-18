// console.log("working");
showNotes();

// If user adds a note, add it to the localStorage

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", (e) => {
  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
    localStorage.clear();
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
//   console.log(notesObj);
  showNotes();
});

//function to show elements from localStorage
function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
    localStorage.clear();
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach((element, index) => {
    html += ` 
        <div class="noteCard card my-2 mx-4" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Notes ${index + 1}</h5>
                <p class="card-text">${element}</p>
                <a id="${index}" onclick="deleteNotes(this.id)" class="btn btn-primary">Delete Note</a>
            </div>
        </div> `;
  });
  let notesElm = document.getElementById("notes");
  if (notes && notes.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `Nothing to show! use "Add a Note" section above to add Notes.`;
  }
}

// Function to delete a note
function deleteNotes(id) {
//   console.log(id, "delete");

  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
    localStorage.clear();
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(id, 1);
  localStorage.setItem('notes',JSON.stringify(notesObj));
  showNotes();
}

//

let search = document.getElementById('searchTxt');
search.addEventListener('input', ()=>{
    let inputVal = search.value.toLowerCase();
    // console.log('Input event Fire!', inputVal);
    let noteCard = document.getElementsByClassName('noteCard');
    Array.from(noteCard).forEach((element)=>{
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }else{
            element.style.display = "none";
        }
    })
})


/* 
Further Features:
    1: Add Title
    2: Mark a note as Important
    3: Seprate notes based on their name
*/
