<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
    let selectedGame: any;
    let selectedVersion: any;
    let selectedCountry: any;

    const uniqueVersions = (data) => {
        return Array.from(new Set(data.map((version) => version.app_ver)))
    }
    const uniqueCountries = (data) => {
        return Array.from(new Set(data.map((country) => country.country)))
    }
</script>

<main>
	<h1 class="heading">Games</h1>
    <div class="filterBar">
        <select bind:value={selectedGame} class="select">Filter game
            <option value="All" selected>All</option>
            {#each data.games as game} 
                <option value={game.name}><img src={game.icon} alt="gameIcon">{game.name}</option>
            {/each}
        </select>
        <select bind:value={selectedVersion} class="select">Filter version
            <option value="All" selected>All</option>
            {#each uniqueVersions(data.retention) as version} 
                <option value={version}>{version}</option>
            {/each}
        </select>
        <select bind:value={selectedCountry} class="select">Filter version
            <option value="All" selected>All</option>
            {#each uniqueCountries(data.retention) as country} 
                <option value={country}>{country}</option>
            {/each}
        </select>
    </div>
    <div class="viewBar">
        <button>Table</button>
        <button>Chart</button>
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
    .heading{
        text-align: center;
    }

    .filterBar{
        display: flex;
        gap: 10px;
        justify-content: center;
    }

    .select{
     
    }
</style>
