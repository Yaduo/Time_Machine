import * as React from 'react';

export class NumberPicker extends React.Component<any, any> {
    render() {
        return (
            <p>
                <input type="range" value={this.props.value.toString() } min="0" max="255"
                    onChange={e => this.handleChange(e) } />
                <label> {this.props.name}: </label>
                <b>{ this.props.value }</b>
            </p>
        );
    }
    
    handleChange(event: React.FormEvent<HTMLInputElement>) {
        const e = event.target as HTMLInputElement;
        this.props.onChange(parseInt(e.value));
    }
}
