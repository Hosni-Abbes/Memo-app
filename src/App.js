import React from "react";
import { Add_Reminder, Remove_Reminder, Clear_Reminders } from './redux/action_creator';
import { connect } from 'react-redux'; //import connect to connect this App component to the redux store
import img from './note.png'  //import image 
import moment from 'moment'; //import moment to show the date in pretty format
//import datepicker from react-datepicker and add it in the app
import DatePicker from 'react-datepicker'; 
import "react-datepicker/dist/react-datepicker.css";

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      remindText: '',
      remindDate: new Date()
    }
  }

  //function to render all events/reminders list
  renderReminders = () => {
    const {reminderReducer} = this.props
    return <React.Fragment> {
      reminderReducer.map((reminder, index) => {
        return  <div key={index} className="d-flex justify-content-between align-items-center w-100 bg-dark p-1 mb-1">
                  <span className="text-start text-break">{reminder.remindText}</span>
                  <div className="d-flex justify-content-between align-items-center">
                    <span>{moment(reminder.remindDate).fromNow()}</span>
                    <span className="btn btn-danger ms-1" onClick={() => this.props.Remove_Reminder(reminder.remindID) }>x</span>
                  </div>
                  
                </div>
      })
    } </React.Fragment>
  }

  render(){
    return (
      <div className="App text-white d-flex flex-column align-items-center">
        <img className="img" src={img} alt="block-notes" />
        <h2 className="mb-3" >Add event or reminder</h2>
        <div className="d-flex flex-column w-100">
          {/* input to create events or reminder */}
          <input className="mb-2 p-2 rounded border-0 " type="text" placeholder="event/reminder" value={this.state.remindText}
                  onChange={(e) => { this.setState({ remindText: e.target.value })}} />
          {/* select the date  */}
          <DatePicker
            className="mb-2 p-2 rounded border-0 w-100"
            selected={this.state.remindDate}
            onChange={(date) => { this.setState({ remindDate: date })}}
            showTimeSelect
            timeFormat="HH:mm"
            timeCaption="time"
            dateFormat="MMMM d, yyyy h:mm aa"
          />
          {/* button to add the event or reminder */}
          <button disabled={ (this.state.remindText === '' && this.state.remindDate !== '') ? true : false}
                  onClick={ () => { this.props.Add_Reminder(this.state.remindText, this.state.remindDate); this.setState({remindText:'', remindDate: new Date()}) } }
                  className="mb-2 p-2 rounded border-0 btn btn-success" type="submit">Add</button>
        </div>
        {/* the reminders and events */}
        <div className="output d-flex flex-column align-items-start w-100 mb-2 ">
          {this.renderReminders()}
        </div>
        {/* button to clear all */}
        <button className="mb-2 p-2 rounded border-0 btn btn-danger w-100" 
                disabled={this.props.reminderReducer.length > 1 ? false : true }
                onClick={() => this.props.Clear_Reminders() }>Clear all</button>
      </div>
    );
  }
}

export default connect(state=>{ return {reminderReducer: state}}, {Add_Reminder, Remove_Reminder, Clear_Reminders})(App);
