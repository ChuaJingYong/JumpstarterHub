# Problem
1. Medium sized to big sized projects can easily take months to complete

2. You have an interesting idea to work on  but don't know where to get started

# Solution
1. As a team, document your Jumpstarter topics for everyone to learn from and benefit together

2. Shortcut to build bigger projects by referencing back to similar projects (either built by yourself or by others!)

# Vision
1. As the number of small projects increase, the number of mid and big projects that can be built will be exponential.

2. Timeline for larger projects to be narrowed down to 2-3 weeks

# What's the plan?
-Each team takes up one part and we'll try to build up the whole system for this in 2-3 weeks from now.
-Can also document the building process as it'll be valuable experience for others to learn from each other
-Our first big project to build together! :D

# Side note
There will be more updates and changes along the way, so stay tuned! :)

# Features
## 1. Generating new components
- When click on empty space
    -> Generate new circle 
    -> Pop up select options
-Select options
    ->choose either core, mid or large
    ->need to set it as the div class? (so that easier for CSS to style it up.) Either that or as object property, as we use JavaScript instead to do the colors

<!-- properties of each circle -->
-Circle 
    -Color (may or may not be needed) 
    -Size (may or may not be needed)
    -Type (core, mid, large)
    -Position {id:"20220703cukdl", x:"300px", y:"200px"}

- Store the id and x-y position of the created components (into cache for now)
- When new components are created, select options will pop up first.
- Once choice is selected, need an algorithm to auto position them so that they're next to each other. Save this new position into cache as well.
<!-- We're using cac -->

## 2. Pop up input field (maybe use OOP? Open to suggestions!)
2 modes (will need a boolean check)
    -view mode (default view)
    -edit mode (enters this mode first if object is created for the first time)

<!-- Everything below is for edit mode, for user to key in or select options -->

<!-- Manual key in section -->
-Circle (input options) <!-- Left side -->
    -Title
    -ID (auto generate from current date + some random numbers/letters after)
    -Description
    -Link to author's GitHub repo
    -List of key features
    -Author

<!-- Select options -->
-Circle (menu select options) <!-- Right side top. Refer to Jumpstarter Overview Guide pdf 2nd page if you're not sure what this means-->
    -Type (core,mid,large) 
    -Tags (can choose from existing options or also create new input tags)
    -Created Date

-Circle (menu actions) <!-- Right side bottom-->
    -Link to other components
        -Core (show list from existing database)
        - Mid (show list from existing database)
        - Large (show list from existing database)
    -Confirm

After the circle is completed, the next time the person clicks on it, default is view mode. Should have an edit button somewhere



## 3. Auto arrangement
<!-- Stage 1. On click effects to see how the children components are linked to the parent-->
Need algorithm to display ....
- How core modules are linked to mid modules
- How mid modules are linked to large modules
- How mid + core modules are linked to large parent modules

..for any number of modules, especially the large module (e.g. what if 8 mid modules linked to one large module? Each mid module also has 3-4 modules each)

(TBC later)
- Core module has XX size
- Mid module has YY size
- Large module has ZZ size

<!-- Possible angles to look at -->
-Circular grouping
    -Need radius calculations
-or Tree grouping
    -auto vertical branching?

<!-- Stage 2. On click effects for children component to see their contents. -->
-Show connections
    -When click on the main component, it'll show how the children components are linked together. 
    -When click on children components, will zoom in to the child module (either mid or core child components) and it becomes the focus on the screen. 
    -The full details of the child will be shown on the card as well.
    
## 4. Firebase connection
1. Authenticate users of different authorities and their accessible features (might need OOP?)
2. Connect data to Firebase

<!-- User privileges -->
-Guest
    -can view components
    -can view by author who contributed which component

-Jumpstarter
    -view
    -add components
    -edit own components (no edit access to others)
    -delete own components
    -see all the components they have contributed

-Admin
    -view
    -add
    -edit (all components)
    -edit the x-y position of the components
    -delete (all components)

<!-- Connected data to and fro from Firebase -->
-When website loads, data for each component is extracted from Firebase.
-New created modules will be auto updated to Firebase
