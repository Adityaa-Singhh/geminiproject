import React from 'react';
import { assets } from '../../assets/assets';
import { useGemini } from '../../context/Context';
import './Main.css';

function Main() {
  const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useGemini();

  return (
    <div className='flex flex-col flex-1 min-h-screen relative'>
      {/* Header */}
      <div className="w-full flex items-center justify-between p-5 text-header">
        <p>Gemini</p>
        <img className="w-10 rounded-full" src={assets.user_icon} alt="User Icon" />
      </div>

      {/* Main Content */}
      <div className="max-w-[900px] w-full mx-auto flex-1">
        {!showResult ? (
          <>
            {/* Greeting Section */}
            <div className="mx-0 my-10 p-5 text-custom">
              <p>
                <span className='bg-custom-gradient bg-clip-text text-transparent'>
                  Hello, Aditya.
                </span>
              </p>
              <p>How can I help you today?</p>
            </div>

            {/* Grid of Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 p-5">
              {[
                { text: 'How to master programming', icon: assets.compass_icon },
                { text: 'Briefly summarize this concept: urban planning', icon: assets.bulb_icon },
                { text: 'Brainstorm team bonding activities for our work retreat', icon: assets.message_icon },
                { text: 'Suggest beautiful places to see on an upcoming road trip', icon: assets.code_icon },
              ].map((item, index) => (
                <div
                  key={index}
                  className='h-[200px] p-7 bg-whiteBg relative rounded-[10px] cursor-pointer hover:bg-[#dfe4ea]'
                >
                  <p className='text-card'>{item.text}</p>
                  <img
                    className='w-[45px] p-3 absolute bg-white rounded-[20px] bottom-[10px] right-[10px]'
                    src={item.icon}
                    alt=""
                  />
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className='py-0 px-5 max-h-[70vh] overflow-y-scroll no-scrollbar'>
            {/* Recent Prompt */}
            <div className='my-10 flex items-center gap-5'>
              <img className='w-10 rounded-[50%]' src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>

            {/* Result Data */}
            <div className="result-data">
              <img src={assets.gemini_icon} alt="Gemini" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Input Section */}
      <div className="w-full max-w-[900px] p-5 bottom-0 left-0 right-0 mx-auto">
        <div className='flex items-center justify-between gap-5 bg-whiteBg py-2.5 px-5 rounded-[50px] shadow-md'>
          <input
            className='flex-1 bg-transparent border-none outline-none text-input'
            type="text"
            placeholder='Enter a prompt here'
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <div className="flex items-center gap-[15px]">
            <img className='w-6 cursor-pointer' src={assets.gallery_icon} alt="Gallery" />
            <img className='w-6 cursor-pointer' src={assets.mic_icon} alt="Mic" />
            {input && (
              <img
                className='w-6 cursor-pointer'
                src={assets.send_icon}
                alt="Send"
                onClick={() => onSent()}
              />
            )}
          </div>
        </div>
        <p className='text-footer my-4 mx-auto text-center font-light'>
          Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps.
        </p>
      </div>
    </div>
  );
}

export default Main;