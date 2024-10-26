
import TodoItem from "./todoitem"
function TodoList(props) 
{
    const activityArr=props.activityArr
    const setActivityArr=props.setActivityArr
    return (
        <div className="bg-[#BDB4EA] border rounded-md p-2 flex-grow">
            <h1 className="text-medium text-2xl">Today's Activity</h1>
            
            {activityArr.length===0?<p>You haven't added anything yet?!</p>:""}
                        {
                activityArr.map(function(item,index){
 return <TodoItem id={item.id} item={item} index={index} activityArr={activityArr} setActivityArr={setActivityArr}/>
                })
            }
        </div>
    )
}
export default TodoList