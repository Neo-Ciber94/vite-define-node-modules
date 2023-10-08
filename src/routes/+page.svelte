<script lang="ts">
	import { sayHelloVar } from 'say-hello-env';

	const message = sayHelloVar();
</script>

<h1 data-page-content>{message}</h1>