import Vue from 'vue'
import Router from 'vue-router'
import WorkIndex from '@/components/Work/Work_Index'
import ApplicationIndex from '@/components/Work/Work_App/Application_Index'
import singleContent from '@/components/Work/Work_App/single_content'
Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/work',
      name: WorkIndex,
      component: WorkIndex,
      children: [
        {
          path: '/work',
          component: ApplicationIndex
        },
        {
          path: '/work/business_:id',
          component: singleContent
        }

      ]
    }
  ]
})
