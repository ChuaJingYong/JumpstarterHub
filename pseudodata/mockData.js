//For Part 1
// Circle position pseudodata
let circlePosition = [
    {id: "20220730idlsc", x:"500px", y: "700px"},
    {id: "20220723bdjuh", x:"600px", y: "800px"},
    {id: "20220725adced", x:"700px", y: "300px"},
]

// For Part 2
// Module component pseudodata (this is for just one module)
let moduleComponent = {
    title: "Multiplayer game room",
    id:"20220730ijfil",
    createdAt:"2022/07/30",
    author:"Jing Yong",
    type: "Mid",
    icon:"https://flyclipart.com/thumb2/premium-multiplayer-game-icon-download-png-801536.png",
    metaData: componentMetaData
}

let componentMetaData = {
    description: "Creating a simple multiplayer game by allowing users to access the game rooms with specific session codes",
    link:"https://github.com/ChuaJingYong/MultiplayerGameRoom",
    keyFeatures: ["Users can see live update only by joining the right room session", "Simple adding button game"],
    references: [   {refDescription:"Firestore get data",
                     refLink:"https://firebase.google.com/docs/firestore/query-data/get-data"},
                    {refDescription:"Firestore add data",
                     refLink:"https://firebase.google.com/docs/firestore/manage-data/add-data"}],
    categoryTag:["realtime","multiplayer","database","game"],
    linkedComponents: componentSources
}

let componentSources = {
    childReference: [
        {title:"Setting up Firebase",
         id:"20220723eifvl"}, 
        {title:"Google Clone",
         id:"20220723eifvl"} 
    ],
    midParentReference:{ //this is null because current category is a mid component also
        title:null,
        id:null
        },
    largeParentReference:{
        title:"Whatsapp clone",
        id:"20220728ficli"
        }
}

// For Part 3 (more to be updated soon)
// Auto arrangement pseudodata. Each are an array of objects
let listOfCoreComponents = [{title:"CSS Bouncing ball",id:"20220728eifcl"},{title:"ToDo List",id:"20220615ciloc"}]
let listOfMidComponents = [{title:"Multiplayer Game Room",id:"20220730opnli"}]
let listOfLargeComponents = [{title:"Reddit clone",id:"20220823eiult"}]
let listOfAllComponents = [moduleComponent,moduleComponent,moduleComponent]
let moduleType = ["coreModule","midModule","largeModule"]


