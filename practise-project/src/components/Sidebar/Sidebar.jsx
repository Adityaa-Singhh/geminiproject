import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import "./sidebar.css";

function Sidebar() {
    const [extended, setExtended] = useState(false);

    return (
        <div className={`main ${extended ? 'extended' : ''}`}>
            <div className="top-section">
                <div className="menu">
                    <img 
                        src={assets.menu_icon} 
                        alt="Menu" 
                        onClick={() => setExtended(!extended)} 
                    />
                </div>
                <div className="plus-icon">
                    <img src={assets.plus_icon} alt="New Chat" />
                    {extended && <p>New Chat</p>}
                </div>
                <div className="message-icon">
                    <p>Recent</p>
                    <img src={assets.message_icon} alt="Recent Chats" />
                </div>
            </div>

            <div className="bottom-section">
                <div className="bottom-assests">
                    <img src={assets.question_icon} alt="Help" />
                    {extended && <p>Help</p>}
                </div>
                <div className="bottom-assests">
                    <img src={assets.history_icon} alt="Activities" />
                    {extended && <p>Activities</p>}
                </div>
                <div className="bottom-assests">
                    <img src={assets.setting_icon} alt="Settings" />
                    {extended && <p>Settings</p>}
                </div>
            </div>
        </div>
    );
}

export default Sidebar;