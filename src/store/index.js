import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  categories: [
    {
      name: 'Groceries',
      expenses: [
        {
          description: 'Trader Joe\'s food',
          amount: 42332
        }
      ]
    },
    {
      name: 'School',
      expenses: []
    },
    {
      name: 'Entertainment',
      expenses: [
        {
          category: 'Entertainment',
          description: 'Milk & Eggs for the pancake party with neighbors',
          amount: 230000
        }
      ]
    },
    {
      name: 'Utensils',
      expenses: []
    },
    {
      name: 'Kids',
      expenses: []
    },
    {
      name: 'Travel',
      expenses: [
        {
          description: 'Gas',
          amount: 76473
        }
      ]
    },
    {
      name: 'Commute',
      expenses: []
    },
    {
      name: 'Insurance',
      expenses: []
    },
    {
      name: 'Clothing',
      expenses: []
    },
    {
      name: 'Car',
      expenses: []
    },
    {
      name: 'Taxes',
      expenses: []
    },
    {
      name: 'Clothing',
      expenses: ''
    },
    {
      name: 'Health',
      expenses: ''
    },
    {
      name: 'Home',
      expenses: ''
    },
    {
      name: 'Beauty',
      expenses: ''
    },
    {
      name: 'Income',
      expenses: [
        {
          description: 'Ebay sale - guitar',
          amount: 110200
        },
        {
          description: 'Paycheck',
          amount: 570000
        }
      ]
    },
    {
      name: 'Taxes',
      expenses: ''
    },
    {
      name: 'Misc',
      expenses: [
        {
          description: 'The usual weekly run',
          amount: 110000
        }
      ]
    },
    {
      name: 'Gifting',
      expenses: []
    }
  ]
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
