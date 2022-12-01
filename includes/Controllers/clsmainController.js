// localStorage.setItem("m_tareas", [])
//localStorage.setItem("id", 0)


class clsmainController {
      constructor() {
            this.arrayTareas = []
       
            //console.log(localStorage.getItem("m_tareas"))

            ///////////////////Convertir str del LS a arrays separaditas/////////////////////
            let str = localStorage.getItem("m_tareas")
            let aux= ""
            let arr_aux = []
            for (let i = 0; i <= str.length; i++) {
                  if (str[i] == "," || i == str.length) {
                        arr_aux.push(aux)
                        aux = ""
                  }
                  if (str[i] != ",") {
                        aux+= str[i]
                  }
                  if (arr_aux.length == 4) {
                        // console.log(arr_aux)
                        this.arrayTareas.push(arr_aux)
                        arr_aux = []
                        
                  }
                  
            }
            this.tareas = []
            this.gestDraggable()
            this.loadexistentTask()
      }
      loadexistentTask(){
            for (let i = 0; i < this.arrayTareas.length; i++) {
                  let aux = this.arrayTareas[i]
                  let net = new clsTask(aux[0], aux[1], aux[2] , aux[3])
            }
      }

      cleanForm(){
            this.caption.value = ""
            this.description.value = ""
            for (let i = 0; i < this.i.length; i++) {
                  this.i[i].checked = false 
                  
            }
            er_box_caption.innerHTML = ""
            er_box_desc.innerHTML = ""
            er_box_radio.innerHTML = ""
      }
      ///////////////////////////////////////////////////////////////////////////////////////////////////
      closeModal(){     
            $("#myModal").modal("hide")
            this.createTask()
            
            
      }
      ///////////////////////////////////////////////////////////////////////////////////////////////////     
      setValues() {
            ////form attributes ////
            this.valid = true
            this.caption = document.getElementById("caption")
            this.description = document.getElementById("description")
            this.i = document.getElementsByClassName("form-check-input")
            this.important
            this.estado = "to_do"
            //// getting values ////
            for (let i = 0; i < this.i.length; i++) {
                  if (this.i[i].checked == true) {
                        this.important = this.i[i].id
                  }
            }
            
            this.validation()
            
      }
      ///////////////////////////////////////////////////////////////////////////////////////////////////
      validation(){
            this.caption.style.border = ""
            er_box_caption.style.color = ""
            er_box_caption.innerHTML = ""
            this.description.style.border = ""
            er_box_desc.style.color = ""
            er_box_desc.innerHTML = ""
            er_box_radio.style.color = ""
            er_box_radio.innerHTML = ""

            if (this.caption.value == "" || this.caption.value == null) {
                  this.caption.style.border = "2px solid red"
                  er_box_caption.style.color = "red"
                  er_box_caption.innerHTML = "* introduce a valid caption *"
                  this.valid = false 
            }
            if (this.description.value == "" || this.description.value == null) {
                  this.description.style.border = "2px solid red"
                  er_box_desc.style.color = "red"
                  er_box_desc.innerHTML = "* introduce a valid description *"
                  this.valid = false  
            }
            if (this.important == "" || this.important == null) {
                  er_box_radio.style.color = "red"
                  er_box_radio.innerHTML = "* select the importance of the task *"
                  this.valid = false  
            }

            if (this.valid == true) {
                  this.closeModal()
                  
            }
      }
      ///////////////////////////////////////////////////////////////////////////////////////////////////
      createTask(){
            let a = this.id
            let b = this.caption.value
            let c = this.description.value
            let d = this.important
            let e = "to_do"
            this.storeTasks()
            this.cleanForm()
            this.nT = new clsTask(a, b, c, d)


      }
      ///////////////////////////////////////////////////////////////////////////////////////////////////
      gestDraggable() {
            /* Events fired on the drag target */
            var columnas = document.querySelectorAll(".columna") ;
            for (let i = 0; i < columnas.length; i++) {
                  columnas[i].draggable = false                  
                  columnas[i].addEventListener("dragstart", function (event) {
                        event.dataTransfer.setData("task", event.target.id);
                        
                  });
                  /* Events fired on the drop target */
                  columnas[i].addEventListener("dragover", function (event) {
                        event.preventDefault();
                  });
      
                  columnas[i].addEventListener("drop", function (event) {
                        event.preventDefault()
                        console.log(event.target)
                        if (event.target.classList[0] == "droptarget") {
                              var data = event.dataTransfer.getData("task");
                              //////////////////////////////////////////////
                              if (event.target.id == "done") { // para que cuando este en done no se pueda arrastrar
                                    document.getElementById(data).draggable = false
                                    document.getElementById(data).style.opacity = .5
                              }
                              //////////////////////////////////////////////
                              event.target.appendChild(document.getElementById(data));
                        }
                  });
            }
      }
      ///////////////////////////////////////////////////////////////////////////////////////////////////
      storeTasks() {
            let tarea = [this.id, this.caption.value, this.description.value, this.important]
            this.arrayTareas.push(tarea)
            localStorage.setItem("m_tareas", this.arrayTareas)
            console.log(localStorage.getItem("m_tareas"))
            this.id++
            localStorage.setItem("id", this.id)
      }
}