// this is the reducer (reminderReducer where i add the functionalities depended on actions )

import { ADD_REMINDER, REMOVE_REMINDER, CLEAR_REMINDERS } from "./types";
//i will use sfcookies to save the events and reminders in the browser (to prevent lost of data when relod page or close window)
import { bake_cookie, read_cookie } from 'sfcookies';

const reminderReducer = (state=[], action) => {
  let reminderOutput = [];
  state = read_cookie('reminders') //set the state to be the data saved in the browser

  if (action.type === ADD_REMINDER){
    reminderOutput = [...state, {remindText: action.remindText, remindDate: action.remindDate, remindID: Math.random()} ]
    bake_cookie('reminders', reminderOutput); //save the data in the browser using bake_cookie
    return reminderOutput

  }else if (action.type === REMOVE_REMINDER){
    reminderOutput = state.filter(reminder => reminder.remindID !== action.remindID)
    bake_cookie('reminders', reminderOutput); //save the data in the browser using bake_cookie
    return reminderOutput

  }else if(action.type === CLEAR_REMINDERS){
    reminderOutput = []
    bake_cookie('reminders', reminderOutput); //save the data in the browser using bake_cookie
    return reminderOutput

  }else{
    return state
  }
}

export default reminderReducer;