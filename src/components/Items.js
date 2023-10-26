import './items.css'
const Items=(props)=>{
    const{tabdetails,clickTabItem,isActive}=props
    const{tabId,displayText}=tabdetails
    const onClickTabItem=()=>{
        clickTabItem(tabId)
    }
    const activetabcn=isActive?'active-tab-btn':''
    return(
            <div className="tabcontainer">
                <button className={`tab_btn ${activetabcn}`} onClick={onClickTabItem}>{displayText}</button>
            </div>
    )
}
export default Items