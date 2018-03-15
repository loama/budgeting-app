import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  expenses: [
    {
      category: 'Groceries',
      description: 'Trader Joe\'s food',
      amount: 42332
    },
    {
      category: 'Travel',
      description: 'Gas',
      amount: 76473
    },
    {
      category: 'Income',
      description: 'Ebay sale - guitar',
      amount: 110200
    },
    {
      category: 'Entertainment',
      description: 'Milk & Eggs for the pancake party with neighbors',
      amount: 230000
    },
    {
      category: 'Misc',
      description: 'The usual weekly run',
      amount: 110000
    },
    {
      category: 'Income',
      description: 'Paycheck',
      amount: 570000
    }
  ],
  categories: ['Groceries', 'School', 'Entertainment', 'Utensils', 'Kids', 'Travel', 'Commute', 'Insurance', 'Clothing', 'Car', 'Taxes', 'Health', 'Home', 'Beauty', 'Income', 'Misc', 'Gifting']
}

const mutations = {
  articleTransparency (state, payload) {
    state.article.stickyTitleTransparent = payload
  }
}

const actions = {
  articleTransparency (context, payload) {
    context.commit('articleTransparency', payload)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
