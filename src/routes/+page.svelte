<script lang="ts">
	import type { PageData } from './$types';
    import Select, { Option } from '@smui/select';
    import Button, { Label } from '@smui/button';
	export let data: PageData;

	let selectedGame = 'All';
	let selectedVersion= 'All';
	let selectedCountry= 'All';

    const sortedGames = data.games.sort((a, b) => a.name.localeCompare(b.name))
    
	const uniqueVersions = (data) => {
        const versions = Array.from(new Set(data.map((version) => version.app_ver)))
		return versions.sort()
	};

	const uniqueCountries = (data) => {
		return Array.from(new Set(data.map((country) => country.country)));
	};
</script>

<main>
	<h1 class="heading">Games</h1>
	<div class="filterBar">
		<Select bind:value={selectedGame} class="shaped-outlined" variant="outlined" label='Filter Game'>
			<Option value="All">All</Option>
			{#each sortedGames as game}
				<Option value={game.name}><img src={game.icon} alt="gameIcon" width="32" height="32"/>{game.name}</Option>
			{/each}
		</Select>
		<Select bind:value={selectedVersion} class="shaped-outlined" variant="outlined" label='Filter Version'>
			<Option value="All">All</Option>
			{#each uniqueVersions(data.retention) as version}
				<Option value={version}>{version}</Option>
			{/each}
		</Select>
		<Select bind:value={selectedCountry} class="shaped-outlined" variant="outlined" label='Filter Country'>
			<Option value="All">All</Option>
			{#each uniqueCountries(data.retention) as country}
				<Option value={country}>{country}</Option>
			{/each}
		</Select>
	</div>
	<div class="viewBar">
		<Button variant="raised">
          <Label>Table</Label>
        </Button>
		<Button variant="raised">
            <Label>Chart</Label>
        </Button>
	</div>
	{#if data.games.length > 0}
		<table>
			<thead>
				<tr>
					<th>Version</th>
					<th>Country</th>
					<th>D0</th>
				</tr>
			</thead>
			<tbody>
				{#each data.games as game}
					<tr>
						<td>{game.name}</td>
						<td>{game.app_id}</td>
						<td><img src={game.icon} alt="gameIcon" /></td>
					</tr>
				{/each}
			</tbody>
		</table>
	{:else}
		<p>Loading...</p>
	{/if}
</main>

<style>
	.heading {
		text-align: center;
	}

	.filterBar {
		display: flex;
		gap: 10px;
		justify-content: center;
	}
</style>
