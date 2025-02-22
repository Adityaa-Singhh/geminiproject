import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import { useGemini } from '../../context/Context';

function Sidebar() {
  const [extended, setExtended] = useState(false);
  const { onSent, prevPrompts, setRecentPrompt, newChat } = useGemini();

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  return (
    <div className={`h-screen flex flex-col justify-between bg-whiteBg p-4 transition-[width] duration-300 ${extended ? 'w-64' : 'w-16'}`}>

      {/* Top Section */}
      <div className="cursor-pointer">
        {/* Menu Icon */}
        <img
  className="w-5"
  src={assets.menu_icon}
  alt="Menu"
  aria-label="Toggle Menu"
  onClick={() => setExtended(!extended)}
/>


        {/* New Chat Button */}
        <div
          className="mt-8 flex items-center gap-2 p-2 px-3 bg-bgColor2 text-sm rounded-full text-gray-500 cursor-pointer hover:bg-gray-200"
          onClick={newChat}
        >
          <img className="w-5" src={assets.plus_icon} alt="New Chat" />
          {extended && <p>New Chat</p>}
        </div>

        {/* Recent Prompts */}
        {extended && (
          <div className="mt-8 animate-fadeIn">
            <p className="mb-4 text-gray-600">Recent</p>
            {prevPrompts.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 p-2 pr-8 rounded-full cursor-pointer text-gray-800 hover:bg-gray-200"
                onClick={() => loadPrompt(item)}
              >
                <img className="w-5" src={assets.message_icon} alt="Message" />
                <p className="truncate" title={item}>{item.slice(0, 18)} ...</p>

              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col gap-2">
        {/* Help */}
        <div className="flex items-center gap-2 p-2 pr-8 rounded-full cursor-pointer text-gray-800 hover:bg-gray-200">
          <img className="w-5" src={assets.question_icon} alt="Help" />
          {extended && <p>Help</p>}
        </div>

        {/* Activities */}
        <div className="flex items-center gap-2 p-2 pr-8 rounded-full cursor-pointer text-gray-800 hover:bg-gray-200">
          <img className="w-5" src={assets.history_icon} alt="Activities" />
          {extended && <p>Activities</p>}
        </div>

        {/* Settings */}
        <div className="flex items-center gap-2 p-2 pr-8 rounded-full cursor-pointer text-gray-800 hover:bg-gray-200">
          <img className="w-5" src={assets.setting_icon} alt="Settings" />
          {extended && <p>Settings</p>}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;