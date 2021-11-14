const LIFF_ID = "1656510093-Lway0Kbw";

(async () => {
  await liff.init({ liffId: LIFF_ID }).catch((err) => {
    throw err;
  });
  if (!liff.isLoggedIn()) {
    liff.login();
  }
})();

// share to friends

// 

const data = {
    {
        "type": "carousel",
        "contents": [
          {
            "type": "bubble",
            "hero": {
              "type": "image",
              "url": "https://sv1.picz.in.th/images/2021/11/14/uFeQ9v.jpg",
              "margin": "xxl",
              "size": "full"
            },
            "body": {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "button",
                  "action": {
                    "type": "uri",
                    "label": "รับเครดิตฟรี",
                    "uri": "https://lin.ee/t4snQLs"
                  },
                  "style": "primary",
                  "margin": "none",
                  "height": "sm",
                  "color": "#FFFF33"
                },
                {
                  "type": "button",
                  "action": {
                    "type": "uri",
                    "label": "สอบถามเพิ่มเติม",
                    "uri": "https://lin.ee/t4snQLs"
                  },
                  "offsetTop": "none",
                  "height": "sm",
                  "style": "primary",
                  "color": "#FFFF33"
                }
              ],
              "spacing": "sm",
              "backgroundColor": "#CC3300"
            }
          },
          {
            "type": "bubble",
            "hero": {
              "type": "image",
              "url": "https://www.img.in.th/images/ffa695f482513a49e10af69f55493102.jpg",
              "margin": "xxl",
              "size": "full"
            },
            "body": {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "button",
                  "action": {
                    "type": "uri",
                    "label": "สมัครสมาชิก",
                    "uri": "https://bkkstarbet.uwallet.link/register"
                  },
                  "offsetTop": "none",
                  "margin": "none",
                  "height": "sm",
                  "color": "#FFFF33",
                  "gravity": "top",
                  "style": "primary",
                  "offsetBottom": "none",
                  "offsetStart": "none",
                  "offsetEnd": "none"
                },
                {
                  "type": "button",
                  "action": {
                    "type": "uri",
                    "label": "สอบถามเพิ่มเติม",
                    "uri": "https://lin.ee/t4snQLs"
                  },
                  "style": "primary",
                  "height": "sm",
                  "offsetEnd": "none",
                  "offsetBottom": "none",
                  "color": "#FFFF33"
                }
              ],
              "spacing": "sm",
              "backgroundColor": "#CC3300"
            }
          }
        ]
      }