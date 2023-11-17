import React from "react";


class WorkflowManegement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: ["làm gỗ", "quét dọn"],
            item: ""
        }
        console.log(props)
    }

    handChange = (event) => {
        this.setState({
            item: event.target.value
        });
    };

    handleAddItem = () => {
        const arr = [...this.state.list, this.state.item];
        if (this.state.item !== "") {
            this.setState({
                list: arr,
                item: ""
            });
        }
    };

    render() {
        return (
            <div className="container mt-4">
                <h1>work during the day</h1>
                <div className="d-flex">
                    <input  value={this.state.item} onChange={this.handChange}/>
                    <button type="button" onClick={this.handleAddItem}>Thêm</button>
                </div>
                <div>
                    <table >
                        <thead>
                        <tr>
                            <th>Stt</th>
                            <th>work during the day</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.list.map((valueinput, index) =>
                            <tr key={valueinput.id}>
                                <td>{index + 1}</td>
                                <td>{valueinput}</td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default WorkflowManegement