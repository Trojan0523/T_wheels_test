<template>
  <div class="t-pager" :class="{hide: hideIfOnePage === true && totalPage <= 1}">
    <span class="t-pager-nav prev" :class="{disabled: currentPage === 1}" @click="onClickPage(currentPage -1)">
      <t-icon name="left"></t-icon>
    </span>
    <template class="t-pager-item" v-for="page in pages">
      <template v-if="page === currentPage">
        <span class="t-pager-item current">{{ page }}</span>
      </template>
      <template v-else-if="page === '...'">
        <t-icon class="t-pager-separator" name="omit"></t-icon>
      </template>
      <template v-else>
        <span class="t-pager-item other" @click="onClickPage(page)">{{ page }}</span>
      </template>
    </template>
    <span class="t-pager-nav next" :class="{disabled: currentPage === totalPage}" @click="onClickPage(currentPage +1)">
      <t-icon name="right"></t-icon>
    </span>
  </div>
</template>

<script>
import Icon from '@/icon';

export default {
  name: 'TPager',
  components: {
    't-icon': Icon
  },
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
  computed: {
    pages() {
      return unique([1, this.totalPage,
      this.currentPage, this.currentPage - 1,
      this.currentPage + 1, this.currentPage + 2]
        .filter((n) => n >= 1 && n <= this.totalPage)
        .sort((a, b) => a - b))
        .reduce((prev, current, index, array) => {
          prev.push(current);
          array[index + 1] !== undefined && array[index + 1] - array[index] > 1 && prev.push('...');
          return prev;
        }, []);
    }
  },
  methods: {
    onClickPage(n) {
      if (n >= 1 && n <= this.totalPage) {
        this.$emit('update:currentPage', n);
      }
    }
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

$width: 20px;
$height: 20px;
$font-size: 12px;
.t-pager {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  user-select: none;
  &.hide {
    display: none;
  }
  &-separator {
    width: $width;
    font-size: $font-size;
  }

  &-item {
    border: 1px solid $gray;
    border-radius: $border-radius;
    padding: 0 4px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: $font-size;
    min-width: $width;
    height: $height;
    margin: 0 4px;
    cursor: pointer;

    &.current, &:hover {
      border-color: $blue;
    }

    &.current {
      cursor: default;
    }
  }

  &-nav {
    margin: 0 4px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background: $gray;
    height: $height;
    width: $width;
    border-radius: $border-radius;
    font-size: $font-size;
    cursor: pointer;
    &.disabled {
      cursor: default;
      svg {
        fill: darken($gray, 30%);
      }
    }
  }
}
</style>
