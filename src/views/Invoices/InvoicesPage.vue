<template>
  <div class="card">
        <prime-data-table
            :class="`p-datatable-sm`"
            :value="getInvoices"
            v-model:filters="filters"
            paginator :rows="10"
            filterDisplay="row"
            tableStyle="min-width: 50rem"
            :globalFilterFields="['departmentName', 'statusDescription']"
        >
          <template #header>
            <div class="flex justify-content-between">
              <span class="p-input-icon-left">
                <i class="pi pi-search" />
                <prime-input-text v-model="filters['global'].value" placeholder="Поиск" />
            </span>
            </div>
          </template>
          <template #empty> Накладных пока не сформировано </template>
          <template #loading> Идет загрузка накладных </template>
          <prime-column style="width: 10%" field="id" header="Идентификатор"></prime-column>
          <prime-column  field="invoiceDate" header="Дата создания"></prime-column>
          <prime-column field="departmentName" header="Отделение">
            <template #body="{ data }">
              {{ data.departmentName }}
            </template>
          </prime-column>
          <prime-column header="Статус">
            <template #body="slotProps">
              <prime-tag :value="slotProps.data.statusDescription" :severity="getSeverity(slotProps.data)" />
            </template>
          </prime-column>
          <prime-column>
            <template #body="slotProps">
              <prime-button class="p-button-sm mr-2" label="Открыть" icon="pi pi-search" @click="showId(slotProps.data.id)" />
              <prime-button class="p-button-danger p-button-sm" label="Удалить" icon="pi pi-trash" v-if="getPermissions.DeleteInvoice" @click="showId(slotProps.data.id)" />
            </template>
          </prime-column>
        </prime-data-table>

  </div>
</template>

<script>
import { FilterMatchMode } from 'primevue/api';
import {mapGetters} from "vuex";
export default {
  name: "InvoicesPage",
  data() {
    return {
      filters: {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS }
      },
    };
  },
  methods: {
    showId(id){
      this.$router.push('/app/invoices/show'+ '/' + id);
      console.log(id)
    },
    getSeverity(invoice) {
      switch (invoice.statusId) {
        case 1:
          return 'success';
        case 2:
          return 'warning';
        case 3:
          return 'danger';

        default:
          return 'success';
      }
    }
  },
  computed:{
    ...mapGetters({
      getInvoices: "app/getInvoices",
      getPermissions: "app/getPermissions"
    })
  }
}
</script>

<style scoped>

</style>