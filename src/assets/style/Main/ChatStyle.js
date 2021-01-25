import styled from "styled-components";

export const ChatContainer = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 3px solid #fec5b4;
  height: 8%;
  width: 100%;
`;

export const Name = styled.span`
  font-weight: bold;
`;

export const MessageContainer = styled.div`
  height: 85%;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-top: 3px solid #fec5b4;
  height: 10%;
`;

export const ChatInput = styled.input.attrs({
  type: "text",
  placeholder: "메시지를 입력해 주세요.",
})`
  outline: none;
  border: 1px solid #fec9b9;
  border-radius: 20px;
  width: 80%;
  height: 60%;
  margin-left: 20px;
  padding-left: 10px;
`;

export const img = styled.img`
  width: ${(props) => {
    if (props.record) return "2%";
    else return "3%";
  }};
  height: 45%;
  margin: 0 10px 0 20px;
  cursor: pointer;
`;

export const Message = styled.div`
  max-width: 50%;
  width: auto;
  height: 10%;
`;
