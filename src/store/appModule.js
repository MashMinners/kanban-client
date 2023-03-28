import connections from "@/configs/connections";
import axios from "axios";

export const appModule = {
    state:() => ({
        invoices: [
            {
                id: '1',
                departmentId: 1,
                departmentName: 'Хирургическое отделение',
                statusId: 1,
                statusDescription: 'Завершен'
            },
            {
                id: '2',
                departmentId: 2,
                departmentName: 'Терапевтическое отделение',
                statusId: 2,
                statusDescription: 'В работе'
            },
            {
                id: '3',
                departmentId: 3,
                departmentName: 'Инфекционное отделение',
                statusId: 3,
                statusDescription: 'Отменен'
            }
        ],

    }),
    getters: {
        getInvoices(state){
            return state.invoices
        }

    },
    mutations: {

    },
    actions: {
        async checkRatingRecordStatusAction({state, commit}, ratingRecordId) {
            const params = {ratingRecordId: ratingRecordId}
            const response = await axios.get(connections.api.production ? connections.api.production : connections.api.dev, {params});
            if(response.data.status === 'not voted'){
                commit('NOT_VOTED', response)
                commit('SET_RATING_RECORD_ID', ratingRecordId)
                return false;
            }
            else {
                commit('VOTED')
                return true;
            }
        },
        async sendVoteAction({state, commit}){
            const response = await axios.post(connections.api.production ? connections.api.production : connections.api.dev, {
                ratingRecordId: state.dto.ratingRecordId,
                ratingRecordGrade: state.dto.ratingRecordGrade,
                ratingRecordComment: state.dto.ratingRecordComment});
                commit('FINISH', response)
        }
    },
    namespaced: true
}