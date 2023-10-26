import './images.css'
const Images=(props)=>{
    const{details,selectImage}=props
    const{id, imageUrl}=details
    const clickImage=()=>{
        selectImage(imageUrl)
    }
    return(
        <div className='imagescontainer'>
            <button className='imgbtn' onClick={clickImage}><img src={imageUrl} className="displayimage"/></button>
            
        </div>
    )
}
export default Images