import React, {Component} from 'react';

class ListObjRender extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [
                {title: 'Cabbage', isFruit: false, id: 1},
                {title: 'Garlic', isFruit: false, id: 2},
                {title: 'Apple', isFruit: true, id: 3},
            ]
        }
    }


    render() {
        let e = this.state.products.map((item, index) => {
            return <tr key={index}>
                <td>{index+1}</td>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.isFruit?'Fruit':'Not Fruit'}</td>
            </tr>
        })
        return (
            <div>
                <h1>List Object Render</h1>
                <table className={"table table-bordered"}>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>ID</th>
                            <th>Title</th>
                            <th>isFruit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {e}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ListObjRender;