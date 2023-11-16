import React from "react";


class Students extends React.Component{
   render() {
       let students = [
           {
               id: 1,
               name: "Đinh Thanh Hải",
               age: 50,
               address: "C062023G1"
           },
           {
               id: 2,
               name: "Đinh Thanh Hải",
               age: 50,
               address: "C062023G1"
           },
           {
               id: 3,
               name: "Đinh Thanh Hải",
               age: 50,
               address: "C062023G1"
           },
           {
               id: 4,
               name: "Đinh Thanh Hải",
               age: 50,
               address: "C062023G1"
           },
           {
               id: 5,
               name: "Đinh Thanh Hải",
               age: 50,
               address: "C062023G1"
           }
       ]

       return (
           <table className="table table-hover">
               <thead>
               <tr>
                   <th>Stt</th>
                   <th>Name</th>
                   <th>Age</th>
                   <th>Address</th>
               </tr>
               </thead>
               <tbody>
               {students.map((item,index)=>
               <tr key={item.id}>
                   <td>{index + 1}</td>
                   <td>{item.name}</td>
                   <td>{item.age}</td>
                   <td>{item.address}</td>
               </tr>
               )}
               </tbody>
           </table>
       )
   }
}
export default Students;