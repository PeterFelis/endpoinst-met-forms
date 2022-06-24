<script>
	let method = 'get';
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<form action="submit" {method}>
	<label>name<input type="text" name="name" /></label>
	<label>email<input type="email" name="email" /></label>
	<button on:click={() => (method = 'get')}>get</button>
	<button on:click={() => (method = 'post')}>post</button>
</form>

<style>
	form {
		padding: 2em;
	}

	label {
		display: block;
		margin-bottom: 2em;
	}

	input {
		margin-left: 0.5em;
	}
</style>
