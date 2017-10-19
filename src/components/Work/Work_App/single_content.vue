<template type="html">
  <div class="category-content">
    <single-category :single-content="queryKey" ></single-category>
  </div>
</template>
<script type="text/ecmascript-6">
  import singleCategory from './single_category.vue'
  export default {
    components: {
      singleCategory
    },
    data () {
      return {
        queryKey: null
      }
    },
    created () {
      this.$nextTick(function () {
        this.fetchData();
      })
    },
    watch: {
      '$route': 'fetchData'
    },
    methods: {
      fetchData () {
        var sesstions= JSON.parse(sessionStorage.getItem('doc'))
        for(let key in sesstions){
          if(this.$route.query.id == ''){
              this.$router.push({
                path: '/work/'
              })
          }else{
            if(this.$route.query.id == sesstions[key]['ID']){
              this.queryKey = sesstions[key]
            }
          }

        }
      }
    }
  }
</script>
<style></style>
