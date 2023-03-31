import { Component } from "react";

export class Form extends Component {
    state = {
        name: "",
        tag: "",
        experience: "junior",
        licence: false,
    };

    handleChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({
            [name]: value,
        });
    };

    handleLicenceChange = e => {
        this.setState({
            licence: e.currentTarget.checked,
        })
    };

    onSubmitForm  = e => {
        e.preventDefault();

        this.props.onSubmit(this.state);
        this.reset();
    };

    reset = () => {
        this.setState({
                name: "",
                tag: "",
                experience: "junior",
                licence: false,
        });
    };

    render() {
        const { name, tag, experience, licence } = this.state;
        return (
                <form onSubmit={this.onSubmitForm} 
                style={{display: "flex", flexDirection: "column", gap: "20px"}}>

                    <label>
                        Name
                        <input type="text" name="name" value={name} onChange={this.handleChange}/>
                    </label>

                    <label>
                        Nickname
                        <input type="text" name="tag" value={tag} onChange={this.handleChange}/>
                    </label>

                    <p>Developer experience</p>

                    <label>Junior
                        <input 
                    type="radio" 
                    name="experience" 
                    value="junior"
                    onChange={this.handleChange}
                    checked={experience === 'junior'} />
                    </label>

                    <label>Middle
                        <input 
                    type="radio" 
                    name="experience" 
                    value="middle"
                    onChange={this.handleChange}
                    checked={experience === 'middle'} />
                    </label>

                    <label>Senior
                        <input 
                    type="radio" 
                    name="experience" 
                    value="senior"
                    onChange={this.handleChange}
                    checked={experience === 'senior'} />
                    </label>

                    <label>Agree
                        <input 
                        type="checkbox" 
                        name="licence"
                        onChange={this.handleLicenceChange}
                        checked={licence} />
                    </label>

                    <button 
                    type="submit" 
                    disabled={!licence || !tag || !name} 
                    style={{width: "100px"}}
                    >Submit</button>
                </form>
        );
    };
};