import React, {Component} from 'react';

class ShowUsers extends Component{
    constructor(props) {
        super(props);
    }

    printTable() {
        return (
            <table>
                <thead>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Actions</td>
                </tr>
                </thead>
                <tbody>
                {
                    this.props.users.map((user, index) => 
                    <tr key={index}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>
                            <button onClick={()=>{
                                this.props.handleDeleteBtnClick(index)
                            }}>x</button>
                        </td>
                    </tr>)
                }
                </tbody>
            </table>)
    }

    render() {
        return(
            <div>
                <div>
                    {this.props.age}
                </div>
                <button onClick={()=>{
                    this.props.incrementAge();
                }}>+ Age</button>
                <div>
                    {this.printTable()}
                </div>
            </div>
        )
    }
}

export default ShowUsers;