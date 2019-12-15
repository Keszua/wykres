import React from 'react';

const PointList = (props) => {
    
    const tabList = props.points.map( el => (
        <li key={el.id}> x {el.x}; y {el.y} {" "} 
            <button onClick={() => props.delete(el.id) }>X</button> 
        </li>
    ))
    
    return ( 
        <ul>
            {tabList}
        </ul>
     );    
}

export default PointList;