import React,{useState} from 'react';
import './Collapsible.css';

export const Collapsible = (props) => {

const [click,setClick]=useState(false);

console.log(click);

    return (
        <div class="accordion" id="accordionExample" >
            
            <div class="card" >
                <div class="card-header" id="headingOne" 
                type="button" 
                data-toggle="collapse" 
                data-target="#collapseOne" 
                aria-expanded="false" 
                aria-controls="collapseOne"
                onClick={()=>setClick(true)}
                >
                    <h2 class="mb-0">
                        <button class="btn btn btn-block text-left " 
                        id="btn-collapsible"
                        type="button" 
                        data-toggle="collapse" 
                        data-target="#collapseOne" 
                        aria-expanded="false" 
                        aria-controls="collapseOne"
                        >
                            {props.heading}
                        </button> 
                    </h2>
                    <div 
                    style={{display:'flex',alignItems:"center"}}
                    id="icon-down"
                    >
                   
                    </div>
                </div>
                <div 
                id="collapseOne" 
                class="collapse show" 
                aria-labelledby="headingOne" 
                data-parent="#accordionExample">
                    <div class="card-body">
                       {props.children}
                    </div>
                </div>
            </div>
        </div>
    )
}
