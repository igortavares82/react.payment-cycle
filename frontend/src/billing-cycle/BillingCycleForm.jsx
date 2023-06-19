import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import  { reduxForm, Field, formValueSelector } from 'redux-form'

import { init } from './BillingCycleActions'
import LabelAndInput from '../common/form/LabelAndInput'
import CreditList from './CreditList'

class BillingCycleForm extends Component {

    render() {
        const { handleSubmit, readOnly, credits } = this.props
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field  name='name' 
                            component={LabelAndInput} 
                            label='Name' 
                            cols='12 4' 
                            placeholder='type a name'
                            readOnly={readOnly} />

                    <Field  name='month' 
                            component={LabelAndInput} 
                            label='Month' 
                            cols='12 4' 
                            placeholder='type a month'
                            readOnly={readOnly} />

                    <Field  name='year' 
                            component={LabelAndInput} 
                            label='Year' 
                            cols='12 4' 
                            placeholder='type a year'
                            readOnly={readOnly} />

                    <CreditList cols='12 6' list={credits} readOnly={readOnly}/>
                </div>
                <div className="box-footer">
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}>{this.props.submitLabel}</button>
                    <button type='button' className='btn btn-default' onClick={this.props.init}>Cancel</button>
                </div>
            </form>
        )
    }
}

BillingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm)
const selector = formValueSelector('billingCycleForm')
const mapStateToProps = state => ({credits: selector(state, 'credits')})
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)