<script lang="ts">
	import { goto } from "$app/navigation";
     import axios from "axios";
      import {UserRollNo,score} from "./store"  
   export  var   customClass:string = ""; 
    export let modalReseter:Function;
   const yesHandler = () =>{
     axios.post("https://shy-rose-octopus-fez.cyclic.app/results",
      {
 rollno: $UserRollNo ,
 totalQuizPoints: $score,
 totalCorrectQuestions: $score/10   
}
     ).then((response)=>{
      console.log(response)
     }).catch((error)=>{
      console.log(error)
     })

    goto("/result");
   }
   const noHandler = () =>{
    customClass = ""
    modalReseter(customClass)
   }
</script>

<main>
    <div class="modal {customClass}  " id="warningModal">
        <div class="modal-box">
         <h3 class="font-bold text-lg ">Attention!!!</h3>
         <p class="py-4 ">You have reached the end of the quiz are you sure you are going to submit ?</p>
         <div class="modal-action flex justify-between ">
            <button class=" btn btn-primary " on:click={noHandler}>No</button>
              <button class="btn btn-secondary  " on:click={yesHandler}>Yes</button>
         </div>
        </div> 
     </div>
</main>