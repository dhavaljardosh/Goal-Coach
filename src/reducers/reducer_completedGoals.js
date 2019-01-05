import { COMPLETED_GOALS } from '../constants';

export default(state=[],action) => {
    switch(action.type){
        case COMPLETED_GOALS:
            console.log(action)
            const {completedGoals} = action;
            return completedGoals
        default:
            return state;
    }
}