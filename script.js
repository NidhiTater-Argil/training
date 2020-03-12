var checked_global = 0;

function init() {
    document.querySelector('.forms').classList.add('hidden');
    document.querySelector('.comp').classList.remove('hidden');
     document.querySelector('#complaint').textContent = "";
     document.querySelector('#complaint').value = " ";
     


}
    
function show() {
    document.querySelector('.forms').classList.remove('hidden');
    document.querySelector('.comp').classList.add('hidden');
    document.querySelector('#complaint').value = " ";
    checked_global = 0;
    


}
function show1(event) {

    event.preventDefault();
    document.querySelector('.forms').classList.add('hidden');
    document.querySelector('.comp').classList.remove('hidden');
    let text;
    text = document.querySelector('#complaint').value;
    
    if(checked_global == 0)
    {   
        if(document.querySelector('#complaint').value!= " ")
        {
        var fn = document.querySelector('.firstName').value;
        var ln = document.querySelector('.lastName').value;
        var eid = document.querySelector('.eid').value;
      
    let cardComponent = document.getElementById('complaint-card');
        cardComponent.innerHTML += 
            `<div class="col-sm-12" >
                <div class="card">
                    <div class="card-body">
                        
                        <p class="comp1 card-text">${text}</p>
                        <p class="comp2 card-text">By ${fn} ${ln} (${eid})<button class = "delete-btn" style="float:right;"><i class="fa fa-trash-o" style="font-size:36px; "></i></button></p>
                    </div>
                </div>
            </div>`
            document.querySelector('.firstName').value = "";
            document.querySelector('.lastName').value = "";
            document.querySelector('.eid').value = "";
        }
      
    }
    else if (checked_global == 0 && document.querySelector('#complaint').value!= " "){
        let cardComponent = document.getElementById('complaint-card');
        cardComponent.innerHTML += 
            `<div class="col-sm-12">
                <div class="card">
                    <div class="card-body">
                        <p class="comp1 card-text">${text}</p>
                        <p class="comp2 card-text">~ anonymous</p>
                    </div>
                </div>
            </div>`
    }
    checked_global = 0 ;

    
}



function _checkbox(check) {
    if (check.checked) {
        document.querySelector('.name').classList.add('hidden');
        checked_global = 1;
    }
    else {
        document.querySelector('.name').classList.remove('hidden');
        checked_global = 0 ;
    }
}
function show2()
{
    document.querySelector('#compaint_card_inner').display.style = 'none';
    
}

init();
document.querySelector('.add').addEventListener("click", show);
document.querySelector('.submit').addEventListener("click", show1);
document.querySelector('.delete-btn').addEventListener("click",show2);