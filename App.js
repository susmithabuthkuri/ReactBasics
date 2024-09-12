const root = ReactDOM.createRoot(document.getElementById('root'));
{/* <div id="parent">
    <div id="child">
        <h1>Hello world</h1>
    </div>
</div> */}
//NOTE1:  React.createElement create an react objecct, while rendering that object into broswer it converts into html
    //    const heading = React.createElement('h1', {name:'sush', id:'heading'}, 'Hello world from React!');
    //    const child = React.createElement('div', {id:'child' }, heading)

    //    const parent = React.createElement('div', {id:'parent'}, child)

    //    console.log("heading--", parent);// parent is react object not plan html (refer NOTE1)
    //    root.render(parent);



    {/* <div id="parent">
    <div id="child">
        <h1>Hello world</h1>
        <h1>Namaste React!</h1>
    </div>
</div> */}

       const heading = React.createElement('h1', {name:'sush', id:'heading'}, 'Hello world from React!');
       const heading2 = React.createElement('h1', {name:'namaste', id:'heading2'}, 'Namaste React!');

    //    const child = React.createElement('div', {id:'child' }, [heading, heading2]);// if you have to have tow or more  elements inside parent then pass []

    //    const parent = React.createElement('div', {id:'parent'}, child)

    //    console.log("heading--", parent);// parent is react object not plan html (refer NOTE1)


         {/* <div id="parent">
    <div id="child">
        <h1>Hello world</h1>
        <h1>Namaste React!</h1>
    </div>
    <div id="child2">
        <h1>Hello world2</h1>
        <h1>Namaste React2!</h1>
    </div>
</div> */}

const child = React.createElement('div', {id:'child' }, [heading, heading2]);// if you have to have tow or more  elements inside parent then pass []

const parent = React.createElement('div', {id:'parent'}, child)

console.log("heading--", parent);// parent is react object not plan html (refer NOTE1)



       root.render(parent);