const Login = r => require.ensure([], () => r(require('./views/Login.vue')), 'group-index')
const NotFound = r => require.ensure([], () => r(require('./views/404.vue')), 'group-index')
const Home = r => require.ensure([], () => r(require('./views/Home.vue')), 'group-index')
const Main = r => require.ensure([], () => r(require('./views/Main.vue')), 'group-index')
const Table = r => require.ensure([], () => r(require('./views/nav1/Table.vue')), 'group-nav1')
const Form = r => require.ensure([], () => r(require('./views/nav1/Form.vue')), 'group-nav1')
const User = r => require.ensure([], () => r(require('./views/nav1/User.vue')), 'group-nav1')
const Page4 = r => require.ensure([], () => r(require('./views/nav2/Page4.vue')), 'group-nav2')
const Page5 = r => require.ensure([], () => r(require('./views/nav2/Page5.vue')), 'group-nav2')
const Page6 = r => require.ensure([], () => r(require('./views/nav3/Page6.vue')), 'group-nav3')
const echarts = r => require.ensure([], () => r(require('./views/charts/echarts.vue')), 'group-charts')

let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    //{ path: '/main', component: Main },
    {
        path: '/',
        component: Home,
        name: '导航一',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            { path: '/main', component: Main, name: '主页', hidden: true },
            { path: '/table', component: Table, name: 'Table' },
            { path: '/form', component: Form, name: 'Form' },
            { path: '/user', component: User, name: '列表' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '导航二',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/page4', component: Page4, name: '页面4' },
            { path: '/page5', component: Page5, name: '页面5' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'fa fa-address-card',
        leaf: true,//只有一个节点
        children: [
            { path: '/page6', component: Page6, name: '导航三' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: 'Charts',
        iconCls: 'fa fa-bar-chart',
        children: [
            { path: '/echarts', component: echarts, name: 'echarts' }
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;