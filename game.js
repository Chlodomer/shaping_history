// ===== SHAPING HISTORY: STAGE-BASED COMPOSITION TOOL =====
// Stage 1: Multiple Choice Decisions

// ===== GAME STATE =====
const GAME_VERSION = '2.1'; // Increment when making breaking changes

const gameState = {
  version: GAME_VERSION,
  currentStage: 'title', // title, onboarding, authorChoice, bio, intro, stage1, stage2, stage3, stage4
  currentScreen: 0,
  onboardingStep: 0,
  hasSeenOnboarding: false,
  selectedAuthor: null, // 'eusebius' or 'augustine'
  choices: {},
  narrativeProfile: null,
  selectedComponents: [],
  componentSequence: [],
  rationalization: '',
  studentNarrative: ''
};

// ===== TITLE & ONBOARDING CONTENT =====

const titleContent = {
  title: "Shaping History",
  subtitle: "Ancient Authors and Their Agendas",
  tagline: "An interactive exploration of historiographical construction",
  illustration: '<img src="Images/writing-history.png" alt="Writing History" class="title-illustration-img">'
};

const onboardingContent = {
  steps: [
    {
      title: "Welcome to Shaping History",
      content: [
        "In this tool, you'll become an ancient Christian historian writing about events they witnessed.",
        "You'll make the same kinds of choices these authors faced: what to emphasize, what to omit, and how to frame events for your audience.",
        "Through this hands-on experience, you'll discover how all historical narratives are shaped by authorial decisions."
      ],
      visual: "preview-welcome"
    },
    {
      title: "What You'll Do",
      content: [
        "You'll work through 4 stages:",
        "• <strong>Stage 1:</strong> Make high-level compositional choices",
        "• <strong>Stage 2:</strong> Select and arrange narrative components",
        "• <strong>Stage 3:</strong> Write your own historical narrative",
        "• <strong>Stage 4:</strong> Review and export your work"
      ],
      visual: "preview-stages"
    },
    {
      title: "Choose Your Historian",
      content: [
        "You'll choose one of two historians to write as:",
        "• <strong>Eusebius of Caesarea (303 CE):</strong> Writing during active persecution",
        "• <strong>Augustine of Hippo (397 CE):</strong> Reflecting on a life-changing moment",
        "Each author faces different challenges and audiences."
      ],
      visual: "preview-authors"
    },
    {
      title: "There Are No Wrong Answers",
      content: [
        "This tool is about <em>experiencing</em> the compositional process, not getting it \"right.\"",
        "Every choice you make is valid—just like every ancient historian made different choices.",
        "Focus on understanding <em>why</em> you make certain choices and what effects they have.",
        "Time to complete: 15-20 minutes"
      ],
      visual: "preview-export"
    }
  ]
};

const eusebiusBio = {
  name: "Eusebius of Caesarea",
  dates: "c. 260-339 CE",
  image: '<img src="Images/eusebius.png" alt="Eusebius of Caesarea" class="bio-portrait-img">',
  paragraphs: [
    "Eusebius was a Christian scholar and bishop who lived through one of the most turbulent periods in early Christian history. Born around 260 CE, he witnessed the Great Persecution launched by Emperor Diocletian in 303 CE.",
    "As bishop of Caesarea in Palestine, Eusebius saw firsthand the destruction of churches, burning of scriptures, and martyrdom of Christians. He documented these events in his <em>Ecclesiastical History</em>, becoming one of the most important early Christian historians.",
    "In this exercise, you'll write as Eusebius in 303 CE, during the height of persecution. You're creating an account of what you've witnessed in Caesarea, knowing that your words will shape how future Christians understand this dark period."
  ],
  context: "You are writing in 303 CE, during active persecution. Your audience is other Christians who need to understand what is happening to their community."
};

const augustineBio = {
  name: "Augustine of Hippo",
  dates: "354-430 CE",
  image: '<img src="Images/augustine.png" alt="Augustine of Hippo" class="bio-portrait-img">',
  paragraphs: [
    "Augustine was one of the most influential Christian thinkers in history. Born in North Africa in 354 CE, he spent years searching for truth through different philosophical and religious movements, including Manichaeism.",
    "In 386 CE, Augustine experienced a dramatic conversion to Christianity in a garden in Milan. Eleven years later, as Bishop of Hippo, he wrote about this experience in his <em>Confessions</em>, one of the most famous spiritual autobiographies ever written.",
    "In this exercise, you'll write as Augustine in 397 CE, looking back on your conversion. You must decide how to tell this story—what to emphasize, what it means, and what you want readers to learn from your experience."
  ],
  context: "You are writing in 397 CE, as a bishop and teacher. Your conversion happened 11 years ago. How you tell this story will shape how Christians understand conversion, grace, and God's work in human lives."
};

// ===== AUTHOR CHOICE CONTENT =====
const authorChoiceContent = {
  title: "Choose Your Author",
  subtitle: "You'll experience the compositional process as one of these ancient historians.",
  instruction: "Select the author whose perspective you want to explore:",
  authors: [
    {
      id: "eusebius",
      name: "Eusebius of Caesarea",
      dates: "303 CE",
      image: '<img src="Images/eusebius.png" alt="Eusebius of Caesarea" class="author-choice-img">',
      description: "Write during active persecution. Witness violence and martyrdom. Decide what to emphasize and what to omit as you document events for future Christians.",
      context: "Writing in the midst of crisis"
    },
    {
      id: "augustine",
      name: "Augustine of Hippo",
      dates: "397 CE",
      image: '<img src="Images/augustine.png" alt="Augustine of Hippo" class="author-choice-img">',
      description: "Reflect on your conversion 11 years later. Decide how to tell your story as your purposes and contexts have changed. Shape memory into meaning.",
      context: "Writing from retrospective reflection"
    }
  ]
};

// ===== STAGE 1 CONTENT =====
const stage1Content = {
  intro: {
    title: "Eusebius, 303 CE: Writing the Persecution",
    paragraphs: [
      "You are Eusebius of Caesarea, a Christian scholar and witness to history.",
      "The year is 303 CE. Emperor Diocletian has launched the Great Persecution. Churches are being destroyed, holy books burned, and Christians face arrest and execution.",
      "You have witnessed a persecution in your city of Caesarea. Now you must write an account of what happened.",
      "Your choices will shape how this event is remembered."
    ],
    buttonText: "Begin Stage 1: Make Your Choices"
  },

  choices: [
    {
      id: "emphasis",
      title: "Choice 1 of 4",
      question: "What aspect of the persecution do you choose to emphasize?",
      context: "You saw many things: violence, courage, cruelty, faith. You cannot give equal weight to everything.",
      options: [
        {
          id: "suffering",
          text: "The suffering of the victims",
          description: "Focus on pain, loss, and martyrdom"
        },
        {
          id: "courage",
          text: "The courage of the faithful",
          description: "Focus on Christian bravery and steadfastness"
        },
        {
          id: "cruelty",
          text: "The cruelty of the persecutors",
          description: "Focus on Roman injustice and brutality"
        },
        {
          id: "divine",
          text: "The divine purpose behind events",
          description: "Focus on God's plan and providence"
        }
      ]
    },

    {
      id: "protagonist",
      title: "Choice 2 of 4",
      question: "Who will be the protagonist of your narrative?",
      context: "Every story needs a central focus. Your choice determines whose experience matters most.",
      options: [
        {
          id: "martyrs",
          text: "Individual martyrs (named victims)",
          description: "Tell the story through specific people who died"
        },
        {
          id: "community",
          text: "The Christian community as a whole",
          description: "Tell a collective story of the church"
        },
        {
          id: "leaders",
          text: "Church leaders and bishops",
          description: "Focus on leadership and authority"
        },
        {
          id: "god",
          text: "God/Divine providence",
          description: "Make God the active force in the story"
        }
      ]
    },

    {
      id: "violence",
      title: "Choice 3 of 4",
      question: "How much detail do you include about the violence?",
      context: "You know what happened. How much should your readers know?",
      options: [
        {
          id: "graphic",
          text: "Graphic, visceral details",
          description: "Describe suffering in vivid, emotional detail"
        },
        {
          id: "factual",
          text: "Factual but restrained description",
          description: "Report what happened without dwelling on gore"
        },
        {
          id: "minimal",
          text: "Brief mention, focus on aftermath",
          description: "Acknowledge violence but move quickly to meaning"
        },
        {
          id: "omit",
          text: "Omit violence, emphasize spiritual meaning",
          description: "Focus entirely on theological significance"
        }
      ]
    },

    {
      id: "endpoint",
      title: "Choice 4 of 4",
      question: "Where does your narrative end?",
      context: "The ending shapes how readers understand the entire story.",
      options: [
        {
          id: "death",
          text: "The moment of death (martyrdom complete)",
          description: "End with the martyrs' final moments"
        },
        {
          id: "burial",
          text: "The burial and mourning (community aftermath)",
          description: "End with grief and remembrance"
        },
        {
          id: "triumph",
          text: "The spiritual triumph (heaven/resurrection)",
          description: "End with victory and eternal reward"
        },
        {
          id: "ongoing",
          text: "The ongoing persecution (unfinished story)",
          description: "End with continuing struggle"
        }
      ]
    }
  ],

  midFeedback: {
    title: "Your Choices So Far",
    getContent: (choices) => {
      const choice1 = stage1Content.choices[0].options.find(o => o.id === choices.emphasis);
      const choice2 = stage1Content.choices[1].options.find(o => o.id === choices.protagonist);

      return {
        summary: [
          `You've chosen to emphasize: ${choice1.text}`,
          `You've made the protagonist: ${choice2.text}`
        ],
        reflection: [
          "Notice how these choices are already shaping the story.",
          "",
          generateMidReflection(choices)
        ],
        prompts: [
          "→ How might these choices serve your audience in 303 CE?",
          "→ What are you NOT saying by making these choices?"
        ]
      };
    },
    buttonText: "Continue to Choices 3-4"
  },

  finalSummary: {
    title: "Stage 1 Complete: Your Narrative Blueprint",
    getContent: (choices) => {
      const profile = generateNarrativeProfile(choices);

      return {
        choicesSummary: [
          `You emphasized: ${getChoiceText(0, choices.emphasis)}`,
          `Your protagonist: ${getChoiceText(1, choices.protagonist)}`,
          `Violence detail: ${getChoiceText(2, choices.violence)}`,
          `Narrative endpoint: ${getChoiceText(3, choices.endpoint)}`
        ],
        descriptive: profile.description,
        reflection: profile.reflection,
        profileName: profile.name
      };
    },
    buttonText: "Proceed to Stage 2: Structure Your Composition"
  }
};

// ===== AUGUSTINE STAGE 1 CONTENT =====
const augustineStage1Content = {
  intro: {
    title: "Augustine, 397 CE: Writing Your Confessions",
    paragraphs: [
      "You are Augustine of Hippo, Bishop and teacher.",
      "The year is 397 CE. You are writing about your conversion to Christianity.",
      "That conversion happened eleven years ago, in 386 CE, in a garden in Milan.",
      "HOW you tell this story depends on WHY you are writing and WHAT you want it to accomplish."
    ],
    buttonText: "Begin Stage 1: Make Your Choices"
  },

  // Part 1: Setup - Your Current Situation
  situationScreen: {
    title: "Your Situation in 397 CE",
    paragraphs: [
      "You are now a bishop—a powerful religious leader.",
      "You teach and write about Christian theology.",
      "Many people will read what you write.",
      "",
      "Several situations shape your life right now:"
    ],
    contexts: {
      personal: {
        title: "Personal Context:",
        items: [
          "Your mother Monica died in 387, right after your conversion",
          "You are an important teacher in the Church",
          "Many people look to you for guidance"
        ]
      },
      historical: {
        title: "Historical & Political Context:",
        items: [
          "Christianity is now the official religion of Rome",
          "Before converting, you followed Manichaeism (a different religion)",
          "Some Manichaeans criticize you for leaving",
          "Church debates: Can humans choose to convert? Or does only God's grace convert them?"
        ]
      }
    },
    closing: "These situations might affect how you tell your story.",
    buttonText: "Continue"
  },

  // Part 2: The Event
  eventScreen: {
    title: "The Garden in Milan - 386 CE",
    intro: "This is what you remember:",
    events: [
      "You were in a garden in Milan",
      "You were crying under a fig tree",
      "You heard someone say \"Take and read\" (tolle lege)",
      "You picked up Paul's letters",
      "You read Romans 13:13-14",
      "The words spoke to your struggle",
      "You felt sudden peace and certainty",
      "Your friend Alypius was there",
      "You told your mother Monica"
    ],
    closing: [
      "This is the event.",
      "Now you must write about it.",
      "",
      "<strong>HOW you write it depends on WHAT YOU WANT IT TO SHOW.</strong>"
    ],
    buttonText: "Continue"
  },

  // Part 3: Main Purpose Choice (BRANCHING POINT)
  mainPurposeChoice: {
    id: "mainPurpose",
    title: "Your Purpose in Writing",
    question: "You are writing about your conversion. Why? What do you want this story to accomplish?",
    context: "Choose your main purpose:",
    options: [
      {
        id: "personal",
        text: "Personal testimony",
        description: "I want to understand what happened to me. This is my personal story of transformation."
      },
      {
        id: "antiManichaean",
        text: "Breaking from Manichaeism",
        description: "I want to explain why I left Manichaeism for Christianity. This story shows why Christianity is true."
      },
      {
        id: "teaching",
        text: "Teaching about conversion",
        description: "I want to teach other Christians how conversion works. This story is a model for others."
      }
    ]
  },

  // Branching follow-up questions based on main purpose
  branchedQuestions: {
    // Path A: Personal Testimony
    personal: [
      {
        id: "tears_meaning",
        title: "Your Personal Experience - Choice 1",
        question: "When you cried under the fig tree, what were you crying about?",
        context: "You want to tell your personal story honestly.",
        options: [
          {
            id: "emotional",
            text: "My emotional pain and confusion",
            description: "Focus on feelings: I was sad, lost, desperate"
          },
          {
            id: "moral",
            text: "My moral struggle with sin",
            description: "Focus on morality: I wanted to be good but couldn't"
          },
          {
            id: "intellectual",
            text: "My intellectual search for truth",
            description: "Focus on ideas: I couldn't figure out what was true"
          }
        ]
      },
      {
        id: "voice_source",
        title: "Your Personal Experience - Choice 2",
        question: "The voice said \"Take and read.\" How do you describe it?",
        context: "You heard this voice in the garden. Where did it come from?",
        options: [
          {
            id: "natural",
            text: "I heard a child playing nearby",
            description: "Keep it simple and natural"
          },
          {
            id: "mysterious",
            text: "I heard a voice - I don't know where from",
            description: "Keep it mysterious, leave it open"
          },
          {
            id: "divine",
            text: "I believe God spoke through that voice",
            description: "Make it clearly divine, even if you're not certain"
          }
        ]
      }
    ],

    // Path B: Anti-Manichaeism
    antiManichaean: [
      {
        id: "manichaeism_failure",
        title: "Breaking from Manichaeism - Choice 1",
        question: "What does your conversion story need to show about Manichaeism?",
        context: "Manichaeism taught that humans are trapped between good and evil forces. It focused on knowledge (gnosis) as the path to salvation. You followed this religion for nine years before converting.",
        options: [
          {
            id: "intellectual",
            text: "Manichaeism couldn't answer my questions",
            description: "Focus on intellectual reasons for leaving"
          },
          {
            id: "spiritual",
            text: "Manichaeism couldn't change my heart",
            description: "Focus on moral/spiritual reasons for leaving"
          },
          {
            id: "both",
            text: "Both - it failed intellectually and spiritually",
            description: "Show both problems with Manichaeism"
          }
        ]
      },
      {
        id: "romans_passage",
        title: "Breaking from Manichaeism - Choice 2",
        question: "The Romans passage you read spoke directly to your struggle. How do you present this?",
        context: "This was a remarkable coincidence. The text was perfect for your situation.",
        options: [
          {
            id: "providence",
            text: "This was divine providence, not chance",
            description: "Show God actively guiding you - unlike Manichaean fate"
          },
          {
            id: "contrast_texts",
            text: "The text gave me what Manichaean writings never could",
            description: "Emphasize contrast: Christian scripture works, Manichaean texts don't"
          },
          {
            id: "grace_vs_gnosis",
            text: "I understood truth through grace, not knowledge",
            description: "Emphasize grace vs. gnosis - the key theological difference"
          }
        ]
      }
    ],

    // Path C: Teaching About Conversion
    teaching: [
      {
        id: "conversion_timing",
        title: "Teaching About Conversion - Choice 1",
        question: "What should other Christians learn from your conversion?",
        context: "You want this story to help other Christians understand how conversion happens.",
        options: [
          {
            id: "sudden",
            text: "That conversion can happen suddenly",
            description: "Emphasize the dramatic moment of change"
          },
          {
            id: "preparation",
            text: "That conversion requires long preparation",
            description: "Emphasize all the years of seeking before the garden"
          },
          {
            id: "mysterious",
            text: "That God's timing is mysterious",
            description: "Show both the preparation and the sudden moment"
          }
        ]
      },
      {
        id: "community_impact",
        title: "Teaching About Conversion - Choice 2",
        question: "Your friend Alypius was in the garden. He converted too. What does this teach?",
        context: "After you converted, you told Alypius. He read the next verse and believed.",
        options: [
          {
            id: "individual",
            text: "Conversion is deeply personal and individual",
            description: "Focus on your private experience"
          },
          {
            id: "communal",
            text: "Conversion spreads within communities",
            description: "Show how your conversion affected Alypius"
          },
          {
            id: "both",
            text: "Both - it's personal but also social",
            description: "Show both individual and communal aspects"
          }
        ]
      }
    ]
  },

  // Part 4: New Context Emerges
  newContextScreen: {
    title: "A New Situation Emerges (397 CE)",
    paragraphs: [
      "You have been writing about your conversion.",
      "",
      "But now a new debate has emerged in the Church.",
      "",
      "A teacher named Pelagius is preaching:",
      "<em>\"Humans can choose to be good. We have free will. We can convert ourselves through our own effort.\"</em>",
      "",
      "You DISAGREE strongly.",
      "",
      "You believe:",
      "<em>\"Humans cannot convert themselves. Only God's grace can transform us. We cannot choose salvation - God must give it.\"</em>",
      "",
      "<strong>YOUR CONVERSION STORY COULD PROVE YOUR POINT.</strong>"
    ],
    tooltips: {
      pelagius: "A Christian teacher who emphasized human free will",
      grace: "God's power that works in humans, beyond human ability",
      freeWill: "The ability to choose and control your own actions"
    },
    buttonText: "Continue"
  },

  // Part 5: The Question of Will
  willQuestionChoice: {
    id: "role_of_will",
    title: "The Debate About Your Conversion",
    context: [
      "Think about your conversion in the garden.",
      "",
      "Pelagius would say:",
      "<em>\"Augustine chose to convert. He heard the voice and chose to pick up the book. He chose to believe. Human will caused his conversion.\"</em>",
      "",
      "You want to say:",
      "<em>\"No. God's grace caused my conversion. I could not have chosen it. God transformed my will so I could believe.\"</em>"
    ],
    question: "Looking back at your conversion, what role did YOUR WILL play?",
    options: [
      {
        id: "irresistible",
        text: "I could not have resisted - grace was irresistible",
        description: "God's grace overwhelmed me. I had no choice but to believe."
      },
      {
        id: "cooperation",
        text: "I cooperated with grace - God enabled my choice",
        description: "God helped me, but I still had to choose to respond."
      },
      {
        id: "mystery",
        text: "I don't know - the mystery is too deep",
        description: "Avoid taking a clear position on this theological question."
      }
    ]
  },

  // Part 6: Revision Decision
  revisionChoice: {
    id: "revision_decision",
    title: "Revising Your Account",
    getContext: (originalPurpose) => {
      const purposes = {
        personal: "tell your personal story of transformation",
        antiManichaean: "explain why you left Manichaeism",
        teaching: "teach others about conversion"
      };
      return [
        "You have new purposes now:",
        "• Prove that grace, not will, converts humans",
        "• Counter Pelagius's teaching",
        "• Establish yourself as a theological authority",
        "",
        `You also have your original purpose: ${purposes[originalPurpose] || 'understand your conversion'}.`
      ];
    },
    question: "Do you revise your account to emphasize these new theological points?",
    options: [
      {
        id: "emphasize_grace",
        text: "Yes - emphasize God's grace throughout",
        description: "Change the story to make grace more central. This serves your theological purpose."
      },
      {
        id: "add_interpretation",
        text: "Keep my original emphasis but add grace language",
        description: "Keep the basic story but add theological interpretation."
      },
      {
        id: "keep_original",
        text: "Keep it as I first wrote it",
        description: "Stick with your original purpose. Don't change for political reasons."
      }
    ]
  },

  // Final summary structure
  finalSummary: {
    title: "Stage 1 Complete: Your Authorial Decisions",
    getContent: (choices) => {
      return {
        choicesSummary: generateAugustineChoicesSummary(choices),
        mainPurpose: getMainPurposeText(choices.mainPurpose),
        willPosition: getWillPositionText(choices.role_of_will),
        revisionDecision: getRevisionDecisionText(choices.revision_decision)
      };
    },
    buttonText: "Proceed to Stage 2: Structure Your Composition"
  }
};

// ===== STAGE 2 CONTENT =====
const stage2Content = {
  intro: {
    title: "Stage 2: Structure Your Composition",
    paragraphs: [
      "You've made high-level decisions about your narrative approach.",
      "Now it's time to turn those abstract choices into concrete compositional elements.",
      "In this stage, you will:",
      "• Select specific narrative components to include",
      "• Arrange them in a deliberate sequence",
      "• Explain your structural reasoning"
    ],
    buttonText: "Begin Component Selection"
  },

  // Components derived from Stage 1 choices
  componentsByChoice: {
    emphasis: {
      suffering: [
        { id: "desc_physical_pain", text: "Describe physical suffering in detail", category: "emphasis" },
        { id: "emotional_trauma", text: "Depict emotional and psychological trauma", category: "emphasis" },
        { id: "catalog_losses", text: "Catalog what was lost (lives, buildings, texts)", category: "emphasis" },
        { id: "witness_testimony", text: "Include eyewitness testimony of suffering", category: "emphasis" }
      ],
      courage: [
        { id: "acts_of_bravery", text: "Highlight specific acts of bravery", category: "emphasis" },
        { id: "steadfast_faith", text: "Emphasize unwavering faith under pressure", category: "emphasis" },
        { id: "defiant_statements", text: "Quote defiant statements by Christians", category: "emphasis" },
        { id: "courage_comparisons", text: "Compare courage to biblical heroes", category: "emphasis" }
      ],
      cruelty: [
        { id: "roman_methods", text: "Detail Roman methods of persecution", category: "emphasis" },
        { id: "injustice_framing", text: "Frame persecution as legal injustice", category: "emphasis" },
        { id: "imperial_motives", text: "Question imperial motives", category: "emphasis" },
        { id: "contrast_treatment", text: "Contrast treatment of Christians vs others", category: "emphasis" }
      ],
      divine: [
        { id: "providence_language", text: "Use providence and divine plan language", category: "emphasis" },
        { id: "biblical_parallels", text: "Draw parallels to biblical persecution", category: "emphasis" },
        { id: "theological_meaning", text: "Interpret events theologically", category: "emphasis" },
        { id: "gods_purposes", text: "Explain God's purposes in allowing persecution", category: "emphasis" }
      ]
    },

    protagonist: {
      martyrs: [
        { id: "name_individuals", text: "Name specific martyrs", category: "protagonist" },
        { id: "individual_stories", text: "Tell individual backstories", category: "protagonist" },
        { id: "personal_final_words", text: "Record personal final words", category: "protagonist" },
        { id: "unique_circumstances", text: "Describe unique circumstances of each death", category: "protagonist" }
      ],
      community: [
        { id: "collective_response", text: "Describe collective community response", category: "protagonist" },
        { id: "group_actions", text: "Emphasize group actions over individuals", category: "protagonist" },
        { id: "community_resilience", text: "Show community resilience and solidarity", category: "protagonist" },
        { id: "shared_experience", text: "Present persecution as shared experience", category: "protagonist" }
      ],
      leaders: [
        { id: "bishop_decisions", text: "Focus on bishop and leader decisions", category: "protagonist" },
        { id: "clerical_hierarchy", text: "Emphasize clerical hierarchy's response", category: "protagonist" },
        { id: "pastoral_actions", text: "Highlight pastoral care during crisis", category: "protagonist" },
        { id: "leadership_authority", text: "Assert authority of church leadership", category: "protagonist" }
      ],
      god: [
        { id: "divine_agency", text: "Make God the primary active agent", category: "protagonist" },
        { id: "humans_as_instruments", text: "Present humans as instruments of divine will", category: "protagonist" },
        { id: "theological_narration", text: "Narrate from theological perspective", category: "protagonist" },
        { id: "divine_orchestration", text: "Show divine orchestration of events", category: "protagonist" }
      ]
    },

    violence: {
      graphic: [
        { id: "visceral_details", text: "Include visceral physical details", category: "violence" },
        { id: "moment_by_moment", text: "Describe moment-by-moment suffering", category: "violence" },
        { id: "sensory_description", text: "Use sensory descriptions (sight, sound)", category: "violence" },
        { id: "emotional_impact", text: "Maximize emotional impact through detail", category: "violence" }
      ],
      factual: [
        { id: "factual_reporting", text: "Report facts without embellishment", category: "violence" },
        { id: "restrained_language", text: "Use restrained, measured language", category: "violence" },
        { id: "essential_details", text: "Include only essential details", category: "violence" },
        { id: "documentary_tone", text: "Maintain documentary tone", category: "violence" }
      ],
      minimal: [
        { id: "brief_mention", text: "Mention violence only briefly", category: "violence" },
        { id: "quick_transition", text: "Transition quickly to aftermath", category: "violence" },
        { id: "focus_on_meaning", text: "Focus on meaning rather than mechanics", category: "violence" },
        { id: "euphemistic_language", text: "Use euphemistic language", category: "violence" }
      ],
      omit: [
        { id: "no_violence_details", text: "Omit violence details entirely", category: "violence" },
        { id: "spiritual_focus", text: "Focus exclusively on spiritual dimension", category: "violence" },
        { id: "skip_to_resolution", text: "Skip directly to resolution/meaning", category: "violence" },
        { id: "abstract_language", text: "Use abstract theological language", category: "violence" }
      ]
    },

    endpoint: {
      death: [
        { id: "final_moments", text: "Describe the final moments in detail", category: "endpoint" },
        { id: "death_as_climax", text: "Structure death as narrative climax", category: "endpoint" },
        { id: "martyrdom_complete", text: "Emphasize completion of martyrdom", category: "endpoint" },
        { id: "end_at_death", text: "End narrative at moment of death", category: "endpoint" }
      ],
      burial: [
        { id: "burial_description", text: "Describe burial and funeral rites", category: "endpoint" },
        { id: "community_mourning", text: "Show community mourning process", category: "endpoint" },
        { id: "remembrance_practices", text: "Describe remembrance practices", category: "endpoint" },
        { id: "grief_response", text: "Detail community grief response", category: "endpoint" }
      ],
      triumph: [
        { id: "heavenly_reward", text: "Describe heavenly reward awaiting martyrs", category: "endpoint" },
        { id: "resurrection_hope", text: "Emphasize resurrection and eternal life", category: "endpoint" },
        { id: "spiritual_victory", text: "Frame death as spiritual victory", category: "endpoint" },
        { id: "transcendent_ending", text: "End with transcendent, triumphant note", category: "endpoint" }
      ],
      ongoing: [
        { id: "unfinished_story", text: "Present as unfinished, ongoing story", category: "endpoint" },
        { id: "continuing_persecution", text: "Note that persecution continues", category: "endpoint" },
        { id: "open_ending", text: "Leave ending open and unresolved", category: "endpoint" },
        { id: "call_to_vigilance", text: "Call readers to continued vigilance", category: "endpoint" }
      ]
    }
  },

  budget: {
    min: 6,
    max: 8,
    message: "Select 6-8 components that will form the building blocks of your narrative."
  },

  rationalizationPrompt: {
    title: "Explain Your Structure",
    question: "Why did you arrange these components in this particular order?",
    guidance: "Consider: Does your structure build tension? Move from concrete to abstract? Follow a chronological pattern? Have another logic?",
    placeholder: "Explain your reasoning in 2-4 sentences..."
  }
};

// ===== AUGUSTINE STAGE 2 CONTENT =====
const augustineStage2Content = {
  intro: {
    title: "Stage 2: Structure Your Confessions",
    paragraphs: [
      "You've decided on your purpose and theological position.",
      "Now it's time to turn those decisions into a concrete narrative structure.",
      "In this stage, you will:",
      "• Select specific narrative components for your conversion story",
      "• Arrange them in a deliberate sequence",
      "• Explain your compositional reasoning"
    ],
    buttonText: "Begin Component Selection"
  },

  // Components derived from Augustine Stage 1 choices
  componentsByChoice: {
    // Main Purpose branches
    mainPurpose: {
      personal: [
        { id: "inner_turmoil", text: "Describe your inner emotional turmoil", category: "personal" },
        { id: "crying_scene", text: "Depict the crying scene under the fig tree in detail", category: "personal" },
        { id: "personal_backstory", text: "Include personal backstory and struggles", category: "personal" },
        { id: "intimate_confession", text: "Write in intimate, confessional tone", category: "personal" }
      ],
      antiManichaean: [
        { id: "manichaean_critique", text: "Critique Manichaean theology explicitly", category: "antiManichaean" },
        { id: "contrast_religions", text: "Contrast Manichaeism with Christianity", category: "antiManichaean" },
        { id: "intellectual_journey", text: "Trace your intellectual journey away from Manichaeism", category: "antiManichaean" },
        { id: "failed_answers", text: "Show how Manichaeism failed to answer your questions", category: "antiManichaean" }
      ],
      teaching: [
        { id: "universal_lessons", text: "Draw universal lessons from your experience", category: "teaching" },
        { id: "theological_explanation", text: "Explain the theology of conversion", category: "teaching" },
        { id: "model_narrative", text: "Present your story as a model for others", category: "teaching" },
        { id: "pedagogical_framing", text: "Frame the story for teaching purposes", category: "teaching" }
      ]
    },

    // Personal path sub-choices
    tears_meaning: {
      emotional: [
        { id: "describe_despair", text: "Describe your emotional despair and confusion", category: "tears" },
        { id: "feelings_focus", text: "Focus on feelings of being lost and desperate", category: "tears" }
      ],
      moral: [
        { id: "sin_struggle", text: "Emphasize your moral struggle with sin", category: "tears" },
        { id: "inability_goodness", text: "Describe your inability to be good on your own", category: "tears" }
      ],
      intellectual: [
        { id: "truth_seeking", text: "Highlight your intellectual search for truth", category: "tears" },
        { id: "philosophical_confusion", text: "Describe your philosophical confusion", category: "tears" }
      ]
    },

    voice_source: {
      natural: [
        { id: "child_playing", text: "Mention the child playing nearby naturally", category: "voice" },
        { id: "simple_description", text: "Keep the voice description simple and factual", category: "voice" }
      ],
      mysterious: [
        { id: "unexplained_voice", text: "Leave the voice source mysterious and unexplained", category: "voice" },
        { id: "ambiguous_origin", text: "Emphasize the ambiguous origin of the voice", category: "voice" }
      ],
      divine: [
        { id: "gods_voice", text: "Present the voice as divine intervention", category: "voice" },
        { id: "miracle_framing", text: "Frame the voice as a miraculous moment", category: "voice" }
      ]
    },

    // Anti-Manichaean path sub-choices
    manichaeism_failure: {
      intellectual: [
        { id: "unanswered_questions", text: "List questions Manichaeism couldn't answer", category: "manichaeism" },
        { id: "intellectual_inadequacy", text: "Show Manichaeism's intellectual inadequacy", category: "manichaeism" }
      ],
      spiritual: [
        { id: "spiritual_emptiness", text: "Describe spiritual emptiness under Manichaeism", category: "manichaeism" },
        { id: "moral_failure", text: "Show how Manichaeism couldn't change your heart", category: "manichaeism" }
      ],
      both: [
        { id: "dual_failure", text: "Show both intellectual and spiritual failure of Manichaeism", category: "manichaeism" },
        { id: "comprehensive_critique", text: "Provide comprehensive critique of Manichaeism", category: "manichaeism" }
      ]
    },

    romans_passage: {
      providence: [
        { id: "divine_guidance", text: "Emphasize divine providence in the text selection", category: "romans" },
        { id: "god_orchestrated", text: "Show God orchestrating the perfect passage", category: "romans" }
      ],
      contrast_texts: [
        { id: "scripture_power", text: "Contrast Christian scripture's power with Manichaean texts", category: "romans" },
        { id: "text_comparison", text: "Compare effectiveness of different sacred texts", category: "romans" }
      ],
      grace_vs_gnosis: [
        { id: "grace_emphasis", text: "Emphasize grace over knowledge (gnosis)", category: "romans" },
        { id: "theological_contrast", text: "Highlight theological difference: grace vs. gnosis", category: "romans" }
      ]
    },

    // Teaching path sub-choices
    conversion_timing: {
      sudden: [
        { id: "dramatic_moment", text: "Emphasize the sudden, dramatic moment of conversion", category: "timing" },
        { id: "instant_transformation", text: "Highlight the instantaneous transformation", category: "timing" }
      ],
      preparation: [
        { id: "long_journey", text: "Trace the long preparation before the garden", category: "timing" },
        { id: "years_seeking", text: "Show the years of seeking that led to this moment", category: "timing" }
      ],
      mysterious: [
        { id: "gods_timing", text: "Reflect on the mystery of God's timing", category: "timing" },
        { id: "preparation_and_moment", text: "Show both preparation and sudden moment", category: "timing" }
      ]
    },

    community_impact: {
      individual: [
        { id: "private_experience", text: "Focus on your private, individual experience", category: "community" },
        { id: "personal_transformation", text: "Emphasize personal transformation", category: "community" }
      ],
      communal: [
        { id: "alypius_conversion", text: "Include Alypius's conversion in detail", category: "community" },
        { id: "spreading_faith", text: "Show how conversion spreads through community", category: "community" }
      ],
      both: [
        { id: "personal_and_social", text: "Show both personal and communal dimensions", category: "community" },
        { id: "individual_in_community", text: "Present individual conversion within community context", category: "community" }
      ]
    },

    // Role of will (applies to all paths)
    role_of_will: {
      irresistible: [
        { id: "grace_overwhelming", text: "Show grace as irresistible and overwhelming", category: "will" },
        { id: "no_choice", text: "Emphasize you had no choice but to believe", category: "will" },
        { id: "gods_sovereignty", text: "Highlight God's absolute sovereignty in conversion", category: "will" }
      ],
      cooperation: [
        { id: "grace_and_choice", text: "Show cooperation between grace and your choice", category: "will" },
        { id: "enabled_will", text: "Describe how God enabled your will to choose", category: "will" },
        { id: "synergy", text: "Present the synergy between divine and human action", category: "will" }
      ],
      mystery: [
        { id: "unexplainable", text: "Leave the will/grace relationship mysterious", category: "will" },
        { id: "paradox", text: "Embrace the paradox of choice and grace", category: "will" },
        { id: "humble_uncertainty", text: "Express humble uncertainty about the mechanics", category: "will" }
      ]
    },

    // Universal components (appear regardless of choices)
    universal: [
      { id: "garden_setting", text: "Describe the garden setting in Milan", category: "setting" },
      { id: "fig_tree", text: "Detail the fig tree and its significance", category: "setting" },
      { id: "tolle_lege", text: "Include the 'tolle lege' (take and read) moment", category: "voice" },
      { id: "romans_text", text: "Quote or reference the Romans passage", category: "scripture" },
      { id: "moment_peace", text: "Describe the moment of peace and certainty", category: "experience" },
      { id: "alypius_present", text: "Mention Alypius's presence", category: "community" },
      { id: "monica_reaction", text: "Include telling Monica about your conversion", category: "family" },
      { id: "reflective_distance", text: "Acknowledge the 11-year gap between event and writing", category: "meta" }
    ]
  },

  budget: {
    min: 6,
    max: 8,
    message: "Select 6-8 components that will shape your Confessions narrative."
  },

  rationalizationPrompt: {
    title: "Explain Your Narrative Structure",
    question: "Why did you arrange these components in this particular order?",
    guidance: "Consider: Does your structure build emotional intensity? Move from external events to internal meaning? Follow a chronological pattern? Serve your theological argument?",
    placeholder: "Explain your compositional reasoning in 2-4 sentences..."
  }
};

// ===== AUGUSTINE STAGE 3 CONTENT =====
const augustineStage3Content = {
  intro: {
    title: "Stage 3: Write Your Confessions",
    paragraphs: [
      "Now you will compose your actual account of your conversion in Milan.",
      "Use the structure you created in Stage 2 as your guide. Your selected components and their sequence should shape how you tell the story.",
      "Write as Augustine would have written in 397 CE—looking back eleven years to a life-changing moment, shaping memory into meaning for your readers."
    ],
    guidelines: [
      "Write up to 200 words (1-2 paragraphs)",
      "Follow the sequence of components you arranged",
      "Use first-person perspective ('I was in the garden...', 'I heard...')",
      "Your work auto-saves as you type"
    ],
    buttonText: "Begin Writing"
  },
  writingPrompt: {
    title: "Write Your Confessions",
    prompt: "Using your structure as a guide, compose your account of the conversion in the garden.",
    placeholder: "In the year 386, I was in Milan, torn between my old life and the truth I glimpsed in Christianity...",
    minWords: 100,
    targetWords: 200,
    maxWords: 200
  }
};

// ===== EUSEBIUS STAGE 3 CONTENT =====
const stage3Content = {
  intro: {
    title: "Stage 3: Write Your Narrative",
    paragraphs: [
      "Now you will compose your actual narrative of the persecution in Caesarea.",
      "Use the structure you created in Stage 2 as your guide. Your selected components and their sequence should shape how you tell the story.",
      "Write as Eusebius would have written in 303 CE—as a witness to recent events, shaping them for your Christian audience."
    ],
    guidelines: [
      "Write up to 200 words (1-2 paragraphs)",
      "Follow the sequence of components you arranged",
      "Use first-person perspective ('I witnessed...') or third-person ('The persecution began...')",
      "Your work auto-saves as you type"
    ],
    buttonText: "Begin Writing"
  },
  writingPrompt: {
    title: "Write Your Account",
    prompt: "Using your structure as a guide, compose your narrative of the persecution in Caesarea.",
    placeholder: "In the year 303, during the reign of Emperor Diocletian...",
    minWords: 100,
    targetWords: 200,
    maxWords: 200
  }
};

// ===== HELPER FUNCTIONS =====

function getChoiceText(choiceIndex, optionId) {
  const choice = stage1Content.choices[choiceIndex];
  const option = choice.options.find(o => o.id === optionId);
  return option ? option.text : '';
}

function generateMidReflection(choices) {
  const patterns = {
    'divine-god': "You're creating a theological narrative where God is the author of events, not just observers.",
    'divine-community': "You're showing how divine purpose works through collective faith, not individual actions.",
    'divine-martyrs': "You're telling a story of chosen individuals within God's plan.",
    'divine-leaders': "You're presenting church leadership as instruments of divine will.",

    'suffering-martyrs': "You're creating an emotionally powerful story centered on personal sacrifice.",
    'suffering-community': "You're showing the shared pain of persecution, emphasizing collective trauma.",

    'courage-martyrs': "You're building a heroic narrative around specific acts of bravery.",
    'courage-community': "You're presenting steadfast faith as a community achievement.",

    'cruelty-martyrs': "You're creating a story of injustice done to innocent individuals.",
    'cruelty-community': "You're framing persecution as an attack on the Christian people."
  };

  const key = `${choices.emphasis}-${choices.protagonist}`;
  return patterns[key] || "You're shaping a narrative with a specific perspective and purpose.";
}

function generateNarrativeProfile(choices) {
  // Define profiles based on choice combinations
  const profiles = {
    'theological_comforter': {
      name: "Theological Comforter",
      description: "Your account will tell a story of divine providence working through persecution. Physical suffering is minimized; spiritual meaning is emphasized. The narrative moves from event to theological interpretation quickly.",
      reflection: [
        "→ You've written to comfort and inspire, not to horrify.",
        "→ You've made persecution part of God's story, not Rome's.",
        "→ Your silences matter: individual pain is backgrounded."
      ]
    },
    'martyrological_chronicler': {
      name: "Martyrological Chronicler",
      description: "Your account centers on individual acts of courage and sacrifice. You document suffering to honor the martyrs and preserve their witness. The narrative is concrete, personal, and emotionally engaging.",
      reflection: [
        "→ You've created heroes through detailed suffering.",
        "→ You've made martyrs memorable individuals, not statistics.",
        "→ Your reader will feel the cost of faith."
      ]
    },
    'political_critic': {
      name: "Political Critic",
      description: "Your account emphasizes Roman injustice and the illegitimacy of persecution. The state becomes the antagonist. Your narrative builds a case against persecution through documentation of cruelty.",
      reflection: [
        "→ You've framed this as a story of injustice, not just suffering.",
        "→ You've made Rome responsible, not just God sovereign.",
        "→ Your account could support future political arguments."
      ]
    },
    'pastoral_encourager': {
      name: "Pastoral Encourager",
      description: "Your account emphasizes collective resilience and ongoing faith. You minimize graphic suffering to avoid trauma and focus on how the community endures. The narrative provides hope.",
      reflection: [
        "→ You've written for survivors, not outsiders.",
        "→ You've shown faith continuing despite persecution.",
        "→ Your account helps the community move forward."
      ]
    },
    'providential_historian': {
      name: "Providential Historian",
      description: "Your account treats persecution as a chapter in God's plan. Events are reported but quickly interpreted theologically. The narrative suggests meaning and purpose behind suffering.",
      reflection: [
        "→ You've made history a theological story.",
        "→ You've given suffering a purpose beyond itself.",
        "→ Your account explains why, not just what happened."
      ]
    }
  };

  // Simple algorithm to determine profile
  if (choices.emphasis === 'divine' && choices.violence === 'omit') {
    return profiles.theological_comforter;
  } else if (choices.emphasis === 'suffering' && choices.protagonist === 'martyrs') {
    return profiles.martyrological_chronicler;
  } else if (choices.emphasis === 'cruelty' && choices.violence !== 'omit') {
    return profiles.political_critic;
  } else if (choices.protagonist === 'community' && choices.violence === 'minimal') {
    return profiles.pastoral_encourager;
  } else {
    return profiles.providential_historian;
  }
}

// Augustine helper functions
function getMainPurposeText(purposeId) {
  const purposes = {
    personal: "Personal testimony",
    antiManichaean: "Breaking from Manichaeism",
    teaching: "Teaching about conversion"
  };
  return purposes[purposeId] || '';
}

function getWillPositionText(willId) {
  const positions = {
    irresistible: "Grace was irresistible - I could not have resisted",
    cooperation: "I cooperated with grace - God enabled my choice",
    mystery: "The mystery is too deep to say"
  };
  return positions[willId] || '';
}

function getRevisionDecisionText(revisionId) {
  const decisions = {
    emphasize_grace: "Emphasized God's grace throughout",
    add_interpretation: "Added grace language to original",
    keep_original: "Kept original emphasis unchanged"
  };
  return decisions[revisionId] || '';
}

function generateAugustineChoicesSummary(choices) {
  const summary = [];

  summary.push(`Main purpose: ${getMainPurposeText(choices.mainPurpose)}`);

  // Add branched choices based on main purpose
  if (choices.mainPurpose === 'personal') {
    if (choices.tears_meaning) summary.push(`Tears about: ${choices.tears_meaning}`);
    if (choices.voice_source) summary.push(`Voice: ${choices.voice_source}`);
  } else if (choices.mainPurpose === 'antiManichaean') {
    if (choices.manichaeism_failure) summary.push(`Manichaeism failed: ${choices.manichaeism_failure}`);
    if (choices.romans_passage) summary.push(`Romans passage: ${choices.romans_passage}`);
  } else if (choices.mainPurpose === 'teaching') {
    if (choices.conversion_timing) summary.push(`Conversion timing: ${choices.conversion_timing}`);
    if (choices.community_impact) summary.push(`Community impact: ${choices.community_impact}`);
  }

  summary.push(`Role of will: ${getWillPositionText(choices.role_of_will)}`);
  summary.push(`Revision: ${getRevisionDecisionText(choices.revision_decision)}`);

  return summary;
}

// ===== UI RENDERING FUNCTIONS =====

// Title Page
function renderTitlePage() {
  const container = document.getElementById('game-container');

  container.innerHTML = `
    <div class="screen title-screen fade-in">
      <div class="title-illustration">
        <div class="illustration-placeholder">
          ${titleContent.illustration}
        </div>
      </div>

      <h1 class="main-title">${titleContent.title}</h1>
      <h2 class="subtitle">${titleContent.subtitle}</h2>
      <p class="tagline">${titleContent.tagline}</p>

      <div class="title-actions">
        <button class="primary-button large-button" onclick="startOnboarding()">
          Begin Experience →
        </button>
        ${gameState.hasSeenOnboarding ?
          '<button class="secondary-button" onclick="skipToEusebius()">Skip Tutorial →</button>' :
          ''}
      </div>

      <div class="title-footer">
        <p>Bar-Ilan University • Introduction to Early Medieval Europe</p>
      </div>
    </div>
  `;
}

// Onboarding
function startOnboarding() {
  gameState.currentStage = 'onboarding';
  gameState.onboardingStep = 0;
  saveGameState();
  renderOnboarding();
}

function renderOnboarding() {
  const step = onboardingContent.steps[gameState.onboardingStep];
  const totalSteps = onboardingContent.steps.length;
  const container = document.getElementById('game-container');

  container.innerHTML = `
    <div class="screen onboarding-screen fade-in">
      <div class="onboarding-progress">
        <span>Step ${gameState.onboardingStep + 1} of ${totalSteps}</span>
      </div>

      <div class="onboarding-content">
        <div class="onboarding-visual">
          <div class="visual-mockup ${step.visual}">
            ${getVisualMockup(step.visual)}
          </div>
        </div>

        <div class="onboarding-text">
          <h2>${step.title}</h2>
          ${step.content.map(p => `<p>${p}</p>`).join('')}
        </div>
      </div>

      <div class="onboarding-actions">
        ${gameState.onboardingStep > 0 ?
          '<button class="secondary-button" onclick="previousOnboardingStep()">← Back</button>' :
          '<button class="secondary-button" onclick="skipOnboarding()">Skip Tutorial</button>'}
        <button class="primary-button" onclick="nextOnboardingStep()">
          ${gameState.onboardingStep < totalSteps - 1 ? 'Next →' : 'Choose Your Author →'}
        </button>
      </div>
    </div>
  `;
}

function getVisualMockup(visualType) {
  const mockups = {
    'preview-welcome': `
      <div class="mockup-welcome-visual">
        <img src="Images/burning-basilica.png" alt="Burning Basilica" class="welcome-basilica-img">
      </div>
    `,
    'preview-stages': `
      <div class="mockup-stages">
        <div class="mockup-stage">1<br/>Choose</div>
        <div class="mockup-arrow">→</div>
        <div class="mockup-stage">2<br/>Structure</div>
        <div class="mockup-arrow">→</div>
        <div class="mockup-stage">3<br/>Write</div>
        <div class="mockup-arrow">→</div>
        <div class="mockup-stage">4<br/>Export</div>
      </div>
    `,
    'preview-authors': `
      <div class="mockup-authors">
        <div class="mockup-author-card">
          <img src="Images/eusebius.png" alt="Eusebius of Caesarea" class="mockup-portrait-img">
          <div class="mockup-name">Eusebius</div>
          <div class="mockup-date">303 CE</div>
        </div>
        <div class="mockup-author-card">
          <img src="Images/augustine.png" alt="Augustine of Hippo" class="mockup-portrait-img">
          <div class="mockup-name">Augustine</div>
          <div class="mockup-date">397 CE</div>
        </div>
      </div>
    `,
    'preview-export': `
      <div class="mockup-card">
        <div class="mockup-title">Your Work</div>
        <div class="mockup-body">
          <div class="mockup-text-block"></div>
          <div class="mockup-text-block"></div>
          <div class="mockup-download-btn">↓ Download JSON</div>
        </div>
      </div>
    `
  };

  return mockups[visualType] || '<div class="mockup-placeholder">Preview</div>';
}

function nextOnboardingStep() {
  const totalSteps = onboardingContent.steps.length;

  if (gameState.onboardingStep < totalSteps - 1) {
    gameState.onboardingStep++;
    saveGameState();
    renderOnboarding();
  } else {
    // Finished onboarding, go to author choice
    gameState.hasSeenOnboarding = true;
    showAuthorChoice();
  }
}

function previousOnboardingStep() {
  if (gameState.onboardingStep > 0) {
    gameState.onboardingStep--;
    saveGameState();
    renderOnboarding();
  }
}

function skipOnboarding() {
  gameState.hasSeenOnboarding = true;
  saveGameState();
  showAuthorChoice();
}

function skipToEusebius() {
  showAuthorChoice();
}

// Author Choice
function showAuthorChoice() {
  gameState.currentStage = 'authorChoice';
  saveGameState();
  renderAuthorChoice();
}

function renderAuthorChoice() {
  console.log('=== renderAuthorChoice called ===');
  const content = authorChoiceContent;
  const container = document.getElementById('game-container');

  container.innerHTML = `
    <div class="screen author-choice-screen fade-in">
      <h1>${content.title}</h1>
      <p class="subtitle">${content.subtitle}</p>
      <p class="instruction">${content.instruction}</p>

      <div class="author-cards">
        ${content.authors.map(author => `
          <div class="author-card" onclick="selectAuthor('${author.id}')">
            <div class="author-portrait">
              ${author.image}
            </div>
            <div class="author-info">
              <h2 class="author-name">${author.name}</h2>
              <p class="author-dates">${author.dates}</p>
              <p class="author-context"><em>${author.context}</em></p>
              <p class="author-description">${author.description}</p>
            </div>
            <button class="select-author-btn">Select ${author.name.split(' ')[0]} →</button>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function selectAuthor(authorId) {
  gameState.selectedAuthor = authorId;
  saveGameState();

  if (authorId === 'eusebius') {
    showEusebiusBio();
  } else if (authorId === 'augustine') {
    showAugustineBio();
  }
}

// Author Biography
function showEusebiusBio() {
  gameState.currentStage = 'bio';
  saveGameState();
  renderEusebiusBio();
}

function renderEusebiusBio() {
  const bio = eusebiusBio;
  const container = document.getElementById('game-container');

  container.innerHTML = `
    <div class="screen bio-screen fade-in">
      <div class="bio-header">
        <div class="bio-portrait">
          <div class="portrait-placeholder">
            ${bio.image}
          </div>
        </div>
        <div class="bio-title">
          <h1>${bio.name}</h1>
          <p class="bio-dates">${bio.dates}</p>
        </div>
      </div>

      <div class="bio-content">
        ${bio.paragraphs.map(p => `<p>${p}</p>`).join('')}

        <div class="bio-context">
          <h3>Your Task</h3>
          <p>${bio.context}</p>
        </div>
      </div>

      <div class="bio-actions">
        <button class="primary-button large-button" onclick="startEusebiusStage1()">
          Begin Writing as Eusebius →
        </button>
      </div>
    </div>
  `;
}

function startEusebiusStage1() {
  gameState.currentStage = 'intro';
  saveGameState();
  renderIntro();
}

function showAugustineBio() {
  gameState.currentStage = 'bio';
  saveGameState();
  renderAugustineBio();
}

function renderAugustineBio() {
  const bio = augustineBio;
  const container = document.getElementById('game-container');

  container.innerHTML = `
    <div class="screen bio-screen fade-in">
      <div class="bio-header">
        <div class="bio-portrait">
          <div class="portrait-placeholder">
            ${bio.image}
          </div>
        </div>
        <div class="bio-title">
          <h1>${bio.name}</h1>
          <p class="bio-dates">${bio.dates}</p>
        </div>
      </div>

      <div class="bio-content">
        ${bio.paragraphs.map(p => `<p>${p}</p>`).join('')}

        <div class="bio-context">
          <h3>Your Task</h3>
          <p>${bio.context}</p>
        </div>
      </div>

      <div class="bio-actions">
        <button class="primary-button large-button" onclick="startAugustineStage1()">
          Begin Writing as Augustine →
        </button>
      </div>
    </div>
  `;
}

function startAugustineStage1() {
  gameState.currentStage = 'augustine_intro';
  saveGameState();
  renderAugustineIntro();
}

// ===== AUGUSTINE STAGE 1 RENDERING =====

function renderAugustineIntro() {
  const content = augustineStage1Content.intro;
  const container = document.getElementById('game-container');

  container.innerHTML = `
    <div class="augustine-stage">
      <div class="screen intro-screen fade-in">
        <div class="stage-indicator">Stage 1: Authorial Choices</div>
        <h1>${content.title}</h1>
        ${content.paragraphs.map(p => `<p>${p}</p>`).join('')}

        <div class="intro-visual">
          <img src="Images/garden.png" alt="Garden in Milan" class="intro-illustration-img">
        </div>

        <button class="primary-button" onclick="showAugustineSituation()">${content.buttonText}</button>
      </div>
    </div>
  `;
}

function showAugustineSituation() {
  gameState.currentStage = 'augustine_situation';
  saveGameState();
  renderAugustineSituation();
}

function renderAugustineSituation() {
  const content = augustineStage1Content.situationScreen;
  const container = document.getElementById('game-container');

  container.innerHTML = `
    <div class="augustine-stage">
      <div class="screen fade-in">
        <div class="stage-indicator">Stage 1: Context</div>
        <h2>${content.title}</h2>
        ${content.paragraphs.map(p => `<p>${p}</p>`).join('')}

        <div class="feedback-box" style="margin-top: 24px;">
          <h3>${content.contexts.personal.title}</h3>
          <ul>
            ${content.contexts.personal.items.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>

        <div class="feedback-box">
          <h3>${content.contexts.historical.title}</h3>
          <ul>
            ${content.contexts.historical.items.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>

        <p style="margin-top: 24px; font-style: italic;">${content.closing}</p>

        <button class="primary-button" onclick="showAugustineEvent()" style="margin-top: 24px;">${content.buttonText}</button>
      </div>
    </div>
  `;
}

function showAugustineEvent() {
  gameState.currentStage = 'augustine_event';
  saveGameState();
  renderAugustineEvent();
}

function renderAugustineEvent() {
  const content = augustineStage1Content.eventScreen;
  const container = document.getElementById('game-container');

  container.innerHTML = `
    <div class="augustine-stage">
    <div class="screen fade-in">
      <div class="stage-indicator">Stage 1: The Event</div>
      <h2>${content.title}</h2>
      <p>${content.intro}</p>

      <div class="feedback-box" style="margin-top: 24px;">
        <ul>
          ${content.events.map(event => `<li>${event}</li>`).join('')}
        </ul>
      </div>

      ${content.closing.map(p => `<p style="margin-top: 16px;">${p}</p>`).join('')}

      <button class="primary-button" onclick="showAugustineMainPurpose()" style="margin-top: 24px;">${content.buttonText}</button>
    </div>
    </div>
  `;
}

function showAugustineMainPurpose() {
  gameState.currentStage = 'augustine_mainpurpose';
  saveGameState();
  renderAugustineMainPurpose();
}

function renderAugustineMainPurpose() {
  const choice = augustineStage1Content.mainPurposeChoice;
  const container = document.getElementById('game-container');

  container.innerHTML = `
    <div class="augustine-stage">
    <div class="screen choice-screen fade-in">
      <div class="stage-indicator">Stage 1: Choose Your Purpose</div>
      <h2>${choice.title}</h2>

      <div class="choice-context">
        <p class="context-text">${choice.context}</p>
      </div>

      <h3 class="choice-question">${choice.question}</h3>

      <div class="options-container">
        ${choice.options.map(option => `
          <div class="option-card" onclick="selectAugustineMainPurpose('${option.id}')">
            <div class="option-main">${option.text}</div>
            <div class="option-description">${option.description}</div>
          </div>
        `).join('')}
      </div>
    </div>
    </div>
  `;
}

function selectAugustineMainPurpose(purposeId) {
  gameState.choices.mainPurpose = purposeId;
  saveGameState();

  // Show first branched question for this purpose
  gameState.augustineBranchedIndex = 0;
  renderAugustineBranchedQuestion(purposeId, 0);
}

function renderAugustineBranchedQuestion(purposeId, questionIndex) {
  const questions = augustineStage1Content.branchedQuestions[purposeId];
  if (!questions || questionIndex >= questions.length) {
    // Finished branched questions, move to new context
    showAugustineNewContext();
    return;
  }

  const question = questions[questionIndex];
  const container = document.getElementById('game-container');

  container.innerHTML = `
    <div class="augustine-stage">
    <div class="screen choice-screen fade-in">
      <div class="stage-indicator">Stage 1: ${question.title}</div>

      <div class="choice-context">
        <p class="context-text">${question.context}</p>
      </div>

      <h3 class="choice-question">${question.question}</h3>

      <div class="options-container">
        ${question.options.map(option => `
          <div class="option-card" onclick="selectAugustineBranchedOption('${question.id}', '${option.id}', '${purposeId}', ${questionIndex})">
            <div class="option-main">${option.text}</div>
            <div class="option-description">${option.description}</div>
          </div>
        `).join('')}
      </div>
    </div>
    </div>
  `;
}

function selectAugustineBranchedOption(questionId, optionId, purposeId, questionIndex) {
  gameState.choices[questionId] = optionId;
  saveGameState();

  // Move to next question in this branch
  renderAugustineBranchedQuestion(purposeId, questionIndex + 1);
}

function showAugustineNewContext() {
  gameState.currentStage = 'augustine_newcontext';
  saveGameState();
  renderAugustineNewContext();
}

function renderAugustineNewContext() {
  const content = augustineStage1Content.newContextScreen;
  const container = document.getElementById('game-container');

  container.innerHTML = `
    <div class="augustine-stage">
    <div class="screen fade-in">
      <div class="stage-indicator">Stage 1: New Context</div>
      <h2>${content.title}</h2>
      ${content.paragraphs.map(p => `<p>${p}</p>`).join('')}

      <div class="intro-visual">
        <img src="Images/pelagius.png" alt="Pelagius Debate" class="intro-illustration-img">
      </div>

      <button class="primary-button" onclick="showAugustineWillQuestion()" style="margin-top: 24px;">${content.buttonText}</button>
    </div>
    </div>
  `;
}

function showAugustineWillQuestion() {
  gameState.currentStage = 'augustine_will';
  saveGameState();
  renderAugustineWillQuestion();
}

function renderAugustineWillQuestion() {
  const choice = augustineStage1Content.willQuestionChoice;
  const container = document.getElementById('game-container');

  container.innerHTML = `
    <div class="augustine-stage">
    <div class="screen choice-screen fade-in">
      <div class="stage-indicator">Stage 1: ${choice.title}</div>

      <div class="choice-context">
        ${choice.context.map(p => `<p class="context-text">${p}</p>`).join('')}
      </div>

      <h3 class="choice-question">${choice.question}</h3>

      <div class="options-container">
        ${choice.options.map(option => `
          <div class="option-card" onclick="selectAugustineWillOption('${option.id}')">
            <div class="option-main">${option.text}</div>
            <div class="option-description">${option.description}</div>
          </div>
        `).join('')}
      </div>
    </div>
    </div>
  `;
}

function selectAugustineWillOption(optionId) {
  gameState.choices.role_of_will = optionId;
  saveGameState();
  showAugustineRevisionChoice();
}

function showAugustineRevisionChoice() {
  gameState.currentStage = 'augustine_revision';
  saveGameState();
  renderAugustineRevisionChoice();
}

function renderAugustineRevisionChoice() {
  const choice = augustineStage1Content.revisionChoice;
  const contextParagraphs = choice.getContext(gameState.choices.mainPurpose);
  const container = document.getElementById('game-container');

  container.innerHTML = `
    <div class="augustine-stage">
    <div class="screen choice-screen fade-in">
      <div class="stage-indicator">Stage 1: ${choice.title}</div>

      <div class="choice-context">
        ${contextParagraphs.map(p => `<p class="context-text">${p}</p>`).join('')}
      </div>

      <h3 class="choice-question">${choice.question}</h3>

      <div class="options-container">
        ${choice.options.map(option => `
          <div class="option-card" onclick="selectAugustineRevisionOption('${option.id}')">
            <div class="option-main">${option.text}</div>
            <div class="option-description">${option.description}</div>
          </div>
        `).join('')}
      </div>
    </div>
    </div>
  `;
}

function selectAugustineRevisionOption(optionId) {
  gameState.choices.revision_decision = optionId;
  saveGameState();
  renderAugustineFinalSummary();
}

function renderAugustineFinalSummary() {
  const summary = augustineStage1Content.finalSummary;
  const content = summary.getContent(gameState.choices);
  const container = document.getElementById('game-container');

  container.innerHTML = `
    <div class="augustine-stage">
    <div class="screen summary-screen fade-in">
      <div class="stage-indicator">Stage 1 Complete</div>
      <h2>${summary.title}</h2>

      <div class="feedback-box">
        <h3>Your Authorial Decisions</h3>
        ${content.choicesSummary.map(line => `<p class="summary-line">✓ ${line}</p>`).join('')}
      </div>

      <div class="feedback-box reflection-box">
        <h3>What This Means</h3>
        <p>You've shaped your conversion story based on your purposes and contexts.</p>
        <p class="prompt-line">→ Your original purpose: ${content.mainPurpose}</p>
        <p class="prompt-line">→ Your theological position: ${content.willPosition}</p>
        <p class="prompt-line">→ Your revision decision: ${content.revisionDecision}</p>
        <p class="closing-prompt"><strong>Think about:</strong> How did changing circumstances and purposes shape how you told the same story?</p>
      </div>

      <button class="primary-button" onclick="proceedToAugustineStage2()">${summary.buttonText}</button>
    </div>
    </div>
  `;
}

function proceedToAugustineStage2() {
  gameState.currentStage = 'augustine_stage2';
  // Reset Stage 2 state when entering fresh
  gameState.selectedComponents = [];
  gameState.componentSequence = [];
  gameState.rationalization = '';
  saveGameState();
  renderAugustineStage2Intro();
}

// ===== AUGUSTINE STAGE 2 RENDERING =====

function renderAugustineStage2Intro() {
  const content = augustineStage2Content.intro;
  const container = document.getElementById('game-container');

  container.innerHTML = `
    <div class="augustine-stage">
    <div class="screen intro-screen fade-in">
      <div class="stage-indicator">Stage 2 of 5: Structure Your Composition</div>
      <h1>${content.title}</h1>
      ${content.paragraphs.map(p => `<p>${p}</p>`).join('')}

      <div class="intro-visual">
        <img src="Images/confessions.png" alt="Augustine's Confessions" class="intro-illustration-img">
      </div>

      <button class="primary-button" onclick="renderAugustineComponentSelection()">${content.buttonText}</button>
    </div>
    </div>
  `;
}

function getAugustineAvailableComponents() {
  const components = [];
  const choices = gameState.choices;

  // Get components for each choice made in Augustine Stage 1
  Object.keys(choices).forEach(choiceKey => {
    const choiceValue = choices[choiceKey];
    if (augustineStage2Content.componentsByChoice[choiceKey] &&
        augustineStage2Content.componentsByChoice[choiceKey][choiceValue]) {
      components.push(...augustineStage2Content.componentsByChoice[choiceKey][choiceValue]);
    }
  });

  // Always add universal components
  components.push(...augustineStage2Content.componentsByChoice.universal);

  return components;
}

function renderAugustineComponentSelection() {
  const components = getAugustineAvailableComponents();
  const budget = augustineStage2Content.budget;
  const container = document.getElementById('game-container');

  // Clean up selectedComponents - remove duplicates and invalid IDs
  const validComponentIds = new Set(components.map(c => c.id));
  gameState.selectedComponents = [...new Set(gameState.selectedComponents)].filter(id => validComponentIds.has(id));
  saveGameState();

  container.innerHTML = `
    <div class="augustine-stage">
    <div class="screen component-selection-screen fade-in">
      <div class="stage-indicator">Stage 2 of 5: Component Selection</div>
      <h2>Select Your Narrative Components</h2>

      <div class="budget-indicator">
        <p><strong>${budget.message}</strong></p>
        <p class="selection-count">Selected: <span id="selected-count">0</span> / ${budget.max}</p>
      </div>

      <div class="components-grid">
        ${components.map(comp => `
          <div class="component-item" data-component-id="${comp.id}">
            <label class="component-label">
              <input type="checkbox"
                     class="component-checkbox"
                     value="${comp.id}"
                     onchange="toggleAugustineComponent('${comp.id}', this.checked)">
              <span class="component-text">${comp.text}</span>
            </label>
          </div>
        `).join('')}
      </div>

      <div class="component-actions">
        <button class="primary-button" id="continue-to-sequencing" onclick="proceedToAugustineSequencing()" disabled>
          Continue to Sequencing →
        </button>
        <p class="help-text" id="selection-help">Please select at least ${budget.min} components.</p>
      </div>
    </div>
    </div>
  `;

  // Restore previous selections if any
  if (gameState.selectedComponents.length > 0) {
    gameState.selectedComponents.forEach(compId => {
      const checkbox = container.querySelector(`input[value="${compId}"]`);
      if (checkbox) checkbox.checked = true;
    });
  }

  // Update count after restoring
  updateAugustineComponentCount();
}

function toggleAugustineComponent(componentId, isChecked) {
  const budget = augustineStage2Content.budget;

  if (isChecked) {
    if (gameState.selectedComponents.length < budget.max) {
      gameState.selectedComponents.push(componentId);
    } else {
      // Uncheck if over budget
      const checkbox = document.querySelector(`input[value="${componentId}"]`);
      if (checkbox) checkbox.checked = false;
      return;
    }
  } else {
    gameState.selectedComponents = gameState.selectedComponents.filter(id => id !== componentId);
  }

  updateAugustineComponentCount();
  saveGameState();
}

function updateAugustineComponentCount() {
  const budget = augustineStage2Content.budget;
  const count = gameState.selectedComponents.length;
  const countDisplay = document.getElementById('selected-count');
  const continueBtn = document.getElementById('continue-to-sequencing');
  const helpText = document.getElementById('selection-help');

  if (countDisplay) countDisplay.textContent = count;

  if (count >= budget.min && count <= budget.max) {
    if (continueBtn) continueBtn.disabled = false;
    if (helpText) helpText.textContent = `Good! You've selected ${count} components.`;
  } else if (count < budget.min) {
    if (continueBtn) continueBtn.disabled = true;
    if (helpText) helpText.textContent = `Please select at least ${budget.min} components (${budget.min - count} more needed).`;
  } else {
    if (continueBtn) continueBtn.disabled = true;
    if (helpText) helpText.textContent = `Maximum ${budget.max} components. Please deselect ${count - budget.max}.`;
  }
}

function proceedToAugustineSequencing() {
  if (gameState.selectedComponents.length < augustineStage2Content.budget.min) {
    return;
  }

  // Initialize sequence if not already set
  if (gameState.componentSequence.length === 0) {
    gameState.componentSequence = [...gameState.selectedComponents];
  }

  saveGameState();
  renderAugustineSequencing();
}

function renderAugustineSequencing() {
  const components = getAugustineAvailableComponents();
  const selectedComponentObjects = gameState.componentSequence
    .map(id => components.find(c => c.id === id))
    .filter(c => c !== undefined);

  const container = document.getElementById('game-container');

  container.innerHTML = `
    <div class="augustine-stage">
    <div class="screen sequencing-screen fade-in">
      <div class="stage-indicator">Stage 2 of 5: Sequence Components</div>
      <h2>Arrange Your Narrative Structure</h2>

      <p class="instruction">Drag and drop to arrange your components in the order you want them to appear in your narrative.</p>

      <div id="sequence-list" class="sequence-list">
        ${selectedComponentObjects.map((comp, index) => `
          <div class="sequence-item" draggable="true" data-component-id="${comp.id}" data-index="${index}">
            <span class="sequence-number">${index + 1}</span>
            <span class="sequence-text">${comp.text}</span>
            <span class="drag-handle">⋮⋮</span>
          </div>
        `).join('')}
      </div>

      <div class="sequencing-actions">
        <button class="secondary-button" onclick="renderAugustineComponentSelection()">← Back to Selection</button>
        <button class="primary-button" onclick="proceedToAugustineRationalization()">Continue to Explanation →</button>
      </div>
    </div>
    </div>
  `;

  // Add drag-and-drop functionality
  initializeAugustineDragAndDrop();
}

function initializeAugustineDragAndDrop() {
  const sequenceList = document.getElementById('sequence-list');
  let draggedElement = null;

  sequenceList.addEventListener('dragstart', (e) => {
    if (e.target.classList.contains('sequence-item')) {
      draggedElement = e.target;
      e.target.classList.add('dragging');
    }
  });

  sequenceList.addEventListener('dragend', (e) => {
    if (e.target.classList.contains('sequence-item')) {
      e.target.classList.remove('dragging');
    }
  });

  sequenceList.addEventListener('dragover', (e) => {
    e.preventDefault();
    const afterElement = getDragAfterElement(sequenceList, e.clientY);
    if (afterElement == null) {
      sequenceList.appendChild(draggedElement);
    } else {
      sequenceList.insertBefore(draggedElement, afterElement);
    }
  });

  sequenceList.addEventListener('drop', (e) => {
    e.preventDefault();
    updateAugustineSequenceFromDOM();
  });
}

function getDragAfterElement(container, y) {
  const draggableElements = [...container.querySelectorAll('.sequence-item:not(.dragging)')];

  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect();
    const offset = y - box.top - box.height / 2;

    if (offset < 0 && offset > closest.offset) {
      return { offset: offset, element: child };
    } else {
      return closest;
    }
  }, { offset: Number.NEGATIVE_INFINITY }).element;
}

function updateAugustineSequenceFromDOM() {
  const sequenceItems = document.querySelectorAll('.sequence-item');
  gameState.componentSequence = Array.from(sequenceItems).map(item => item.dataset.componentId);

  // Update sequence numbers
  sequenceItems.forEach((item, index) => {
    const numberSpan = item.querySelector('.sequence-number');
    if (numberSpan) numberSpan.textContent = index + 1;
  });

  saveGameState();
}

function proceedToAugustineRationalization() {
  renderAugustineRationalization();
}

function renderAugustineRationalization() {
  const prompt = augustineStage2Content.rationalizationPrompt;
  const container = document.getElementById('game-container');

  container.innerHTML = `
    <div class="augustine-stage">
    <div class="screen rationalization-screen fade-in">
      <div class="stage-indicator">Stage 2 of 5: Explain Your Structure</div>
      <h2>${prompt.title}</h2>

      <div class="rationalization-prompt">
        <h3>${prompt.question}</h3>
        <p class="guidance">${prompt.guidance}</p>
      </div>

      <textarea
        id="rationalization-input"
        class="rationalization-textarea"
        placeholder="${prompt.placeholder}"
        maxlength="500"
      >${gameState.rationalization || ''}</textarea>

      <p class="char-count"><span id="char-count">0</span> / 500 characters</p>

      <div class="rationalization-actions">
        <button class="secondary-button" onclick="renderAugustineSequencing()">← Back to Sequencing</button>
        <button class="primary-button" id="continue-to-summary" onclick="renderAugustineStage2Summary()" disabled>
          Continue →
        </button>
      </div>
    </div>
    </div>
  `;

  // Add event listener for textarea
  const textarea = document.getElementById('rationalization-input');
  const charCount = document.getElementById('char-count');
  const continueBtn = document.getElementById('continue-to-summary');

  textarea.addEventListener('input', () => {
    const length = textarea.value.length;
    charCount.textContent = length;
    gameState.rationalization = textarea.value;
    saveGameState();

    // Enable continue button if there's some text (at least 50 chars)
    if (continueBtn) {
      continueBtn.disabled = length < 50;
    }
  });

  // Trigger initial count update
  if (gameState.rationalization) {
    charCount.textContent = gameState.rationalization.length;
    if (continueBtn) {
      continueBtn.disabled = gameState.rationalization.length < 50;
    }
  }
}

function renderAugustineStage2Summary() {
  const components = getAugustineAvailableComponents();
  const selectedComponentObjects = gameState.componentSequence
    .map(id => components.find(c => c.id === id))
    .filter(c => c !== undefined);

  const container = document.getElementById('game-container');

  container.innerHTML = `
    <div class="augustine-stage">
    <div class="screen summary-screen fade-in">
      <div class="stage-indicator">Stage 2 Complete</div>
      <h2>Your Narrative Structure</h2>

      <div class="feedback-box">
        <h3>Your Selected Components (in order)</h3>
        <ol class="summary-sequence">
          ${selectedComponentObjects.map(comp => `<li>${comp.text}</li>`).join('')}
        </ol>
      </div>

      <div class="feedback-box">
        <h3>Your Structural Reasoning</h3>
        <p class="rationalization-display">"${gameState.rationalization}"</p>
      </div>

      <div class="feedback-box reflection-box">
        <h3>What This Means</h3>
        <p>You've created a deliberate compositional structure for your Confessions.</p>
        <p class="prompt-line">→ The order of elements shapes how readers experience the story</p>
        <p class="prompt-line">→ Your choices reflect your purposes from Stage 1</p>
        <p class="prompt-line">→ Different sequences would create different theological and emotional effects</p>
        <p class="closing-prompt"><strong>Think about:</strong> How does your structure serve the argument you want to make?</p>
      </div>

      <button class="primary-button" onclick="proceedToAugustineStage3()">Proceed to Stage 3: Write Your Confessions →</button>
    </div>
    </div>
  `;
}

function proceedToAugustineStage3() {
  gameState.currentStage = 'augustine_stage3';
  // Clear narrative when entering Stage 3 fresh from Stage 2
  gameState.studentNarrative = '';
  saveGameState();
  renderAugustineStage3Intro();
}

function renderAugustineStage3Intro() {
  const content = augustineStage3Content.intro;
  const container = document.getElementById('game-container');

  container.innerHTML = `
    <div class="augustine-stage">
    <div class="screen intro-screen fade-in">
      <div class="stage-indicator">Stage 3 of 5: Write Your Narrative</div>
      <h2>${content.title}</h2>

      ${content.paragraphs.map(p => `<p>${p}</p>`).join('')}

      <div class="info-box">
        <h3>Guidelines</h3>
        <ul>
          ${content.guidelines.map(g => `<li>${g}</li>`).join('')}
        </ul>
      </div>

      <button class="primary-button" onclick="renderAugustineWritingInterface()">${content.buttonText}</button>
    </div>
    </div>
  `;
}

function renderAugustineWritingInterface() {
  const content = augustineStage3Content.writingPrompt;
  const container = document.getElementById('game-container');

  // Get the components and sequence from Stage 2
  const allComponents = getAugustineAvailableComponents();
  const sequencedComponents = gameState.componentSequence.map(id =>
    allComponents.find(c => c.id === id)
  ).filter(c => c !== undefined);

  container.innerHTML = `
    <div class="augustine-stage">
    <div class="screen writing-screen fade-in">
      <div class="stage-indicator">Stage 3 of 5: Write Your Confessions</div>
      <h2>${content.title}</h2>
      <p class="prompt-text">${content.prompt}</p>

      <div class="writing-layout">
        <div class="writing-main">
          <div class="word-count-indicator">
            <span id="word-count">0</span> words
            <span class="target-indicator">(target: ${content.targetWords} words)</span>
          </div>

          <textarea
            id="narrative-textarea"
            class="narrative-textarea"
            placeholder="${content.placeholder}"
            oninput="handleAugustineNarrativeInput()"
          >${gameState.studentNarrative}</textarea>

          <div class="writing-actions">
            <button class="secondary-button" onclick="renderAugustineStage2Summary()">← Back to Structure</button>
            <button class="primary-button" id="continue-btn" onclick="validateAugustineAndContinue()" disabled>Continue to Export →</button>
          </div>
        </div>

        <div class="writing-sidebar">
          <div class="reference-box">
            <h3>Your Structure Reference</h3>
            <p class="helper-text">Follow this sequence as you write:</p>
            <ol class="structure-reference-list">
              ${sequencedComponents.map((comp, idx) => `
                <li>
                  <div class="reference-number">${idx + 1}</div>
                  <div class="reference-text">${comp.text}</div>
                </li>
              `).join('')}
            </ol>
          </div>
        </div>
      </div>
    </div>
    </div>
  `;

  // Initialize word count
  updateAugustineWordCount();

  // Focus on textarea
  setTimeout(() => {
    document.getElementById('narrative-textarea').focus();
  }, 100);
}

function handleAugustineNarrativeInput() {
  const textarea = document.getElementById('narrative-textarea');
  gameState.studentNarrative = textarea.value;
  saveGameState();
  updateAugustineWordCount();
}

function updateAugustineWordCount() {
  const text = gameState.studentNarrative.trim();
  const wordCount = text === '' ? 0 : text.split(/\s+/).length;
  const wordCountEl = document.getElementById('word-count');
  const continueBtn = document.getElementById('continue-btn');

  if (wordCountEl) {
    wordCountEl.textContent = wordCount;

    // Update color based on target
    const minWords = augustineStage3Content.writingPrompt.minWords;
    const targetWords = augustineStage3Content.writingPrompt.targetWords;
    const maxWords = augustineStage3Content.writingPrompt.maxWords;

    if (wordCount < minWords) {
      wordCountEl.style.color = '#dc2626'; // red
    } else if (wordCount >= minWords && wordCount <= maxWords) {
      wordCountEl.style.color = '#059669'; // green
    } else {
      wordCountEl.style.color = '#d97706'; // orange
    }
  }

  // Enable/disable continue button
  if (continueBtn) {
    continueBtn.disabled = wordCount < augustineStage3Content.writingPrompt.minWords;
  }
}

function validateAugustineAndContinue() {
  const text = gameState.studentNarrative.trim();
  const wordCount = text === '' ? 0 : text.split(/\s+/).length;
  const minWords = augustineStage3Content.writingPrompt.minWords;

  if (wordCount < minWords) {
    alert(`Please write at least ${minWords} words before continuing.`);
    return;
  }

  proceedToAugustineStage4();
}

function proceedToAugustineStage4() {
  gameState.currentStage = 'augustine_stage4';
  saveGameState();
  renderAugustineStage4Export();
}

function renderAugustineStage4Export() {
  const container = document.getElementById('game-container');

  // Get all components for display
  const allComponents = getAugustineAvailableComponents();
  const sequencedComponents = gameState.componentSequence.map(id =>
    allComponents.find(c => c.id === id)
  ).filter(c => c !== undefined);

  // Calculate word count
  const text = gameState.studentNarrative.trim();
  const wordCount = text === '' ? 0 : text.split(/\s+/).length;

  // Get Stage 1 choices summary
  const choicesSummary = [
    { label: "Main Purpose", value: gameState.choices.mainPurpose },
    { label: "Role of Will", value: gameState.choices.role_of_will },
    { label: "Revision Decision", value: gameState.choices.revision_decision }
  ];

  // Add branched choices based on main purpose
  const mainPurpose = gameState.choices.mainPurpose;
  if (mainPurpose === 'personal') {
    choicesSummary.push(
      { label: "Tears Meaning", value: gameState.choices.tears_meaning },
      { label: "Voice Source", value: gameState.choices.voice_source }
    );
  } else if (mainPurpose === 'antiManichaean') {
    choicesSummary.push(
      { label: "Manichaeism Failure", value: gameState.choices.manichaeism_failure },
      { label: "Romans Passage", value: gameState.choices.romans_passage }
    );
  } else if (mainPurpose === 'teaching') {
    choicesSummary.push(
      { label: "Conversion Timing", value: gameState.choices.conversion_timing },
      { label: "Community Impact", value: gameState.choices.community_impact }
    );
  }

  const stage1Summary = choicesSummary.map(choice =>
    `<p class="summary-line"><strong>${choice.label}:</strong> ${choice.value}</p>`
  ).join('');

  container.innerHTML = `
    <div class="augustine-stage">
    <div class="screen export-screen fade-in">
      <div class="stage-indicator">Stage 4 of 5: Export Your Work</div>
      <h2>Your Complete Confessions Summary</h2>

      <div class="export-intro">
        <p>You've completed the composition process as Augustine. Review your work below and download it for submission.</p>
      </div>

      <div class="feedback-box">
        <h3>Stage 1: Your Compositional Decisions</h3>
        ${stage1Summary}
      </div>

      <div class="feedback-box">
        <h3>Stage 2: Your Narrative Structure</h3>
        <p><strong>Selected Components (${sequencedComponents.length}):</strong></p>
        <ol class="structure-list compact-list">
          ${sequencedComponents.map(comp => `
            <li><strong>${comp.text}</strong> <span class="category-tag">(${comp.category})</span></li>
          `).join('')}
        </ol>
        <div class="rationalization-summary">
          <p><strong>Your Structural Reasoning:</strong></p>
          <p class="quoted-text">"${gameState.rationalization}"</p>
        </div>
      </div>

      <div class="feedback-box">
        <h3>Stage 3: Your Confessions Narrative (${wordCount} words)</h3>
        <div class="narrative-display">
          ${gameState.studentNarrative.split('\n').map(para => `<p>${para}</p>`).join('')}
        </div>
      </div>

      <div class="export-actions">
        <button class="secondary-button" onclick="renderAugustineWritingInterface()">← Edit Narrative</button>
        <button class="primary-button" onclick="downloadAugustineWork()">Download Complete Work</button>
      </div>

      <div class="reflection-box final-reflection">
        <h3>Reflection on Your Compositional Process</h3>
        <p>You've just experienced what Augustine did in 397 CE: shaping a memory into a narrative.</p>
        <p class="prompt-line">→ Your choices about purpose shaped what components you selected</p>
        <p class="prompt-line">→ Your component sequence shaped how the story unfolds</p>
        <p class="prompt-line">→ Your theological position shaped how you explained the conversion</p>
        <p class="closing-prompt"><strong>Think about:</strong> If you wrote this story again with different purposes or in different contexts, how would it change? This is what ancient authors experienced constantly.</p>
      </div>

      <button class="primary-button" onclick="showAuthorChoice()" style="margin-top: 24px;">← Return to Author Choice</button>
    </div>
    </div>
  `;
}

function downloadAugustineWork() {
  const timestamp = new Date().toISOString().split('T')[0];
  const filename = `Augustine_Confessions_${timestamp}.txt`;

  // Get components
  const allComponents = getAugustineAvailableComponents();
  const sequencedComponents = gameState.componentSequence.map(id =>
    allComponents.find(c => c.id === id)
  ).filter(c => c !== undefined);

  // Calculate word count
  const text = gameState.studentNarrative.trim();
  const wordCount = text === '' ? 0 : text.split(/\s+/).length;

  // Build download content
  let content = `SHAPING HISTORY: AUGUSTINE'S CONFESSIONS
Generated on ${new Date().toLocaleDateString()}

================================================
STAGE 1: COMPOSITIONAL DECISIONS
================================================

Main Purpose: ${gameState.choices.mainPurpose}
Role of Will: ${gameState.choices.role_of_will}
Revision Decision: ${gameState.choices.revision_decision}

`;

  // Add branched choices
  const mainPurpose = gameState.choices.mainPurpose;
  if (mainPurpose === 'personal') {
    content += `Tears Meaning: ${gameState.choices.tears_meaning}\n`;
    content += `Voice Source: ${gameState.choices.voice_source}\n`;
  } else if (mainPurpose === 'antiManichaean') {
    content += `Manichaeism Failure: ${gameState.choices.manichaeism_failure}\n`;
    content += `Romans Passage: ${gameState.choices.romans_passage}\n`;
  } else if (mainPurpose === 'teaching') {
    content += `Conversion Timing: ${gameState.choices.conversion_timing}\n`;
    content += `Community Impact: ${gameState.choices.community_impact}\n`;
  }

  content += `
================================================
STAGE 2: NARRATIVE STRUCTURE
================================================

Selected Components (${sequencedComponents.length}):
${sequencedComponents.map((comp, idx) => `${idx + 1}. ${comp.text} (${comp.category})`).join('\n')}

Structural Reasoning:
"${gameState.rationalization}"

================================================
STAGE 3: YOUR CONFESSIONS NARRATIVE
================================================

Word Count: ${wordCount}

${gameState.studentNarrative}

================================================
END OF SUBMISSION
================================================
`;

  // Create and download file
  const blob = new Blob([content], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

// ===== EUSEBIUS STAGE 1 RENDERING =====

function renderIntro() {
  const content = stage1Content.intro;
  const container = document.getElementById('game-container');

  container.innerHTML = `
    <div class="screen intro-screen fade-in">
      <div class="stage-indicator">Stage 1 of 5: Multiple Choice</div>
      <h1>${content.title}</h1>
      ${content.paragraphs.map(p => `<p>${p}</p>`).join('')}

      <div class="intro-visual">
        <img src="Images/persecution.png" alt="Persecution Scene" class="intro-illustration-img">
      </div>

      <button class="primary-button" onclick="startStage1()">${content.buttonText}</button>
    </div>
  `;
}

function startStage1() {
  gameState.currentStage = 'stage1';
  gameState.currentScreen = 0;
  renderChoice(0);
}

function renderChoice(choiceIndex) {
  const choice = stage1Content.choices[choiceIndex];
  const container = document.getElementById('game-container');

  container.innerHTML = `
    
    <div class="screen choice-screen fade-in">
      <div class="stage-indicator">Stage 1 of 5: Multiple Choice</div>
      <div class="choice-header">
        <span class="choice-number">${choice.title}</span>
      </div>

      <div class="choice-context">
        <p class="context-text">${choice.context}</p>
      </div>

      <h2 class="choice-question">${choice.question}</h2>

      <div class="options-container">
        ${choice.options.map(option => `
          <div class="option-card" onclick="selectOption('${choice.id}', '${option.id}', ${choiceIndex})">
            <div class="option-main">${option.text}</div>
            <div class="option-description">${option.description}</div>
          </div>
        `).join('')}
      </div>
  `;
}

function selectOption(choiceId, optionId, choiceIndex) {
  // Save choice
  gameState.choices[choiceId] = optionId;
  saveGameState();

  // Determine next screen
  if (choiceIndex === 1) {
    // After 2 choices, show mid-feedback
    renderMidFeedback();
  } else if (choiceIndex === 3) {
    // After 4 choices, show final summary
    renderFinalSummary();
  } else {
    // Move to next choice
    renderChoice(choiceIndex + 1);
  }
}

function renderMidFeedback() {
  const feedback = stage1Content.midFeedback;
  const content = feedback.getContent(gameState.choices);
  const container = document.getElementById('game-container');

  container.innerHTML = `
    
    <div class="screen feedback-screen fade-in">
      <div class="stage-indicator">Stage 1 of 5: Multiple Choice</div>
      <h2>${feedback.title}</h2>

      <div class="feedback-box summary-box">
        ${content.summary.map(line => `<p class="summary-line"><strong>${line}</strong></p>`).join('')}
      </div>

      <div class="feedback-box reflection-box">
        <h3>Reflection Prompt</h3>
        ${content.reflection.map(line => `<p>${line}</p>`).join('')}
      </div>

      <div class="feedback-box prompts-box">
        ${content.prompts.map(prompt => `<p class="prompt-line">${prompt}</p>`).join('')}
      </div>

      <button class="primary-button" onclick="renderChoice(2)">${feedback.buttonText}</button>
  `;
}

function renderFinalSummary() {
  const summary = stage1Content.finalSummary;
  const content = summary.getContent(gameState.choices);
  const container = document.getElementById('game-container');

  container.innerHTML = `
    
    <div class="screen summary-screen fade-in">
      <div class="stage-indicator">Stage 1 Complete</div>
      <h2>${summary.title}</h2>

      <div class="feedback-box profile-box">
        <h3>Your Authorial Profile: "${content.profileName}"</h3>
      </div>

      <div class="feedback-box choices-summary">
        <h3>Your Compositional Decisions</h3>
        ${content.choicesSummary.map(line => `<p class="summary-line">✓ ${line}</p>`).join('')}
      </div>

      <div class="feedback-box descriptive-box">
        <h3>What This Means</h3>
        <p>${content.descriptive}</p>
      </div>

      <div class="feedback-box reflection-box">
        <h3>Reflection</h3>
        ${content.reflection.map(line => `<p class="prompt-line">${line}</p>`).join('')}
        <p class="closing-prompt"><strong>Think about:</strong> How would this same event look if you wrote about it 10 years later, after Constantine's victory?</p>
      </div>

      <button class="primary-button" onclick="proceedToStage2()">${summary.buttonText}</button>
  `;
}

// ===== STAGE 2 FUNCTIONS =====

function proceedToStage2() {
  gameState.currentStage = 'stage2';
  // Reset Stage 2 state when entering fresh
  gameState.selectedComponents = [];
  gameState.componentSequence = [];
  gameState.rationalization = '';
  saveGameState();
  renderStage2Intro();
}

function renderStage2Intro() {
  const content = stage2Content.intro;
  const container = document.getElementById('game-container');

  container.innerHTML = `
    
    <div class="screen intro-screen fade-in">
      <div class="stage-indicator">Stage 2 of 5: Structure Your Composition</div>
      <h1>${content.title}</h1>
      ${content.paragraphs.map(p => `<p>${p}</p>`).join('')}
      <button class="primary-button" onclick="renderComponentSelection()">${content.buttonText}</button>
  `;
}

function getAvailableComponents() {
  const components = [];
  const choices = gameState.choices;

  // Get components for each choice made in Stage 1
  Object.keys(choices).forEach(choiceKey => {
    const choiceValue = choices[choiceKey];
    if (stage2Content.componentsByChoice[choiceKey] && stage2Content.componentsByChoice[choiceKey][choiceValue]) {
      components.push(...stage2Content.componentsByChoice[choiceKey][choiceValue]);
    }
  });

  return components;
}

function renderComponentSelection() {
  const components = getAvailableComponents();
  const budget = stage2Content.budget;
  const container = document.getElementById('game-container');

  // Clean up selectedComponents - remove duplicates and invalid IDs
  const validComponentIds = new Set(components.map(c => c.id));
  gameState.selectedComponents = [...new Set(gameState.selectedComponents)].filter(id => validComponentIds.has(id));
  saveGameState();

  container.innerHTML = `
    
    <div class="screen component-selection-screen fade-in">
      <div class="stage-indicator">Stage 2 of 5: Component Selection</div>
      <h2>Select Your Narrative Components</h2>

      <div class="budget-indicator">
        <p><strong>${budget.message}</strong></p>
        <p class="selection-count">Selected: <span id="selected-count">0</span> / ${budget.max}</p>
      </div>

      <div class="components-grid">
        ${components.map(comp => `
          <div class="component-item" data-component-id="${comp.id}">
            <label class="component-label">
              <input type="checkbox"
                     class="component-checkbox"
                     value="${comp.id}"
                     onchange="toggleComponent('${comp.id}', this.checked)">
              <span class="component-text">${comp.text}</span>
            </label>
          </div>
        `).join('')}
      </div>

      <div class="component-actions">
        <button class="primary-button" id="continue-to-sequencing" onclick="proceedToSequencing()" disabled>
          Continue to Sequencing →
        </button>
        <p class="help-text" id="selection-help">Please select at least ${budget.min} components.</p>
      </div>
  `;

  // Restore previous selections if any
  if (gameState.selectedComponents.length > 0) {
    gameState.selectedComponents.forEach(compId => {
      const checkbox = container.querySelector(`input[value="${compId}"]`);
      if (checkbox) checkbox.checked = true;
    });
  }

  // Update count after restoring
  updateComponentCount();
}

function toggleComponent(componentId, isChecked) {
  const budget = stage2Content.budget;

  if (isChecked) {
    if (gameState.selectedComponents.length < budget.max) {
      gameState.selectedComponents.push(componentId);
    } else {
      // Uncheck if over budget
      const checkbox = document.querySelector(`input[value="${componentId}"]`);
      if (checkbox) checkbox.checked = false;
      return;
    }
  } else {
    gameState.selectedComponents = gameState.selectedComponents.filter(id => id !== componentId);
  }

  updateComponentCount();
  saveGameState();
}

function updateComponentCount() {
  const budget = stage2Content.budget;
  const count = gameState.selectedComponents.length;
  const countDisplay = document.getElementById('selected-count');
  const continueBtn = document.getElementById('continue-to-sequencing');
  const helpText = document.getElementById('selection-help');

  if (countDisplay) countDisplay.textContent = count;

  if (count >= budget.min && count <= budget.max) {
    if (continueBtn) continueBtn.disabled = false;
    if (helpText) helpText.textContent = `Good! You've selected ${count} components.`;
  } else if (count < budget.min) {
    if (continueBtn) continueBtn.disabled = true;
    if (helpText) helpText.textContent = `Please select at least ${budget.min} components (${budget.min - count} more needed).`;
  } else {
    if (continueBtn) continueBtn.disabled = true;
    if (helpText) helpText.textContent = `Maximum ${budget.max} components. Please deselect ${count - budget.max}.`;
  }
}

function proceedToSequencing() {
  if (gameState.selectedComponents.length < stage2Content.budget.min) {
    return;
  }

  // Initialize sequence if not already set
  if (gameState.componentSequence.length === 0) {
    gameState.componentSequence = [...gameState.selectedComponents];
  }

  saveGameState();
  renderSequencing();
}

function renderSequencing() {
  const container = document.getElementById('game-container');
  const allComponents = getAvailableComponents();
  const sequencedComponents = gameState.componentSequence.map(id =>
    allComponents.find(c => c.id === id)
  ).filter(c => c !== undefined);

  container.innerHTML = `
    
    <div class="screen sequencing-screen fade-in">
      <div class="stage-indicator">Stage 2 of 5: Sequence Components</div>
      <h2>Arrange Your Components in Order</h2>

      <p class="instruction">Drag and drop the components to arrange them in the order they will appear in your narrative. The first component will set the tone; the last will conclude your account.</p>

      <div class="sequence-container" id="sequence-container">
        ${sequencedComponents.map((comp, index) => `
          <div class="sequence-item" draggable="true" data-component-id="${comp.id}" data-index="${index}">
            <div class="sequence-number">${index + 1}</div>
            <div class="sequence-content">
              <div class="sequence-text">${comp.text}</div>
              <div class="sequence-category">${comp.category}</div>
            </div>
            <div class="sequence-handle">⋮⋮</div>
          </div>
        `).join('')}
      </div>

      <div class="sequencing-actions">
        <button class="secondary-button" onclick="renderComponentSelection()">← Back to Selection</button>
        <button class="primary-button" onclick="proceedToRationalization()">Continue to Explanation →</button>
      </div>
  `;

  // Initialize drag and drop
  initializeDragAndDrop();
}

function initializeDragAndDrop() {
  const container = document.getElementById('sequence-container');
  if (!container) return;

  let draggedElement = null;
  let draggedIndex = null;

  container.addEventListener('dragstart', (e) => {
    if (e.target.classList.contains('sequence-item')) {
      draggedElement = e.target;
      draggedIndex = parseInt(e.target.dataset.index);
      e.target.style.opacity = '0.5';
    }
  });

  container.addEventListener('dragend', (e) => {
    if (e.target.classList.contains('sequence-item')) {
      e.target.style.opacity = '1';
    }
  });

  container.addEventListener('dragover', (e) => {
    e.preventDefault();
    const afterElement = getDragAfterElement(container, e.clientY);
    if (afterElement == null) {
      container.appendChild(draggedElement);
    } else {
      container.insertBefore(draggedElement, afterElement);
    }
  });

  container.addEventListener('drop', (e) => {
    e.preventDefault();
    updateSequenceFromDOM();
  });
}

function getDragAfterElement(container, y) {
  const draggableElements = [...container.querySelectorAll('.sequence-item:not(.dragging)')];

  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect();
    const offset = y - box.top - box.height / 2;

    if (offset < 0 && offset > closest.offset) {
      return { offset: offset, element: child };
    } else {
      return closest;
    }
  }, { offset: Number.NEGATIVE_INFINITY }).element;
}

function updateSequenceFromDOM() {
  const items = document.querySelectorAll('.sequence-item');
  const newSequence = [];

  items.forEach((item, index) => {
    const compId = item.dataset.componentId;
    newSequence.push(compId);

    // Update visual numbering
    const numberEl = item.querySelector('.sequence-number');
    if (numberEl) numberEl.textContent = index + 1;
    item.dataset.index = index;
  });

  gameState.componentSequence = newSequence;
  saveGameState();
}

function proceedToRationalization() {
  renderRationalization();
}

function renderRationalization() {
  const prompt = stage2Content.rationalizationPrompt;
  const container = document.getElementById('game-container');
  const allComponents = getAvailableComponents();
  const sequencedComponents = gameState.componentSequence.map(id =>
    allComponents.find(c => c.id === id)
  ).filter(c => c !== undefined);

  container.innerHTML = `
    
    <div class="screen rationalization-screen fade-in">
      <div class="stage-indicator">Stage 2 of 5: Explain Your Structure</div>
      <h2>${prompt.title}</h2>

      <div class="feedback-box">
        <h3>Your Narrative Sequence</h3>
        <ol class="structure-list compact-list">
          ${sequencedComponents.map(comp => `
            <li><strong>${comp.text}</strong> <span class="category-tag">(${comp.category})</span></li>
          `).join('')}
        </ol>
      </div>

      <div class="rationalization-prompt">
        <h3>${prompt.question}</h3>
        <p class="guidance">${prompt.guidance}</p>
      </div>

      <textarea
        id="rationalization-input"
        class="rationalization-textarea"
        placeholder="${prompt.placeholder}"
        rows="6"
        oninput="updateRationalization(this.value)"
      >${gameState.rationalization}</textarea>

      <div class="rationalization-actions">
        <button class="secondary-button" onclick="renderSequencing()">← Back to Sequencing</button>
        <button class="primary-button" id="continue-to-summary" onclick="renderStage2Summary()" ${gameState.rationalization.trim() ? '' : 'disabled'}>
          See Your Structure →
        </button>
      </div>
      <p class="help-text" id="rationalization-help">${gameState.rationalization.trim() ? 'Looking good!' : 'Please explain your reasoning before continuing.'}</p>
  `;
}

function updateRationalization(value) {
  gameState.rationalization = value;
  saveGameState();

  const continueBtn = document.getElementById('continue-to-summary');
  const helpText = document.getElementById('rationalization-help');

  if (value.trim()) {
    if (continueBtn) continueBtn.disabled = false;
    if (helpText) helpText.textContent = 'Looking good!';
  } else {
    if (continueBtn) continueBtn.disabled = true;
    if (helpText) helpText.textContent = 'Please explain your reasoning before continuing.';
  }
}

function renderStage2Summary() {
  const container = document.getElementById('game-container');
  const allComponents = getAvailableComponents();
  const sequencedComponents = gameState.componentSequence.map(id =>
    allComponents.find(c => c.id === id)
  ).filter(c => c !== undefined);

  const suggestions = generateStructureSuggestions(sequencedComponents);

  container.innerHTML = `
    
    <div class="screen summary-screen fade-in">
      <div class="stage-indicator">Stage 2 Complete</div>
      <h2>Your Compositional Structure</h2>

      <div class="feedback-box">
        <h3>Your Narrative Sequence</h3>
        <ol class="structure-list">
          ${sequencedComponents.map(comp => `
            <li><strong>${comp.text}</strong> <span class="category-tag">(${comp.category})</span></li>
          `).join('')}
        </ol>
      </div>

      <div class="feedback-box">
        <h3>Your Reasoning</h3>
        <p class="rationalization-display">${gameState.rationalization}</p>
      </div>

      <div class="feedback-box reflection-box">
        <h3>Observations on Your Structure</h3>
        ${suggestions.map(suggestion => `<p class="prompt-line">${suggestion}</p>`).join('')}
      </div>

      <div class="stage-actions">
        <button class="secondary-button" onclick="renderRationalization()">← Revise Structure</button>
        <button class="primary-button" onclick="proceedToStage3()">Proceed to Stage 3: Write Your Narrative →</button>
      </div>
  `;
}

function generateStructureSuggestions(components) {
  const suggestions = [];

  // Analyze structure patterns
  const categories = components.map(c => c.category);
  const firstCategory = categories[0];
  const lastCategory = categories[categories.length - 1];

  // Opening observation
  if (firstCategory === 'emphasis') {
    suggestions.push("→ You begin by establishing your thematic focus - this sets reader expectations early.");
  } else if (firstCategory === 'protagonist') {
    suggestions.push("→ You introduce your protagonist first - readers will understand events through this lens.");
  } else if (firstCategory === 'violence') {
    suggestions.push("→ You address the violence question immediately - a direct approach that shapes interpretation.");
  }

  // Ending observation
  if (lastCategory === 'endpoint') {
    suggestions.push("→ You conclude with your chosen ending - this determines how readers remember the story.");
  }

  // Pattern observations
  const emphasisCount = categories.filter(c => c === 'emphasis').length;
  const protagonistCount = categories.filter(c => c === 'protagonist').length;

  if (emphasisCount > protagonistCount) {
    suggestions.push("→ Your structure prioritizes thematic emphasis over character development.");
  } else if (protagonistCount > emphasisCount) {
    suggestions.push("→ Your structure is character-driven, building through protagonist focus.");
  }

  // Typical pattern comparison
  suggestions.push("→ Ancient historians often moved from: event description → protagonist actions → theological meaning. Consider how your structure compares.");

  return suggestions;
}

// ===== STAGE 3 FUNCTIONS =====

function proceedToStage3() {
  gameState.currentStage = 'stage3';
  // Clear narrative when entering Stage 3 fresh from Stage 2
  gameState.studentNarrative = '';
  saveGameState();
  renderStage3Intro();
}

function renderStage3Intro() {
  const content = stage3Content.intro;
  const container = document.getElementById('game-container');

  container.innerHTML = `

    <div class="screen intro-screen fade-in">
      <div class="stage-indicator">Stage 3 of 5: Write Your Narrative</div>
      <h2>${content.title}</h2>

      ${content.paragraphs.map(p => `<p>${p}</p>`).join('')}

      <div class="intro-visual">
        <img src="Images/eusebius_writing.png" alt="Eusebius Writing" class="intro-illustration-img">
      </div>

      <div class="info-box">
        <h3>Guidelines</h3>
        <ul>
          ${content.guidelines.map(g => `<li>${g}</li>`).join('')}
        </ul>
      </div>

      <button class="primary-button" onclick="renderWritingInterface()">${content.buttonText}</button>
  `;
}

function renderWritingInterface() {
  const content = stage3Content.writingPrompt;
  const container = document.getElementById('game-container');

  // Get the components and sequence from Stage 2
  const allComponents = getAvailableComponents();
  const sequencedComponents = gameState.componentSequence.map(id =>
    allComponents.find(c => c.id === id)
  ).filter(c => c !== undefined);

  container.innerHTML = `
    
    <div class="screen writing-screen fade-in">
      <div class="stage-indicator">Stage 3 of 5: Write Your Narrative</div>
      <h2>${content.title}</h2>
      <p class="prompt-text">${content.prompt}</p>

      <div class="writing-layout">
        <div class="writing-main">
          <div class="word-count-indicator">
            <span id="word-count">0</span> words
            <span class="target-indicator">(target: ${content.targetWords} words)</span>
          </div>

          <textarea
            id="narrative-textarea"
            class="narrative-textarea"
            placeholder="${content.placeholder}"
            oninput="handleNarrativeInput()"
          >${gameState.studentNarrative}</textarea>

          <div class="writing-actions">
            <button class="secondary-button" onclick="renderStage2Summary()">← Back to Structure</button>
            <button class="primary-button" id="continue-btn" onclick="validateAndContinue()" disabled>Continue to Evaluation →</button>
          </div>
        </div>

        <div class="writing-sidebar">
          <div class="reference-box">
            <h3>Your Structure Reference</h3>
            <p class="helper-text">Follow this sequence as you write:</p>
            <ol class="structure-reference-list">
              ${sequencedComponents.map((comp, idx) => `
                <li>
                  <div class="reference-number">${idx + 1}</div>
                  <div class="reference-text">${comp.text}</div>
                </li>
              `).join('')}
            </ol>
          </div>
        </div>
      </div>
  `;

  // Initialize word count
  updateWordCount();

  // Focus on textarea
  setTimeout(() => {
    document.getElementById('narrative-textarea').focus();
  }, 100);
}

function handleNarrativeInput() {
  const textarea = document.getElementById('narrative-textarea');
  gameState.studentNarrative = textarea.value;
  saveGameState();
  updateWordCount();
}

function updateWordCount() {
  const text = gameState.studentNarrative.trim();
  const wordCount = text === '' ? 0 : text.split(/\s+/).length;
  const wordCountEl = document.getElementById('word-count');
  const continueBtn = document.getElementById('continue-btn');

  if (wordCountEl) {
    wordCountEl.textContent = wordCount;

    // Update color based on target
    const minWords = stage3Content.writingPrompt.minWords;
    const targetWords = stage3Content.writingPrompt.targetWords;
    const maxWords = stage3Content.writingPrompt.maxWords;

    if (wordCount < minWords) {
      wordCountEl.style.color = '#dc2626'; // red
    } else if (wordCount >= minWords && wordCount <= maxWords) {
      wordCountEl.style.color = '#059669'; // green
    } else {
      wordCountEl.style.color = '#d97706'; // orange
    }
  }

  // Enable/disable continue button
  if (continueBtn) {
    continueBtn.disabled = wordCount < stage3Content.writingPrompt.minWords;
  }
}

function validateAndContinue() {
  const text = gameState.studentNarrative.trim();
  const wordCount = text === '' ? 0 : text.split(/\s+/).length;
  const minWords = stage3Content.writingPrompt.minWords;

  if (wordCount < minWords) {
    alert(`Please write at least ${minWords} words before continuing.`);
    return;
  }

  proceedToStage4();
}

function proceedToStage4() {
  gameState.currentStage = 'stage4';
  saveGameState();
  renderStage4Export();
}

function renderStage4Export() {
  const container = document.getElementById('game-container');

  // Get all components for display
  const allComponents = getAvailableComponents();
  const sequencedComponents = gameState.componentSequence.map(id =>
    allComponents.find(c => c.id === id)
  ).filter(c => c !== undefined);

  // Calculate word count
  const text = gameState.studentNarrative.trim();
  const wordCount = text === '' ? 0 : text.split(/\s+/).length;

  // Get Stage 1 choices summary
  const stage1Summary = Object.keys(gameState.choices).map((key, idx) => {
    const choiceText = getChoiceText(idx, gameState.choices[key]);
    return `<p class="summary-line"><strong>${key.charAt(0).toUpperCase() + key.slice(1)}:</strong> ${choiceText}</p>`;
  }).join('');

  container.innerHTML = `
    
    <div class="screen export-screen fade-in">
      <div class="stage-indicator">Stage 4 of 5: Export Your Work</div>
      <h2>Your Complete Work Summary</h2>

      <div class="export-intro">
        <p>You've completed the composition process. Review your work below and download it for submission.</p>
      </div>

      <div class="feedback-box">
        <h3>Stage 1: Your Compositional Decisions</h3>
        ${stage1Summary}
        ${gameState.narrativeProfile ? `<p class="profile-tag"><em>Profile: ${gameState.narrativeProfile}</em></p>` : ''}
      </div>

      <div class="feedback-box">
        <h3>Stage 2: Your Narrative Structure</h3>
        <p><strong>Selected Components (${sequencedComponents.length}):</strong></p>
        <ol class="structure-list compact-list">
          ${sequencedComponents.map(comp => `
            <li><strong>${comp.text}</strong> <span class="category-tag">(${comp.category})</span></li>
          `).join('')}
        </ol>
        <div class="rationalization-summary">
          <p><strong>Your Structural Reasoning:</strong></p>
          <p class="quoted-text">"${gameState.rationalization}"</p>
        </div>
      </div>

      <div class="feedback-box">
        <h3>Stage 3: Your Narrative (${wordCount} words)</h3>
        <div class="narrative-display">
          ${gameState.studentNarrative.split('\n').map(para => `<p>${para}</p>`).join('')}
        </div>
      </div>

      <div class="export-actions">
        <button class="secondary-button" onclick="renderWritingInterface()">← Revise Narrative</button>
        <button class="primary-button export-button" onclick="downloadWorkAsJSON()">
          <span class="download-icon">↓</span> Download Work as JSON
        </button>
      </div>

      <div class="info-box">
        <h3>Next Steps</h3>
        <p>Download your work and submit it to your instructor for evaluation. The JSON file contains all your choices, structure, reasoning, and narrative.</p>
      </div>

      <div class="stage-actions" style="margin-top: 2rem;">
        <button class="secondary-button" onclick="resetAndRestart()">Start Over</button>
      </div>
  `;
}

function downloadWorkAsJSON() {
  // Calculate word count
  const text = gameState.studentNarrative.trim();
  const wordCount = text === '' ? 0 : text.split(/\s+/).length;

  // Get all components for export
  const allComponents = getAvailableComponents();
  const sequencedComponents = gameState.componentSequence.map(id => {
    const comp = allComponents.find(c => c.id === id);
    return comp ? { id: comp.id, text: comp.text, category: comp.category } : null;
  }).filter(c => c !== null);

  // Get readable choice labels
  const stage1ChoicesReadable = {};
  Object.keys(gameState.choices).forEach((key, idx) => {
    stage1ChoicesReadable[key] = getChoiceText(idx, gameState.choices[key]);
  });

  // Create JSON structure
  const exportData = {
    metadata: {
      timestamp: new Date().toISOString(),
      dateCompleted: new Date().toLocaleString(),
      wordCount: wordCount,
      version: "1.0"
    },
    stage1: {
      choices: gameState.choices,
      choicesReadable: stage1ChoicesReadable,
      narrativeProfile: gameState.narrativeProfile
    },
    stage2: {
      selectedComponentIds: gameState.selectedComponents,
      componentSequence: sequencedComponents,
      rationalization: gameState.rationalization
    },
    stage3: {
      narrative: gameState.studentNarrative,
      wordCount: wordCount
    }
  };

  // Convert to JSON string with nice formatting
  const jsonString = JSON.stringify(exportData, null, 2);

  // Create blob and download
  const blob = new Blob([jsonString], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `shaping-history-work-${Date.now()}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  // Show confirmation
  showDownloadConfirmation();
}

function showDownloadConfirmation() {
  const existingConfirmation = document.querySelector('.download-confirmation');
  if (existingConfirmation) {
    existingConfirmation.remove();
  }

  const confirmation = document.createElement('div');
  confirmation.className = 'download-confirmation fade-in';
  confirmation.innerHTML = `
    <div class="confirmation-content">
      <span class="confirmation-icon">✓</span>
      <span>Download complete! Submit this file to your instructor.</span>
    </div>
  `;

  document.body.appendChild(confirmation);

  setTimeout(() => {
    confirmation.style.opacity = '0';
    setTimeout(() => confirmation.remove(), 300);
  }, 3000);
}

function resetAndRestart() {
  if (confirm('Are you sure you want to start over? This will erase all your current work.')) {
    resetGameState();
    renderIntro();
  }
}

// ===== LOCAL STORAGE =====

function saveGameState() {
  localStorage.setItem('shapingHistory_gameState', JSON.stringify(gameState));
}

function loadGameState() {
  const saved = localStorage.getItem('shapingHistory_gameState');
  if (saved) {
    const savedState = JSON.parse(saved);

    // Check version compatibility
    if (savedState.version !== GAME_VERSION) {
      console.log(`Version mismatch: saved=${savedState.version}, current=${GAME_VERSION}. Starting fresh.`);
      // Don't load old state - let user start from title page
      localStorage.removeItem('shapingHistory_gameState');
      return;
    }

    Object.assign(gameState, savedState);
  }
}

function resetGameState() {
  localStorage.removeItem('shapingHistory_gameState');
  gameState.version = GAME_VERSION;
  gameState.currentStage = 'title';
  gameState.currentScreen = 0;
  gameState.onboardingStep = 0;
  gameState.hasSeenOnboarding = false;
  gameState.selectedAuthor = null;
  gameState.choices = {};
  gameState.narrativeProfile = null;
  gameState.selectedComponents = [];
  gameState.componentSequence = [];
  gameState.rationalization = '';
  gameState.studentNarrative = '';
}

// ===== INITIALIZATION =====

window.addEventListener('DOMContentLoaded', () => {
  console.log('=== Shaping History v2.1 Initializing ===');

  try {
    loadGameState();
    console.log('Game state loaded:', gameState.currentStage);

    // Route to appropriate screen based on game state
    switch (gameState.currentStage) {
      case 'title':
        console.log('Rendering title page');
        renderTitlePage();
        break;
      case 'onboarding':
        console.log('Rendering onboarding');
        renderOnboarding();
        break;
      case 'authorChoice':
        console.log('Rendering author choice');
        renderAuthorChoice();
        break;
      case 'bio':
        console.log('Rendering bio');
        if (gameState.selectedAuthor === 'augustine') {
          renderAugustineBio();
        } else {
          renderEusebiusBio();
        }
        break;
      case 'intro':
        console.log('Rendering intro');
        renderIntro();
        break;
      case 'stage1':
        console.log('Rendering stage 1');
        renderChoice(gameState.currentScreen);
        break;
      case 'stage2':
        console.log('Rendering stage 2');
        renderStage2Intro();
        break;
      case 'stage3':
        console.log('Rendering stage 3');
        renderStage3Intro();
        break;
      case 'stage4':
        console.log('Rendering stage 4');
        renderStage4Export();
        break;
      default:
        console.log('Rendering title page (default)');
        renderTitlePage();
    }

    console.log('=== Initialization complete ===');
  } catch (error) {
    console.error('Initialization error:', error);
    // Fallback: show error message
    document.getElementById('game-container').innerHTML = `
      <div class="screen">
        <h1>Error Loading Game</h1>
        <p>Something went wrong. Please try:</p>
        <ol>
          <li>Refresh the page</li>
          <li>Clear your browser cache</li>
          <li>Check the console for errors (F12)</li>
        </ol>
        <button class="primary-button" onclick="localStorage.clear(); location.reload();">
          Clear Data and Restart
        </button>
      </div>
    `;
  }
});
