<template>
  <div class="t-uploader">
    <div @click="onClickUpload" ref="trigger">
      <slot></slot>
    </div>
    <ol class="t-uploader-fileList">
      <li v-for="file in fileList" :key="file.name">
        <template v-if="file.status === 'uploading'">
          <t-icon name="loading" class="t-uploader-spin"></t-icon>
        </template>
        <template v-else-if="file.type.indexOf('image') === 0">
          <img class="t-uploader-image" :src="url" width="32" height="32">
        </template>
        <template v-else>
          <div class="t-uploader-defaultImage"></div>
        </template>
        <span class="t-uploader-name" :class="{[file.status]: file.status}">{{file.name}}</span> &nbsp;
        <button class="t-uploader-remove" @click="onRemoveFile(file)">x</button>
      </li>
    </ol>
    <div ref="temp" style="width: 0; height: 0; overflow: hidden;"></div>
  </div>
</template>

<script>
import icon from '@/icon';
export default {
  name: 'TUploader',
  components: {
    't-icon': icon
  },
  props: {
    name: {
      type: String,
      required: true
    },
    action: {
      type: String,
      required: true
    },
    method: {
      type: String,
      default: 'POST',
    },
    parseResponse: { // 解析响应头函数
      type: Function,
      required: true
    },
    fileList: {
      type: Array,
      default: () => []
    },
    sizeLimit: {
      type: Number
    }
  },
  data() {
    return {
      url: 'about_blank'
    }
  },
  methods: {
    onRemoveFile(file) {
      let result = window.confirm('你确定要删除这图片吗')
      if(result) {
        let copy = [...this.fileList]
        let index = copy.indexOf(file)
        copy.splice(index, 1)
        this.$emit('update:fileList', copy)
      }
    },
    onClickUpload() {
      let input = this.createInput()
      // listen to input
      input.addEventListener('change', () => {
        this.uploadFile(input.files[0]) // 单文件上传
        input.remove()
      })
      // trigger click
      input.click()
    },
    createInput() {
      // create input
      this.$refs.temp.innerHTML = ''
      const input = document.createElement('input');
      input.type = 'file'
      this.$refs.temp.appendChild(input)
      return input;
    },
    beforeUploadFile(rawFile, newName, url) {
      let {size, type} = rawFile;
      if(size > this.sizeLimit) {
        this.$emit('error', '文件大于2MB')
        return false
      } else {
        this.$emit('update:fileList', [...this.fileList,{name: newName, size, type, status: 'uploading'}])
        return true
      }
    },
    afterUploadFile( newName, url) {
      let file = this.fileList.filter(file => file.name === newName)[0]
      let index = this.fileList.indexOf(file)
      let fileCopy = JSON.parse(JSON.stringify(file))
      fileCopy.url = url
      fileCopy.status = 'success'
      let fileListCopy = [...this.fileList]
      fileListCopy.splice(index, 1, fileCopy)
      this.$emit('update:fileList', fileListCopy)
    },
    uploadFile(rawFile) {
      let {name, size, type} = rawFile;
      let newName = this.generateName(name)
      // emit
      if(!this.beforeUploadFile(rawFile, newName)) {return }
      let formdata = new FormData()
      formdata.append(this.name, rawFile)
      this.doUploadFile(formdata,(response) =>{
        let url = this.parseResponse(response)
        this.url = url
        this.afterUploadFile(newName, url)
      }, (request) => {
        this.uploadError(request,newName)
      })
    },
    uploadError(request,newName) {
      let file = this.fileList.filter(f => f.name === newName)[0]
      let index = this.fileList.indexOf(file)
      let fileCopy = JSON.parse(JSON.stringify(file))
      fileCopy.status = 'fail'
      let fileListCopy = [...this.fileList]
      fileListCopy.splice(index, 1, fileCopy)
      let error = ''
      if(request.status === 0) {
        error = 'network did not connect'
      }
      this.$emit('update:fileList', fileListCopy)
      this.$emit('error', error)
    },
    generateName(name) {
      while (this.fileList.filter(f => f.name === name).length > 0) {
        let dotIndex = name.lastIndexOf('.')
        let nameWithoutExtension = name.substring(0, dotIndex)
        let extension = name.substring(dotIndex)
        name =  nameWithoutExtension + '(1)' + extension
      }
      return name;
    },
    doUploadFile(formdata,success, fail) {

      let request = new XMLHttpRequest()
      request.open(this.method, this.action)
      request.onload = () => {
         success(request.response)
      }
      request.onerror = () => {
        fail(request, request.status)
      }
      request.send(formdata)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "var";
.t-uploader {
  &-fileList {
    list-style: none;
    >li {
      display: flex;
      align-items: center;
      margin: 8px 0;
      border: 1px solid darken($gray, 20%);
    }
  }
  &-name {
    margin-right: auto;
    &.success {
      color: green;
    }
    &.fail {
      color: red;
    }
  }
  &-image {
    margin-right: 8px;
    border: none;
  }
  &-defaultImage {
    border: 1px solid red;
    margin-right: 8px;
    width: 32px;
    height: 32px;
  }
  &-image-wrapper {
    margin-right: 20px;
  }
  &-remove {
    width: 32px;
    height: 32px;
  }
  &-spin {
    width: 26px;
    height: 26px;
    @include spin;
  }
}
</style>
