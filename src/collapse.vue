<template>
    <div class="collapse">
        <slot></slot>
    </div>
</template>

<script lang="js">

  export default  {
    name: 'TCollapse'
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