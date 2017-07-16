<template lang="pug">
q-card
  q-card-title
    |Select Patient
  q-card-main
    q-btn
      |New Patient
    q-select(v-model="selectedPatient" :options="activePatients")
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: ['patientsRef', 'selectedPatient']

}
</script>

<style>

</style>
