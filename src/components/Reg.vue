<template lang="pug">
  .layout-padding
    q-card
      q-card-title Prior to arrival of patient
      q-card-main
        ul
          li Find out the ETA and wait in resus for patient to arrive
          li Do we have a NHI yet? If so review concerto - recent surgery, malignancy, trauma or anticoagulation
          li Meet the HASU nurse who will assist you and should have arrived in resus.
          li Once the patient arrives in resus you are the primary responsible clinician - ED will assist with ABC only if required
          li Read the Resus section below to familiarise yourself with pathway and priorities
    q-card
      q-card-title Patient arrives in resus
      q-card-main
        ul
          li Patient is to remain on ambulance trolley while receive hand-over from ambulance officer
          li BRIEF assessment of ABC and 30 sec neuro exam (awake? speaking? obeying? can move any limbs?)
          li Ensure adequate IV access - minimum 1 20G
          li If physiologically stable and "Stroke-like" send immediately to CT. HASU nurse will escort.
          li Request "ASAP CT Brain" - this will include CT + CTA (brain and neck) + CTP 
    q-card
      q-card-title CT Result
      q-card-main
        q-list
          q-list-header Select the most appropriate CT finding
          q-item(tag="label")
            q-item-side
              q-radio(v-model="ctfinding", val="normal")
            q-item-tile(label) No acute abnormality
          q-item(tag="label")
            q-item-side
              q-radio(v-model="ctfinding", val="ich")
            q-item-tile(label) Intracerebral hemorrhage
          q-item(tag="label")
            q-item-side
              q-radio(v-model="ctfinding", val="earlyinfarct")
            q-item-tile(label) Subtle or early signs of hyperacute infarct
            q-item-tile(sublabel) eg Loss grey-white and/or swelling but no extensive hypodensity
          q-item(tag="label")
            q-item-side
              q-radio(v-model="ctfinding", val="establishedinfarct")
            q-item-tile(label) Acute infarct with established hypodensity

  </div>
</template>

<script>
export default {

  data () {
    return {}
  }
}
</script>

<style>
</style>
