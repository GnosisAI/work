import Vue from 'vue';
import Vuex from'vuex';
import { algorithm } from './modules/algorithm'; 
import { categorie } from './modules/categorie'; 
Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        algorithm:algorithm,
        categorie:categorie
    }
});