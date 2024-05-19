<script lang="ts">
  import { triplit } from './triplit/client';

  let todoText = '';
  let isSubmitting = false;

  async function submitForm() {
    if (isSubmitting === false) {
      isSubmitting = true;
      await triplit.insert('todos', { text: todoText });
      todoText = '';
      isSubmitting = false;
    }
  }
</script>

<div>
  <input class="todo-input" bind:value={todoText} />

  <button class="btn" on:click={submitForm}> Submit </button>
</div>

<style>
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

  .todo-input {
    border-radius: 0.25em;
    border-color: cornflowerblue;
    padding: 0.5em 1em;
    background-color: #242424;
    color: #fff;
    font-size: 1em;
  }
</style>
