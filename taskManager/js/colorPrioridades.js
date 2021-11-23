export default function colorDePrioridad(task) {
    if(task.tipoPrioridad == "Inmediately") {
        return "red";
    }
    if(task.tipoPrioridad == "Today") {
        return "#149FDA";
    }
    if(task.tipoPrioridad == "Tomorrow") {
        return "#19e649";
    }
    if(task.tipoPrioridad == "Next Week") {
        return "#3f2452";
    }
}