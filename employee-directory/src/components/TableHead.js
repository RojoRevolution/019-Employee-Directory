import React from "react";

function TableHead(props) {

    return (
        <thead >
            <tr className="bg-white" >
                <td className="ms-2 p-2">Image</td>
                <td className="ms-2 p-2">Name <i class="fas fa-sort"></i>
                </td>
                <td className="ms-2 p-2">Phone</td>
                <td className="ms-2 p-2">Email</td>
            </tr>
        </thead >
    )
}

export default TableHead;