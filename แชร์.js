const sendMessageFlex = async () => {
  const messages = []

  data.content.map(item => {
    messages.push({
      type: "bubble",
      size: data.settings.size,
      hero: {
        type: "image",
        size: "full",
        aspectRatio: "1:1",
        aspectMode: "cover",
        url: item.image,
        action: {
          type: "uri",
          label: "action",
          uri: data.link.image,
        },
      },
      body: {
        type: "box",
        layout: "vertical",
        spacing: "sm",
        contents: [
          {
            type: "text",
            text: item.title,
            wrap: true,
            weight: "bold",
            size: "xl",
            align: "center",
            color: data.settings.color.title,
          },
          {
            type: "text",
            text: item.message,
            margin: "xxl",
            align: "center",
            color: data.settings.color.message,
            wrap: true,
          },
        ],
      },
      footer: {
        type: "box",
        layout: "horizontal",
        spacing: "md",
        contents: [
          {
            type: "button",
            style: "primary",
            action: {
              type: "uri",
              label: "สมัครสมาชิก",
              uri: data.link.register,
            },
            color: data.settings.color.button,
          },
          {
            type: "button",
            action: {
              type: "uri",
              label: "แชร์เลย",
              uri: data.link.shared,
            },
            style: "primary",
            color: data.settings.color.button,
          },
        ],
      },
      styles: {
        body: {
          backgroundColor: data.settings.color.background,
        },
        footer: {
          backgroundColor: data.settings.color.background,
        },
      },
    });
  })

  const result = await liff.shareTargetPicker([
    {
      type: "flex",
      altText: data.text,
      bgcolor: data.settings.color.background,
      contents: {
        type: "carousel",
        contents: messages,
      },
    },
  ]);

  if (result) {
    liff.closeWindow(); //แชร์สำเร็จทำงานการปิด LIFF
  } else {
    const [majorVer, minorVer, patchVer] = (liff.getLineVersion() || "").split(
      "."
    );

    if (minorVer === undefined) {
      // alert("ShareTargetPicker was canceled in external browser");
      return;
    }

    if (
      parseInt(majorVer) >= 10 &&
      parseInt(minorVer) >= 10 &&
      parseInt(patchVer) > 0
    ) {
      alert("ShareTargetPicker was canceled in LINE app");
    }
  }
};