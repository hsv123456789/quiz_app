<script lang="ts">
  import { isSignedIn } from "../store";
  import { browser } from '$app/environment'
  import { goto } from '$app/navigation'
  import { page } from '$app/stores'

    import "../app.css";

    $: if(browser&& !$isSignedIn && $page.url.pathname !== '/'){
      goto('/')
    } else if(browser && $isSignedIn && $page.url.pathname === '/') {
      goto('/quiz')
    }


  </script>

  <nav class="navbar shadow-xl ">
    <div class="navbar-start"></div>
    <div class="navbar-center ">QUIZ APP FOR ALM</div>
    <div class="navbar-end "></div>
  </nav>
  
  <slot />