import connections from "@/configs/connections";
import axios from "axios";

export const appModule = {
    state:() => ({
        ratingRecordStatus: '',
        stage: {
            title: 'Начало',
            message: 'Начните оценку',
            completion: 0
        },
        dto: {
            ratingRecordId: '',
            ratingRecordGrade: '',
            ratingRecordComment: ''
        },
        employee: {
            employeeSurname: '',
            employeeFirstName: '',
            employeeSecondName: '',
            employeePosition: '',
            employeePhoto: ''
        }
    }),
    getters: {
        //Record Status
        ratingRecordStatus(state){
            return state.ratingRecordStatus;
        },
        //Steps
        getStepTitle(state){
          return state.stage.title;
        },
        getStepMessage(state){
            return state.stage.message;
        },
        getStepCompletion(state){
            return state.stage.completion;
        },
        //Employee
        getEmployeeFullname(state) {
            return state.employee.employeeSurname + ' ' + state.employee.employeeFirstName + ' ' + state.employee.employeeSecondName;
        },
        getEmployeePosition(state) {
            return state.employee.employeePosition;
        },
        getEmployeePhoto(state) {
            return state.employee.employeePhoto;
        }
    },
    mutations: {
        ['SCANNING'](state){
            state.stage.title = 'Первый шаг';
            state.stage.message = 'Отсканируйте выданный вам штрихкод';
            state.stage.completion = 20;
        },
        ['NOT_VOTED'](state, response){
            state.ratingRecordStatus = 'not voted',
            //State machine
            state.stage.title = 'Второй шаг';
            state.stage.message = 'Выбирите справедливую на ваш взгляд оценку';
            state.stage.completion = 40;
            //Employee
            state.employee.employeeSurname = response.data.body.employeeSurname
            state.employee.employeeFirstName = response.data.body.employeeFirstName
            state.employee.employeeSecondName = response.data.body.employeeSecondName
            state.employee.employeePosition = response.data.body.employeePosition
            state.employee.employeePhoto = response.data.body.employeePhoto
        },
        ['VOTED'](state){
            state.ratingRecordStatus = 'voted';
            state.stage.title = 'Ошибка';
            state.stage.message = 'Вы уже голосовали за этого врача!';
            state.stage.completion = 40;
        },
        ['ESTIMATE'](state, grade){
            state.stage.title = 'Третий шаг';
            state.stage.message = 'Отлично! Оставьте комментарий';
            state.stage.completion = 70;
            state.dto.ratingRecordGrade = grade;
        },
        ['FINISH'](state){
            state.stage.title = 'Конец';
            state.stage.message = 'Оценка завершена';
            state.stage.completion = 100;
        },
        ['KEYBOARD_ON_CHANGE'](state, input){
            state.dto.ratingRecordComment = input;
        },
        ['SET_RATING_RECORD_ID'](state, ratingRecordId){
            state.dto.ratingRecordId = ratingRecordId;
        },
        ['CLEAR_MODEL'](state){
            state.stage.title = 'Начало'
            state.stage.message = 'Начните оценку'
            state.stage.completion = 0;

            state.dto.ratingRecordId = '';
            state.dto.ratingRecordGrade = '';
            state.dto.ratingRecordComment = '';

            state.employee.employeeSurname = '';
            state.employee.employeeFirstName = '';
            state.employee.employeeSecondName = '';
            state.employee.employeePosition = '';
            state.employee.employeePhoto = '';
        },
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