import React from "react";
import moment from "moment";

const ChatBubleItem = ({ data, isSender }) => {
    const chatBubleStyle = {
        
        backgroundColor: isSender ? "#a198a7" : "blueviolet",
        alignSelf: isSender ? "flex-end" : "flex-start",
        display:"inline-block"
    };

    return (
        <div style={{textAlign: isSender ? "right" : "left",}}>
        <div className="chat text-white rounded my-2 p-2" style={chatBubleStyle}>
            <span className={isSender ? "me-3" : "mr-3"}>
                {data.message}
            </span>
            <span className="chat-date" style={{ fontSize: "11px" }}>
                {moment(data.date).format("HH:mm")}
            </span>
        </div>
        </div>
    );
};

const ChatBody = ({ data }) => {
    const sortedData = data.sort((a, b) => new Date(a.date) - new Date(b.date));
    let nowDisplayed = false;
    let lastDateDisplayed = null;

    return (
        <div className="chat-items p-3">
            {sortedData.map((v, index) => {
                const displayDate = !lastDateDisplayed || moment(v.date).format("YYYY-MM-DD") !== lastDateDisplayed;
                lastDateDisplayed = moment(v.date).format("YYYY-MM-DD");

                let showNow = false;
                if (!nowDisplayed && moment(v.date).isSame(new Date(), 'day')) {
                    nowDisplayed = true;
                    showNow = true;
                }

                return (
                    <div className="chat-item" key={index}>
                        {displayDate && (
                            <div className="chat-date-container" style={{ width: "150px", margin: "auto", textAlign: "center", backgroundColor: "#FFFFFF", borderRadius: "10px", padding: "5px" }}>
                                <span className="chat-date" style={{ fontSize: "13px", color: "grey", fontStyle: "italic", fontFamily: "Open Sans" }}>
                                    {showNow ? "Today" : moment(v.date).format("DD - MMMM - YYYY")}
                                </span>
                            </div>
                        )}
                        <ChatBubleItem data={v} isSender={index % 2 === 0} />
                    </div>
                );
            })}
        </div>
    );
};

export default ChatBody;