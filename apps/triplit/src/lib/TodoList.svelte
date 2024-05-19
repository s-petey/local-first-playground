<script lang="ts">
  import { useQuery } from '@triplit/svelte';
  import { triplit } from './triplit/client';
  import TodoItem from './TodoItem.svelte';

  let data = useQuery(triplit, triplit.query('todos'));
  let todosArray = $derived(data.results ? Array.from(data.results.values()) : []);
</script>

<div>
  {#if data.fetching}
    <p>Loading...</p>
  {:else if data.error}
    <p>Error: {data.error.message}</p>
  {:else}
    <div>
      {#each todosArray as todo}
        <TodoItem data={todo} />
      {/each}
    </div>
  {/if}
</div>
