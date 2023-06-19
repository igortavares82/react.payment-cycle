import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ContentHeader from '../common/template/ContentHeader'
import Content from '../common/template/Content'
import Tabs from '../common/tab/Tabs'
import TabsHeader from '../common/tab/TabsHeader'
import TabsContent from '../common/tab/TabsContent'
import TabHeader from '../common/tab/TabHeader'
import TabContent from '../common/tab/TabContent'
import { create, update, remove, init } from './BillingCycleActions'

import List from './BillingCycleList'
import Form from './BillingCycleForm'

class BillingCycle extends Component {

    componentWillMount() {
        this.props.init()
    }

    render() {
        return (
            <div>
                <ContentHeader title='Payments cycles' small='Register' />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='List' icon='bars' target='tab-list' />
                            <TabHeader label='Create' icon='plus' target='tab-create' />
                            <TabHeader label='Update' icon='pencil' target='tab-update' />
                            <TabHeader label='Delete' icon='trash-o' target='tab-delete' />
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tab-list'>
                                <List />
                            </TabContent>
                            <TabContent id='tab-create'>
                                <Form onSubmit={this.props.create} 
                                      submitClass='primary' 
                                      submitLabel='Create'/>
                            </TabContent>
                            <TabContent id='tab-update'>
                                <Form onSubmit={this.props.update} 
                                      submitClass='info' 
                                      submitLabel='Update'/>
                            </TabContent>
                            <TabContent id='tab-delete'>
                                <Form onSubmit={this.props.remove} 
                                      readOnly={true} 
                                      submitClass='danger'
                                      submitLabel='Delete'/>
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    create,
    update,
    remove,
    init}, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycle)