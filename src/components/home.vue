<template lang="pug">
q-layout(ref="layout" view="lHh LpR lFf")
  
    q-toolbar(slot="header")
      q-btn(flat @click="$refs.layout.toggleLeft()")
        q-icon(name="menu")
      q-toolbar-title
        |Auckland PSI
  
    q-tabs(slot="navigation")
      q-route-tab(slot="title" icon="view_quilt" to="/ambo" replace hide="icon" label="Ambo")
      q-route-tab(slot="title" icon="view_quilt" to="/neuro" replace hide="icon" label="Neurologist")
      q-route-tab(slot="title" icon="view_quilt" to="/nurse" replace hide="icon" label="Nurse")
      q-route-tab(slot="title" icon="view_quilt" to="/reg" replace hide="icon" label="Reg")
      q-route-tab(slot="title" icon="view_quilt" to="/ward" replace hide="icon" label="Ward")
  
    div(slot="left")
      q-card
        q-card-title Select Patient
        q-card-main
          q-field(label="Select NHI")
            q-select(v-model="currentPatient" :options="activePatients")
        q-card-separator
        q-card-actions
          q-btn New

      q-card
        q-card-title Current Patient
        q-card-main
          q-field(label="Location")
            q-input()
          q-field(label="Onset Time")
            q-input()
  
    router-view
</template>

<script>
import { db } from './db'

export default {
  components: {
  },
  data () {
    return {
      currentPatient: ''
    }
  },
  firebase: {
    patientsRef: db.ref('Patients')
  },
  computed: {
    activePatients: function () {
      return (this.patientsRef.map(function (a) { return { label: a.NHI, value: a.NHI } }))
    }
  }
}
</script>

<style>

</style>
