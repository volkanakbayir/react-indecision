import React from 'react'; 

import { Header } from './Header'
import { Options } from './Options'
import { AddOption } from './AddOption'
import { ActionButton } from './ActionButton'
import { Storage } from '../Storage'


export class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: ['Thing One', 'Thing Two', 'Thing three']
        }

        this.handleRemoveAllOptions = this.handleRemoveAllOptions.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleRemoveOption = this.handleRemoveOption.bind(this);
        this.handlePickRandom = this.handlePickRandom.bind(this);
    }

    handleRemoveAllOptions() {
        this.setState(() => {
            return { options: [] }; 
        });
    }

    componentWillMount() {
        return Storage.GetItem("options").then((options) => {
            this.setState(() => ({ options: options || [] }))
        })
    }


    componentDidUpdate(nextProps, prevState) {
        if (this.state.options.length !== prevState.options.length) {
            return Storage.StoreItem("options", this.state.options);
        }
    }


    handleRemoveOption(optionToRemove) {
        var index = this
            .state
            .options
            .indexOf(optionToRemove);
        if (index > -1) {
            this.setState((prevState) => {
                var newOptions = [];
                prevState.options.forEach((item, idx) => {
                    if (idx !== index)
                        newOptions.push(item);
                });

                return { options: newOptions };
            })

        }
    }

    handleAddOption(optionToAdd) {

        if (!optionToAdd) {
            return "Options shouldn't be empty";
        }

        var index = this.state.options.indexOf(optionToAdd);

        if (index >= 0) {
            return "Option is already on the list";
        }

        this.setState((prevState) => {
            var newOptions = prevState.options.concat([optionToAdd]);
            return { options: newOptions };
        })
    }

    handlePickRandom() {
        var index = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[index]);
    }

    render() {
        return (
            <div>
                <Header subtitle={this.props.subtitle} />
                <ActionButton
                    hasOptions={this.state.options.length}
                    handlePickRandom={this.handlePickRandom} />
                <Options
                    items={this.state.options}
                    removeAllHandler={this.handleRemoveAllOptions}
                    handleRemoveOption={this.handleRemoveOption} />
                <AddOption handleAddOption={this.handleAddOption} />
            </div>
        );
    }
}
 