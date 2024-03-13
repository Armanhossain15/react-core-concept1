// export default function Text({task, isDone}){
//     return (
//         // isDone? <li>Finished</li> : <li>Work on : {task}</li>
//         <li>{isDone ? "Finished" : "Work on"} : {task}</li>
//     )
// }
export default function Text({task, isDone}){
    return (
        // isDone? <li>Finished</li> : <li>Work on : {task}</li>
        // <li>{isDone && "Done"} : {task}</li>
        <li>{isDone || "Work On"} : {task}</li>
    )
}