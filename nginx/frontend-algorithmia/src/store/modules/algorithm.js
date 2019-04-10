import axios from 'axios';
import { API_URL } from '../../config/env';

export const algorithm = {
    state:{
        algorithms: null,
        algorithm:null,
        filtredAlgorithms:null,
        catAlgorithms:null
    },
    mutations:{
        addAlgorithms(state, algos){
            state.algorithms = algos;
        },
        addAlgorithm(state,alg){
            state.algorithm = alg;
        },
        addFiltredAlgorithms(state, algos){
            state.filtredAlgorithms = algos;
        },
        addCatAlgorithms(state, algos){
            state.catAlgorithms = algos;
        }
    },
    actions:{
        getAlgos({commit}){
            global.console.log('calling the'+API_URL+'algorithm/');
            axios.get(API_URL+'algorithm/')
                .then(algos => {
                    commit('addAlgorithms',algos.data);
                })
        },
        getAlgoByName({commit},{name}){
            axios.get(API_URL+'algorithm/'+name)
                .then(alg => {
                    commit('addAlgorithm',alg.data);
                })
        },
        getFiltredAlgos({commit},{q}){
            axios.get(API_URL+'search?q='+q)
                .then(algos => {
                    commit('addFiltredAlgorithms',algos.data);
                })
        },
        getCatAlgos({commit},{cat}){
            axios.get(API_URL+'cat/'+cat)
                .then(algos => {
                    commit('addCatAlgorithms',algos.data);
                });
        },
    
    },

}