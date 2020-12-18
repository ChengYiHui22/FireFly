
export default function fetch(options){
    return new Promise((resolve,reject)=>{
        wx.request({
            url:options.url,
            data:options.data,
            dataType:'json',
            method:options.method,
            responseType:'text',
            header:{"Content-Type":"application/x-www-form-urlencoded"},
            success:resolve,
            fail:reject,
        })
    })
}