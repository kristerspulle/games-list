<script lang=ts>
    export let data: Game[]
    type Game = {
        app_id: string
        name: string
        icon: string
    }
    
    console.log(data)
</script>

<main class="main">
    <h1>Games</h1>
    
    {#if data && data.length > 0}
        <table>
            <thead>
                <tr>
                    <th>Version</th>
                    <th>Country</th>
                    <th>D0</th>
                </tr>
            </thead>
            <tbody>
                {#each data as game}
                <tr>
                    <td>{game.name}</td>
                    <td>{game.app_id}</td>
                    <td><img src={game.icon} alt='gameIcon'/></td>
                </tr>
                {/each}
            </tbody>
        </table>    
    {:else}
        <p>Loading...</p>
    {/if}
</main>

<!-- // let gamesData: Game[] = []
// const games = async () => {
//     try{
//         const response = await fetch('https://storage.googleapis.com/estoty-temp/games.json', {
//             method: 'GET',
//             cache: 'no-store'
//         })
//         const data = await response.json()
//         gamesData = data
//         console.log(gamesData);
//     } catch(error) {
//         console.error('Error fetching games:', error)
//     }
//  }


//  onMount(games) -->
