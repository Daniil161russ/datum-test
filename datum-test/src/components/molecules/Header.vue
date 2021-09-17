<template>
	<header>
		<b-navbar toggleable="lg" type="dark" variant="dark">
			<b-container>
				<b-navbar-brand href="#">{{ brand }}</b-navbar-brand>
				<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
				<b-collapse id="nav-collapse" is-nav>
					<b-navbar-nav>
						<b-nav-item v-for="item in items" :key="item.id" link :to="item.route">
							{{ item.title }}
						</b-nav-item>
					</b-navbar-nav>
				</b-collapse>
			</b-container>
		</b-navbar>
	</header>
</template>

<script>
export default {
	name: 'Header',
	data:() =>({
		brand: 'DATUM-test',
    items: [
      { id: 0, title: 'Пользователи', route: "/" }, 
      { id: 1, title: 'Журнал', route: "/statement" }, 
      { id: 2, title: 'Карта', route: "/map" },
    ],
  }),
}
</script>