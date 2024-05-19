<script lang="ts">
  import TodoCreate from '$lib/TodoCreate.svelte';
  import TodoList from '$lib/TodoList.svelte';
  import { triplit } from '$lib/triplit/client';
  import { useConnectionStatus } from '@triplit/svelte';

  const connection = useConnectionStatus(triplit);

  const statusMessage = $derived(connection.status === 'OPEN' ? 'connected' : 'disconnected');
</script>

<h3>Sync connection: {statusMessage}</h3>
{#if connection.status === 'OPEN'}
  <button class="btn disconnect" onclick={() => triplit.syncEngine.disconnect()}>
    Disconnect
  </button>
{:else}
  <button class="btn connect" onclick={() => triplit.syncEngine.connect()}> Connect </button>
{/if}

<hr />

<div class="card">
  <TodoCreate />

  <TodoList />
</div>

<style>
  .card {
    display: flex;
    gap: 1em;
    flex-direction: column;
  }
  .btn {
    margin-left: 8px;
    border: none;
    border-radius: 0.25em;
    padding: 0.5em 1em;
    background-color: cornflowerblue;
    color: #fff;
    font-size: 1em;
    cursor: pointer;
  }
  .btn.disconnect {
    background-color: crimson;
  }
  .btn.connect {
    background-color: darkseagreen;
  }
</style>
