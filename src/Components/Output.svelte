<script>
  import { ROWS } from '../Main/constants'

  export let puzzle
  export let answer
</script>

<style>
  .grid {
    border: 5px solid black;
  }
  .row {
    display: flex;
  }
  .row:nth-child(3),
  .row:nth-child(6) {
    border-bottom: 3px solid black;
  }
  .square {
    flex: 1;
    width: 40px;
    height: 40px;
    text-align: center;
    border: 1px solid #777;
    line-height: 40px;
  }
  .square.emphasized {
    color: rgba(238, 18, 2, 0.712);
  }
  .square:nth-child(3),
  .square:nth-child(6) {
    border-right: 5px solid black;
  }
</style>

{#if answer}
  <div class="grid">
    {#each ROWS as row}
      <div class="row">
        {#each row as square}
          <div class="square" class:emphasized={!puzzle[square]}>
            {answer[square]}
          </div>
        {/each}
      </div>
    {/each}
  </div>
{:else}
  Ooops, I don't have an answer for this puzzle.
{/if}