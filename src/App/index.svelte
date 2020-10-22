<script>
  import Input from '../Components/Input.svelte'
  import Output from '../Components/Output.svelte'

  let puzzle
  let answer
  let form
  let cracking = false

  function crack() {
    cracking = true
    const { input, output } = form.crack()
    cracking = false
    puzzle = input
    answer = output
  }

  function reset() {
    if (notAnswered) {
      form.clear()
    } else {
      answer = undefined
    }
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
        <Output {puzzle} {answer} />
      {/if}
    </div>
    <div class="controller">
      <button
        on:click={crack}
        disabled={!notAnswered || cracking}
      >{cracking ? 'Cracking' : 'Crack'}</button>
      <button
        on:click={reset}
        disabled={cracking}
      >Reset</button>
    </div>
  </div>
</div>