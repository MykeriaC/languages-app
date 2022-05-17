class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      console.log(message);
      const lowercase = message.toLowerCase();

      if (lowercase.includes("okay")) {
          this.actionProvider.greet();
      }
    }
  }

  export default MessageParser;