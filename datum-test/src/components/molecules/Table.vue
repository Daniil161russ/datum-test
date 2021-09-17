<template>
	<div>
		<b-form-group
			label="Поиск"
			label-for="filter-input"
			label-cols-sm="3"
			label-align-sm="right"
			label-size="sm"
			class="mb-0"
		>
			<b-input-group size="sm">
				<b-form-input
					id="filter-input"
					v-model="filter"
					type="search"
					placeholder="Введите для поиска"
				></b-form-input>

				<b-input-group-append>
					<b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
				</b-input-group-append>
			</b-input-group>
		</b-form-group>
		<p class="mt-3">Текущая страница: {{ currentPage }}</p>
    <b-table striped hover 
			:items="items" 
			id="my-table" 
			:per-page="perPage" 
			:current-page="currentPage"
			:filter="filter"
			:filter-included-fields="filterOn"
			@filtered="onFiltered"
			>
		</b-table>
		<b-pagination
			v-model="currentPage"
			:total-rows="totalRows"
			:per-page="perPage"
			aria-controls="my-table"
		></b-pagination>
  </div>
</template>

<script>
export default {
	name: 'Table',
	data:() =>({
		perPage: 6,
		totalRows: 1,
		currentPage: 1,
		filter: null,
		filterOn: [],
    items: [
			{ age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
			{ age: 21, first_name: 'Larsen', last_name: 'Shaw' },
			{ age: 89, first_name: 'Geneva', last_name: 'Wilson' },
			{ age: 21, first_name: 'Daniil', last_name: 'Daniilov' },
			{ age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
			{ age: 21, first_name: 'Larsen', last_name: 'Shaw' },
			{ age: 89, first_name: 'Geneva', last_name: 'Wilson' },
			{ age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
			{ age: 21, first_name: 'Larsen', last_name: 'Shaw' },
			{ age: 89, first_name: 'Geneva', last_name: 'Wilson' },
			{ age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
			{ age: 21, first_name: 'Larsen', last_name: 'Shaw' },
			{ age: 89, first_name: 'Geneva', last_name: 'Wilson' },
		]
  }),
	mounted() {
		this.totalRows = this.items.length
	},
	methods: { 
		onFiltered(filteredItems) {
			this.totalRows = filteredItems.length
			this.currentPage = 1
		}
	}
}
</script>