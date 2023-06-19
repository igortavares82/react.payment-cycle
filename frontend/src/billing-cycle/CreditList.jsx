import React, { Component } from 'react'
import { Field } from 'redux-form'
import Grid from '../common/layout/Grid'
import Input from '../common/form/Input'

class CreditList extends Component {
    
    renderRows() {
        const list = this.props.list || []
        return list.length === 0 ? 
            <tr><td colSpan={3}>No data</td></tr>
            : list.map((item, index) => (
            <tr key={index}>
                <td>
                    <Field  name={`credits[${index}].name`} 
                            component={ Input } 
                            placeholder='type a name' 
                            readOnly={this.props.readOnly}/>
                </td>
                <td>
                    <Field  name={`credits[${index}].value`}  
                            component={ Input } 
                            placeholder='type a value' 
                            readOnly={this.props.readOnly} />
                </td>
                <td></td>
            </tr>
        ))
    }

    render() {
        return (
            <Grid cols={this.props.cols}>
                <fieldset>
                    <legend>Credits</legend>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Value</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRows()}
                        </tbody>
                    </table>
                </fieldset>
            </Grid>
        )
    }
}

export default CreditList