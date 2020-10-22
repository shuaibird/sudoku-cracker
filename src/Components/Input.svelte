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