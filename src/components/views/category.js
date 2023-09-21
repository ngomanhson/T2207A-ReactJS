import React from "react";

// Stateful
class Category extends React.Component {
    constructor(props) {
        super(props);
        // Khai bao state
        this.state = {
            count: 0,
        };

        this.clickMe = this.clickMe.bind(this);
    }

    clickMe() {
        const count = this.state.count;
        this.setState({ count: count + 1 });
    }

    render() {
        const cat = this.props.cat;
        const count = this.state.count;

        return (
            <div>
                <h1>
                    Category: {cat.name}: {count}
                </h1>
                <button type="button" onClick={this.clickMe}>
                    Click
                </button>
            </div>
        );
    }
}
export default Category;
