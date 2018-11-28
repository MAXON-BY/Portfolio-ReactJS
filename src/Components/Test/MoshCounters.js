import React, {Component} from 'react';
import Mosh from './Mosh.js'

class MoshCounters extends Component{
    state = {
        counters: [
            {id: 1, value: 0},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0},
        ]
    };

    render(){
        return(
            <div>
                <h2>Mosh Test</h2>
                <div>
                    {this.state.counters.map(counter => (
                        <Mosh key={counter.id} value={counter.value} id={counter.id}>
                            <h4 style={{color: '#ee9038'}}>Counter #{counter.id}</h4>
                        </Mosh>
                    ))}
                </div>
            </div>
        )
    }
}
export default MoshCounters;
