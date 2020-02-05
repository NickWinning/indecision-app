import React from 'react';
import AddOptions from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options'

export default class IndecisionApp extends React.Component { 
    state = {
        options: []
    };

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }))
    };
    
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    };

    handleAddOption = (option) => {
        if (!option) {
            return 'Enter valid value to add option'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists'
        }

        this.setState((prevState) => ({ options: prevState.options.concat(option) }))
    };

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return option !== optionToRemove;
            })
        }))
    };

    componentDidMount() {
        const json = localStorage.getItem('options');
        const options = JSON.parse(json)

        if (options) { 
            try {
                this.setState(() => ({ options: options }))
            } catch (e) { 
                //Do nothing
            } 
        } 
    }

    componentDidUpdate(prevProps, prevState) { 
        if (prevState.options.length !== this.state.options.length) { 
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    componentWillUnmount() { 
        console.log('Component did unmount')
    }

    render() { 
        const subtitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header subtitle={subtitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOptions handleAddOptions={this.handleAddOption}/>
            </div>
        );
    }
}
