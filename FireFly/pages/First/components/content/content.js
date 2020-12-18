// pages/First/components/content/content.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        newest:{
            type:Array
        },
        best:{
            type:Array
        }
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        goToGoods(e){
            this.triggerEvent("goTo",{goods:e.currentTarget.dataset.goods})
         
        }
    }
})
