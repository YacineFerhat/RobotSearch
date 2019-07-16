import React from 'react';
import Card from './Card'

const CardList = ({robot})=>{
    return(
        <div>
        {robot.map((user,i) =>{
            return (<Card
                key={robot.id}
                id={robot[i].id} 
                name={robot[i].name} 
                username={robot[i].username} 
                email={robot[i].email}
                />
            );
        })
        }
        </div>
    );
}
export default CardList