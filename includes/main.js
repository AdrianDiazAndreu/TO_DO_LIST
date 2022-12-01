const to_do = document.getElementById("to_do")
const deleteTask = document.getElementById("deleteTask")
const er_box_caption = document.getElementById("non-valid-caption")
const er_box_desc = document.getElementById("non-valid-description")
const er_box_radio = document.getElementById("non-valid-radio") 

const taskModals = document.getElementById("taskModals")

var bat = document.getElementById("buttonAddtask")
var mC = new clsmainController()
bat.addEventListener("click", function() {
      mC.setValues()
})

deleteTask.addEventListener("click", ()=>{
      $("#tasks_modal").modal("hide")
})








