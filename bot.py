from chatterbot import ChatBot
import sys
chatbot = ChatBot(
    'Ron Obvious', trainer='chatterbot.trainers.ChatterBotCorpusTrainer'
)
# Get a response to an input statement
text =sys.stdin.readline()
print str(chatbot.get_response(text))



