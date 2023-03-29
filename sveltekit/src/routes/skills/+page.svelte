<script lang="ts">
	import LogoCloud from '$components/LogoCloud';

	import type { PageData } from './$houdini';
	export let data: PageData;

	$: ({ Logos } = data);
</script>

<LogoCloud logos={$Logos.data?.logos} />
