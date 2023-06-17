import { combineReducers } from 'redux'
import DashboardReducer from '../dashboard/DashboardReducer'
import TabReducer from '../common/tab/TabReducer'
import BillingCycleReducer from '../billing-cycle/BillingCycleReducer'

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    billingCycle: BillingCycleReducer
})

export default rootReducer