<template>
  <button class="t-button" :class="{[`icon-${iconPosition}`]: true}"
          @click="$emit('click')">
    <t-icon class="icon" v-if="icon && !loading" :name="icon"></t-icon>
    <t-icon name="loading" v-if="loading" class="loading icon"></t-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
import Icon from '../icon';

export default {
  name: 'TButton',
  components: {
    't-icon': Icon
  },
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      default: 'left',
      validator(value) {
        return !(value !== 'left' && value !== 'right');
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/var";

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.t-button {
  font-size: $font-size;
  height: $button-height;
  padding: 0 1em;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  background: $button-bg;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;

  &:hover {
    border-color: $border-color-hover;
  }

  &:active {
    background-color: $button-active-bg;
  }

  &:focus {
    outline: none;
  }

  > .content {
    order: 1;
  }

  > .icon {
    order: 1;
    margin-right: .1em;
  }

  &.icon-right {
    > .content {
      order: 1;
    }

    > .icon {
      order: 2;
      margin-left: .1em;
      margin-right: 0;
    }
  }

  .loading {
    @include spin;
  }
}
</style>
