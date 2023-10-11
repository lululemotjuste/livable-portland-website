<script lang="ts">
  import { onMount } from 'svelte';	
  import { fade } from "svelte/transition";

// declare array of render images

  const renders = [{
    image: '/FRANK-20230918-Photo_Housing.jpg',
    desc: ''
  },{
    image: '/FRANK-20230918-Render_Housing_Labeled.jpg',
    desc: ''
  },{
    image: '/FRANK-20230918-Photo_Park.jpg',
    desc: ''
  },{
    image: '/FRANK-20230918-Render_Park_Labeled.jpg',
    desc: ''
  }]


let i = 0

</script>


<style lang="scss">
    .image-container {
        position: relative;
        width: 300px;
        overflow: hidden;
        cursor: pointer;
    }

    .image-container img {
        width: 100%;
        height: 100%;
    }

    .image-text {
        position: absolute;
        bottom: -100%; /* Start from below the image */
        width: 100%;
        background: rgba(0, 0, 0, 0.75);
        color: #fff;
        transition: bottom 0.3s ease-in-out; /* Animation */
        padding: 10px;
        box-sizing: border-box;
        text-align: center;
    }

    .image-container:hover .image-text {
        bottom: 0;
        height: 100%;
    }

    a {
        text-decoration: none;
        flex-grow: 1;
        max-width: 400px;
    }
</style>

<svelte:head>
    <title>UCP - Franklin</title>
</svelte:head>

<h1 class="text-primary">Reclaim Franklin for Housing</h1>
<div class="d-flex p-4">
    <div class="text-start p-2">
        // <img class="mobile mb-2" src="/recode/Rosefoods.JPG" alt="Neighborhood example" style="width: 100%;"/>
        // <p>The City of Portland is in the process of rewriting its zoning code. We applaud the ongoing work as well as the work done in Phase One of this ReCode process, which simplified our code, allowed the construction of accessory dwelling units, and took the first step towards transit-oriented development. However, from following the process, we are concerned the proposed changes for ReCode Phase Two will not take full advantage of the rare opportunity we have to improve our city. This is why we have put together our own proposal of code changes.</p>
        // <p>The intention of these zoning code changes is to allow for more middle-density, mixed-use neighborhoods that are pleasant to live in and move around. These changes make housing more affordable, encourage equity, protect the environment, make the administration of our city services more resilient and efficient, and bring communities closer together. All of these outcomes are goals laid out in Portland’s Comprehensive Plan. The recommendations in this document will not stop people from building the types of buildings they build today, they will just give people more options of neighborhoods to build and live in. We are currently in a housing affordability crisis with an environmental crisis on the horizon; the least we can do is allow ourselves to build the kind of city that can rise to face these challenges.</p>
    </div>
    <div class="text-start p-2 desktop">
        <img src="/recode/Rosefoods.JPG" alt="Neighborhood example" style="width: 100%;"/>
    </div>
</div>
<h2 class="text-primary">Learn More</h2>
<ul class="text-start">
    <li><a href="https://thetownsman.org/a-biography-of-franklin-street/">A Biography of Franklin Street</a></li>
    <li><a href="https://thetownsman.org/stops-and-starts-the-history-of-franklin-street-redesign/">Stops and Starts: The History of Franklin Street Redesign</a></li>
</ul>


<div class="d-flex flex-wrap" style="justify-content: center;">
	{#each [renders.image[i]] as src (i)}
	  {#if i%2 != 0} // is odd}
	    <img transition:fade {src} alt="" />
	  {/if}
	  {#if i%2 == 0} // is even}
	    <img transition:slide {src} alt="" />
	  {/if}
	i = (i + 1) % renders.length
	{/each}
</div>
