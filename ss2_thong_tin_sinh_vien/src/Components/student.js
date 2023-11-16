import React from "react";


class AddComponent extends React.Component {


    render() {
        let students = [

            {
                id: 6,
                company: 'Alfreds Futterkiste',
                contact: 'Maria Anders',
                country: 'Germany'
            },
            {
                id: 1,
                company: 'Centro comercial Moctezuma',
                contact: 'Francisco Chang',
                country: 'Mexico'
            },
            {
                id: 7,
                company: 'Ernst Handel',
                contact: 'Roland Mendel',
                country: 'Austria'
            },
            {
                id: 2,
                company: 'Island Trading',
                contact: 'Helen Bennett',
                country: 'UK'
            },
            {
                id: 3,
                company: 'Laughing Bacchus Winecellars',
                contact: 'Yoshi Tannamuri',
                country: 'Canada'
            },
            {
                id: 4,
                company: 'Magazzini Alimentari Riuniti',
                contact: 'Giovanni Rovelli',
                country: 'Italy'
            }
        ]
        return (
            <table>
                <thead>
                <tr>
                    <th>Stt</th>
                    <th>company</th>
                    <th>contact</th>
                    <th>country</th>
                </tr>
                </thead>
                <tbody>
                {students.map((item, index) =>
                    <tr key={item.id}>
                        <td>{index +1}</td>
                        <td>{item.company}</td>
                        <td>{item.contact}</td>
                        <td>{item.country}</td>
                    </tr>
                )}
                </tbody>
            </table>
        )
    }


}


export default AddComponent;