// ===== GAME CONTENT DATA =====
const gameContent = {
  onboarding: [
    {
      title: "Welcome to Shaping History",
      content: "This game teaches you how ancient authors shaped their historical narratives.\n\nYou will experience this by becoming the authors yourself.",
      buttonText: "Continue"
    },
    {
      title: "What You'll Do",
      content: "You will become two ancient Christian authors:\n\n• Eusebius (writing about persecution, 303-313 CE)\n• Augustine (writing about his conversion, 397 CE)\n\nFor each author, you will make editorial choices about how to tell their stories.",
      buttonText: "Continue"
    },
    {
      title: "No Right or Wrong Answers",
      content: "Every choice teaches you something about how authors shape history.\n\nThere are no \"correct\" answers. We want to see your thinking.\n\nAfter making choices, you'll reflect on WHY you chose what you did.",
      buttonText: "Continue"
    },
    {
      title: "What to Expect",
      content: "• Time: 12-18 minutes\n• Two chapters with choices\n• Reflection questions after each chapter\n• A creative writing exercise at the end\n• Download your work when finished\n\nYour progress is saved automatically.",
      buttonText: "Start Game"
    }
  ],

  welcome: {
    title: "Shaping History",
    subtitle: "Ancient Authors and Their Agendas",
    intro: "In this game, you will be two ancient authors. You will edit their texts.\n\nThere are no wrong answers. We want to see your thinking.",
    buttonText: "Start Game"
  },

  eusebius: {
    intro: {
      title: "Chapter 1: Eusebius's Revisions",
      text: [
        "You are Eusebius of Caesarea.",
        "The year is 303 CE.",
        "",
        "The Roman emperor Diocletian is persecuting Christians.",
        "Soldiers are destroying churches and burning holy books.",
        "Some Christians are being killed.",
        "",
        "You are writing about what you see.",
        "You want people to remember what happened."
      ]
    },

    sourceText: {
      heading: "This is what happened during the persecution:",
      text: [
        "Church buildings were destroyed.",
        "Holy books were burned in public squares.",
        "",
        "Some church leaders showed courage and were killed.",
        "",
        "Other leaders hid from the soldiers.",
        "",
        "Some were captured and gave information to the Romans.",
        "",
        "Many ordinary Christians also faced difficult choices."
      ],
      footer: "Now you must write about these events.\nYou must decide what to include and how to describe it."
    },

    decisions303: [
      {
        id: "bishopsHiding",
        title: "303 CE - Your First Choice",
        context: "A bishop in your city hid from soldiers.\nHe did not want to be captured and killed.",
        question: "How do you describe what the bishop did?",
        choices: [
          {
            id: "shamefully",
            main: "He hid shamefully",
            explanation: "This makes the bishop look bad. It says he was a coward."
          },
          {
            id: "survive",
            main: "He hid to survive",
            explanation: "This is neutral. It explains his reason without judging."
          },
          {
            id: "omit",
            main: "[Don't mention it]",
            explanation: "This leaves it out of your account completely."
          }
        ]
      },
      {
        id: "emphasis",
        title: "303 CE - Your Second Choice",
        context: "You saw many things during the persecution.\nYou cannot write about everything.\nYou must choose what to emphasize.",
        question: "What part of the persecution do you want readers to remember most?",
        choices: [
          {
            id: "violence",
            main: "The violence and destruction",
            explanation: "Focus on suffering. Describe broken churches and burned books."
          },
          {
            id: "courage",
            main: "The courage of martyrs",
            explanation: "Focus on heroes. Describe Christians who stayed brave."
          },
          {
            id: "both",
            main: "Both equally",
            explanation: "Give balanced attention to suffering and courage."
          }
        ]
      },
      {
        id: "collaboration",
        title: "303 CE - Your Third Choice",
        context: "Some priests gave holy books to Roman soldiers.\nThey did this to save their own lives.\nThis was seen as betrayal by many Christians.",
        question: "What do you write about the priests who gave books to Romans?",
        choices: [
          {
            id: "specific",
            main: "Give specific details about who did this",
            explanation: "Name the priests. Tell exactly what they did. This shames them but creates a complete record."
          },
          {
            id: "brief",
            main: "Mention it briefly without details",
            explanation: "Say that some did this, but don't name them. This acknowledges the truth but protects people."
          },
          {
            id: "omit",
            main: "Don't include this information",
            explanation: "Leave it out completely. Only write about positive actions."
          }
        ]
      }
    ],

    timeJump: {
      marker: "Time passes...\n\nTen years go by.",
      text: [
        "Now it is 313 CE.",
        "",
        "The persecution is over.",
        "Diocletian is no longer emperor.",
        "",
        "The new emperor is Constantine.",
        "Constantine supports Christians.",
        "He is building new churches.",
        "",
        "You are now a respected bishop.",
        "You are revising your account of the persecution.",
        "",
        "You have new reasons to tell this story in a new way."
      ]
    },

    decisions313: [
      {
        id: "reframing",
        title: "313 CE - Revising Your Account",
        context: "Constantine has won. Christians are now safe and respected.\nThe persecution is in the past.",
        question: "Looking back, what did the persecution mean?",
        choices: [
          {
            id: "evil",
            main: "It was evil that tried to destroy Christianity",
            explanation: "Keep your original view. It was a terrible tragedy."
          },
          {
            id: "test",
            main: "It was a test from God that made Christianity stronger",
            explanation: "Reframe it as meaningful. God was testing and purifying the church."
          },
          {
            id: "preparation",
            main: "It was preparation for Constantine's victory",
            explanation: "Reframe it as part of God's plan. The suffering led to this good outcome."
          }
        ]
      },
      {
        id: "reviseBishops",
        title: "313 CE - A Sensitive Matter",
        context: "Remember the bishop who hid during the persecution?\nHe is still alive. He is now your colleague.\nYou work with him.",
        question: "You described him before. What do you do now?",
        choices: [
          {
            id: "keep",
            main: "Keep your description unchanged",
            explanation: "If you said \"shamefully,\" keep saying \"shamefully.\" If you omitted it, keep omitting it. Don't change based on your new situation."
          },
          {
            id: "soften",
            main: "Soften the language to be more understanding",
            explanation: "If you criticized him, make it gentler now. \"He was afraid\" instead of \"he hid shamefully.\""
          },
          {
            id: "remove",
            main: "Remove this section entirely",
            explanation: "Take it out. It's embarrassing for him and for you."
          }
        ]
      }
    ],

    reflection: {
      title: "Reflection: Think About Your Choices",
      intro: "Look at your two versions of the same events.",
      question: "Why did your text change between 303 CE and 313 CE?\nWhat was different about your situation?",
      example: "Example: \"In 303 I was afraid and wanted sympathy. In 313 I was safe and wanted to show God's plan.\""
    }
  },

  augustine: {
    intro: {
      title: "Chapter 2: Augustine's Garden",
      text: [
        "You are Augustine of Hippo.",
        "The year is 397 CE.",
        "",
        "You are writing a book called \"Confessions.\"",
        "You are describing your conversion to Christianity.",
        "",
        "The conversion happened in 386 CE in a garden in Milan.",
        "That was eleven years ago.",
        "",
        "You are now a bishop.",
        "You want to teach others about how God's grace works."
      ]
    },

    memories: {
      heading: "What You Remember",
      intro: "You remember your conversion in the garden:",
      items: [
        "You were crying under a fig tree",
        "You heard a voice - maybe a child singing",
        "The voice said \"Take and read\" (tolle lege)",
        "You picked up Paul's letters and read a passage",
        "You felt sudden certainty and peace",
        "Your friend Alypius was there",
        "You told your mother Monica"
      ],
      footer: "Now you must write this story.\nIt happened eleven years ago.\nHow you tell it shapes what it means."
    },

    decisions: [
      {
        id: "voice",
        title: "Writing Your Story - Choice 1",
        context: "You heard someone say \"Take and read\" (tolle lege).\nYou don't know exactly where the voice came from.\nIt might have been a child playing nearby.",
        question: "How do you describe this voice in your book?",
        choices: [
          {
            id: "divine",
            main: "I heard God speaking through a child",
            explanation: "Make it clearly supernatural. God sent a message."
          },
          {
            id: "mysterious",
            main: "I heard a voice - I don't know where it came from",
            explanation: "Keep it mysterious. Let readers wonder."
          },
          {
            id: "natural",
            main: "I heard a child playing nearby",
            explanation: "Make it natural. It was just a child, not a miracle."
          }
        ]
      },
      {
        id: "tears",
        title: "Writing Your Story - Choice 2",
        context: "You were crying in the garden.\nYou were very upset about your life.",
        question: "What do you emphasize about those tears?",
        choices: [
          {
            id: "emotional",
            main: "My emotional pain and suffering",
            explanation: "Focus on your feelings. You were sad and confused. This is about human psychology."
          },
          {
            id: "spiritual",
            main: "My spiritual struggle with God's call",
            explanation: "Focus on your relationship with God. You wanted to obey but couldn't. This is about theology."
          },
          {
            id: "both",
            main: "Both emotions and spiritual meaning",
            explanation: "Show both your human feelings and the religious meaning together."
          }
        ]
      },
      {
        id: "perfectText",
        title: "Writing Your Story - Choice 3",
        context: "After hearing the voice, you opened Paul's letters at random.\nYour eyes landed on Romans 13:13-14.\nThe passage was PERFECT for your situation.\nIt spoke directly about the exact struggle you were facing.",
        question: "How do you present this coincidence?",
        choices: [
          {
            id: "divine",
            main: "God guided me to exactly the right passage",
            explanation: "Make it clear this was God's plan, not chance."
          },
          {
            id: "acknowledge",
            main: "The passage seemed almost too perfect to be chance",
            explanation: "Acknowledge how unlikely this was. Let readers decide."
          },
          {
            id: "fact",
            main: "I read a passage from Romans 13",
            explanation: "Just state the fact. Don't comment on the coincidence."
          }
        ]
      },
      {
        id: "community",
        title: "Writing Your Story - Choice 4",
        context: "Your friend Alypius was sitting nearby in the garden.\nAfter you converted, you told him what happened.\nHe read the next verse and converted too.\nYour mother Monica had been praying for you for years.",
        question: "Do you focus on your private experience or show the community impact?",
        choices: [
          {
            id: "private",
            main: "Focus on my private, personal experience alone",
            explanation: "Make this about your individual relationship with God. Keep it interior and psychological."
          },
          {
            id: "social",
            main: "Show how my conversion affected Alypius and my mother",
            explanation: "Make this about community. Show how one conversion spreads to others."
          },
          {
            id: "both",
            main: "Both my experience and how it spread to others",
            explanation: "Balance private experience with social impact."
          }
        ]
      }
    ],

    reflection: {
      title: "Reflection: Think About Your Choices",
      intro: "You wrote about events from 11 years ago.\nYou are now a bishop teaching others.",
      question: "How might time and your new role have shaped this story?\nWhat might you have remembered differently if you wrote it immediately in 386 CE?",
      example: "Example: \"As a bishop, I emphasized God's power more. Right after it happened, I might have focused more on my confusion.\""
    }
  },

  conclusion: {
    title: "What You Learned",
    intro: "Both Eusebius and Augustine were shaping their stories.",
    points: [
      "Their situation (persecuted witness vs. powerful bishop)",
      "Their goals (survival, teaching, justifying power)",
      "Their audience (who will read this?)",
      "Time passing (events look different years later)"
    ],
    message: [
      "This doesn't mean they lied.",
      "They chose what to emphasize, what to omit, and how to frame events.",
      "",
      "All historians do this.",
      "All writers do this.",
      "Even you did this just now."
    ],
    finalQuestion: {
      heading: "Final Question",
      intro: "Think about your own life.",
      question: "When you tell a story from your past, what choices do you make?",
      bullets: ["What do you emphasize?", "What do you leave out?", "Why?"],
      footer: "This is what ancient authors did too.\nUnderstanding their choices helps us read their texts more carefully."
    }
  },

  creativeWriting: {
    inspiration: {
      title: "Your Turn to Shape History",
      text: "You've stepped into the minds of ancient authors. You've seen how they chose words, framed events, and shaped meaning.",
      quote: "Every story we tell reveals as much about us as it does about the events themselves."
    },
    title: "Now You Write",
    intro: "You have seen how Eusebius and Augustine shaped their stories.\nNow it's your turn to write.",
    prompt: "Write a short passage (3-5 sentences) about an event from history or your own life.\nThink about:\n• What details do you include?\n• What do you leave out?\n• How do you frame the story?\n• What do you want readers to think or feel?",
    tips: [
      "Choose a moment that matters to you",
      "Think about your purpose in telling it",
      "Consider what perspective you're writing from",
      "Decide what details support your message"
    ],
    example: "Example: \"When I moved to a new city, everything was difficult at first. But this challenge helped me grow stronger. Looking back now, I see it was the best decision I ever made.\"\n\n(Notice: This version emphasizes growth and positive outcome. A different version might focus on loneliness or struggle.)",
    followUp: "After writing, explain: What did you choose to emphasize? What did you leave out?"
  }
};

// ===== STATE MANAGEMENT =====
class GameState {
  constructor() {
    this.state = this.loadState() || this.getInitialState();
  }

  getInitialState() {
    return {
      version: "1.0",
      onboardingCompleted: false,
      onboardingStep: 0,
      currentChapter: "welcome",
      currentScreen: 0,
      started: new Date().toISOString(),
      lastPlayed: new Date().toISOString(),
      completed: false,
      eusebius: {
        choices303: {},
        choices313: {},
        reflection: "",
        completed: false
      },
      augustine: {
        choices: {},
        reflection: "",
        completed: false
      },
      finalReflection: "",
      creativeWriting: {
        passage: "",
        explanation: ""
      }
    };
  }

  loadState() {
    try {
      const saved = localStorage.getItem('shapingHistoryGame');
      return saved ? JSON.parse(saved) : null;
    } catch (e) {
      console.error('Error loading state:', e);
      return null;
    }
  }

  saveState() {
    try {
      this.state.lastPlayed = new Date().toISOString();
      localStorage.setItem('shapingHistoryGame', JSON.stringify(this.state));
    } catch (e) {
      console.error('Error saving state:', e);
    }
  }

  recordChoice(chapter, period, decisionId, choiceId) {
    if (chapter === 'eusebius') {
      if (period === '303') {
        this.state.eusebius.choices303[decisionId] = choiceId;
      } else if (period === '313') {
        this.state.eusebius.choices313[decisionId] = choiceId;
      }
    } else if (chapter === 'augustine') {
      this.state.augustine.choices[decisionId] = choiceId;
    }
    this.saveState();
  }

  recordReflection(chapter, text) {
    if (chapter === 'eusebius') {
      this.state.eusebius.reflection = text;
    } else if (chapter === 'augustine') {
      this.state.augustine.reflection = text;
    } else if (chapter === 'final') {
      this.state.finalReflection = text;
    }
    this.saveState();
  }

  recordCreativeWriting(passage, explanation) {
    this.state.creativeWriting.passage = passage;
    this.state.creativeWriting.explanation = explanation;
    this.saveState();
  }

  exportAllWork() {
    const state = this.state;
    const exportData = {
      timestamp: new Date().toISOString(),
      eusebius: {
        choices303: state.eusebius.choices303,
        choices313: state.eusebius.choices313,
        text303: TextGenerator.buildEusebius303Text(state.eusebius.choices303),
        text313: TextGenerator.buildEusebius313Text(state.eusebius.choices303, state.eusebius.choices313),
        reflection: state.eusebius.reflection
      },
      augustine: {
        choices: state.augustine.choices,
        constructedText: TextGenerator.buildAugustineText(state.augustine.choices),
        reflection: state.augustine.reflection
      },
      finalReflection: state.finalReflection,
      creativeWriting: state.creativeWriting
    };
    return exportData;
  }

  downloadWork() {
    const data = this.exportAllWork();
    const text = this.formatWorkAsText(data);
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `shaping-history-work-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  formatWorkAsText(data) {
    let text = "SHAPING HISTORY: YOUR WORK\n";
    text += "=" .repeat(50) + "\n\n";
    text += `Date: ${new Date(data.timestamp).toLocaleString()}\n\n`;

    text += "CHAPTER 1: EUSEBIUS\n";
    text += "-".repeat(50) + "\n\n";
    text += "Your 303 CE Version:\n";
    text += data.eusebius.text303 + "\n\n";
    text += "Your 313 CE Version:\n";
    text += data.eusebius.text313 + "\n\n";
    text += "Your Reflection:\n";
    text += data.eusebius.reflection || "(No reflection written)" + "\n\n";

    text += "CHAPTER 2: AUGUSTINE\n";
    text += "-".repeat(50) + "\n\n";
    text += "Your Constructed Narrative:\n";
    text += data.augustine.constructedText + "\n\n";
    text += "Your Reflection:\n";
    text += data.augustine.reflection || "(No reflection written)" + "\n\n";

    text += "FINAL REFLECTION\n";
    text += "-".repeat(50) + "\n\n";
    text += data.finalReflection || "(No reflection written)" + "\n\n";

    text += "YOUR CREATIVE WRITING\n";
    text += "-".repeat(50) + "\n\n";
    text += "Your Passage:\n";
    text += data.creativeWriting.passage || "(No passage written)" + "\n\n";
    text += "Your Explanation:\n";
    text += data.creativeWriting.explanation || "(No explanation written)" + "\n\n";

    return text;
  }

  nextScreen() {
    this.state.currentScreen++;
    this.saveState();
  }

  nextOnboardingStep() {
    this.state.onboardingStep++;
    this.saveState();
  }

  completeOnboarding() {
    this.state.onboardingCompleted = true;
    this.saveState();
  }

  setChapter(chapter) {
    this.state.currentChapter = chapter;
    this.state.currentScreen = 0;
    this.saveState();
  }

  reset() {
    localStorage.removeItem('shapingHistoryGame');
    this.state = this.getInitialState();
    location.reload();
  }
}

// ===== TEXT GENERATION =====
class TextGenerator {
  static buildEusebius303Text(choices) {
    let text = "During the persecution, ";

    // Emphasis choice
    if (choices.emphasis === "violence") {
      text += "terrible violence destroyed our churches. Holy books were burned in public squares. ";
    } else if (choices.emphasis === "courage") {
      text += "brave martyrs showed the world true courage. They died for their faith without fear. ";
    } else if (choices.emphasis === "both") {
      text += "we saw both great suffering and great courage. Churches were destroyed, but martyrs remained strong. ";
    }

    // Bishops hiding
    if (choices.bishopsHiding === "shamefully") {
      text += "Some church leaders hid shamefully from the soldiers. ";
    } else if (choices.bishopsHiding === "survive") {
      text += "Some church leaders hid to survive and continue their work. ";
    }
    // If omit, don't add anything

    // Collaboration
    if (choices.collaboration === "specific") {
      text += "Several priests gave holy books to the Romans. Father Marcus and Presbyter John were among them. ";
    } else if (choices.collaboration === "brief") {
      text += "Some gave information to the authorities. ";
    }
    // If omit, don't add anything

    return text.trim();
  }

  static buildEusebius313Text(choices303, choices313) {
    let text = this.buildEusebius303Text(choices303);

    // Modify based on revision choices
    if (choices313.reviseBishops === "soften" && choices303.bishopsHiding === "shamefully") {
      text = text.replace("hid shamefully", "hid out of fear");
    } else if (choices313.reviseBishops === "remove") {
      text = text.replace(/Some church leaders hid.*?\. /, "");
    }

    // Add reframing
    if (choices313.reframing === "test") {
      text += "\n\nThis suffering was a test from God. It made our faith stronger.";
    } else if (choices313.reframing === "preparation") {
      text += "\n\nThese trials prepared the way for Constantine's victory. God was leading us to this moment.";
    }

    return text.trim();
  }

  static buildAugustineText(choices) {
    let text = "";

    // Tears
    if (choices.tears === "emotional") {
      text += "I threw myself under a fig tree and wept. I was overwhelmed with sadness and confusion. ";
    } else if (choices.tears === "spiritual") {
      text += "I threw myself under a fig tree in spiritual agony. I wanted to obey God but I could not. ";
    } else if (choices.tears === "both") {
      text += "I threw myself under a fig tree and wept. My emotional pain reflected my spiritual struggle. ";
    }

    // Voice
    if (choices.voice === "divine") {
      text += "Then I heard God speaking through a child's voice: 'Take and read!' ";
    } else if (choices.voice === "mysterious") {
      text += "Then I heard a voice - I do not know its source - saying 'Take and read!' ";
    } else if (choices.voice === "natural") {
      text += "Then I heard a child playing nearby, singing 'Take and read!' ";
    }

    // Perfect text
    text += "I opened Paul's letters. ";
    if (choices.perfectText === "divine") {
      text += "God guided my hand to Romans 13:13-14. The words spoke directly to my struggle. ";
    } else if (choices.perfectText === "acknowledge") {
      text += "My eyes fell on Romans 13:13-14 - the words seemed almost too perfect to be chance. ";
    } else if (choices.perfectText === "fact") {
      text += "I read Romans 13:13-14. ";
    }

    text += "At that moment, all doubt vanished. ";

    // Community
    if (choices.community === "private") {
      text += "I experienced certainty and peace.";
    } else if (choices.community === "social") {
      text += "I ran to tell Alypius. He read the next verse and believed too. My mother Monica rejoiced when we told her.";
    } else if (choices.community === "both") {
      text += "Peace filled my heart. I shared this joy with Alypius and my mother Monica.";
    }

    return text.trim();
  }

  static highlightDifferences(text1, text2) {
    // Simple approach: mark additions in text2
    const sentences2 = text2.split('. ');

    let highlighted2 = text2;

    // Find sentences only in text2
    sentences2.forEach(sentence => {
      if (!text1.includes(sentence) && sentence.length > 10) {
        highlighted2 = highlighted2.replace(sentence, `<span class="added">${sentence}</span>`);
      }
    });

    // Find removed/changed phrases
    if (text1.includes("shamefully") && !text2.includes("shamefully")) {
      if (text2.includes("out of fear")) {
        highlighted2 = highlighted2.replace("out of fear", '<span class="changed">out of fear</span>');
      }
    }

    return { text1, text2: highlighted2 };
  }
}

// ===== SCREEN RENDERER =====
class ScreenRenderer {
  constructor(gameState) {
    this.gameState = gameState;
    this.container = document.getElementById('game-container');
    this.progressContainer = document.getElementById('progress-container');
    this.progressText = document.getElementById('progress-text');
    this.progressFill = document.getElementById('progress-fill');
  }

  render() {
    const { onboardingCompleted, currentChapter, currentScreen } = this.gameState.state;

    this.container.innerHTML = '';
    this.container.className = 'game-container';

    // Show onboarding first if not completed
    if (!onboardingCompleted) {
      this.renderOnboarding();
      this.progressContainer.style.display = 'none';
      return;
    }

    switch (currentChapter) {
      case 'welcome':
        this.renderWelcome();
        this.progressContainer.style.display = 'none';
        break;
      case 'eusebius':
        this.renderEusebiusScreen(currentScreen);
        this.updateProgress('Chapter 1 of 2');
        break;
      case 'augustine':
        this.renderAugustineScreen(currentScreen);
        this.updateProgress('Chapter 2 of 2');
        break;
      case 'conclusion':
        this.renderConclusionScreens(currentScreen);
        this.progressContainer.style.display = 'none';
        break;
    }
  }

  updateProgress(text) {
    this.progressContainer.style.display = 'block';
    this.progressText.textContent = text;

    // Compute chapter completion percent for gentle progress bar fill
    const st = this.gameState.state;
    let total = 0;
    let idx = 0;
    if (st.currentChapter === 'eusebius') {
      // 0..10 inclusive = 11 screens
      total = 11; idx = Math.min(st.currentScreen + 1, total);
    } else if (st.currentChapter === 'augustine') {
      // 0..8 inclusive = 9 screens
      total = 9; idx = Math.min(st.currentScreen + 1, total);
    } else {
      total = 1; idx = 0;
    }
    const pct = Math.max(0, Math.min(100, Math.round((idx / total) * 100)));
    if (this.progressFill) {
      this.progressFill.style.width = pct + '%';
      this.progressFill.setAttribute('aria-valuenow', String(pct));
    }
  }

  renderOnboarding() {
    const currentStep = this.gameState.state.onboardingStep;
    const onboardingData = gameContent.onboarding;
    const step = onboardingData[currentStep];
    const isLastStep = currentStep === onboardingData.length - 1;

    const div = document.createElement('div');
    div.className = 'welcome-screen onboarding-screen';

    // Add step indicator
    const stepIndicator = `<div style="margin-bottom: 20px; font-size: 14px; color: #666; font-family: var(--font-sans);">Step ${currentStep + 1} of ${onboardingData.length}</div>`;

    div.innerHTML = `
      ${stepIndicator}
      <h1 class="title" style="font-size: 28px; padding: 12px 24px;">${step.title}</h1>
      <div class="intro-box" style="text-align: left; font-size: 16px; line-height: 1.8;">
        ${step.content.split('\n').map(p => `<p style="margin-bottom: 12px;">${p}</p>`).join('')}
      </div>
      <button class="start-button" id="onboarding-btn">${step.buttonText}</button>
      ${currentStep > 0 ? '<button class="btn-secondary" id="back-btn" style="margin-top: 12px;">← Back</button>' : ''}
      <div style="margin-top: 20px;">
        <a href="#" id="skip-onboarding" style="font-size: 14px; color: #666; text-decoration: underline;">Skip tutorial</a>
      </div>
    `;

    this.container.appendChild(div);

    document.getElementById('onboarding-btn').addEventListener('click', () => {
      if (isLastStep) {
        this.gameState.completeOnboarding();
        this.render();
      } else {
        this.gameState.nextOnboardingStep();
        this.render();
      }
    });

    // Back button
    const backBtn = document.getElementById('back-btn');
    if (backBtn) {
      backBtn.addEventListener('click', () => {
        this.gameState.state.onboardingStep--;
        this.gameState.saveState();
        this.render();
      });
    }

    // Skip link
    document.getElementById('skip-onboarding').addEventListener('click', (e) => {
      e.preventDefault();
      if (confirm('Are you sure you want to skip the tutorial? You can always replay it later.')) {
        this.gameState.completeOnboarding();
        this.render();
      }
    });
  }

  renderWelcome() {
    const content = gameContent.welcome;
    const div = document.createElement('div');
    div.className = 'welcome-screen';

    div.innerHTML = `
      <h1 class="title">${content.title}</h1>
      <p class="subtitle">${content.subtitle}</p>
      <div class="intro-box">
        ${content.intro.split('\n').map(p => `<p>${p}</p>`).join('')}
      </div>
      <button class="start-button" id="start-btn">${content.buttonText}</button>
    `;

    this.container.appendChild(div);

    document.getElementById('start-btn').addEventListener('click', () => {
      this.gameState.setChapter('eusebius');
      this.render();
    });
  }

  renderEusebiusScreen(screenIndex) {
    // Screen sequence:
    // 0: Intro
    // 1: Source text
    // 2-4: Decisions 303 (3 decisions)
    // 5: Time jump
    // 6-7: Decisions 313 (2 decisions)
    // 8: Comparison
    // 9: Reflection
    // 10: Transition to Augustine

    const content = gameContent.eusebius;

    if (screenIndex === 0) {
      this.renderContextScreen(content.intro);
    } else if (screenIndex === 1) {
      this.renderSourceTextScreen(content.sourceText);
    } else if (screenIndex >= 2 && screenIndex <= 4) {
      const decisionIndex = screenIndex - 2;
      this.renderChoiceScreen(content.decisions303[decisionIndex], 'eusebius', '303');
    } else if (screenIndex === 5) {
      this.renderTimeJumpScreen(content.timeJump);
    } else if (screenIndex >= 6 && screenIndex <= 7) {
      const decisionIndex = screenIndex - 6;
      this.renderChoiceScreen(content.decisions313[decisionIndex], 'eusebius', '313');
    } else if (screenIndex === 8) {
      this.renderComparisonScreen();
    } else if (screenIndex === 9) {
      this.renderReflectionScreen(content.reflection, 'eusebius');
    } else if (screenIndex === 10) {
      this.renderChapterTransition();
    }
  }

  renderAugustineScreen(screenIndex) {
    // Screen sequence:
    // 0: Intro
    // 1: Memories
    // 2-5: Decisions (4 decisions)
    // 6: Constructed narrative
    // 7: Reflection
    // 8: Transition to conclusion

    const content = gameContent.augustine;

    if (screenIndex === 0) {
      this.renderContextScreen(content.intro);
    } else if (screenIndex === 1) {
      this.renderMemoriesScreen(content.memories);
    } else if (screenIndex >= 2 && screenIndex <= 5) {
      const decisionIndex = screenIndex - 2;
      this.renderChoiceScreen(content.decisions[decisionIndex], 'augustine', null);
    } else if (screenIndex === 6) {
      this.renderConstructedNarrative();
    } else if (screenIndex === 7) {
      this.renderReflectionScreen(content.reflection, 'augustine');
    } else if (screenIndex === 8) {
      this.gameState.setChapter('conclusion');
      this.render();
    }
  }

  renderContextScreen(content) {
    const div = document.createElement('div');
    div.className = 'context-screen';

    div.innerHTML = `
      <h2 class="chapter-title">${content.title}</h2>
      <div class="context-text">
        ${content.text.map(p => `<p>${p}</p>`).join('')}
      </div>
      <div class="button-container">
        <button class="btn-primary" id="continue-btn">Continue →</button>
      </div>
    `;

    this.container.appendChild(div);

    document.getElementById('continue-btn').addEventListener('click', () => {
      this.gameState.nextScreen();
      this.render();
    });
  }

  renderSourceTextScreen(content) {
    const div = document.createElement('div');
    div.className = 'text-display-screen';

    div.innerHTML = `
      <h3 class="screen-title">${content.heading}</h3>
      <div class="source-text-box">
        ${content.text.map(p => `<p>${p}</p>`).join('')}
      </div>
      <div class="context-text">
        ${content.footer.split('\n').map(p => `<p>${p}</p>`).join('')}
      </div>
      <div class="button-container">
        <button class="btn-primary" id="continue-btn">Continue →</button>
      </div>
    `;

    this.container.appendChild(div);

    document.getElementById('continue-btn').addEventListener('click', () => {
      this.gameState.nextScreen();
      this.render();
    });
  }

  renderChoiceScreen(decision, chapter, period) {
    const div = document.createElement('div');
    div.className = 'choice-screen';

    div.innerHTML = `
      <h3 class="screen-title">${decision.title}</h3>
      <div class="context-box">
        ${decision.context.split('\n').map(p => `<p>${p}</p>`).join('')}
      </div>
      <div class="question">${decision.question}</div>
      <div class="choices-container" id="choices-container">
        ${decision.choices.map((choice, index) => `
          <div class="choice-card" data-choice="${choice.id}">
            <label>
              <input type="radio" name="choice" value="${choice.id}" id="choice-${index}">
              <div class="choice-content">
                <div class="choice-main">${choice.main}</div>
                <div class="choice-explanation">${choice.explanation}</div>
              </div>
            </label>
          </div>
        `).join('')}
      </div>
      <div class="button-container">
        <button class="btn-primary" id="continue-btn" disabled>Continue →</button>
      </div>
    `;

    this.container.appendChild(div);

    // Handle choice selection
    const choiceCards = div.querySelectorAll('.choice-card');
    const continueBtn = document.getElementById('continue-btn');

    choiceCards.forEach(card => {
      card.addEventListener('click', () => {
        choiceCards.forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        card.querySelector('input[type="radio"]').checked = true;
        continueBtn.disabled = false;
      });
    });

    continueBtn.addEventListener('click', () => {
      const selected = div.querySelector('input[name="choice"]:checked');
      if (selected) {
        this.gameState.recordChoice(chapter, period, decision.id, selected.value);
        this.gameState.nextScreen();
        this.render();
      }
    });
  }

  renderTimeJumpScreen(content) {
    const div = document.createElement('div');
    div.className = 'transition-screen';

    div.innerHTML = `
      <div class="time-marker">${content.marker.split('\n').map(p => `<p>${p}</p>`).join('')}</div>
      <div class="new-situation">
        ${content.text.map(p => `<p>${p}</p>`).join('')}
      </div>
      <div class="button-container center">
        <button class="btn-primary" id="continue-btn">Continue →</button>
      </div>
    `;

    this.container.appendChild(div);

    document.getElementById('continue-btn').addEventListener('click', () => {
      this.gameState.nextScreen();
      this.render();
    });
  }

  renderComparisonScreen() {
    const choices303 = this.gameState.state.eusebius.choices303;
    const choices313 = this.gameState.state.eusebius.choices313;

    const text303 = TextGenerator.buildEusebius303Text(choices303);
    const text313 = TextGenerator.buildEusebius313Text(choices303, choices313);

    const { text1, text2 } = TextGenerator.highlightDifferences(text303, text313);

    const div = document.createElement('div');
    div.className = 'comparison-screen';

    div.innerHTML = `
      <h3 class="screen-title">Your Two Versions</h3>
      <div class="comparison-intro">
        <p>Look at how your account changed between 303 CE and 313 CE:</p>
      </div>
      <div class="comparison-container">
        <div class="version-box">
          <div class="version-header">YOUR 303 CE VERSION</div>
          <div class="version-text">${text1}</div>
        </div>
        <div class="version-box">
          <div class="version-header">YOUR 313 CE VERSION</div>
          <div class="version-text">${text2}</div>
        </div>
      </div>
      <div class="button-container center">
        <button class="btn-primary" id="continue-btn">Continue →</button>
      </div>
    `;

    this.container.appendChild(div);

    document.getElementById('continue-btn').addEventListener('click', () => {
      this.gameState.nextScreen();
      this.render();
    });
  }

  renderMemoriesScreen(content) {
    const div = document.createElement('div');
    div.className = 'text-display-screen';

    div.innerHTML = `
      <h3 class="screen-title">${content.heading}</h3>
      <div class="context-text">
        <p>${content.intro}</p>
      </div>
      <div class="source-text-box">
        <ul>
          ${content.items.map(item => `<li>${item}</li>`).join('')}
        </ul>
      </div>
      <div class="context-text">
        ${content.footer.split('\n').map(p => `<p>${p}</p>`).join('')}
      </div>
      <div class="button-container">
        <button class="btn-primary" id="continue-btn">Continue →</button>
      </div>
    `;

    this.container.appendChild(div);

    document.getElementById('continue-btn').addEventListener('click', () => {
      this.gameState.nextScreen();
      this.render();
    });
  }

  renderConstructedNarrative() {
    const choices = this.gameState.state.augustine.choices;
    const text = TextGenerator.buildAugustineText(choices);

    const div = document.createElement('div');
    div.className = 'text-display-screen';

    div.innerHTML = `
      <h3 class="screen-title">Your Version of Augustine's Conversion</h3>
      <div class="context-text">
        <p>Based on your choices, here is the story you wrote:</p>
      </div>
      <div class="source-text-box">
        <p>${text}</p>
      </div>
      <div class="button-container">
        <button class="btn-primary" id="continue-btn">Continue →</button>
      </div>
    `;

    this.container.appendChild(div);

    document.getElementById('continue-btn').addEventListener('click', () => {
      this.gameState.nextScreen();
      this.render();
    });
  }

  renderReflectionScreen(content, chapter) {
    const div = document.createElement('div');
    div.className = 'reflection-screen';

    const savedReflection = chapter === 'eusebius' ?
      this.gameState.state.eusebius.reflection :
      this.gameState.state.augustine.reflection;

    div.innerHTML = `
      <h3 class="screen-title">${content.title}</h3>
      <div class="context-text">
        ${content.intro.split('\n').map(p => `<p>${p}</p>`).join('')}
      </div>
      <div class="reflection-question">${content.question.split('\n').join('<br>')}</div>
      <textarea
        class="reflection-textarea"
        id="reflection-textarea"
        placeholder="Write your thoughts here..."
      >${savedReflection}</textarea>
      <div class="example-box">${content.example}</div>
      <p class="optional-note">(Optional - but we'd love to see your thinking!)</p>
      <div class="button-container">
        <button class="btn-primary" id="continue-btn">Continue →</button>
      </div>
    `;

    this.container.appendChild(div);

    const textarea = document.getElementById('reflection-textarea');
    let saveTimeout;

    textarea.addEventListener('input', () => {
      clearTimeout(saveTimeout);
      saveTimeout = setTimeout(() => {
        this.gameState.recordReflection(chapter, textarea.value);
      }, 500);
    });

    document.getElementById('continue-btn').addEventListener('click', () => {
      this.gameState.recordReflection(chapter, textarea.value);
      this.gameState.nextScreen();
      this.render();
    });
  }

  renderChapterTransition() {
    const div = document.createElement('div');
    div.className = 'transition-screen';

    div.innerHTML = `
      <h3 class="screen-title">End of Chapter 1</h3>
      <div class="new-situation">
        <p>You experienced how Eusebius's changing situation shaped how he told the same story.</p>
        <p>Now you will experience another author's choices.</p>
      </div>
      <div class="button-container center">
        <button class="btn-primary" id="continue-btn">Continue to Chapter 2 →</button>
      </div>
    `;

    this.container.appendChild(div);

    document.getElementById('continue-btn').addEventListener('click', () => {
      this.gameState.setChapter('augustine');
      this.render();
    });
  }

  renderConclusionScreens(screenIndex) {
    // Screen sequence:
    // 0: Main conclusion with final reflection
    // 1: Inspiration screen (new!)
    // 2: Creative writing exercise
    // 3: Final download/finish screen

    if (screenIndex === 0) {
      this.renderMainConclusion();
    } else if (screenIndex === 1) {
      this.renderInspiration();
    } else if (screenIndex === 2) {
      this.renderCreativeWriting();
    } else if (screenIndex === 3) {
      this.renderFinalScreen();
    }
  }

  renderMainConclusion() {
    const content = gameContent.conclusion;
    const div = document.createElement('div');
    div.className = 'conclusion-screen';

    const savedReflection = this.gameState.state.finalReflection;

    div.innerHTML = `
      <h2 class="chapter-title">${content.title}</h2>
      <div class="conclusion-content">
        <p>${content.intro}</p>
        <p><strong>They shaped them based on:</strong></p>
        <ul>
          ${content.points.map(point => `<li>${point}</li>`).join('')}
        </ul>
        ${content.message.map(p => `<p>${p}</p>`).join('')}
      </div>

      <div class="reflection-screen" style="margin-top: 40px;">
        <h3 class="screen-title">${content.finalQuestion.heading}</h3>
        <div class="context-text">
          <p>${content.finalQuestion.intro}</p>
        </div>
        <div class="reflection-question">${content.finalQuestion.question}</div>
        <ul style="margin-left: 20px; margin-bottom: 20px;">
          ${content.finalQuestion.bullets.map(b => `<li>${b}</li>`).join('')}
        </ul>
        <textarea
          class="reflection-textarea"
          id="final-reflection-textarea"
          placeholder="Write your thoughts here (optional)..."
        >${savedReflection}</textarea>
        <div class="context-text" style="font-size: 16px; margin-top: 20px;">
          ${content.finalQuestion.footer.split('\n').map(p => `<p>${p}</p>`).join('')}
        </div>
      </div>

      <div class="button-container center" style="margin-top: 40px;">
        <button class="btn-primary" id="continue-btn">Continue →</button>
      </div>
    `;

    this.container.appendChild(div);

    const textarea = document.getElementById('final-reflection-textarea');
    let saveTimeout;

    textarea.addEventListener('input', () => {
      clearTimeout(saveTimeout);
      saveTimeout = setTimeout(() => {
        this.gameState.recordReflection('final', textarea.value);
      }, 500);
    });

    document.getElementById('continue-btn').addEventListener('click', () => {
      this.gameState.recordReflection('final', textarea.value);
      this.gameState.nextScreen();
      this.render();
    });
  }

  renderInspiration() {
    const content = gameContent.creativeWriting.inspiration;
    const div = document.createElement('div');
    div.className = 'transition-screen';

    div.innerHTML = `
      <div class="inspire-section">
        <h2 class="inspire-title">${content.title}</h2>
        <p class="inspire-text">${content.text}</p>
        <div class="inspire-quote">${content.quote}</div>
        <p class="inspire-text" style="margin-top: var(--spacing-lg); font-size: 20px;">
          Take a moment to think about a story from your own life or from history.<br>
          How would <em>you</em> tell it?
        </p>
      </div>
      <div class="button-container center" style="margin-top: var(--spacing-xl);">
        <button class="btn-primary" id="continue-btn">Begin Writing →</button>
      </div>
    `;

    this.container.appendChild(div);

    document.getElementById('continue-btn').addEventListener('click', () => {
      this.gameState.nextScreen();
      this.render();
    });
  }

  renderCreativeWriting() {
    const content = gameContent.creativeWriting;
    const div = document.createElement('div');
    div.className = 'reflection-screen';

    const savedPassage = this.gameState.state.creativeWriting.passage;
    const savedExplanation = this.gameState.state.creativeWriting.explanation;

    div.innerHTML = `
      <h2 class="chapter-title">${content.title}</h2>

      <div class="creative-writing-container">
        <div class="writing-prompt">Your Writing Challenge</div>

        <div class="context-text">
          ${content.intro.split('\n').map(p => `<p>${p}</p>`).join('')}
        </div>

        <div class="writing-tips">
          ${content.tips.map(tip => `<div class="writing-tip">${tip}</div>`).join('')}
        </div>

        <div class="reflection-question" style="margin-top: var(--spacing-lg);">
          ${content.prompt.split('\n').filter(p => !p.startsWith('•')).map(p => `<p>${p}</p>`).join('')}
        </div>

        <textarea
          class="reflection-textarea"
          id="creative-passage"
          placeholder="Begin writing your passage here... (aim for 3-5 sentences)"
          style="min-height: 200px;"
        >${savedPassage}</textarea>
        <div class="char-count" id="passage-count">0 characters</div>

        <div class="example-box" style="margin-top: var(--spacing-lg);">
          ${content.example.split('\n\n').map(p => `<p>${p}</p>`).join('')}
        </div>

        <div class="reflection-question" style="margin-top: var(--spacing-xl);">${content.followUp}</div>

        <textarea
          class="reflection-textarea"
          id="creative-explanation"
          placeholder="Reflect on your choices: what did you emphasize, what did you leave out, and why?"
          style="min-height: 160px;"
        >${savedExplanation}</textarea>
        <div class="char-count" id="explanation-count">0 characters</div>

        <p class="optional-note" style="margin-top: var(--spacing-md);">
          (This creative writing is optional but helps deepen your understanding!)
        </p>
      </div>

      <div class="button-container center" style="margin-top: var(--spacing-xl);">
        <button class="btn-primary" id="continue-btn">Complete & Continue →</button>
      </div>
    `;

    this.container.appendChild(div);

    const passageArea = document.getElementById('creative-passage');
    const explanationArea = document.getElementById('creative-explanation');
    const passageCount = document.getElementById('passage-count');
    const explanationCount = document.getElementById('explanation-count');
    let saveTimeout;

    // Update character counts
    const updateCount = (textarea, countEl) => {
      const count = textarea.value.length;
      countEl.textContent = `${count} character${count !== 1 ? 's' : ''}`;
      if (count > 0) {
        countEl.classList.add('active');
      } else {
        countEl.classList.remove('active');
      }
    };

    // Initialize counts
    updateCount(passageArea, passageCount);
    updateCount(explanationArea, explanationCount);

    const saveWriting = () => {
      clearTimeout(saveTimeout);
      saveTimeout = setTimeout(() => {
        this.gameState.recordCreativeWriting(passageArea.value, explanationArea.value);
      }, 500);
    };

    passageArea.addEventListener('input', () => {
      updateCount(passageArea, passageCount);
      saveWriting();
    });

    explanationArea.addEventListener('input', () => {
      updateCount(explanationArea, explanationCount);
      saveWriting();
    });

    document.getElementById('continue-btn').addEventListener('click', () => {
      this.gameState.recordCreativeWriting(passageArea.value, explanationArea.value);
      this.gameState.nextScreen();
      this.render();
    });
  }

  renderFinalScreen() {
    const div = document.createElement('div');
    div.className = 'conclusion-screen';

    div.innerHTML = `
      <h2 class="chapter-title">Thank You for Playing!</h2>
      <div class="conclusion-content">
        <p>You have completed "Shaping History: Ancient Authors and Their Agendas."</p>
        <p>Your work has been saved in your browser.</p>

        <div style="margin: 40px 0; padding: 30px; background: white; border: 2px solid var(--color-border); border-radius: 4px;">
          <h3 style="margin-bottom: 20px; color: var(--color-accent);">What's Next?</h3>
          <p style="margin-bottom: 20px;"><strong>Download your work:</strong> Save all your choices, reflections, and creative writing to a text file.</p>
          <button class="btn-primary" id="download-btn" style="width: 100%;">📥 Download My Work</button>

          <p style="margin-top: 30px; margin-bottom: 20px;"><strong>Share with your instructor:</strong> You can email the downloaded file or copy your reflections from the browser.</p>

          <p style="margin-top: 30px; margin-bottom: 20px;"><strong>Play again:</strong> Try different choices to see how your narratives change.</p>
          <button class="btn-secondary" id="restart-btn" style="width: 100%;">🔄 Start Over</button>
        </div>

        <div style="margin-top: 30px; text-align: center;">
          <p style="font-size: 14px; color: #666;">Your data is stored locally in your browser.<br>No information has been sent to any server.</p>
        </div>

        <div style="margin-top: 40px; padding-top: 30px; border-top: 1px solid var(--color-border);">
          <h4 style="font-size: 16px; margin-bottom: 15px; color: var(--color-accent);">About This Game</h4>
          <p style="font-size: 14px; line-height: 1.6; margin-bottom: 10px;">
            <strong>Shaping History: Ancient Authors and Their Agendas</strong><br>
            An interactive learning experience about historiographical bias.
          </p>
          <p style="font-size: 13px; color: #666; margin-bottom: 15px;">
            Created for Introduction to Early Medieval Europe<br>
            Bar-Ilan University
          </p>
          <div style="font-size: 13px;">
            <a href="https://github.com/Chlodomer/shaping_history" target="_blank" rel="noopener" style="color: var(--color-accent); text-decoration: none; margin: 0 10px;">📁 View on GitHub</a>
            <span>•</span>
            <a href="https://github.com/Chlodomer/shaping_history/issues" target="_blank" rel="noopener" style="color: var(--color-accent); text-decoration: none; margin: 0 10px;">🐛 Report Issue</a>
          </div>
        </div>
      </div>
    `;

    this.container.appendChild(div);

    document.getElementById('download-btn').addEventListener('click', () => {
      this.gameState.downloadWork();
    });

    document.getElementById('restart-btn').addEventListener('click', () => {
      if (confirm('Are you sure you want to start over? Your current work will be lost.')) {
        this.gameState.reset();
      }
    });

    // Mark as completed
    this.gameState.state.completed = true;
    this.gameState.saveState();
  }
}

// ===== INITIALIZE GAME =====
let gameState;
let renderer;

document.addEventListener('DOMContentLoaded', () => {
  gameState = new GameState();
  renderer = new ScreenRenderer(gameState);
  renderer.render();

  // Replay tutorial link in footer
  const replayTutorial = document.getElementById('replay-tutorial');
  if (replayTutorial) {
    replayTutorial.addEventListener('click', (e) => {
      e.preventDefault();
      if (confirm('This will restart the tutorial. Continue?')) {
        gameState.state.onboardingCompleted = false;
        gameState.state.onboardingStep = 0;
        gameState.saveState();
        renderer.render();
      }
    });
  }
});
