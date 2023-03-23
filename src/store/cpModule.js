import connections from "@/configs/connections";
import axios from "axios";

export const cpModule = {
    state:() => ({
        section: {
            title: 'Начало'
        },
        sideBarVisible: false,
        menuItems: [
            {
                label: 'Начало',
                icon: 'pi pi-fw pi-plus',
                to: "/cp/start"
            },
            {
                label: 'Пользователи',
                icon: 'pi pi-fw pi-trash',
                to: "/cp/users"
            }
        ]

    }),
    getters: {
        getSectionTitle(state){
            return state.section.title;
        },
        getSideBar(state){
            return state.sideBarVisible;
        },
        getMenuItems(state){
            return state.menuItems;
        }
    },
    mutations: {

    },
    actions: {

    },
    namespaced: true
}