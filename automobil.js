window.addEventListener("load", function(){
	document.getElementById("forma").addEventListener("submit", function(event){
        var validno = true;
        if( document.getElementById("marka").value.length < 3 ){
    validno=false;
    document.getElementById("marka").classList.add("error");
    document.getElementById("marka").classList.remove("success");

        }
        else {
    document.getElementById("marka").classList.add("success");
    document.getElementById("marka").classList.remove("error");
    }

    if(!validno){
        event.preventDefault();
    }else{
        var spanovi = document.querySelectorAll("#opreme > span.badge");
        var niz = [];
        for(let i=0; i<spanovi.length; i++){
         niz.push(spanovi[i].dataset.id);
      }
      var string = JSON.stringify(niz);
      document.getElementById("opreme-input").value = string;
    }

    return validno;
    });

    document.getElementById("dodaj-opremu").addEventListener("click", function(){
        var id = document.getElementById("spisak-opreme").value;
        if(!id){
            alert("Izaberi opremu");
            return;
        }
        dodajOpremu( id );
    });


    
});

document.getElementById("marka").addEventListener("keypress", function(){
    this.classList.remove('success'); 
this.classList.remove('error'); 
});

function dodajOpremu(id){   
    document.querySelector(`#spisak-opreme > option[value='${id}']`).disabled = true;
    document.getElementById("spisak-opreme").selectedIndex = 0;

    var marka = document.querySelector(`#spisak-opreme > option[value='${id}']`).innerHTML;

    var span = document.createElement("span");
    span.classList.add("badge");
    span.classList.add("bg-secondary");
    span.dataset.id = id;
    span.innerHTML = marka;

    var button = document.createElement("button");
    button.type="button";
    button.classList.add("btn");
    button.classList.add("btn-default");
    button.classList.add("btn-sm");
    button.innerHTML = "X";

    span.appendChild(button);
    document.getElementById("opreme").appendChild(span);
    document.getElementById("opreme").appendChild(document.createTextNode(" "));

    button.addEventListener("click", function(){ 
        var id = this.parentNode.dataset.id;
        this.parentNode.parentNode.removeChild( this.parentNode );
        document.querySelector(`#spisak-opreme > option[value='${id}']`).disabled = false;

     
    });

   


}

