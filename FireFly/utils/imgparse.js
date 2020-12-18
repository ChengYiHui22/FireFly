export default function ImageUrl(value){
    let a = value 
    let b = a.replace(/<p>/g, "<view>");
    let c = b.replace(/(<\/p>)/g,"</view>")
    let d=c.replace(/img/g,"image")
   return d
}
