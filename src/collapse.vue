<template>
    <div class="collapse">
        <slot></slot>
    </div>
</template>

<script lang="js">
import Vue from 'vue';
  export default  {
    name: 'TCollapse',
      props :{
        single: {
            type: Boolean,
            default: true
        }
      },
      data() {
        return {
            eventBus: new Vue
        }
      },
      provide() {
        if(this.single) {
            return {
                eventBus: this.eventBus
            }
        }
      },
  }
</script>

<style lang="scss" scoped>
    $gray: #ddd;
    $border-radius: 4px;
    .collapse {
        border: 1px solid $gray;
        border-radius: $border-radius;
    }
</style>