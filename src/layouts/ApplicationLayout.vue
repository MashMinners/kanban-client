<template>
  <div id="app-header">
    <prime-message severity="info" :closable="false">{{ stepMessage }}</prime-message>
  </div>
  <div id="app-content">
    <div class="mt-1 mb-3">
      <prime-progress-bar :value = stepCompletion :show-value="false"></prime-progress-bar>
    </div>
      <prime-fieldset>
        <template #legend>
          {{ stepTitle }}
        </template>
        <!--suppress JSValidateTypes -->
        <component
            :is="getComponent"
        />
      </prime-fieldset>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "ApplicationLayout",
  computed: {
    getComponent(){
      return (this.$route.matched[0].components.default)
    },
    ...mapGetters({
      //STEPS
      stepTitle: 'app/getStepTitle',
      stepMessage: 'app/getStepMessage',
      stepCompletion: 'app/getStepCompletion',
    })
  }
}
</script>

<style scoped>

</style>