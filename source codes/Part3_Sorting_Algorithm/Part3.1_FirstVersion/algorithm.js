// let listOfCoreComponents = [
//     {title:"CSS Bouncing ball",id:"20220728eifcl"},
//     {title:"ToDo List",id:"20220615ciloc"}]
// let listOfMidComponents = [
//     {title:"Multiplayer Game Room",id:"20220730opnli"}]
// let listOfLargeComponents = [
//     {title:"Reddit clone",id:"20220823eiult"}]
// let listOfAllComponents = [moduleComponent,moduleComponent,moduleComponent]

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
    {title:"A11",id:"1_11"}]
let listOfMidComponents = [
    {title:"B1",id:"2_1"},
    {title:"B2",id:"2_2"},
    {title:"B3",id:"2_3"},
    {title:"B4",id:"2_4"},
    {title:"B5",id:"2_5"},
    {title:"B6",id:"2_6"},
    {title:"B7",id:"2_7"},
    {title:"B8",id:"2_8"},
    {title:"B9",id:"2_9"},
    {title:"B10",id:"2_10"},
    {title:"B11",id:"2_11"}]

let listOfLargeComponents = [
    {title:"C1",id:"3_1", midComponent:[
        {title:"B1",id:"2_1"},
        {title:"B2",id:"2_2"},
        {title:"B3",id:"2_3"},
        {title:"B4",id:"2_4"},
        {title:"B5",id:"2_5"},],
        coreComponent:[]
    },
    {title:"C2",id:"3_2", midComponent:[
        {title:"B7",id:"2_7"},
        {title:"B8",id:"2_8"},
        {title:"B9",id:"2_9"}
    ]},]


// let listOfAllComponents = [moduleComponent,moduleComponent,moduleComponent]

// function displayMidComponents
// IF click show coreComponents
// 

const closeView = document.getElementById("closeView")

closeView.addEventListener('click',hideCoreLinkView)

function hideCoreLinkView(){
    console.log("I'm in")
    document.getElementById("midExpandedContainer").style.visibility = "hidden";
    addElement()
}

const openView = document.getElementById("large")

openView.addEventListener('click',openCoreLinkView)

function openCoreLinkView(){
    document.getElementById("midExpandedContainer").style.visibility = "visible";
}
