import './navbar.css'
const Navbar=(props)=>{
    const{score,time}=props
    return(
        <div className='navcontainer'>
            <div className='nav1'>
                <img src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png" alt="logo" className='logo'/>
            </div>
            <div className='nav2'>
                <h2 style={{color:"#fec653"}}>Score:{score}</h2>
                <div className='timecontainer'>
                    <img src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png" alt="alarm" className='alarm'/>
                    <h2 style={{color:"#fec653"}}>{time}  sec</h2>
                </div>

            </div>
        </div>
    )
}
export default Navbar