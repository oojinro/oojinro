import axios from 'axios'

const state = {
  slug: null,
  users: []
}
export default {
  namespaced: true,
  state,
  getters: {
    slug: (state) => {
      return state.name
    },
    users: (state) => {
      return state.users
    }
  },
  mutations: {
    slug: (state, payload) => {
      state.slug = payload
    },
    users: (state, payload) => {
      state.users = payload
    }
  },
  actions: {
    create: (context) => {
      console.log('Create Room')
      console.log('Doing Create Room')
      return axios.post((process.env.NODE_ENV === 'development' ? 'http://192.168.33.10:8080/' : '/') + 'api/v1/room/create').then(function(res){
        console.log('Done Create Room')
        console.log(res)
      }).catch(function(err){
        console.log('Failed Create Room')
      })
    },
    enter: (context, payload) => {
      console.log('Enter Room')
      console.log('Doing Enter Room')
      const roomSlug = payload.roomSlug
      const userSlug = context.rootGetters['user/slug']
      console.log(roomSlug, userSlug)
      return axios.post((process.env.NODE_ENV === 'development' ? 'http://192.168.33.10:8080/' : '/') + 'api/v1/room/enter', {roomSlug: roomSlug, userSlug: userSlug}).then(function(res){
        console.log('Done Enter Room')
        console.log(res)
      }).catch(function(err){
        console.log('Failed Enter Room')
      })
    }
  }
}