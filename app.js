var form = document.getElementById('sheetdb-form');

form.addEventListener("submit", e => {
    e.preventDefault();
    fetch(form.action, {
        method: "POST",
        body: new FormData(document.getElementById('sheetdb-form')),
    }).then(
        response => response.json
    );
})


const replyList = []
const noteList = []

const ticketInput = document.getElementById('ticket-input');

const noteInput = document.getElementById('note-input');

const btnEnter = document.getElementById('btn-enter');

function appendReply() {
    replyList.push(ticketInput.value);
    noteList.push(noteInput.value);
    console.log(replyList);
    console.log(noteList);
}

const replyDiv = document.getElementById('reply-list');

function displayInputs() {
    replyDiv.insertAdjacentHTML(
        'beforeend',
        `<li>${ticketInput.value}: ${noteInput.value}`
        );
}

btnEnter.addEventListener('click', ()=> {
    appendReply();
    displayInputs();
});
/* function showInput(){
    list.insertAdjacentHTML(
        'beforeend',
        `<tr>
          <td><input type="checkbox" class="select"></td>
          <td>${ticketInput.value}</td>
          <td>${noteInput.value}</td>
          <button class="deleteBtn">Delete Reply</button>
        </tr>`
          )
     //replyNumber++
     //document.getElementById('counterDisplay').innerHTML=`<h3 id="counterDisplay"> Reply count: ${replyNumber}</h3>`;
     //ticketInput.value = '';
     //noteInput.value = '';
}; 

const btnEnter = document.getElementById('btn-enter');

btnEnter.addEventListener('click', () => {
    showInput();
});

const table = document.querySelector('table');

function deleteReply(e) {
    if(!e.target.classList.contains('deleteBtn')){
      return;
    }
  
    const btn = e.target;
    btn.closest('tr').remove();
    //document.getElementById('counterDisplay').innerHTML=`<h3 id="counterDisplay"> Reply count: ${replyNumber}</h3>`;
  }

table.addEventListener('click', deleteReply); */