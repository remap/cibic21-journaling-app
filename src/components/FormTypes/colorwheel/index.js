import { useState } from "react"
import CircularInput from "./CircleInput"

import './style.css'

const ColorWheel = ({Options, Answer, OnUpdate})=>{

    const _handleUpdate = (a)=>{
        OnUpdate(a)
    }

    return(
        <div className="colorWheel">
            <CircularInput OnSelect={_handleUpdate} Selected={Answer}/>
        </div>
    )
}

export default ColorWheel