<template>
  <div class="card">
        <prime-data-table :class="`p-datatable-sm`" :value="getInvoices" tableStyle="min-width: 50rem">
          <prime-column style="width: 10%" field="id" header="Идентификатор"></prime-column>
          <prime-column field="departmentName" header="Отделение"></prime-column>
          <prime-column header="Статус">
            <template #body="slotProps">
              <prime-tag :value="slotProps.data.statusDescription" :severity="getSeverity(slotProps.data)" />
            </template>
          </prime-column>
          <prime-column>
            <template #body>
              <prime-button class="p-button-sm" label="Открыть" icon="pi pi-search" />
            </template>
          </prime-column>
        </prime-data-table>

  </div>
</template>

<script>
import {mapGetters} from "vuex";
export default {
  name: "InvoicesPage",
  data() {
    return {

    };
  },
  methods: {
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
      getInvoices: "app/getInvoices"
    })
  }
}
</script>

<style scoped>

</style>