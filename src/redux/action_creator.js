
// this file will hold all action functions of the app (add reminder, remove reminder and clear all)
import { ADD_REMINDER, REMOVE_REMINDER, CLEAR_REMINDERS } from './types'

export const Add_Reminder = (text, date) => {
  const action = {
    type: ADD_REMINDER,
    remindText: text,
    remindDate: date
  }
  console.log('add action', action)
  return action
}

export const Remove_Reminder = (id) => {
  const action = {
    type: REMOVE_REMINDER,
    remindID: id
  }
  console.log('remove action', action)
  return action
}

export const Clear_Reminders = () => {
  const action = {
    type: CLEAR_REMINDERS,
  }
  console.log('clear all', action)
  return action
}