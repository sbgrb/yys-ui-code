import {createWebHashHistory,createRouter} from 'vue-router'
import Home from './Views/Home.vue';
import Doc from './Views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import Markdown from './components/Markdown.vue'
import intro from './markdown/Intro.md'
import started from './markdown/Started.md'
import install from './markdown/Install.md'
import {h} from 'vue'



const history = createWebHashHistory()
const md = filename => h(Markdown,{path:`../markdown/${filename}.md`,key: filename})
export const router = createRouter({
    history:history,
    routes:[
        {path:'/',component:Home},
        {path:'/doc',component: Doc,
            children:[
                {path:'',redirect:'/doc/intro'},
                {path:'intro',component:md('intro')},
                {path:'started',component:md('started')},
                {path:'install',component:md('install')},
                {path:'switch',component:SwitchDemo},
                {path:'button',component:ButtonDemo},
                {path:'dialog',component:DialogDemo},
                {path:'tabs',component:TabsDemo}
            ]}
    ]
})
router.afterEach(() =>{

})