import React from 'react';
import { Dropdown, DropdownButton, SplitButton } from 'react-bootstrap';

const SingleServiceList = ({ orderdService }) => {
    
    const { name, orderdEmail, serviceName, details, status ,_id} = orderdService
const statusHandeler=(value, id)=>{
    fetch(`https://obscure-temple-62164.herokuapp.com/updateStatus/${id}`,{
        method: 'PATCH',
        body : JSON.stringify({value}),
        headers : {"Content-Type": "application/json"}
    })
        .then(response => response.json())
        .then(data =>{
            if(data){
                window.location.reload();
            }
        })

}
    return (
        <tr>
            <td>{name}</td>
            <td>{orderdEmail}</td>
            <td>{serviceName}</td>
            <td>{details}</td>
            <td>
                <SplitButton
                className={`statusButton-${status}`}
                    
                    title={status}
                >
                    <Dropdown.Item className='pending-dropdownItem' onClick={()=>statusHandeler('pending', _id)}>Pending</Dropdown.Item>
                    <Dropdown.Item className='ongoing-dropdownItem'  onClick={()=>statusHandeler('ongoing', _id)}>Ongoing</Dropdown.Item>
                    <Dropdown.Item className='done-dropdownItem'  onClick={()=>statusHandeler('done', _id)}>Done</Dropdown.Item>

                </SplitButton>
 
            </td>
        </tr>
    );
};

export default SingleServiceList;