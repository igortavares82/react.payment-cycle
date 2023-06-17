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
import { selectTab, showTabs } from '../common/tab/TabActions'
import List from './BillingCycleList'

class BillingCycle extends Component {

    componentWillMount() {
        this.props.selectTab('tab-list')
        this.props.showTabs('tab-list', 'tab-create')
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
                            <TabContent id='tab-create'><h1>Create</h1></TabContent>
                            <TabContent id='tab-update'><h1>Upadate</h1></TabContent>
                            <TabContent id='tab-delete'><h1>Delete</h1></TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({selectTab, showTabs}, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycle)