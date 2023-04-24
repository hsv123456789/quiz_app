<script lang="ts">
	import Questions from "../../questions.svelte";
    import data  from "../../data";
    import Modal from "../../modal.svelte";
    import { choosenAnswer ,score,totalCoreectQuestions } from "../../store";
    
    let number:number = 1;
     let showmodal:string = "";
     
    const onNext = ()=> {
        if(number<30){

            
            if(data[number-1].answer === $choosenAnswer){
                
                    $score = $score+10;
                    $totalCoreectQuestions = $totalCoreectQuestions+1;
                
            }
            number = number+1;

        }
        else {
            if(data[number-1].answer === $choosenAnswer){
                
                $score = $score+10;
                $totalCoreectQuestions = $totalCoreectQuestions+1;
            
        }
            console.log("This is the end of the quiz");
          showmodal = "modal-open";
          console.log(showmodal)


        }
    }
    const onPrev = () =>{
       if(number>1){
        number = number-1;
       }
       else{
        console.log("You cant go back more than this ")
       }
       
    }
    function reseter(value:string) {
          showmodal = value;
    }
</script>


<main>
    <div class="flex flex-col   items-center mt-10           ">
        <div class=" container  my-auto mx-auto  "><h1>Question no {number}</h1>
        <Questions index={number-1}/>
        <div class="  flex  justify-between mt-4 ml-3 mr-3 lg:ml-0 lg:mr-0  ">
            <button class="btn btn-primary " on:click={onPrev}>prev</button>
            <button class="btn btn-secondary " on:click={onNext}>next</button>
        </div>
        </div>
    </div>
    <Modal customClass={showmodal} modalReseter={reseter} />
    
</main>
