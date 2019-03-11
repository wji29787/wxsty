console.log(11)
// let aa = App
// (function(a){
//     console.log(a)
//     // return a({
//     //     globalData1:12
//     // })
// })(aa)
App({
    onLaunch(e){
        console.log('Launch')
        console.log(e)
        // 小程序初始化完成时 全局只触发一次
    },
    onShow(){
        console.log('show')
        // 小程序启动 或从后台进入前台显示 触发 onShow
    },
    onHide(){
        console.log('Hide')
    },
    onError(){

    },
    aa:12
})