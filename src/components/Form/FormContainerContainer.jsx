import { Component } from "react";
import { Form } from "./Form";
import { Container } from "./FormContainer.styled";

export class FormContainer extends Component {

    formSubmitHandler = data => {
        console.log(data);
    };

    render() {
        return (
            <Container>
                <Form onSubmit={this.formSubmitHandler}/>
            </Container>
        );
    };
};