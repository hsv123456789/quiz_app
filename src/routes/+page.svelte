<script lang="ts">
	import { goto } from "$app/navigation";
	import { isSignedIn } from "../store";
    import { UserRollNo } from "../store";
    import axios from "axios";
   var pattern = /^21\d{5}$/;
    var rollNo:number = 0;
    var customBorder:string = "";
    var modalAdder = "";
    const logger = async  () =>{
        var   stringRollNo:any = String(rollNo);
       
       
       console.log("from svelte store"+$UserRollNo);
       console.log(checkRollno(rollNo))
       if(verrifyRollno(rollNo)===true && await checkRollno(rollNo)==`Roll number ${rollNo} does not exist` ){
        $UserRollNo = stringRollNo;
       

       
       
       
        goto("/quiz")
        $isSignedIn = true;
       
    
       
    
       }
       else{
        customBorder="border-red-600"
        modalAdder = "modal-open"
       }
      
        
    }
    var  verrifyRollno = (num:number) =>{
      var   stringRollNo:string = String(num);
      return pattern.test(stringRollNo); 
    }

    var checkRollno = async (num:number):Promise<String> =>{
         var finalRes :string = "";
      await  axios.get(`https://shy-rose-octopus-fez.cyclic.app/results/${num}`).then((response)=>{
          finalRes =   response.data.message;
          console.log(finalRes)
        }).catch((error)=>{
            console.log(error);
        })
        return finalRes;
    }

    var closer = () =>{
        modalAdder  = ""
    }
</script>
  
<main >

    <div class="  flex  flex-col  justify-center items-center   mt-10   ">
        <div>
            <h1 class="text-center  text-xl lg:text-4xl">  Welcome to the quiz app</h1>
            
            <ol class="lg:text-2xl font-sans  mt-10 ml-5 lg:ml-0">
               <li>You will be asked 30 questions one after another</li>
               <li>Ten points will be awarded for the correct answer</li>
               <li>Each question has three options . You can choose only only options</li>
               <li>You can review and change answers before the quiz finishes </li>
               <li>You can view the results after the quiz ends </li>
    
            </ol>
        </div>
          
          
            <div class="card      w-96 shadow-xl bg-base-100  mt-10">
             <div class="card-body ">
                <div class="form-control ">
                    <label for="username" class="label ">Rollno</label>
                    <input type=" number " class="input input-bordered  {customBorder} " placeholder=" enter SREC Rollno" bind:value={rollNo} >
                </div>
               <div class="form-control ">
                <button class="btn btn-primary  " on:click={logger} >START!!</button>
               </div>
            </div>
             </div>
          
    </div>
      
    
   
<div class="modal {modalAdder}">
    <div class="modal-box relative ">
        <button on:click={closer} class="btn btn-sm btn-circle absolute right-2 top-2">X</button>
        <h3 class="text-lg font-bold">Please enter a valid roll number </h3>
        <p class="py-4">
            You are recieving this messgage if you have already written the test or you are using a non valid srec roll number please use a valid roll number to continue the test        </p>
    </div>
</div>
    


</main>