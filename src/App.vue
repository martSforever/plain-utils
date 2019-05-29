<template>
    <div id="app">
        <div class="item">
            <div class="title">驼峰命名转横杠命名,KebabCase</div>
            <button @click="val[1] = utils.KebabCase(val[1])">执行</button>
            <input type="text" v-model="val[1]">
        </div>
        <div class="item">
            <div class="title">横杠命名转驼峰命名,camelCase</div>
            <button @click="val[1] = utils.camelCase(val[1])">执行</button>
            <input type="text" v-model="val[1]">
        </div>
        <div class="item">
            <div class="title">数组分块,chunk</div>
            <button @click="val[2] = utils.chunk(val[2],3)">执行</button>
            <span class="val">
                {{val[2]}}
            </span>
        </div>
        <div class="item">
            <div class="title">插入排序,insertSort</div>
            <button @click="click3">执行</button>
            <span class="val">
                <div v-for="item in val[3]" :key="item.name">
                    <span>order:{{item.order}}-name:{{item.name}}</span>
                </div>
            </span>
        </div>

        <div class="item">
            <div class="title">从数组中删除,removeFromArray</div>
            <button @click="utils.removeFromArray(val[4],'b')">执行</button>
            <span class="val">
                {{val[4]}}
            </span>
        </div>

        <div class="item">
            <div class="title">日期格式化,dateFormat</div>
            <button @click="val[5] = utils.dateFormat(val[5],'YYYY-MM-DD HH:mm:ss')">执行</button>
            <div class="val">
                {{val[5]}}
            </div>
        </div>
        <div class="item">
            <div class="title">解析日期字符串,dateParse</div>
            <button @click="val[6] = utils.dateParse(val[6],'YYYY-MM-DD HH:mm:ss')">执行</button>
            <div class="val">
                {{val[6]}}
            </div>
        </div>
        <div class="item">
            <div class="title">解析日期对象中的数据信息,decodeDate</div>
            <button @click="val[7] = utils.decodeDate(val[7])">执行</button>
            <div class="val">
                {{val[7]}}
            </div>
        </div>
        <div class="item">
            <div class="title">打乱数组,shuffle</div>
            <button @click="val[8] = utils.shuffle(val[8])">执行</button>
            <div class="val">
                {{val[8]}}
            </div>
        </div>
        <div class="item">
            <div class="title">数组中寻找一条数据,findOne</div>
            <button @click="val[9] = utils.findOne(val[9],item=>item === 5)">执行</button>
            <div class="val">
                {{val[9]}}
            </div>
        </div>
        <div class="item">
            <div class="title">数组中寻找多条数据,findSome</div>
            <button @click="val[10] = utils.findSome(val[10],item=>item%2 === 0)">执行</button>
            <div class="val">
                {{val[10]}}
            </div>
        </div>
        <div class="item">
            <div class="title">根据条件从数组查找下标,indexOf</div>
            <button @click="val[11] = utils.indexOf(val[11],item=>item === 3)">执行</button>
            <div class="val">
                {{val[11]}}
            </div>
        </div>

        <div class="item">
            <div class="title">从数组中删除部分元素,removeSome</div>
            <button @click="utils.removeSome(val[12],item=>item%2 === 0)">执行</button>
            <div class="val">
                {{val[12]}}
            </div>
        </div>
        <div class="item">
            <div class="title">判断是否存在于数组中,oneOf</div>
            <button @click="val[13] = utils.oneOf(6,val[13])">执行</button>
            <div class="val">
                {{val[13]}}
            </div>
        </div>
        <div class="item">
            <div class="title">获取唯一标识符,uuid</div>
            <button @click="val[14] = utils.uuid()">执行</button>
            <div class="val">
                {{val[14]}}
            </div>
        </div>
        <div class="item">
            <div class="title">填充0字符,zeroize</div>
            <button @click="val[15] = utils.zeroize(6,3)">执行</button>
            <div class="val">
                {{val[15]}}
            </div>
        </div>
        <div class="item">
            <div class="title">去除px,removePx</div>
            <button @click="val[16] = utils.removePx(val[16])">执行</button>
            <div class="val">
                {{val[16]}}
            </div>
        </div>
        <div class="item">
            <div class="title">填补单位，如果是字符串，则返回原数据，如果是数字则返回数字+px,unit</div>
            <button @click="val[17] = utils.unit(val[17])">执行</button>
            <div class="val">
                {{val[17]}}
            </div>
        </div>
        <div class="item">
            <div class="title">解析json,parseJson</div>
            <button @click="val[18] = utils.parseJson(val[18])">执行</button>
            <div class="val">
                {{val[18]}}
            </div>
        </div>
        <div class="item">
            <div class="title">复制到剪切板,copyToClipboard</div>
            <input type="text" v-model="val[19]">
            <button @click="utils.copyToClipboard(val[19])">执行</button>
            <input type="text">
        </div>
        <div class="item">
            <div class="title">引入js,addScript</div>
            <button @click="utils.addScript(val[20])">执行</button>
            <div class="val">
                {{val[20]}}
            </div>
        </div>
        <div class="item">
            <div class="title">推迟时间,delay</div>
            <button @click="utils.delay(2000).then(click20)">执行</button>
        </div>
        <div class="item">
            <div class="title">深度复制,deepCopy</div>
            <button @click="val[21] = utils.deepCopy(val[22])">执行</button>
            <div class="val">
                {{val[21]}} === {{val[22]}}?{{val[21] === val[22]}}
            </div>
        </div>

        <div class="item">
            <div class="title">判断变量类型,typeOf</div>
            <button @click="val[23] = utils.typeOf(val[23])">执行</button>
            <div class="val">
                {{val[23]}}
            </div>
        </div>
        <div class="item">
            <div class="title">监听键盘事件,keyboard</div>
            <button @click="click24">执行</button>
        </div>
        <div class="item">
            <div class="title">生成url地址,encodeUrl</div>
            <button @click="val[25] = utils.encodeUrl(val[25],{id:111,name:222,path:'home/doc'})">执行</button>
            <div class="val">
                {{val[25]}}
            </div>
        </div>
        <div class="item">
            <div class="title">解析url地址,decodeUrl</div>
            <button @click="val[26] = utils.decodeUrl(val[26])">执行</button>
            <div class="val">
                {{val[26]}}
            </div>
        </div>

    </div>
</template>

<script>

    import PlainUtils from 'plain-utils'

    const {$utils, $dom, StorageService} = PlainUtils

    export default {
        name: 'app',
        data() {
            const val21 = {name: 111}
            return {
                utils: $utils,
                dom: $dom,
                storage: new StorageService('plain-utils'),
                val: {
                    1: 'plButtonGroup',
                    2: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                    3: [
                        {order: 1, name: 1},
                        {order: 3, name: 2},
                        {order: 3, name: 3},
                        {order: 2, name: 4},
                        {order: 6, name: 5},
                        {order: 2, name: 6},
                        {order: 4, name: 7},
                    ],
                    4: ['a', 'b', 'c', 'd'],
                    5: new Date(),
                    6: '2019-05-20 11:35:54',
                    7: new Date(),
                    8: [1, 2, 3, 4, 5, 6, 7, 8],
                    9: [1, 2, 3, 4, 5, 6, 7, 8],
                    10: [1, 2, 3, 4, 5, 6, 7, 8],
                    11: [1, 2, 3, 4, 5, 6, 7, 8],
                    12: [1, 2, 3, 4, 5, 6, 7, 8],
                    13: [1, 2, 3, 4, 5, 6, 7, 8],
                    14: null,
                    15: null,
                    16: '100px',
                    17: 200,
                    18: '{aaa:"解析json",ddd:22,name:"nihaoya"}',
                    20: 'https://cdn.jsdelivr.net/npm/vue',
                    21: val21,
                    22: val21,
                    23: {hello: 111},
                    25: 'https://www.baidu.com',
                    26: 'https://www.baidu.com?id=111&name=222&path=home%2Fdoc'
                },
            }
        },
        mounted() {
            // console.log(PlainUtils)
            console.log(Object.prototype.toString.call(new Promise(() => {
            })))
        },
        methods: {
            click3() {
                this.val[3] = this.utils.deepCopy(this.utils.insertSort(this.val[3], (a, b) => a.order < b.order))
            },
            async click20() {
                await this.utils.delay(2000)
                alert('done')
                throw new Error("error")
            },
            click24() {
                this.utils.keyboard.addListener({
                    'enter': () => {
                        alert('enter')
                    }
                })
            },
        }
    }
</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        padding: 20px;

        .item {
            display: flex;
            align-items: center;
            margin-bottom: 6px;

            input, button {
                height: 28px;
                line-height: 28px;
                box-sizing: border-box;
            }

            .title {
                margin-right: 16px;
                width: 300px;
            }

            .val {
                width: 500px;
            }
        }
    }
</style>
