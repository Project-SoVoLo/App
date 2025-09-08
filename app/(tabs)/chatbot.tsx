import React, { useRef, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, FlatList } from "react-native";

export default function ChatScreen() {
  const [messages, setMessages] = useState([
    { id: '1', text: '안녕하세요! 무엇을 도와드릴까요?', from: 'bot' },
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { id: String(Date.now()), text: input, from: "user" };
    setMessages((prev) => [userMsg, ...prev]);

    setInput("");

    //백이랑 연결되어있지 않아서 챗봇이 사용자 입력값을 반복하도록 구성해뒀음 -> 수정필요
    setTimeout(() => {
      const botMsg = { id: String(Date.now() + 1), text: input, from: "bot" };
      setMessages((prev) => [botMsg, ...prev]);
    }, 600);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#fff" }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={80}
    >
      <FlatList
        data={messages}
        style={styles.messagesArea}
        keyExtractor={item => item.id}
        inverted
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-end' }}
        renderItem={({ item }) => (
          <View style={[
            styles.messageBubble,
            item.from === "user" ? styles.userBubble : styles.botBubble
          ]}>
            <Text style={item.from === "user" ? styles.userText : styles.botText}>{item.text}</Text>
          </View>
        )}
      />

      <View style={styles.inputBar}>
        <TouchableOpacity style={styles.voiceBtn}>
          <Text>음성</Text>
        </TouchableOpacity>
        <TextInput
          ref={inputRef}
          style={styles.input}
          placeholder="대화를 입력하세요"
          value={input}
          onChangeText={setInput}
          onSubmitEditing={handleSend}
          returnKeyType="send"
        />
        <TouchableOpacity style={styles.sendBtn} onPress={handleSend}>
          <Text>전송</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  messagesArea: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 16,
  },
  messageBubble: {
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    maxWidth: '75%',
  },
  userBubble: {
    backgroundColor: "#dbeafe",
    alignSelf: "flex-end",
  },
  botBubble: {
    backgroundColor: "#ededed",
    alignSelf: "flex-start",
  },
  userText: {
    color: "#2563eb",
  },
  botText: {
    color: "#222",
  },
  inputBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderTopWidth: 1,
    borderColor: "#eee",
    backgroundColor: "#f8f8f8"
  },
  voiceBtn: {
    backgroundColor: "#ccc",
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginRight: 8,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#bbb",
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: "#fff",
    marginRight: 8,
  },
  sendBtn: {
    backgroundColor: "#ccc",
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
});
