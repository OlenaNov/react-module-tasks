import React, {Component} from "react";

class Dropdown extends Component {

    state = {
        visible: false,
    };

    toggle = () => {
        this.setState(prevState => ({
            visible: !prevState.visible,
        }));
    };

    render() {
        const { visible } = this.state;
        return (
            <div className="dropdown">
                <button type="button" 
                className="dropdown__toggle" 
                onClick={this.toggle}>{visible ? "Close" : "Open"}</button>
                {visible && <div className="dropdpwn__menu">Dropdpwn menu</div>}
            </div> 
        )
    };
};

export default Dropdown;