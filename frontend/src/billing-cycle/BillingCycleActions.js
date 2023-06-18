import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm } from 'redux-form' 
import { showTabs, selectTab } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3003/api'

export function getList(){
    const request = axios.get(`${BASE_URL}/billing-cycles`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export function create(values) {
    return dispatch => {
        axios.post(`${BASE_URL}/billing-cycles`, values)
        .then(resp => {
            toastr.success('Sccess', 'Operation has been done successfully.')
            dispatch([
                resetForm('billingCycleForm'),
                getList(),
                selectTab('tab-list'),
                showTabs('tab-list', 'tab-create')
            ])
        })
        .catch(e => {
            e.response.data.errors.forEach(error => toastr.error('Error', error))
        })
    }
}