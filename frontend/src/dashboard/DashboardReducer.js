const INTIAL_STATE = { summary: {credit: 0, debit: 0}}

export default function(state = INTIAL_STATE, action) {
    switch(action.type) {
        case 'BILLING_SUMMARY_FETCHED':
            return { ...state, summary: action.payload.data.value[0] }
        default:
            return state
    }
}