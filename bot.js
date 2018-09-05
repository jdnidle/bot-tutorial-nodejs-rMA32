var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\/cool guy/; botRegexSalt = /^\/salty/; botRegexRules = /^\/rules/
      botRegexTrades = /^\/trades/; botRegexSCH = /^\/sch/i; botODB = /(.*\s+)(.*odb)(\s+.*)/i; botDuck = /^\/duck/;
      botRegexP = /^\/pdl/i; botRegexTw = /^\/twitch/i; botRegexSh = /^\/shrug/; botRegexAFL37 = /^\/afl37/; 
      botRegexSiege = /^\/siege/; botRegexCoaches = /^\/coaches/; botRegexYou = /^\/youtube/i;
      botRegexBurn = /^\/burn/; botRegexWamb = /^\/wambulance/; botRegexYoutest = /^\/youtubetest/i;
      botRegexMad = /^\/madbro/; botRegexPats = /^\/patslose/;
      botRegexCheesy = /^\/austin/; botRegexWooo = /^\/wooo/;
      botRegexDaf = /^\/dafuq/; botRegexFOS = /^\/factoryofsadness/;
      siege1 = 'https://i.groupme.com/350x419.png.adc8c73a6c1547e0a9e04320296329f8'; siege2 = 'https://i.groupme.com/1279x752.jpeg.aa5d0401e0df495bba4b4e09dc5a6bd7'
      siege3 = 'https://i.groupme.com/960x960.png.006e180e05d841c6a2962e844bf1e6fd';
  var teamAb = ["NE","NO","ARI","PHI","CLE","TEN","OAK","DAL","IND","SEA","CIN","PIT","JAC"
                ,"BAL","SD","DEN","MIN","ATL","KC","NYG","GB","DET","HOU","STL","CHI","CAR",
                "MIA","BUF","SF","WAS","NYJ","TB"]
  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage(cool());
    this.res.end();
  }
  else if(request.text && botRegexBurn.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://media.giphy.com/media/pQmWjYrz39YAg/giphy.gif");
    this.res.end();
    
  }
  else if(request.text && botRegexFOS.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/watch?v=tRBDMMVctu8");
    this.res.end();
  }
  else if(request.text && botRegexWamb.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.kym-cdn.com/entries/icons/mobile/000/000/894/wahmbulance.jpg");
    this.res.end();
  }
  else if(request.text && botRegexMad.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://media.giphy.com/media/xTcnSOEKegBnYhGahW/giphy.gif");
    this.res.end();
  }
  else if(request.text && botRegexDaf.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i3.kym-cdn.com/photos/images/facebook/000/787/356/d6f.jpg");
    this.res.end();
  }
  else if(request.text && botRegexPats.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://cdn.totalfratmove.com/wp-content/uploads/2016/01/60c44b445e4764e2ff9139c438639d8a.jpg");
    this.res.end();
  }
  else if(request.text && botRegexCheesy.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://media.giphy.com/media/oGBw7OaVBei1W/giphy.gif");
    this.res.end();
  }
  else if(request.text && botRegexWooo.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://media.giphy.com/media/FXo3Din7pWybK/giphy.gif");
    this.res.end();
  }  
  else if(request.text && botRegexCoaches.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://daddyleagues.com/AFL37/coaches");
    this.res.end();
  }
  else if(request.text && botRegexSalt.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.kym-cdn.com/photos/images/newsfeed/000/922/014/7e4.jpg");
    this.res.end();
  }
  else if(request.text && botRegexRules.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.daddyleagues.com/AFL37/rules");
    this.res.end();
  }
  else if(request.text && botRegexTrades.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.daddyleagues.com/AFL37/forum");
    this.res.end();
  }
  else if(request.text && botRegexSCH.test(request.text)) {
    this.res.writeHead(200);
    
    postMessage("http://daddyleagues.com/AFL37/team/"+request.text.substring(5,8)+"/schedule");
    this.res.end();
  }
  else if(request.text && botRegexP.test(request.text)) {
    this.res.writeHead(200);
    var req = request.text.substring(5,request.text.length);
    var rep = req.replace(/ /,"+");
    postMessage("http://daddyleagues.com/AFL37/players?name="+rep+"&position=all&team=all");
    
    this.res.end();
  }
  else if(request.text && botRegexTw.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.twitch.tv/"+request.text.substring(8,request.text.length));
    this.res.end();
  }
  else if(request.text && botRegexYou.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/user/"+request.text.substring(8,request.text.length));
    this.res.end();
    }
  else if(request.text && botRegexYoutest.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/user/"request.text.substring(8,request.text.length));
    this.res.end();
  }
  else if(request.text && botRegexSh.test(request.text)) {
    this.res.writeHead(200);
    postMessage("¯\\_(ツ)_/¯");
    this.res.end();
  }
  else if(request.text && botRegexAFL37.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/spreadsheets/d/1eZEMY4qLq_JUPgnuE9YtKMD3hVHwl7EqjxByYDLBf6I/edit?usp=sharing");
    this.res.end();
  }
  else if(request.text && botODB.test(request.text)) {
    this.res.writeHead(200);
    postMessage("OBJ*");
    this.res.end();
  }
  else if(request.text && botDuck.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.gifer.com/uTE.gif");
    this.res.end();
  }
  else if(request.text && botRegexCC.test(request.text)) {
    this.res.writeHead(200);
    postMessage("(☞ﾟヮﾟ)☞");
    this.res.end();
  }
  else if(request.text && botRegexSiege.test(request.text)) {
    this.res.writeHead(200);
    if(0.6 >= Math.random() > 0.3)
      postMessage(siege1);
    else if(Math.random() >0.6)
      postMessage(siege3)
    else
      postMessage(siege2);
    this.res.end();
  }
  else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}

function postMessage(response) {
  var botResponse,options, body, botReq;

  botResponse = response

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message ' + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message ' + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


exports.respond = respond;
