<script lang="ts">
  import data from "./data";
  import { choosenAnswer } from "./store";
  export let index=0;
  import { questionIndex } from "./store";
  let selected = ""

  
   
  
    $:{
      $questionIndex = index;
      $choosenAnswer = selected;
      console.log($choosenAnswer);
    }
</script>
<main>
    <div class="card shadow-xl  h-96 ml-3 mr-3 lg:ml-0 lg:mr-0 glass   ">
      <div class="card-body items-center text-center  gap-4 ">
        <h1 class="card-title lg:text-2xl  "> {data[index].question}</h1>
         <ul class=" ">
            {#each data[index].options as option ,i }
              <li>
                <label for="{option}{i}
                ">
                <input type="radio"
                value={option}
                name="{i} "
                id="q1-option"
                 class="radio" 
                  bind:group={selected}
                >
                {option}
            </label>
              </li>
               
                {/each}
         </ul>

      </div>
    </div>
    
</main>