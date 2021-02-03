<template>
  <div class="t-slides" @mouseenter="onMouseEnter"
       @mouseleave="onMouseLeave"
       @touchstart="onTouchStart"
       @touchmove="onTouchMove"
       @touchend="onTouchEnd">
    <div class="t-slides-window" ref="window">
      <div class="t-slides-wrapper">
        <slot></slot>
      </div>
    </div>
    <div class="t-slides-dots">
      <span @click="onClickPrev">
      <t-icon name="left"></t-icon>
      </span>
      <span v-for="(n, index) in childrenLength"
            :class="{active: selectedIndex === n -1}"
            :key="index"
            @click="select(n-1)">
        {{ n }}
      </span>
      <span @click="onClickNext">
      <t-icon name="right"></t-icon>
      </span>
    </div>
  </div>
</template>

<script>
import icon from '@/icon';

export default {
  name: 'slides',
  components: {
    't-icon': icon
  },
  props: {
    selected: {
      type: String,
    },
    autoplay: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      childrenLength: 0,
      lastSelectedIndex: undefined,
      timerId: undefined,
      startTouch: undefined,
    };
  },
  mounted() {
    this.updateChildren();
    this.playAutomatically();
    this.childrenLength = this.items.length;
  },
  updated() {
    this.updateChildren();
  },
  computed: {
    selectedIndex() {
      let index = this.names.indexOf(this.selected) || 0;
      return index === -1 ? 0 : index;
    },
    names() {
      return this.items.map(vm => vm.name);
    },
    items() {
      return this.$children.filter(vm => vm.$options.name === 'slidesItem');
    }
  },
  methods: {
    onTouchStart(e) {
      this.pause();
      if (e.touches.length > 1) return;
      this.startTouch = e.touches[0];
    },
    onTouchMove() {
    },
    onTouchEnd(e) {
      let endTouch = e.changedTouches[0];
      // 取开始触摸点坐标
      let {clientX: x1, clientY: y1} = this.startTouch;
      // 取结束触摸点坐标
      let {clientX: x2, clientY: y2} = endTouch;
      // 计算两个点夹角距离
      // 两个点直线斜边距离
      let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
      let deltaY = Math.abs(y2 - y1);
      let Rate = distance / deltaY;
      if (Rate > 2) {
        // 在滑动
        if (x2 > x1) {
          // 右边滑动
          this.select(this.selectedIndex - 1);
        } else {
          // 左边滑动
          this.select(this.selectedIndex + 1);
        }
      }
      this.$nextTick(() => {
        this.playAutomatically();
      });
    },
    onMouseEnter() {
      this.pause();
      this.timerId = undefined;
    },
    onMouseLeave() {
      this.playAutomatically();
    },
    onClickPrev(){
      this.select(this.selectedIndex - 1)
    },
    onClickNext(){
      this.select(this.selectedIndex + 1)
    },
    playAutomatically() {
      if (this.timerId) return;
      let run = () => {
        let index = this.names.indexOf(this.getSelected());
        // -1 倒序 +1 正序
        let newIndex = index + 1;
        this.select(newIndex); // 告诉外界选中newIndex
        this.timerId = setTimeout(run, 2000);
      };
      this.timerId = setTimeout(run, 2000);
    },
    pause() {
      window.clearTimeout(this.timerId);
    },
    getSelected() {
      let first = this.items[0];
      return this.selected || first.name;
    },
    select(newIndex) {
      this.lastSelectedIndex = this.selectedIndex;
      if (newIndex === -1) {newIndex = this.names.length - 1; }
      if (newIndex === this.names.length) {newIndex = 0;}
      this.$emit('update:selected', this.names[newIndex]);
    },
    updateChildren() {
      let selected = this.getSelected();
      this.items.forEach((vm) => {
        let reverse = this.selectedIndex > this.lastSelectedIndex ? false : true;
        if (this.timerId) {
          if (this.lastSelectedIndex === this.items.length - 1 && this.selectedIndex === 0) {
            reverse = false;
          }
          if (this.lastSelectedIndex === 0 && this.selectedIndex === this.items.length - 1) {
            reverse = true;
          }
        }
        vm.reverse = reverse;
        this.$nextTick(() => {
          vm.selected = selected;
        });
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.t-slides {
  &-window {
    overflow: hidden;
  }

  &-wrapper {
    position: relative;
  }

  &-dots {
    padding: 8px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;

    > span {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: #ddd;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      margin: 0 8px;

      &:hover {
        cursor: pointer;
      }

      &.active {
        background: black;
        color: white;

        &:hover {
          cursor: default;
        }
      }
    }
  }
}
</style>
