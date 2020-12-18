<template>
  <div>
    <t-button icon="thumbs-up" icon-position="left">点赞</t-button>
  </div>
</template>

<script>
import Button from '@/button';
export default {
  name: 'demo',
  components: {
    't-button': Button
  }
};
</script>

<style lang="scss" scoped></style>