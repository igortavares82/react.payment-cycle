import React from 'react'

import Grid from '../common/layout/Grid'
import Row from '../common/layout/Row'
import ValueBox from '../common/widget/ValueBox'

export default ({credit, debit}) => {

    return (
        <Grid cols='12'>
            <fieldset>
                <legend>Summary</legend>
                <Row>
                    <ValueBox cols='12 4' 
                              color='green' 
                              icon='bank' 
                              value={`R$ ${credit}`} 
                              text='Total credits' />

                    <ValueBox cols='12 4' 
                              color='red' 
                              icon='credit-card' 
                              value={`R$ ${debit}`} 
                              text='Total debit' />

                    <ValueBox cols='12 4' 
                              color='blue' 
                              icon='money' 
                              value={`R$ ${credit - debit}`} 
                              text='Total credits' />
                </Row>
            </fieldset>
        </Grid>
    )
}