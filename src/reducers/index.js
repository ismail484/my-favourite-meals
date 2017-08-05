import { combineReducers } from 'redux'

import {
  //constans
  ADD_RECIPE,
  REMOVE_FROM_CALENDAR,
} from '../actions'

//another reducer
//handle any recipes
function food (state = {}, action) {
  switch (action.type) {
    case ADD_RECIPE :
    //grap recipe from action
      const { recipe } = action

      return {
        ...state,
        [recipe.label]: recipe,
      }
    default :
      return state
  }
}

const initialCalendarState = {
  sunday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
  monday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
  tuesday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
  wednesday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
  thursday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
  friday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
  saturday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
}

function calendar (state = initialCalendarState, action) {
  const { day, recipe, meal } = action

    //new state
  switch (action.type) {
    case ADD_RECIPE :
      return {
        //return the same state by using object spread syntax
        //but modify specific day
        ...state,
        [day]: {
           //at the same state of the dayday the same state but
          ...state[day],
          //name of specific recipe
          [meal]: recipe.label,
        }
      }
    case REMOVE_FROM_CALENDAR :
      return {
        //return the same state by using object spread syntax
        //but modify specific day
        ...state,
        [day]: {
          //at the same day the same state but
          ...state[day],
         
           [meal]: null,
        }
      }
    default :
      return state
  }
}

export default combineReducers({
  food,
  calendar,
})