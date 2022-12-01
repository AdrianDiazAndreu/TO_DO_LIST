
/**
 * @class clsTask
 * @author SandoKan
 * @version 1.0
 * @method constructor
 * @method createButton
 * @method addModal
 * @method insertButton
 * 
 * 
 */

class clsTask{
      /**
       * @constructor
       * @param {integer} id 
       * @param {string} caption 
       * @param {string} desc 
       * @param {string} imp 
       * 
       */
      constructor(id,caption, desc, imp, estado){
            //// task attr ////
            this.id = id
            this.caption = caption
            this.description = desc 
            this.importance = imp
            this.estado = estado
            this.createButton()
      }     
      createButton(){
            switch (this.importance) {
                  case "low":
                        this.className = "droptarget btn btn-primary btn-lg mb-4 task"
                  break;
                  case "medium":
                        this.className = "droptarget btn btn-warning btn-lg mb-4 task"
                  break;
                  case "high":
                        this.className = "droptarget btn btn-danger btn-lg mb-4 task"
                  break;
            
                  default:
                  break;
            }

            //this.btn = "<button id='task_"+this.id+"' class='"+this.className+"' draggable=true data-bs-toggle='modal' data-bs-targe='#modal_"+this.id+"'>"+this.caption.toUpperCase()+"</button>"
            this.btn = document.createElement("button")
            this.btn.id = "task_"+this.id
            this.btn.className = this.className
            this.btn.draggable = true
            this.btn.dataset.bsToggle = "modal"
            this.btn.dataset.bsTarget = "#modal_"+this.id
            this.btn.textContent = this.caption.toUpperCase()
            this.insertButton()

            
            
            
      }
      showModal(){
            let titulo = document.getElementById("titulo_tarea")
            let desc = document.getElementById("descripcionTask")
            // titulo.innerHTML = ""
            // desc.innerHTML = ""
            titulo.textContent = this.caption
            desc.textContent = this.description

            $("#tasks_modal").modal("show")

            
      }
      
      insertButton(){
            
            to_do.appendChild(this.btn)
            this.btn.addEventListener("click", ()=>{
                  this.showModal()
            })
      }

}