<template>
  <div class="t-table-wrapper"  ref="wrapper">
    <div :style="{height, overflow: 'auto'}" ref="tableWrapper">
    <table class="t-table" :class="{bordered, compact, striped: !striped}" ref="table" >
      <thead>
      <tr>
        <th v-if="expendField" :style="{width: '50px'}" class="t-table-center">展示</th>
        <th v-if="checkable" :style="{width: '50px'}" class="t-table-center">
          <input type="checkbox" @change="onChangeAllItems" ref="allChecked" :checked="areAllItemsSelected">
        </th>
        <th v-if="numberVisible" :style="{width: '50px'}">#</th>
        <th :style="{width: column.width + 'px'}" v-for="column in columns" :key="column.field">
          <div class="t-table-header">
          {{ column.text }}
          <span class="t-table-sorter" v-if="column.field in orderBy" @click="changeOrderBy(column.field)">
            <t-icon name="asc" :class="{active: orderBy[column.field] === 'asc'}"></t-icon>
            <t-icon name="desc" :class="{active: orderBy[column.field] === 'desc'}"></t-icon>
          </span>
          </div>
        </th>
        <th ref="actionsHeader" v-if="$scopedSlots.default"></th>
      </tr>
      </thead>
      <tbody>
      <template v-for="(item,index) in dataSource">
        <tr :key="item.id">
          <td :style="{width: '50px'}" class="t-table-center" v-if="expendField">
            <t-icon name="right" class="t-table-expend-icon" @click="expendItem(item.id)"></t-icon>
          </td>
          <td v-if="checkable" :style="{width: '50px'}" class="t-table-center">
            <input type="checkbox" @change="onChangeItem(item,index,$event)"
                   :checked="inSelectedItems(item)">
          </td>
          <td :style="{width: '50px'}" v-if="numberVisible">{{ index+1 }}</td>
          <template v-for="column in columns">
            <td :style="{width: column.width + 'px'}" :key="column.field">{{ item[column.field] }}</td>
          </template>
          <td v-if="$scopedSlots.default">
            <div ref="actions" style="display: inline-block;">
              <slot :item="item"></slot>
            </div>
          </td>
        </tr>
        <tr v-if="inExpendIds(item.id)" :key="`${item.id}-expend`">
          <td :colspan="columns.length + expendedCellColSpan">
            {{item[expendField] || '空'}}
          </td>
        </tr>
      </template>
      </tbody>
    </table>
    <div class="t-table-loading" v-if="loading">
      <t-icon name="loading"></t-icon>
    </div>
    </div>
  </div>
</template>

<script>
import icon from '@/icon';

export default {
  name: 'TTable',
  components: {
    't-icon': icon
  },
  data() {
    return {
      expendedIds: []
    }
  },
  props: {
    columns: {
      type: Array,
      required: true
    },
    dataSource: {
      type: Array,
      required: true,
      validator(array) {
        return array.filter(item => item.id === undefined).length > 0 ? false : true;
      }
    },
    expendField: {
      type: String,

    },
    height: {
      type: Number
    },
    orderBy: {
      type: Object,
      default: () => ({}),
    },
    loading: {
      type: Boolean,
      default: false
    },
    numberVisible: {
      type: Boolean,
      default: false
    },
    bordered: {
      type: Boolean,
      default: false
    },
    compact: {
      type: Boolean,
      default: false
    },
    striped: {
      type: Boolean,
      default: true
    },
    selectedItems: {
      type: Array,
      default: () => []
    },
    checkable: { // 是否可以选中
      type: Boolean,
      default: false
    }
  },
  mounted() {
    let table2 = this.$refs.table.cloneNode(false);
    this.table2 = table2
    table2.classList.add('t-table-copy')
    let thead = this.$refs.table.children[0]
    let {height} = thead.getBoundingClientRect()
    this.$refs.tableWrapper.style.marginTop = height + 'px'
    this.$refs.tableWrapper.style.height = this.height - height + 'px'
    table2.appendChild(thead)
    this.$refs.wrapper.appendChild(table2)


    if(this.$scopedSlots.default) {
      let div = this.$refs.actions[0]
      let {width} = div.getBoundingClientRect()
      console.log(width);
      let parent = div.parentNode
      let styles = getComputedStyle(parent)
      let paddingLeft = styles.getPropertyValue('padding-left')
      let paddingRight = styles.getPropertyValue('padding-right')
      let borderLeft = styles.getPropertyValue('border-left-width')
      let borderRight = styles.getPropertyValue('border-right-width')
      console.log(paddingLeft,paddingRight, borderLeft, borderRight);
      let width2 = this.$refs.actionsHeader.style.width = width + parseInt(paddingLeft) + parseInt(paddingRight) + parseInt(borderLeft) + parseInt(borderRight) + 'px'
      this.$refs.actionsHeader.style.width = width2
      this.$refs.actions.map(div => {
        div.parentNode.style.width = width2
      })
    }
  },
  computed: {
    areAllItemsSelected() {
      let dataSourceSortedArray = this.dataSource.map(item => item.id).sort();
      let selectedItemsSortedArray = this.selectedItems.map(item => item.id).sort();
      if (dataSourceSortedArray.length !== selectedItemsSortedArray.length) {
        return false;
      } else {
        let equal = true;
        for (let i = 0; i < dataSourceSortedArray.length; i++) if (dataSourceSortedArray[i] !== selectedItemsSortedArray[i]) {
          equal = false;
          break;
        }
        return equal;
      }
    },
    expendedCellColSpan() {
      let result = 0
      if(this.checkable) {
        result += 1
      }
      if(this.expendField) {
        result += 1
      }
      return result
    }
  },
  watch: {
    selectedItems() {
      if (this.selectedItems.length === this.dataSource.length) {
        this.$refs.allChecked.indeterminate = false;
      } else if (this.selectedItems.length === 0) {
        this.$refs.allChecked.indeterminate = false;
      } else {
        this.$refs.allChecked.indeterminate = true;
      }
    }
  },
  methods: {
    inExpendIds(id) {
      return this.expendedIds.indexOf(id) >= 0
    },
    expendItem(id) {
      if(this.inExpendIds(id)) {
        this.expendedIds.splice(this.expendedIds.indexOf(id), 1)
      } else {
        this.expendedIds.push(id)
      }
    },
    changeOrderBy(key) {
      const copy = JSON.parse(JSON.stringify(this.orderBy))
      let oldValue = copy[key]
      if(oldValue === 'asc') {
        copy[key] = 'desc'
      } else if(oldValue === 'desc') {
        copy[key] = true
      } else {
        copy[key] = 'asc'
      }
      this.$emit('update:orderBy', copy)
    },
    inSelectedItems(item) {
      return this.selectedItems.filter(i => i.id === item.id).length > 0;
    },
    onChangeItem(item, index, e) {
      let selected = e.target.checked;
      let copy = JSON.parse(JSON.stringify(this.selectedItems));
      if (selected) {
        copy.push(item);
      } else {
        copy.filter(i => i.id !== item.id);
      }
      this.$emit('update:selectedItems', copy);
    },
    onChangeAllItems(e) {
      //充分利用单向数据流的特性
      let selected = e.target.checked;
      this.$emit('update:selectedItems', selected ? this.dataSource : []);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "var";

$gray: darken($gray, 30%);
.t-table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  border-bottom: 1px solid $gray;
  &-expend-icon {
    width: 10px;
    height: 10px;
  }
  & &-center {
    text-align: center;
  }
  &.compact {
    td, th {
      padding: 4px;
    }
  }

  &.bordered {
    border: 1px solid $gray;

    td, th {
      border: 1px solid $gray;
    }
  }

  &.striped {
    tbody {
      > tr {
        &:nth-child(odd) {
          background: white;
        }

        &:nth-child(even) {
          background: lighten($gray, 30%);
        }
      }
    }
  }
  &-sorter {
    display: inline-flex;
    flex-direction: column;
    margin: 0 4px;
    cursor: pointer;
    svg {
      width: 10px;
      height: 10px;
      fill: $gray;
      &.active {
        fill: red;
      }
      &:first-child {
        position: relative;
        bottom: -1px;
      }
      &:nth-child(2) {
        position: relative;
        top: -1px;
      }
    }
  }
  &-header {
    display: flex;
    align-items: center;
  }
  &-wrapper {
    position: relative;
    overflow: auto;
  }
  &-loading {
    background: rgba(255,255,255,0.8);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      width: 50px;
      height: 50px;
      @include spin;
    }
  }
  td, th {
    border-bottom: 1px solid $gray;
    text-align: left;
    padding: 8px;
  }
  &-copy {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: white;
  }
}
</style>
