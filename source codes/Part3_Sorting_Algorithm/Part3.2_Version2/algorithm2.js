// let listOfCoreComponents = [
//     {title:"CSS Bouncing ball",id:"20220728eifcl"},
//     {title:"ToDo List",id:"20220615ciloc"}]
// let listOfMidComponents = [
//     {title:"Multiplayer Game Room",id:"20220730opnli"}]
// let listOfLargeComponents = [
//     {title:"Reddit clone",id:"20220823eiult"}]
// let listOfAllComponents = [moduleComponent,moduleComponent,moduleComponent]

// ---------------------------------------------
// -------------Remaining Tasks To Do-----------
// ---------------------------------------------

// 1. Display for all core components connected to the mid and large components
// 2. Let the left side and right side of the connected mid components show their core components in a neat way.
// (Cuz if all of them show their core connections on the right side only, the left side will look pretty messy)
// 3. If clicked on the mid component, now the mid component replaces the main view and it will zoom into it. 
// Users can see more clearly on the mid component details and the core component details on the side.

// --------Extra feature if have enough time----
// 4. Add CSS arrow effects to link from main circle to supporting circles

// ---------------Side note---------------------
// Feel free to change some variable names if you feel it's more appropriate!


// Mock Data to be used
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


// let listOfAllComponents = [moduleComponent,moduleComponent,moduleComponent]


// Define the axis shift constants based on the midComponentContainer dimensions
let midComponentContainerWidthDimension = document.getElementById("midComponentContainer").clientWidth
let midComponentContainerHeightDimension = document.getElementById("midComponentContainer").clientHeight

// Let it be half of the container so that the x and y axis starts from the center of the div container
let Y_SHIFT = midComponentContainerHeightDimension/2
let X_SHIFT = midComponentContainerWidthDimension/2
let MID_COMPONENT_RADIUS = 50
let OWN_RADIUS_OFFSET = MID_COMPONENT_RADIUS/2 

// Setting the distance of the mid components from the large parent component
let EXTENDED_RADIUS = 100
// Modify the content of this mock data to see the changes how many modules are displayed!
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

const openView = document.getElementById("large")
openView.addEventListener('click',openCoreLinkView)

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
        addElementCanvas(x,y)
        addElement(x,y)
        addCore(x,y)
    }
}

const closeView = document.getElementById("closeView")
closeView.addEventListener('click',hideCoreLinkView)

function hideCoreLinkView(){
    console.log("I'm in")
    document.getElementById("midExpandedContainer").style.visibility = "hidden";

    // Remove all the newly made div components to prevent multiple layers from stacking up
    let [arrOfMidComponents,arrOfCoreComponents] = getNumberOfConnectedChildren(mockDataForLargeComponent)
    removeAllChildComponents(arrOfMidComponents.length)
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

// create 'pokemon' element
function addElement(x,y){
    const newDiv = document.createElement("div")
    // newDiv.id = "div_" + new Date().getTime().toString()
    newDiv.className ="pokemon"
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


// Edit: took of the unit px
function getOffsetRelativePositions (x,y){
    let newX = X_SHIFT + Math.round(x) - OWN_RADIUS_OFFSET
    let newY= Y_SHIFT - Math.round(y) - OWN_RADIUS_OFFSET //minus for y direction because positive y means going downwards
    console.log(newX,newY)
    return [newX,newY]
}

// document.body.onload = addElement()

// part 3.3
// create core element
function addCore(x,y) {
    const newCoreDiv = document.createElement("div");
    newCoreDiv.className = "coreElement";
    newCoreDiv.style.position = "absolute";
    newCoreDiv.style.background = "green";
    newCoreDiv.style.width = "50px";
    newCoreDiv.style.height = "50px";
    newCoreDiv.style.borderRadius = "50%";
    newCoreDiv.style.zIndex = "500";
    newCoreDiv.style.cursor = "pointer";
    let [newX, newY] = getOffsetCoreRelativePositions(x,y);
    newCoreDiv.style.left = newX;
    newCoreDiv.style.top = newY;

    const box = document.getElementsByClassName('pokemonCanvas');
    box.appendChild(newCoreDiv);
}

// // get position for core element 
function getOffsetCoreRelativePositions(x,y) {
    let newX = 100/2 + Math.round(x) - 50/2
    let newY= 100/2 - Math.round(y) - 50/2 //minus for y direction because positive y means going downwards
    console.log(`coreX : ${newX}, coreY: ${newY}`);
    return [newX,newY]
}

// create mid element canvas
function addElementCanvas(x,y) {
    const newCoreContainer = document.createElement("div");
    newCoreContainer.className = "pokemonCanvas"
    newCoreContainer.style.width = "100px";
    newCoreContainer.style.height = "100px";
    newCoreContainer.style.background = "lightgreen";
    newCoreContainer.style.zIndex = "200";
    let [newX, newY] = getOffsetRelativePositions(x,y);
    newCoreContainer.style.left = newX - 25;
    newCoreContainer.style.top = newY - 25;
    newCoreContainer.style.position = "absolute";

    const box = document.getElementById('midComponentContainer');
    box.appendChild(newCoreContainer);
} 
