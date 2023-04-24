<script lang="ts">
	import { goto } from "$app/navigation";

import { score ,totalCoreectQuestions,UserRollNo,isSignedIn} from "../../store";
 var userName:Array<Object> = [];
    interface finalValue  {
        username:string;
        totalQuizPoins:string;
        totalAttempts:string;
        totalEarnedPoints:string;
        quizResult:string;
    };

    var sample:finalValue = {username:"User",totalQuizPoins:"23",totalEarnedPoints:"34",quizResult:"pass",totalAttempts:"1"}
    function resultSetter() {
      $isSignedIn = false;
      $score  = 0;
      goto("/")
       
    }

</script>

<main>
    <div class="felx justify-center ">
        <div class="card text-center">
            <div class="card-body shadow-2xl  lg:ml-20   lg:mr-20 mt-4    gap-4  ">
                <h1 class=" font-bold   ">THE FINAL RESULTS</h1>
                <div class="container flex justify-between    border border-base-100   ">
                    <h2> Username</h2>
                    <h2>{$UserRollNo}</h2>
                </div>
                <div class="container flex justify-between    border border-base-100   ">
                    <h2> total Quiz points</h2>
                    <h2>{$score}</h2>
                </div>
                <div class="container flex justify-between    border border-base-100   ">
                    <h2>  total correct questions </h2>
                    <h2>{$score/10}</h2>
                </div>

            </div>
        </div>
        <div class=" flex justify-center mt-10">
            <button class="btn btn-primary justify-center" on:click={resultSetter}>RESTART</button>
        </div>

    </div>
</main>