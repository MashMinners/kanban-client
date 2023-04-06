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
                statusDescription: 'Завершен',
                invoiceDate: '2023-03-30'
            },
            {
                id: '2',
                departmentId: 2,
                departmentName: 'Терапевтическое отделение',
                statusId: 2,
                statusDescription: 'В работе',
                invoiceDate: '2023-03-30'
            },
            {
                id: '3',
                departmentId: 3,
                departmentName: 'Инфекционное отделение',
                statusId: 3,
                statusDescription: 'Отменен',
                invoiceDate: '2023-03-30'
            }
        ],
        permissions : {
            DeleteInvoice: false
        }

    }),
    getters: {
        getInvoices(state){
            return state.invoices
        },
        getPermissions(state){
            return state.permissions
        }

    },
    mutations: {
        ['REMOVE_INVOICE'] (state, id) {
            const indexToRemove = state.invoices.findIndex((pl) => pl.id === id);
            state.invoices.splice(indexToRemove, 1);
        }

    },
    actions: {
        async removeInvoiceAction({state, commit}, invoiceId) {
            const params = {invoiceId: invoiceId};
            const response = await axios.get(connections.api.production ? connections.api.production : connections.api.dev, {params});
            if(response.data.status === 'deleted'){
                commit('REMOVE_INVOICE', invoiceId)
            }
        }
    },
    namespaced: true
}