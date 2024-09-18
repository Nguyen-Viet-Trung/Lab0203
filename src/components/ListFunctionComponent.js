import React from "react";
export default function ListFunctionComponent({renderData, renderStudent}){
    return(
        <div className="alert alert-danger">
            <p>Danh sách</p>
            <p>Data: {renderData}</p>
            <p>Students: {renderStudent}</p>
        </div>
    )
}