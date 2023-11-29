var listaToDo = [];
function OpenEditModal() {
    var modal = document.querySelector('#editar');
    modal === null || modal === void 0 ? void 0 : modal.showModal();
}
function closeEditModal() {
    var modal = document.querySelector('#editar');
    modal === null || modal === void 0 ? void 0 : modal.close();
}
function OpenDeleteModal() {
    var modal = document.querySelector('#excluir');
    modal === null || modal === void 0 ? void 0 : modal.showModal();
}
function closeDeleteModal() {
    var modal = document.querySelector('#excluir');
    modal === null || modal === void 0 ? void 0 : modal.close();
}
function handleToDo() {
    var input = document.querySelector('#tarefa');
    if (input.value !== "") {
        var lista = document.querySelector('ul');
        var li = document.createElement('li');
        var div = document.createElement('div');
        var btn_edit = document.createElement('button');
        btn_edit.setAttribute('class', 'butons');
        var icon_edit = document.createElement('span');
        icon_edit.setAttribute('class', 'material-symbols-outlined');
        icon_edit.textContent = 'edit';
        icon_edit.addEventListener('click', OpenEditModal);
        btn_edit.appendChild(icon_edit);
        var btn_delet = document.createElement('button');
        btn_delet.setAttribute('class', 'butons');
        var icon_delet = document.createElement('span');
        icon_delet.setAttribute('class', 'material-symbols-outlined');
        icon_delet.textContent = 'Delete';
        icon_delet.addEventListener('click', OpenDeleteModal);
        btn_delet.appendChild(icon_delet);
        div.appendChild(btn_edit);
        div.appendChild(btn_delet);
        var card = document.createElement('article');
        var texto = document.createTextNode(input.value);
        li.appendChild(card);
        card.appendChild(texto);
        card.appendChild(div);
        lista.appendChild(li);
        listaToDo.push(input.value);
    }
    input.value = "";
    console.log(listaToDo);
}
function editToDo() {
    for (var i = 0; i <= listaToDo.length; i++) {
        console.log(listaToDo[i]);
    }
}
