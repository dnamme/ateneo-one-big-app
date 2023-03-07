import './Schedule.css'

import IconTextButton from '../../components/icon-text-button'
import Button from '../../components/button'
import ClassCard from '../../components/class-card'
import Timetable from '../../components/timetable'

function SchedulePage() {
  return (
    <div className="main-wrapper" id="creator-container">
      <div class="creator-content">
        <div id="creator-text">
          <p id="return">Back to all schedules</p>
          <h3 id="schedule-name">My Schedule Name</h3>
          <p id="subtitle">SY 2022-2023, Second Semester</p>
        </div>
          <div id="add-class">
            <IconTextButton text="Add Class"/>
          </div>
          <div id="paste-aisis">
            <IconTextButton text="Paste from AISIS" icon="clipboard"/>
          </div>
          <div className="class-card">
            <ClassCard/>
          </div>
          <div id="delete-sched">
            <Button text="Delete Schedule" isFilled={true} size="large" color="#FF2323"/>
          </div>
      </div>
      <div class="creator-content">
        <div id="schedule-timetable">
          <Timetable/>
        </div>
      </div>
    </div>
  )
}

export default SchedulePage