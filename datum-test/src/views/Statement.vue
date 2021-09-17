<template>
	<div class="container">
		<h1 class="mt-5">Журнал</h1>
		<b-container class="bv-example-row">
			<b-row>
				<b-col>
					<Table />
				</b-col>
				<b-col>
					Тут форма
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script>
import Table from '../components/molecules/Table.vue'
export default {
  name: 'statement',
	components: {
    Table: () => import("@/components/molecules/Table")
  },
}
</script>