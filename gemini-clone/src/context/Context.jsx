import { createContext, useContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext()

const ContextProvider = (props) => {

    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompts, setPrevPrompts] = useState([])
    const [showResult, setShowResult] = useState(false)
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");

    const delayPara = (index, nextWord) => {
        setTimeout(function () {
            setResultData(prev => prev + nextWord)
        }, 75 * index)
    }

    const newChat = () => {
        setLoading(false)
        setShowResult(false)

    }

    const onSent = async (prompt) => {
        setResultData("");
        setLoading(true);
        setShowResult(true);
        let response;
        if (prompt !== undefined) {
            response = await run(prompt)
            setRecentPrompt(prompt)
        }
        else {
            setPrevPrompts(prev => [...prev, input])
            setRecentPrompt(input);
            response = await run(input)
        }

        // setPrevPrompts(prev=>[...prev,input])

        let responseArray = response.split("**");
        let newResponse = ""; // Initialize without undefined

        for (let i = 0; i < responseArray.length; i++) {
            if (i === 0 && responseArray[i].includes("##")) {
                // Handle `##` marker for the first word
                const firstHashIndex = responseArray[i].indexOf("##");
                const afterHashText = responseArray[i].substring(firstHashIndex + 2).trim();
                const firstSpaceIndex = afterHashText.indexOf(" ");
                const firstWord = afterHashText.substring(0, firstSpaceIndex);
                const restText = afterHashText.substring(firstSpaceIndex);

                newResponse += `<b>${firstWord}</b>${restText}`;
            }
            // Continue with existing logic for ** markers
            else if (i % 2 === 0) {
                newResponse += responseArray[i];
            } else {
                newResponse += "<b>" + responseArray[i] + "</b>";
            }
        }

        let newResponse2 = newResponse.split("*").join("</br>")

        let newResponseArray = newResponse2.split(" ");

        for (let i = 0; i < newResponseArray.length; i++) {
            const nextWord = newResponseArray[i];
            delayPara(i, nextWord + " ")
        }
        setLoading(false);
        setInput("");
    };


    //   onSent("what is react js")
    const contextValue = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
        setLoading,
        setResultData,
        setShowResult,
        newChat

    }
    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export const useGemini = () => {
    return useContext(Context)
}
export default ContextProvider
