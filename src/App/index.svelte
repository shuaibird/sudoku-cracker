<script>
  import Input from '../Components/Input.svelte'
  import Output from '../Components/Output.svelte'

  let answer
  let form

  function crack() {
    answer = form.crack()
  }

  function reset() {
    answer = undefined
  }

  $: notAnswered = answer === undefined
</script>

<style>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .title {
    text-align: center;
    font-size: 24px;
    margin-bottom: 36px;
  }

  .view {
    margin-bottom: 24px;
  }

  .controller {
    display: flex;
    justify-content: space-around;
  }
  .controller button {
    height: 40px;
    width: 80px;
    border-radius: 4px;
  }
  
  .controller button:hover {
    cursor: pointer;
  }
</style>


<div class="container">
  <div class="app">
    <h1 class="title">Sudoku Cracker</h1>
    <div class="view">
      {#if notAnswered}
        <Input bind:this={form} />
      {:else}
        <Output {answer} />
      {/if}
    </div>
    <div class="controller">
      <button on:click={crack} disabled={!notAnswered}>Crack</button>
      <button on:click={reset}>Reset</button>
    </div>
  </div>
</div>