const edit = document.querySelector('#edit')
const close = document.querySelector('#close')
const save = document.querySelector('#save')
const cancel = document.querySelector('#cancel')
const editspace = document.querySelector('.edit-space')
const inputspace = document.querySelector('.input-space')
const form = document.querySelector('.form')

// data
var data = {}


edit.addEventListener('click', showEdit)
cancel.addEventListener('click', showSpace)
save.addEventListener('click', saveInfo)
close.addEventListener('click', closeForm)


function showEdit(event){
    event.preventDefault()

    edit.style.display = 'none'
    close.style.display = 'none'
    save.style.display = 'block'
    cancel.style.display = 'block'
    inputspace.style.display = 'none'
    editspace.style.display = 'block'
}

function showSpace(event){
    event.preventDefault()

    edit.style.display = 'block'
    close.style.display = 'block'
    save.style.display = 'none'
    cancel.style.display = 'none'
    inputspace.style.display = 'block'
    editspace.style.display = 'none'
}

function saveInfo(event){
    event.preventDefault()

    let title = document.querySelector('#title')
    let description = document.querySelector('#description')
    let github = document.querySelector('#github')
    let features = document.querySelector('#features')
    let reference = document.querySelector('#reference')
    let tags = document.querySelector('#tags')
    let icon = document.querySelector('#icon')
    let children = document.querySelector('#children')
    let midparent = document.querySelector('#midparent')
    let largeparent = document.querySelector('#largeparent')

    data.title = title.value
    data.description = description.value
    data.features = features.value
    data.reference = reference.value
    data.tags = tags.value
    data.icon = icon.value
    data.children = children.value
    data.midparent = midparent.value
    data.largeparent = largeparent.value
    console.log(data)


    edit.style.display = 'block'
    close.style.display = 'block'
    save.style.display = 'none'
    cancel.style.display = 'none'
    inputspace.style.display = 'block'
    editspace.style.display = 'none'
}


function closeForm(event){
    event.preventDefault()

    form.style.display = 'none'
}

