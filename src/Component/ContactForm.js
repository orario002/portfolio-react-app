import React from 'react';
import {Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {Redirect} from "react-router-dom";

const inputParsers = {
    date(input) {
        const [month, day, year] = input.split('/');
        return `${year}-${month}-${day}`;
    },
    uppercase(input) {
        return input.toUpperCase();
    },
    number(input) {
        return parseFloat(input);
    },
};

class ContactForm extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const data = new FormData(form);

        for (let name of data.keys()) {
            const input = form.elements[name];
            const parserName = input.dataset.parse;

            if (parserName) {
                const parser = inputParsers[parserName];
                const parsedValue = parser(data.get(name));
                data.set(name, parsedValue);
            }
        }

        fetch('https://formspree.io/orario002@hotmail.com', {
            method: 'POST',
            body: data,
        });
    }

    render() {
        return (
            <Form className="col-12 col-md-5 form-center" onSubmit={this.handleSubmit}>
                <FormGroup row>
                    <Label xs={2} >Name</Label>
                    <Col xs={10}>
                    <Input
                        name="name"
                        type="text"
                        data-parse="uppercase"/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label xs={2} >Email</Label>
                    <Col xs={10}>
                    <Input name="email" type="email"/>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label>Message</Label><Input name="message" type="textarea"/>
                </FormGroup>
                <Button type="submit">Send</Button>
            </Form>
        )
            ;
    }
}

export default ContactForm;