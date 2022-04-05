import React from "react";
import { useParams } from "react-router-dom";
function UserView(){
    let params=useParams()
    return(
        <div>
            <h3>UserView {params.id}</h3>
        </div>
        
    )
}
export default UserView;