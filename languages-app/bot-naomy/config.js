import { createChatBotMessage } from 'react-chatbot-kit';

const config = {
    botName: "LearningBot",
    initialMessages: [createChatBotMessage("{greeting} Translate the following sentences into {language}"
    )],
};

export default config;