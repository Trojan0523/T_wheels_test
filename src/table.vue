<template>
  <div class="t-table-wrapper">
    <table class="t-table" :class="{bordered, compact, striped: !striped}">
      <thead>
      <tr>
        <th><input type="checkbox" @change="onChangeAllItems" ref="allChecked" :checked="areAllItemsSelected"></th>
        <th v-if="numberVisible">#</th>
        <th v-for="column in columns" :key="column.field">
          <div class="t-table-header">
          {{ column.text }}
          <span class="t-table-sorter" v-if="column.field in orderBy" @click="changeOrderBy(column.field)">
            <t-icon name="asc" :class="{active: orderBy[column.field] === 'asc'}"></t-icon>
            <t-icon name="desc" :class="{active: orderBy[column.field] === 'desc'}"></t-icon>
          </span>
          </div>
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item,index) in dataSource" :key="item.id">
        <td>
          <input type="checkbox" @change="onChangeItem(item,index,$event)"
                 :checked="inSelectedItems(item)">
        </td>
        <td v-if="numberVisible">{{ index }}</td>
        <template v-for="column in columns">
          <td :key="column.field">{{ item[column.field] }}</td>
        </template>
      </tr>
      </tbody>
    </table>
    <div class="t-table-loading" v-if="loading">
      <t-icon name="loading"></t-icon>
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
      console.log(copy);
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
}
</style>
