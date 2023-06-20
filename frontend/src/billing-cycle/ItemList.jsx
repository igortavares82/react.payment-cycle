import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Field, arrayInsert, arrayRemove } from 'redux-form'
import Grid from '../common/layout/Grid'
import Input from '../common/form/Input'
import If from '../common/operator/If'

class ItemList extends Component {
    
    add(index, item = {}) {
        if (!this.props.readOnly){
            this.props.arrayInsert('billingCycleForm', this.props.field, index, item)
        }
    }

    remove(index) {
        if (!this.props.readOnly && this.props.list.length > 1){
            this.props.arrayRemove('billingCycleForm', this.props.field, index)
        }
    }

    renderRows() {
        const list = this.props.list || []
        return list.length === 0 ? 
            <tr><td colSpan={3}>No data</td></tr>
            : list.map((item, index) => (
            <tr key={index}>
                <td>
                    <Field  name={`${this.props.field}[${index}].name`} 
                            component={ Input } 
                            placeholder='type a name' 
                            readOnly={this.props.readOnly}/>
                </td>
                <td>
                    <Field  name={`${this.props.field}[${index}].value`}  
                            component={ Input } 
                            placeholder='type a value' 
                            readOnly={this.props.readOnly} />
                </td>
                <If test={this.props.showStatus}>
                    <td>
                        <Field  name={`${this.props.field}[${index}].status`}  
                                component={ Input } 
                                placeholder='type a status' 
                                readOnly={this.props.readOnly} />
                    </td>
                </If>
                <td>
                    <button type='button' 
                            className="btn btn-success" 
                            onClick={_ => this.add(index + 1)}>
                        <i className="fa fa-plus"></i>
                    </button>
                    <button type='button' 
                            className="btn btn-warning" 
                            onClick={_ => this.add(index + 1, item)}>
                        <i className="fa fa-clone"></i>
                    </button>
                    <button type='button' 
                            className="btn btn-danger" 
                            onClick={_ => this.remove(index)}>
                        <i className="fa fa-trash-o"></i>
                    </button>
                </td>
            </tr>
        ))
    }

    render() {
        return (
            <Grid cols={this.props.cols}>
                <fieldset>
                    <legend>{this.props.legend}</legend>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Value</th>
                                <If test={this.props.showStatus}>
                                    <th>Status</th>
                                </If>
                                <th className='table-actions'>Actions</th>
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

const mapDispatchToProps = dispatch => bindActionCreators({arrayInsert, arrayRemove}, dispatch)
export default connect(null, mapDispatchToProps)(ItemList)