<script lang="ts">
  import { onMount } from 'svelte';	
  import { fade } from "svelte/transition";
  import { Carousel } from "svelte-carousel";


 const stats = [{
	number: '5.9 acres'
	units: 'of city-owned land reclaimed'
	color:
	image:
    }, {
	number: '994 new affordable units'
	units: 'under current zoning conditions'
	color:
	image:
    }, {
	number: '$15,700,000'
	units: 'estimated sale value'
	color:
	image:
    }, {
	number: '$3,400,000'
	units: 'estimated annual property tax value of affordable housing'
	color:
	image:
    }, {
	number: '17,000 SF'
	units: 'Lincoln Park expansion'
	color:
	image:
    }, {
	number: '2.9 acres'
	units: 'unbuilt potential green space'
	color:
	image:
    }]

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



        <p>A Vision of the Franklin Reclamation Authority</p>
        <p>Presented in Collaboration with UCP</p>



<h1 class="text-primary">Reclaim Franklin for Housing</h1>
<div class="d-flex p-4">

        <p>A team of assembled this plan to show the potential of the Franklin Street right-of-way to be redeveloped for housing in the heart of the Portland peninsula. This is not a specific plan or proposal, but a conceptual analysis of housing development opportunities in the Franklin Street corridor. </p>

// The Vision
<h2 class="text-primary">A Vision for Housing on Franklin</h2>
    <div class="text-start p-2">
        <img class="mobile mb-2" src="/franklin/Render_Housing_Labeled.JPG" alt="" style="width: 100%;"/>
        <img class="mobile mb-2" src="/franklin/Render_Park_Labeled.JPG" alt="" style="width: 100%;"/>
    </div>
    <div class="text-start p-2 desktop">
        <img src="/franklin/Render_Housing_Labeled.JPG" alt="" style="width: 100%;"/>
        <img src="/franklin/Render_Park_Labeled.JPG" alt="" style="width: 100%;"/>
    </div>
</div>


//The Numbers
<h2 class="text-primary">The Numbers</h2>

<div class="hero">
	<Carousel
	  autoplay
	  autoplayDuration={5000}
	  pauseOnFocus
	>
	  {#each stats as stat}
	    <stat.number stat.units />
	  {/each}
	</Carousel>
</div>

//The Benefits
<h2 class="text-primary">The Benefits</h2>



// Learn More
<h2 class="text-primary">Learn More</h2>
  <div class="text-start p-2">
	<p>To learn more about the history of Franklin Street and past attempts to redesign it, check out this series of deep-dive articles in The Portland Townsman. </p>
  </div>
<ul class="text-start">
    <li><a href="https://thetownsman.org/a-biography-of-franklin-street/">A Biography of Franklin Street</a></li>
    <li><a href="https://thetownsman.org/stops-and-starts-the-history-of-franklin-street-redesign/">Stops and Starts: The History of Franklin Street Redesign</a></li>
</ul>



// Take Action
<h2 class="text-primary">Take Action</h2>






