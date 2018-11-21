import axios from 'axios';
import { API_URL } from '../../config/env';

export const categorie = {
    state:{
        categorie:null,
    },
    mutations:{
        addCategorie(state,alg){
            state.categorie = alg;
        },
    },
    actions:{
        getCatByName({commit},{name}){
            axios.get(API_URL+'categorie/'+name)
                .then(cat=> {
                    commit('addCategorie',cat.data);
                })
        },
    
    },

}