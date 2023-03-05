import './Schedules.css'
import Header from '../../components/header/index'
import IconTextButton from '../../components/icon-text-button/index'
import ScheduleButton from '../../components/schedule-button/index'


function SchedulesPage() {
  return (
    <div id="schedules-wrapper">
      <div className="Header">
          <Header/>
      </div>
      <div id="schedules-container">
        <div class="schedules-content">
           <div className="add-schedule">
            <IconTextButton/>
           </div>
           <div className="enlistment-scheduler">
            <IconTextButton text="Enlistment Scheduler" icon="schedule"/>
           </div>
          <div className="schedule-bar">
            <ScheduleButton/>
            </div>
          <div className="schedule-bar">
            <ScheduleButton/>
          </div>
        </div>
        <div class="schedules-content">
          <h1>TIMETABLE</h1>
        </div>
      </div>
    </div>
  )
}

export default SchedulesPage