# react-class-contexify
A React Typescript class component to facilitate the integration of newer versions of react-contexify with my existing applications

## How to install:
npm install react-class-contexify

## How to include
Import code
```javascript 
import CustomContextMenu from "react-class-contexify";
```
Import styles:
```
"react-contexify/dist/ReactContexify.min.css";
"react-class-contexify/dist/index.css";
```
## To use
### Create elements the React way
Create an element with properties: 
```javascript
<CustomContextMenu menuID="menuforfeatures" ref={contextMenuRef}/>
```  

Open the menu by using the methods in the class by using the reference  
```typescript
contextMenuRef.show({
    x: (event as any).clientX,
    y: (event as any).clientY,
    event: event,
    contextMenu: {
    items:[
        {
            label: "Label 1",
            title: "Title 1",
            action: ()=>{},
        },
        {
            label: "Label 2",
            title: "Title 2",
            action: ()=>{},
        },
        {
            label: "With checkbox true",
            title: "Title 3",
            action: ()=>{},
            checkbox: {active: true, value: true, enabled: true}
        },
        {
            label: "With checkbox false",
            title: "Title 4",
            action: ()=>{},
            checkbox: {active: true, value: false, enabled: true}
        },
        {
            label: "A Submenu",
            title: "Title 5",
            items: [
                {
                    label: "Label 5.1",
                    title: "Title 6",
                    action: ()=>{},
                },
                {
                    label: "Label 5.2",
                    title: "Title 7",
                    action: ()=>{},
                }
            ]
        }
    ]
}
})
```




Small sample here: https://codesandbox.io/s/react-class-contexify-dvs60n
