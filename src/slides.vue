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
      <span v-for="(n, index) in childrenLength"
            :class="{active: selectedIndex === n -1}"
            @click="select(n-1)">
        {{ n }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'slides',
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
    this.childrenLength = this.$children.length;
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
      return this.$children.map(vm => vm.name);
    }
  },
  methods: {
    onTouchStart(e) {
      this.pause();
      this.startTouch = e.changedTouches[0];
      if (e.touches.length > 1) return;
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
      let first = this.$children[0];
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
      this.$children.forEach((vm) => {
        let reverse = this.selectedIndex > this.lastSelectedIndex ? false : true;
        if (this.timerId) {
          if (this.lastSelectedIndex === this.$children.length - 1 && this.selectedIndex === 0) {
            reverse = false;
          }
          if (this.lastSelectedIndex === 0 && this.selectedIndex === this.$children.length - 1) {
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
