import './scorecard.css'
const Scorecard=(props)=>{
    const{gamescore,onClickPlayAgain}=props
    const onPlayAgain=()=>
    {
        onClickPlayAgain()
    }
    return(
        <div className="scorecontainer">
            <img src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png" className='trophy'/>
            <h1 style={{color:"white"}}>Your Score</h1>
            <h1 style={{color:"white"}}>{gamescore}</h1>
            <div className='last'>
                <button className="playagain" onClick={onPlayAgain} >
                
                <img src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"/>
                <h3 style={{color:"white"}}>Play Again</h3> 
              
               </button>
             </div>
        </div>
    )
}
export default Scorecard