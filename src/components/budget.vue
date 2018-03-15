<template>
  <div class="budget">
    <ul class="sections">
      <li>
        <img src="">
        <div class="details">
          <div class="title">Shopping</div>
          <div class="transactions"> 3 transactions</div>
        </div>
        <div class="amount">$1'300.00</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'budget',
  computed: {
    count () {
      return this.$store.state.article
    }
  },
  data () {
    return {
      msg: ''
    }
  },
  mounted () {
    console.log(this.$store.state.article)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul.sections {
    position: absolute;
    top: 90px;
    left: 0;
    width: 100vw;
    list-style: none;
  }

  .sections li {
    position: relative;
    width: 304px;
    height: 54px;
    background: white;
    border: 1px solid #e5e5e5;
    margin: 0 auto;
    border-radius: 2px;
  }

  .sections li img {
    position: absolute;
    top: 15px;
    left: 15px;
  }

  .sections li .details .title {
    position: absolute;
    top: 12px;
    left: 80px;
    font-size: 16px;
    color: #4A4A4A;
  }

  .sections li .details .transactions {
    position: absolute;
    top: 28px;
    left: 80px;
    font-size: 14px;
    color: #9B9B9B;
  }

  .sections li .amount {
    position: absolute;
    top: 0;
    right: 16px;
    line-height: 54px;
  }
</style>
