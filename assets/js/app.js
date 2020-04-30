


//SELECCIÓN
let input = document.getElementById('input')
let container = document.getElementById('in')


// AÑADIR AL DOM
function addDom(){
    let elementHtml = document.createElement('p')
    let span = document.createElement('span')
    span.setAttribute('class','eliminar')
    elementHtml.appendChild(span)
    let value = document.createTextNode(input.value)
    elementHtml.appendChild(value);
    container.appendChild(elementHtml);
    input.value="";

}
// FUNCIÓN DEL BOTÓN
function textDom(){
    let button = document.getElementById('button')
        button.addEventListener('click', ()=>{
            if(input.value != ""){
                addDom()
            }
        })

}    
textDom()

// FUNCIÓN DE LA TECLA INTRO
function intro(){
    input.addEventListener('keypress', (e)=>{
        // console.log(e.keyCode)
        if( e.keyCode === 13){
            if(input.value != ""){
                addDom()
            }
            
        }
    })
}
intro()


//ACCIÓN DE ELIMINAR
function eliminar(){

    let selccionIn = document.getElementById('in');
    selccionIn.addEventListener('click', (e)=>{
    if((e.target.className == 'eliminar') || (e.target.className == 'recuperar')) {
        let elemnto = e.toElement.parentElement
        let remover = elemnto.remove();
        let out = document.getElementById('out').appendChild(elemnto)
        let addClass = elemnto.firstChild.setAttribute('class', 'recuperar')
        }
    })
}

eliminar()


//ACCIÓN DE RECUPERAR
let seleccionOut = document.getElementById('out');
    seleccionOut.addEventListener('click', (e)=>{
        if(e.target.className == 'recuperar'){
            let elemnto = e.toElement.parentElement
            let remover = elemnto.remove();
            let out = document.getElementById('in').appendChild(elemnto)
        }
        
    })


//CTA BORRAR
let ctaBorrar = document.querySelector(".suprimir").addEventListener('click', (e)=>{
        let seleccionCardEliminada = seleccionOut.lastChild
        if(seleccionCardEliminada != null){
            seleccionCardEliminada.remove()
        }
})


//CTA REFRESH
function refresh(){
    let actualizar = document.getElementById('refresh').addEventListener('click', ()=>{
        location.reload();
        console.log(actualizar)
    })
}

refresh()

// GUARDAR
function guardar(){
    let ctaGuardar = document.getElementById('guardar')
    let accionGuardar = ctaGuardar.addEventListener('click', ()=>{
        let primerPadre = container
        let contadorParrafo = 0;
        if(primerPadre.children.length != 1){
            let p = primerPadre.querySelectorAll('p')
            let seleccionListGuardada = document.getElementById('list')
            let div = document.createElement('div')
            let a = document.createElement('a')
            //CREAR ELEMENTO PADRE DE LISTA GUARDADA
            if(p.length != 0){
                let divContenedor = container.appendChild(div)
                div.setAttribute('class','numero-lista')
                let span = `<i class=" fas fa-times "></i><span class="suprimir"></span>`
                let enviaTextoALista = div.innerHTML= span;
                let linkA = divContenedor.appendChild(a)
                    linkA.setAttribute('class','btn')
                for(let i =0; i< p.length ;i++){
                    let parrafos = p[i]
                    contadorParrafo++
                    let divParrafo = divContenedor.appendChild(parrafos)
                    let seleccionAllList =  seleccionListGuardada.appendChild(divContenedor)
                    }
            }
            a.innerText=`Lista de ${contadorParrafo}`
            
        }
    })
}

guardar()

function listaGuardada(){
    let listSave = document.querySelector('#list') 
    listSave.addEventListener('click',(e)=>{
            if(e.target.className === 'suprimir'){
                
                listSave.firstChild.remove()
            }

        })
        console.log(listSave.children != '')
}

listaGuardada()




// if(e.target.className == 'btn'){
//     if(document.querySelector('.btn')){
//         let btn = document.querySelector('.btn')
//             btn.parentNode
//             console.log(btn.parentNode)
//     }
// }

        // let btn = document.querySelectorAll('.numero-lista')
                // let padreP = btn.parentNode
                // console.log(btn)
                // let   pes =  padreP.children
                // console.log(pes)