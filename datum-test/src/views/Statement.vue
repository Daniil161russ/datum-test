<template>
	<div class="container">
		<h1 class="mt-5">Журнал</h1>
		<b-container class="bv-example-row mt-2">
			<Table />
		</b-container>
	</div>
</template>

<script>
export default {
  name: 'statement',
	components: {
    Table: () => import("@/components/molecules/Table")
  },
}
</script>