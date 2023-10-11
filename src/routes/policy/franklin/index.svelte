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

const next = () => {
  i = (i + 1) % renders.length
}
</script>


{#each [renders.image[i]] as src (i)}
  {#if i%2 != 0} // is odd}
    <img transition:fade {src} alt="" />
  {/if}
  {#if i%2 == 0} // is even}
    <img transition:slide {src} alt="" />
  {/if}
{/each}




// 
    
<div class="hero">
    <Carousel
			autoplay 
			autoplayDuration={5000}
		>
      </>
			</>
			</>
			</>
			</>
    </Carousel>
</div>

//////////////////////////////////

  
<script>
	

	let photo;
	let newPhoto;
	let firstLoad = false;
	let crossfading = false;
  
  // what is this doing?? finding random colors?
  async function fetchData() {
		const rand = Math.floor(Math.random() * 5000);
		
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_start=${rand}&_limit=1`);
    const data = await res.json();

    if (res.ok) {
      return data;
    } else {
      throw new Error(data);
    }
  }
	const  sleep = (ms) => new Promise(r => setTimeout(r, ms));
	async function handleFetch() {
		try {
			const f = await fetchData();
			console.log(f);
			if (!photo) { // init
				photo = f[0];
				newPhoto = f[0];
				return;
			}
			newPhoto = f[0];
		} catch(e) {
			console.log(e);
		}
	}
	async function onLoad(){
		if (newPhoto.id === photo.id) {
			firstLoad = true;
			return;
		}	
		crossfading = true;
		await sleep(1000);
		photo = newPhoto;
		crossfading = false;
	}
	
	onMount(() => handleFetch());
</script>

<button on:click={handleFetch}>
	Call fetch
</button>

    
<div class="container" class:firstLoad >
	{#if photo}
		<figure class="orig">
			<img src={photo.url} alt="" on:load={onLoad} >
		</figure>
		{#if newPhoto.id !== photo.id}
		<figure class="new" class:crossfading >
				<img src={newPhoto.url} alt="" on:load={onLoad}>
			</figure>
		{/if}
	{/if}
</div>

    
<style>
	.container {
		height: 10rem;
	}
	figure {
		position: absolute;
	}
	.firstLoad figure.orig img {
		opacity: 1;
	}
	figure.new {
		z-index: 1;
	}
	figure.new.crossfading img {
		opacity: 1;
	}
	img {
		opacity: 0;
		transition: all 1s ease;
	}
</style>
