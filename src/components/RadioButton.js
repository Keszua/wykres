import React from 'react';
import './RadioButton.css';


class RadioButton extends React.Component {

    state = {
        size: '',
        paymentMethod: '',
    }

    handleChange = (event) => {
        console.log("Wybrano", event.target.value);
        this.setState({
            size: event.target.value
        });
    }

    render() {

       const Items = this.props.buttons.map( (el) => (
            <li key={el.id}> 
                <label>
                    <input
                        type="radio"
                        value={el.name}
                        checked={this.state.size === el.name}
                        onChange={this.handleChange}
                    />
                    {el.name}
                </label>
            </li>
        ))

        return(

            <form onSubmit={this.handleSubmit} className="radio-button">
                <p className="title">{this.props.title}</p>

                <ul>
                    {Items}
                </ul>

                 {/* <button type="submit">Make your choice</button>  */}
            </form>


        );
    }

}


export default RadioButton;