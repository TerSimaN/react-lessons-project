import React, {Component} from 'react';

class PrintArray extends Component{
	state = {
		array: [1,2,3,4,5,6,7,8,9,10],
		name: 'Gosho'
	}

	sayHello() {
		return `Hello, my name is ${this.state.name}`;
	}

	render() {
		return (<div>
			<div>{this.sayHello()}</div>
			<div>
				{this.state.array.map((item, index) => <div>
					{item} at index: {index}
				</div>)}
			</div>
		</div>)
	}
}

export default PrintArray;