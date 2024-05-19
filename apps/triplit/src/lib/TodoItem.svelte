<script lang="ts">
  import { triplit } from './triplit/client';
  import type { Todo } from './triplit/schema';

  export let data: Todo;
</script>

<div class="todo">
  <input
    type="checkbox"
    checked={data.completed}
    on:change={() =>
      triplit.update('todos', data.id, async (entity) => {
        entity.completed = !data.completed;
      })}
  />
  {data.text}
  <button
    class="x-button"
    on:click={() => {
      triplit.delete('todos', data.id);
    }}
  >
    ❌
  </button>
</div>

<style>
  .todo {
    display: flex;
    gap: 1em;
    align-items: center;
    margin-bottom: 8px;
  }

  .x-button {
    border: none;
    background-color: transparent;
    display: none;
  }
  .x-button:hover {
    filter: brightness(1.5);
  }

  .todo:hover .x-button {
    display: block;
  }
</style>
