import Vue from 'vue';
import Vuex from'vuex';
import { algorithm } from './modules/algorithm'; 
Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        algorithm:algorithm
    }
});