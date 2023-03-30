<template>
  <prime-message severity="info" :closable="false">Для создания накладной нажмите на кнопку "Создать"</prime-message>
  <prime-data-view :value="products">
    <template #list="slotProps">
      <div class="col-12">
        <div class="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
          <img class="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" :src="`https://primefaces.org/cdn/primevue/images/product/${slotProps.data.image}`" :alt="slotProps.data.name" />
          <div class="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
            <div class="flex flex-column align-items-center sm:align-items-start gap-3">
              <div class="text-2xl font-bold text-900">{{ slotProps.data.name }}</div>
              <Rating :modelValue="slotProps.data.rating" readonly :cancel="false"></Rating>
              <div class="flex align-items-center gap-3">
                            <span class="flex align-items-center gap-2">
                                <i class="pi pi-tag"></i>
                                <span class="font-semibold">{{ slotProps.data.category }}</span>
                            </span>
                <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data)"></Tag>
              </div>
            </div>
            <div class="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
              <span class="text-2xl font-semibold">${{ slotProps.data.price }}</span>
              <Button icon="pi pi-shopping-cart" rounded :disabled="slotProps.data.inventoryStatus === 'OUTOFSTOCK'"></Button>
            </div>
          </div>
        </div>
      </div>
    </template>
  </prime-data-view>
  <prime-input-text></prime-input-text>
</template>

<script>
export default {
  name: "InvoicePage"
  //1. Сразу автофокус в созданный инпут
  //2. Сканим QR с uuid лекарста
  //3. Мутацией добавляем в стэйт новую запись в объект накладная "invoice'
  //4. Код выше который Data View соответсвенно отвечает за отрисовку этого Invoice
  //5. После этого, после добавления нового объекта в накладные, код очищает поле инпут текста и делает автофокусировку
  //6. Пикаем снова процедура повторяется по новой. В случае некорректности QR кода выдает ошибку, очищает инпут поле и
  // можно пробовать другой QR код

}
</script>

<style scoped>

</style>