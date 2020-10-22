<script>
  import { ROWS } from '../Main/constants'
  import solve from '../Main/index'

  let form

  const ALL_POS = [...Array(81)].map((_, p) => p)

  export function crack() {
    const input = ALL_POS.map((p) => Number(form[p].value) || false)
    const output = solve(input)
    return { input, output }
  }

  export function clear() {
    ALL_POS.forEach((p) => form[p].value = '')
  }
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
  input {
    flex: 1;
    width: 40px;
    height: 40px;
    text-align: center;
    border: 1px solid #777;
    font-size: 16px;
  }

  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input:nth-child(3),
  input:nth-child(6) {
    border-right: 5px solid black;
  }
</style>

<form autocomplete="off" bind:this={form} class="grid">
  {#each ROWS as row}
    <div class="row">
      {#each row as square}
        <input name={square} type="number" />
      {/each}
    </div>
  {/each}
</form>