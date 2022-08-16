const edit = document.querySelector('#edit')
const close = document.querySelector('#close')
const save = document.querySelector('#save')
const cancel = document.querySelector('#cancel')
const editspace = document.querySelector('.edit-space')
const inputspace = document.querySelector('.input-space')
const form = document.querySelector('.form')
const avatar_1 = document.querySelector('#avatar_1')


// data
var data = {}
let listOfCoreComponents = [
    {title:"A1",id:"1_1"},
    {title:"A2",id:"1_2"},
    {title:"A3",id:"1_3"},
    {title:"A4",id:"1_4"},
    {title:"A5",id:"1_5"},
    {title:"A6",id:"1_6"},
    {title:"A7",id:"1_7"},
    {title:"A8",id:"1_8"},
    {title:"A9",id:"1_9"},
    {title:"A10",id:"1_10"},
    {title:"A11",id:"1_11"},
    {title:"A12",id:"1_12"},
    {title:"A13",id:"1_13"},
    {title:"A14",id:"1_14"},
    {title:"A15",id:"1_15"},
    {title:"A16",id:"1_16"},
    {title:"A17",id:"1_17"},
    {title:"A18",id:"1_18"},
    {title:"A19",id:"1_19"}]

let listOfMidComponents = [
    {title:"B1",id:"2_1", coreComponents:[
        {title:"A1",id:"1_1"},
        {title:"A2",id:"1_2"},
        {title:"A3",id:"1_3"},
    ]},
    {title:"B2",id:"2_2", coreComponents:[
        {title:"A4",id:"1_4"},
        {title:"A5",id:"1_5"},
        {title:"A6",id:"1_6"}
    ]},
    {title:"B3",id:"2_3", coreComponents:[
        {title:"A4",id:"1_4"},
        {title:"A5",id:"1_5"},
        {title:"A6",id:"1_6"}
    ]},
    {title:"B4",id:"2_4", coreComponents:[
        {title:"A7",id:"1_7"},
        {title:"A8",id:"1_8"},
        {title:"A9",id:"1_9"}
    ]},
    {title:"B5",id:"2_5", coreComponents:[
        {title:"A10",id:"1_10"},
        {title:"A11",id:"1_11"},
        {title:"A12",id:"1_12"}
    ]},
    {title:"B6",id:"2_6"},
    {title:"B7",id:"2_7"},
    {title:"B8",id:"2_8"},
    {title:"B9",id:"2_9"},
    {title:"B10",id:"2_10"},
    {title:"B11",id:"2_11"}]

let listOfLargeComponents = [
    {title:"C1",id:"3_1", 
    midComponents:[
        {title:"B1",id:"2_1"},
        {title:"B2",id:"2_2"},
        {title:"B3",id:"2_3"},
        {title:"B4",id:"2_4"},
        {title:"B5",id:"2_5"},],
    coreComponents:[
        {title:"A13",id:"1_13"},
        {title:"A14",id:"1_14"},
        {title:"A15",id:"1_15"}]
    },
    {title:"C2",id:"3_2", midComponents:[
        {title:"B7",id:"2_7"},
        {title:"B8",id:"2_8"},
        {title:"B9",id:"2_9"}
    ]}]


edit.addEventListener('click', showEdit)
cancel.addEventListener('click', showSpace)
save.addEventListener('click', saveInfo)
close.addEventListener('click', closeForm)
avatar_1.addEventListener('click', showForm)



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

function showForm(event){
    event.preventDefault()

    form.style.display = 'block'
}

var checkList = document.getElementById('list1');
checkList.getElementsByClassName('anchor')[0].onclick = function(evt) {
  if (checkList.classList.contains('visible'))
    checkList.classList.remove('visible');
  else
    checkList.classList.add('visible');
}


// showMultiselectList()

const childrenOptionsButton = document.querySelector("#children")
childrenOptionsButton.addEventListener("click",showForChildren)

const midparentOptionsButton = document.querySelector("#midparent")
midparentOptionsButton.addEventListener("click",showForMidparents)

const largeparentOptionsButton = document.querySelector("#largeparent")
largeparentOptionsButton.addEventListener("click",showForLargeparents)

function showForChildren(){
    showMultiselectList(listOfCoreComponents)
}

function showForMidparents(){
    console.log("midparent")
    showMultiselectList(listOfMidComponents)
}

function showForLargeparents(){
    console.log("largeparent")
    showMultiselectList(listOfLargeComponents)
}

function showMultiselectList(componentType){
    // read all the contents of the array
    // forEach loop to display each of the options


    let listOfComponentTitles = componentType.map((element)=>{
        return element.title
    })
    console.log(listOfComponentTitles)

    listOfComponentTitles.forEach((element)=>{
        var ul = document.querySelector(".itemsTest");
        var li = document.createElement("li");
    
        var checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        // checkbox.name = "chkbox1";
        // checkbox.id = "chkbox1";
        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(element));
        ul.appendChild(li);
    })

}
