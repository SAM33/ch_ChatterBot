結合chatterbot專案(https://github.com/gunthercox/ChatterBot)<br/>
以及matheuss的google-translate-api專案(https://github.com/matheuss/google-translate-api)<br/>
的中文聊天機器人

Pre-requirement<br/>
1. nodejs & npm <br/>
2. python <br/>


Install:<br/>
```
mkdir temp
cd temp
git clone https://github.com/gunthercox/ChatterBot
cd ..
cp -r temp/ChatterBot/chatterbot .
git clone https://github.com/matheuss/google-translate-api
git clone https://github.com/extrabacon/python-shell
cd google-translate-api
npm install .
cd ..
python train_bot.py
```


Run:<br/>
node ch_bot.js   //Input some message
