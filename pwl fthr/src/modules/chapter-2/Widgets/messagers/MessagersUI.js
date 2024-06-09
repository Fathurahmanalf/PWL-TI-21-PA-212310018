import React, { useEffect, useRef, useState } from "react";
import { ButtonPrimary, ButtonSecondary } from "./Component/ButtonUI";
import ChatBody from "./Component/ChatBody";
import moment from "moment";

export default function MessegersUI({ profile, selectedChat, selectedUser }) {
  const [myChat, setMyChat] = useState([]);
  const endOfMessagesRef = useRef(null);
  const myprofile = { id: "0419029203", name: "Febry" };
  const [selectedUser, setSelectedUser] = useState(0);
  const [selectedChat, setSelectedChat] = useState([]);

  const ResultMessageData = useMemo(() => {
    let computedData = myChat.map((msg) => ({
      ...msg,
      date_fmt: moment(msg.date).format("YYYY-MM-DD"),
      isOutgoing: msg.from_id === profile.id,
    }));
    if (search) {
      computedData = computedData.filter((listData) => {
        return Object.keys(listData).some((key) =>
          listData[key].toString().toLowerCase().includes(search)
        );
      });
    }
    return computedData;
  }, [myChat, profile.id]);

  useEffect(() => {
    setMyChat(selectedChat);
    scrollToBottom();
  }, [selectedChat]);

  {
    ResultMessageData.length > 0 ? (
      <>
        <div className="chat-message px-2 h-100" style={StylesMessager.chatBox}>
          <ChatBodyWithGrouped data={ResultMessageData} profile={profile} />
          <div ref={endOfMessagesRef} />
        </div>
        <div className="chat-send bg-light p-3">
          <form
            method="post"
            autoComplete="off"
            onSubmit={(e) => HandlerSendChat(e)}
          ></form>
        </div>
      </>
    ) : (
      <EmptyChat />
    );
  }

  const EmptyChat = () => {
    return (
      <div>
        <div className="info text-center">
          <h1>No Conversations</h1>
          <p>You didn't made any conversation yet, please select username</p>
          <span className="badge badge-primary">Start a chat</span>
        </div>
      </div>
    );
  };

  const HandlerSelectedChat = (data) => {
    setSelectedUser(data);
    const the_msg = [...Messegers];
    const findChatByUserID = the_msg.find(
      (item) => item.user_id === data.user_id
    );
    if (findChatByUserID) {
      setSelectedChat(findChatByUserID.messages);
    } else {
      setSelectedChat([]);
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title align-items-start flex-column">
          <span className="fw-bold mb-2 text-gray-900">Chats</span>
        </h3>
        <div className="card-toolbar">
          <ButtonSecondary
            items={{
              title: "Create new chat",
              btn_class: "btn-icon btn-clear",
            }}
          >
            <i className="bi bi-pencil-square"></i>
          </ButtonSecondary>
        </div>
      </div>
      <div className="card-body p-0">
        <div
          className="chat-message px-2 bg-light-primary"
          style={StylesMessager.chatBox}
        >
          <ChatBody data={myChat} />
          <div ref={endOfMessagesRef} />
        </div>
        <div className="chat-send bg-light p-3">
          <form
            method="post"
            autoComplete="off"
            onSubmit={(e) => HandlerSendChat(e)}
          >
            <div
              className="d-flex 
                justify-content-between 
                align-items-center"
            >
              <input
                type="text"
                className="form-control me-2"
                autoFocus={true}
                value={writeChat}
                onChange={(e) => setWriteChat(e.target.value)}
              />
              <ButtonPrimary
                items={{
                  title: "Send",
                  btn_class: "btn-icon btn-success",
                  type: "submit",
                }}
              >
                <i className="bi bi-send"></i>
              </ButtonPrimary>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
