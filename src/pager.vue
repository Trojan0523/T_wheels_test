<template>
  <div class="t-pager">
    <span class="t-pager-item" v-for="page in pages" :class="{active: page === currentPage, separator: page === '...'}">{{page}}</span>
  </div>
</template>

<script>
export default {
  name: 'TPager',
  props: {
    totalPage: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true
    },
    hideIfOnePage: {
      type: Boolean,
      default: true
    }
  },
  data() {
    let u2 = unique([1, this.totalPage,
      this.currentPage, this.currentPage - 1,
      this.currentPage + 1, this.currentPage + 2]
        .sort((a, b) => a - b))
        .reduce((prev, current, index, array) => {
          prev.push(current);
          array[index + 1] !== undefined && array[index + 1] - array[index] > 1 && prev.push('...');
          return prev;
        }, []);
    return {
      pages: u2
    };
  }
};

function unique(array) {
  const object = {};
  array.map((number) => {
    object[number] = true;
  });
  return Object.keys(object).map((s) => parseInt(s, 10));
  // return [...new Set(array)]
}
</script>

<style lang="scss" scoped>
@import "var";
.t-pager {
  &-item {
    border: 1px solid $gray;
    border-radius: $border-radius;
    padding: 0 4px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    min-width: 20px;
    height: 20px;
    margin: 0 4px;
    cursor: pointer;
    &.separator {
      border: none;
    }
    &.active, &:hover {
      border-color: $blue;
    }
    &.active{
      cursor: default;
    }
  }
}
</style>
