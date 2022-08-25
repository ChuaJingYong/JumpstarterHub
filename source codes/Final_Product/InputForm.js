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
    avatar_1.style.display ='block'
}

function showForm(event){
    event.preventDefault()

    form.style.display = 'block'
    avatar_1.style.display = 'none'
}

var checkList = document.getElementById('list1');
checkList.getElementsByClassName('anchor')[0].onclick = function(evt) {
  if (checkList.classList.contains('visible'))
    checkList.classList.remove('visible');
  else
    checkList.classList.add('visible');
}


// showMultiselectList()
let eventFlag = ""
const childrenOptionsButton = document.querySelector("#children")
childrenOptionsButton.addEventListener("click",function(){
    eventFlag = "#childrenPopup"
    showMultiselectList(listOfCoreComponents,eventFlag)
})

const midparentOptionsButton = document.querySelector("#midparent")
midparentOptionsButton.addEventListener("click",function(){
    eventFlag = "#midparentPopup"
    showMultiselectList(listOfMidComponents,eventFlag)
})

const largeparentOptionsButton = document.querySelector("#largeparent")
largeparentOptionsButton.addEventListener("click",function(){
    eventFlag = "#largeparentPopup"
    showMultiselectList(listOfLargeComponents,eventFlag)
})

function showMultiselectList(componentType,flagType){
    // read all the contents of the array
    // forEach loop to display each of the options
    let listOfComponentTitles = componentType.map((element)=>{
        return element.title
    })
    console.log(listOfComponentTitles)

    listOfComponentTitles.forEach((element)=>{
        console.log("flag",flagType)
        var ul = document.querySelector(flagType);
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

const viewButton = document.querySelector("#viewConnections")
viewButton.addEventListener('click',viewConnections)

    // Define the axis shift constants based on the midComponentContainer dimensions
    let midComponentContainerWidthDimension =500
    let midComponentContainerHeightDimension = 500
    
    // Let it be half of the container so that the x and y axis starts from the center of the div container
    let Y_SHIFT = midComponentContainerHeightDimension/2
    let X_SHIFT = midComponentContainerWidthDimension/2
    let MID_COMPONENT_RADIUS = 50
    let OWN_RADIUS_OFFSET = MID_COMPONENT_RADIUS/2 
    
    // Setting the distance of the mid components from the large parent component
    let EXTENDED_RADIUS = 100

    // define global variables to be used inside and outside of creating dynamic divs
    let closeContainerBtn

function viewConnections(){
    

    const form = document.querySelector('.form')
    form.classList.toggle('hidden')

    let docCanvas = document.createElement("div")
    docCanvas.className = "canvasContainer"
    docCanvas.innerHTML = `
    <a href="#" class="large" id="large"><p>Show Connections</p></a>
                <a href="#">
                        <img src="https://cdn-icons-png.flaticon.com/512/1828/1828843.png" 
                        alt="close button"
                        id="closeContainerBtn">
                </a>
            <div class="midExpandedContainer" id="midExpandedContainer">
                <div class="cancelCoreView">
                    
                    <a href="#">
                        <img src="https://cdn-icons-png.flaticon.com/512/1828/1828843.png" 
                        alt="close button"
                        id="closeView">
                    </a>
                </div>
                <div class="midComponentContainer" id="midComponentContainer">
                    
                    <div class="mid">
                    </div>
                    <div class="child1"><a href="#"></a></div>
                </div>
            </div> 
    `
    // Remove the icon and form from view
    form.style.display = 'none'
    avatar_1.style.display ='none'

    // Dynamically create new components to display
    const mainContainer = document.querySelector('.mainContainer')
    mainContainer.appendChild(docCanvas)

    closeContainerBtn = document.querySelector("#closeContainerBtn")
    closeContainerBtn.addEventListener('click', closeContainer)

// ----------

const openView = document.getElementById("large")
openView.addEventListener('click',openCoreLinkView)

const closeView = document.getElementById("closeView")
closeView.addEventListener('click',hideCoreLinkView)
let mockDataForLargeComponent = {title:"C1",id:"3_1", 
                                    midComponents:[
                                        {title:"B1",id:"2_1"},
                                        {title:"B2",id:"2_2"},
                                        {title:"B3",id:"2_3"},
                                        {title:"B1",id:"2_1"},
                                        {title:"B2",id:"2_2"},
                                        {title:"B3",id:"2_3"}],
                                    coreComponents:[
                                        {title:"A13",id:"1_13"},
                                        {title:"A14",id:"1_14"},
                                        {title:"A15",id:"1_15"}]
                                    }
    // const largeComponent = document.querySelector('#large')
    // largeComponent.classList.toggle('hidden')
    }

const profile1 = document.querySelector("#profile1")

profile1.addEventListener('click',function(){
    console.log('hellloo')
    // profile1.classList.toggle('hidden')
})

// If click on icon
    // Icon transforms into a form (form covers the icon)

    let mockDataForLargeComponent = {title:"C1",id:"3_1", 
    midComponents:[
        {title:"B1",id:"2_1"},
        {title:"B2",id:"2_2"},
        {title:"B3",id:"2_3"},
        {title:"B1",id:"2_1"},
        {title:"B2",id:"2_2"},
        {title:"B3",id:"2_3"}],
    coreComponents:[
        {title:"A13",id:"1_13"},
        {title:"A14",id:"1_14"},
        {title:"A15",id:"1_15"}]
    }



// When user clicks on the large component, it will turn the details visible and display all the relevant direct connections of children components to this parent component
function openCoreLinkView(){
document.getElementById("midExpandedContainer").style.visibility = "visible";
// Auto generate new div based on the 
displayMidConnections()
}

function displayMidConnections(){
// Show the pop up connections
document.getElementById("midExpandedContainer").style.visibility = "visible";

let [numberofMidComponents,numberOfCoreComponents] = getNumberOfConnectedChildren(mockDataForLargeComponent)
let arrOfPositions = getAllPositions(EXTENDED_RADIUS,numberofMidComponents.length)

for (arr of arrOfPositions){
// Grab all the x-y positions and make a new div for each of them
let [x,y] = arr
addElement(x,y)
}
}

function hideCoreLinkView(){
console.log("I'm in")
document.getElementById("midExpandedContainer").style.visibility = "hidden";

// Remove all the newly made div components to prevent multiple layers from stacking up
let [arrOfMidComponents,arrOfCoreComponents] = getNumberOfConnectedChildren(mockDataForLargeComponent)
// removeAllChildComponents(arrOfMidComponents.length)

}

function removeAllChildComponents(numberOfComponents){
for(let i = 0; i<numberOfComponents; i++){
document.querySelector("#pokemon").remove()
}  
console.log("All previous elements deleted!")
}

// This function checks for the current linked Mid or Core children components. Returns the array for both.
// However need to put add an if-else statement to check for if component doesn't exist, return value as 0 instead of NaN or undefined.
function getNumberOfConnectedChildren(targetComponent){
let arrOfMidComponents = targetComponent.midComponents
let arrOfCoreComponents = targetComponent.coreComponents
return [arrOfMidComponents, arrOfCoreComponents]
}

function getAllPositions(radius,numberOfComponents){
// ------PSEUDOCODE---------
// calculate and store all the possible angles into an array for X number of linked components
// calculate the x-y positions for each angle and store as arrays
// return an array of xy coordinate arrays

let arrOfAngles =[]
let arrOfPositions = []
for (let i = 0; i<numberOfComponents;i++){
arrOfAngles.push(360/numberOfComponents*i)
}
console.log(arrOfAngles)
arrOfAngles.forEach((angle)=>{
arrOfPositions.push(caclulateXYPosition(radius,angle))
})
console.log(arrOfPositions)
return arrOfPositions
}

function caclulateXYPosition (radius,angle){
// Convert from default radians to angle instead, hence Math.PI * 2 / 369
let x = radius*Math.sin(Math.PI * 2 * angle / 360)
let y = radius*Math.cos(Math.PI * 2 * angle / 360)
return [x,y]
}

function addElement(x,y){
const newDiv = document.createElement("div")
// newDiv.id = "div_" + new Date().getTime().toString()
newDiv.id ="pokemon"
newDiv.style.position = "absolute"
newDiv.style.background = "orange"
newDiv.style.width = MID_COMPONENT_RADIUS + "px"
newDiv.style.height = MID_COMPONENT_RADIUS + "px"
newDiv.style.borderRadius = "50%"
newDiv.style.zIndex = "300"
newDiv.style.cursor = "pointer"
let [newX, newY] = getOffsetRelativePositions(x,y)
newDiv.style.left = newX
newDiv.style.top = newY

// document.body.insertBefore(newDiv, currentDiv)
// ✅ add element to DOM, inside the pop up midComponentContainer
const box = document.getElementById('midComponentContainer');
box.appendChild(newDiv);
console.log("newElement created!")

}

function getOffsetRelativePositions (x,y){
let newX = X_SHIFT + Math.round(x) - OWN_RADIUS_OFFSET + "px"
let newY= Y_SHIFT - Math.round(y) - OWN_RADIUS_OFFSET + "px" //minus for y direction because positive y means going downwards
console.log(newX,newY)
return [newX,newY]
}

function closeContainer(){
    console.log("inside container")
    let canvasContainer = document.querySelector('.canvasContainer')

    // destroy previous canvas container to prevent stacking
    canvasContainer.remove()
    form.style.display = 'block'
}