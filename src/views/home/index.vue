<template>
  <div v-for="(item, key) in list" :key="key">
    {{ item.uName }}--{{ item.age }}
  </div>
  <ElButton type="success" @click="$router.push('/asdf')">haha</ElButton>
</template>
<script>

export default{
  data() {
    return {
      list: []
    }
  },
  async created () {
    const { list } = await this.$apis.get('test/list')
    this.list = list
  }
}
</script>
