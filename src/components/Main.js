import React, { useState,useEffect } from 'react';
import './Main.css'
import eth from './Assests/weth.png'
import insta from './Assests/owner/instagram.png'
import twweet from './Assests/owner/twitter.png'
import more from './Assests/owner/more.png'

function Main({ Punks ,selectedPunk}) {
    const [activePunk, setActivePunk] = useState(Punks[0])
        
       useEffect(()=>{
           setActivePunk(Punks[selectedPunk])
       },[Punks,selectedPunk])

        return (<div>
            <div className="mainContainer">
                <div className="mainimgContainer">
                    <img src={activePunk.img} alt="" />
                </div>
                <div className='titleContainer'>
                    <div className="mainTitle">
                        #{activePunk.name}
                    </div>
                    <div className="mainId">
                        .0{activePunk.id}
                    </div>
                    {/* <div className="mainPrice">
                        .{activePunk.price}<img src={eth} alt="" />
                    </div> */}
                </div>
                <div className="mainSocials">
                    <div className="insta">
                        <img src={insta} alt="" />
                        @_ankixt_
                    </div>
                    <div className="insta">
                        <img src={twweet} alt="" />
                        @ankitSharma4645
                    </div>
                    <div className="insta">
                        <img src={more} alt="" />
                        more
                    </div>
                </div>
            </div>
        </div>
        )
    }

    export default Main;
