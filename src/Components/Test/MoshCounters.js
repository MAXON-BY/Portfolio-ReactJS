import React, {Component} from 'react';
import Mosh from './Mosh.js'

class MoshCounters extends Component {
    state = {
        counters: [
            {id: 1, value: 0},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0},
        ]
    };

    handleReset = () => {
        const counters = this.state.counters.map(c =>{
            c.value = 0;
            return c;
        })
        this.setState({ counters })
    };

    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters})
    };

    render() {
        return (
            <div>
                <h2>Mosh Test</h2>
                <div>
                    <button className="btn btn-primary btn-sm m-2">Reset</button>
                    {this.state.counters.map(counter => (
                        <Mosh
                            key={counter.id}
                            onDelete={this.handleDelete}
                            value={counter.value}
                            id={counter.id}>
                            <h4 style={{color: '#ee9038'}}>Counter #{counter.id}</h4>
                        </Mosh>
                    ))}
                </div>
            </div>
        )
    }
}

export default MoshCounters;
