export class Celulares{
    id: number;
    desc: string;
    preco: number;

    constructor(id:number, desc:string, preco: number ){
        this.id = id;
        this.desc = desc;
        this.preco = preco;

    }
}

export let lista_celulares = [
    new Celulares(1, "Galaxy S23 Ultra", 5.949, ),
    new Celulares(1, "Motorola Moto G73", 1.259, ),
    new Celulares(1, "iPhone 14 Pro ", 9.499, ),
    new Celulares(1, "Xiaomi 13", 2.960, ),
    new Celulares(1, "Realme 10 Pro", 1.182, ),
  ]



let listaToDo: string [] = []

function OpenEditModal(){
    let modal: HTMLDialogElement | null 
    = document.querySelector('#editar')!;

    modal?.showModal();
}
function closeEditModal(){
    let modal: HTMLDialogElement | null 
    = document.querySelector('#editar')!;

    modal?.close();
}

function OpenDeleteModal(){
    let modal: HTMLDialogElement | null 
    = document.querySelector('#excluir')!;

    modal?.showModal();
}
function closeDeleteModal(){
    let modal: HTMLDialogElement | null 
    = document.querySelector('#excluir')!;

    modal?.close()
}



function handleToDo(){
    let input: HTMLInputElement | null = 
    document.querySelector('#tarefa')!;

    if(input.value !== ""){
        let lista: HTMLUListElement | null =
        document.querySelector('ul')!;

        let li: HTMLLIElement = 
        document.createElement('li');
         
        let div : HTMLDivElement =
        document.createElement('div')

        let btn_edit:HTMLButtonElement=
        document.createElement('button');
        btn_edit.setAttribute('class', 'butons');
        
        let icon_edit: HTMLSpanElement = 
        document.createElement('span');
        icon_edit.setAttribute('class', 'material-symbols-outlined');
        icon_edit.textContent = 'edit';
        icon_edit.addEventListener('click', OpenEditModa())

        btn_edit.appendChild(icon_edit)
        
        let btn_delet:HTMLButtonElement=
        document.createElement('button');
        btn_delet.setAttribute('class', 'butons');
       
        let icon_delet: HTMLSpanElement = 
        document.createElement('span');
        icon_delet.setAttribute('class', 'material-symbols-outlined');
        icon_delet.textContent = 'Delete';
        icon_delet.addEventListener('click', OpenDeleteModal)

        btn_delet.appendChild(icon_delet)

        div.appendChild(btn_edit);
        div.appendChild(btn_delet);

        let card: HTMLElement =
        document.createElement('article');

        let texto = 
        document.createTextNode(input.value);

        li.appendChild(card);
        card.appendChild(texto);
        card.appendChild(div)

        lista.appendChild(li);

        listaToDo.push(input.value)

        let modal: NodeListOf<HTMLDialogElement> | null = 
        document.querySelectorAll('dialog');

    }

    input.value="";
    console.log(listaToDo);

}

    function editToDo(){
        for(let i = 0; i <= listaToDo.length; i++){
            console.log(listaToDo[i])
        }
    }