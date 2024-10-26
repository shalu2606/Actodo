import AddTodoForm from "./addtodoform"
import TodoList from "./todolist"
import { useState } from "react"
function Todocontainer()
{
    const [activityArr, setActivityArr] = useState([
        {
            id: 1,
            activity: "Go for a Walk"
        },
        {
            id: 2,
            activity: "Have Breakfast"
        },
        {
            id:3,
            activity:"Do Yoga"
        }
    ])
return(
    <div>
        <div className="flex gap-5 flex-wrap">
        <AddTodoForm activityArr={activityArr} setActivityArr={setActivityArr}/>
        <TodoList activityArr={activityArr} setActivityArr={setActivityArr}/>
            
            </div>
          </div>
)
}
export default Todocontainer