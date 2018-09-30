import Vue from 'vue'
import VueRouter from 'vue-router'
import Container from '../components/home/Container'
import Algorithm from '../components/Algorithm/Algorithm'
import Cat from '../components/categorie/Cat'
import SearchResult from '../components/search/SearchResult'


Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            path: '/',
            name: 'Conatainer',
            component: Container
        },
        {
            path: '/algorithm/:name',
            name: 'Algorithm',
            component: Algorithm
        },
        {
            path: '/cat/:name',
            name: 'cat',
            component: Cat
        },
        {
            path: '/search/',
            name: 'SearchResult',
            component: SearchResult
        },

    ]
})