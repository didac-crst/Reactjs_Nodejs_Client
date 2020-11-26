import React, {useState, useEffect} from "react";

function MyComponent() {

    const [component, setComponent] = useState('Initial');
  
    useEffect(() => {
      fetch('http://localhost:9000/testAPI')
        .then(res => res.text())
        .then(res => setComponent(res));
    });

    console.log(component);
    
    return (
        <p>Hello {component}</p>
      );
  }

  export default MyComponent;