import React, {Component} from 'react';

class Mosh extends Component{
    state = {
        value: this.props.value,
    };

    // renderTags() {
    //     if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    //
    //     return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    // }

    handleIncrement = () =>{
        this.setState({count: this.state.value +1 })
    };

    render(){
        return(
            <div>
                {this.props.children}
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button
                    onClick={this.handleIncrement}
                    className="btn btn-secondary btn-sm"
                >Increment</button>
            </div>
        )
    }

    getBadgeClasses(){
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes
    }

    formatCount(){
        const {count} = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
export default Mosh

