<template>
  <div class="budget">
    <ul class="sections">
      <li v-for="category in categories" v-bind:key="category.name">
        <img src="">
        <div class="details">
          <div class="title">{{category.name}}</div>
          <div class="transactions"> {{category.size}} transactions</div>
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
    categories () {
      var categories = this.$store.state.categories
      var categoriesWithExpenses = []
      for (var i = 0; i < categories.length; i++) {
        if (categories[i]['expenses'].length > 0) {
          // amount of expenses in this category
          categories[i]['size'] = categories[i]['expenses'].length

          // total of this category
          var total = 0
          for (var j = 0; j < categories[i]['expenses'].length; j++) {
            total = total + categories[i]['expenses'][j]['amount']
          }
          categories[i]['total'] = total
          console.log(total)

          categoriesWithExpenses.push(categories[i])
        }
      }
      return categoriesWithExpenses
    }
  },
  data () {
    return {
      msg: []
    }
  },
  mounted () {
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
    padding: 0;
  }

  .sections li {
    position: relative;
    width: 304px;
    height: 54px;
    background: white;
    border: 1px solid #e5e5e5;
    margin: 0 auto 8px auto;
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
