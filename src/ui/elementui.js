import Vue from 'vue'
//element 时间选择器
import {
    Button,
    Row,
    Col,
    Message,
    Icon,
    Input,
    Dialog,
    Popover,
    DatePicker,
    Select,
    Option,
    TableColumn,
    Table,
    Radio,
    Tabs,
    TabPane
    // MessageBox
} from 'element-ui';

Vue.use(Button);
Vue.use(Row);
Vue.use(Col);
Vue.use(Icon);
Vue.use(Input);
Vue.use(Popover);
Vue.use(Dialog);
Vue.use(TableColumn)
Vue.use(DatePicker)
Vue.use(Select)
Vue.use(Option)
Vue.use(Table)
Vue.use(Radio)
Vue.use(Tabs)
Vue.use(TabPane)
// Vue.use(MessageBox)

Vue.prototype.$message = Message;
