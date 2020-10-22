<script>
  import { ROWS } from '../Main/constants'
  import solve from '../Main/index'

  let form

  export function crack() {
    return solve([...Array(81)].map((_, p) => Number(form[p].value)))
  }
</script>

<style>
  .row {
    display: flex;
  }
  input {
    flex: 1;
    width: 40px;
    height: 40px;
    text-align: center;
  }

  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
</style>

<form autocomplete="off" bind:this={form}>
  {#each ROWS as row}
    <div class="row">
      {#each row as square}
        <input name={square} type="number" />
      {/each}
    </div>
  {/each}
</form>