import React from "react";

type NewComponentType = {
    topCars: Array<CarType>
}

type CarType = {
    manufacturer: string,
    model: string
}

export const NewCars = (props: NewComponentType) => {

    return (
        <div>
     {/*      <ul>
               {props.topCars.map((objectCarType,index:number)=>{
                   return(
                       <li key={objectCarType.manufacturer}>{objectCarType.manufacturer}
                       <span> model: {objectCarType.model}</span>
                       </li>
                   )
               })}
           </ul>*/}
            <table>
                <tr>
                    <th>Car
                        <td>
                            {props.topCars.map((objectCarType,index:number)=>{
                                return(
                                    <tr key={objectCarType.manufacturer}>{objectCarType.manufacturer}
                                    </tr>
                                )
                            })}
                        </td>
                    </th>
                    <th>Model
                        <td>
                            {props.topCars.map((objectCarType,index:number)=>{
                                return(
                                    <tr key={objectCarType.model}>{objectCarType.model}
                                    </tr>
                                )
                            })}
                        </td>
                    </th>
                </tr>

            </table>

        </div>
    )
}