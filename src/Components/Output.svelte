<script>
  import { ROWS } from '../Main/constants'

  export let answer
</script>

<style>
  .row {
    display: flex;
  }
  .square {
    flex: 1;
    width: 40px;
    height: 40px;
    text-align: center;
    border: 1px solid black;
    line-height: 40px;
  }
</style>

{#if answer}
  {#each ROWS as row}
    <div class="row">
      {#each row as square}
        <div class="square">{answer[square]}</div>
      {/each}
    </div>
  {/each}
{:else}
  Ooops, I don't have an answer for this puzzle.
{/if}