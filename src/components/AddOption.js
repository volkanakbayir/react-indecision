import React from 'react'; 

export class AddOption extends React.Component {
    constructor(props) {
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            error: undefined
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const option = e.target.elements.option;
        const optionValue = option.value;

        const error = this.props.handleAddOption(optionValue);
        this.setState(() => {
            return { error }
        })
        if (!error) {
            option.value = '';
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

