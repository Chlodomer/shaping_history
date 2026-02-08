// ===== SHAPING HISTORY: SIMPLIFIED COMPOSITION TOOL =====
// Version 3.0 - Consolidated 5-screen flow

// ===== GAME STATE =====
const GAME_VERSION = '3.0';

const gameState = {
  version: GAME_VERSION,
  currentStage: 'welcome', // welcome, stage1, stage2, stage3, stage4
  selectedAuthor: null, // 'eusebius' or 'augustine'
  choices: {},
  narrativeProfile: null,
  selectedComponents: [],
  componentSequence: [],
  rationalization: '',
  studentNarrative: ''
};

// ===== TITLE CONTENT =====

const titleContent = {
  title: "Shaping History",
  subtitle: "Ancient Authors and Their Agendas",
  tagline: "An interactive exploration of historiographical construction",
  illustration: '<img src="Images/writing-history.png" alt="Writing History" class="title-illustration-img">'
};

// ===== AUTHOR BIOS =====

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

  branchedQuestions: {
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

  componentsByChoice: {
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

// ===== STAGE 3 CONTENT =====
const augustineStage3Content = {
  writingPrompt: {
    title: "Write Your Confessions",
    prompt: "Using your structure as a guide, compose your account of the conversion in the garden.",
    placeholder: "In the year 386, I was in Milan, torn between my old life and the truth I glimpsed in Christianity...",
    minWords: 100,
    targetWords: 200,
    maxWords: 200
  }
};

const stage3Content = {
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

function getAugustineBranchedText(questionId, optionId) {
  const allBranched = augustineStage1Content.branchedQuestions;
  for (const purpose of Object.keys(allBranched)) {
    for (const q of allBranched[purpose]) {
      if (q.id === questionId) {
        const opt = q.options.find(o => o.id === optionId);
        return opt ? opt.text : optionId;
      }
    }
  }
  return optionId;
}

function generateAugustineChoicesSummary(choices) {
  const summary = [];
  summary.push(`Main purpose: ${getMainPurposeText(choices.mainPurpose)}`);

  if (choices.mainPurpose && augustineStage1Content.branchedQuestions[choices.mainPurpose]) {
    augustineStage1Content.branchedQuestions[choices.mainPurpose].forEach(q => {
      if (choices[q.id]) {
        summary.push(`${q.question.split(',')[0]}: ${getAugustineBranchedText(q.id, choices[q.id])}`);
      }
    });
  }

  summary.push(`Role of will: ${getWillPositionText(choices.role_of_will)}`);
  summary.push(`Revision: ${getRevisionDecisionText(choices.revision_decision)}`);
  return summary;
}

function getAvailableComponents() {
  const components = [];
  const choices = gameState.choices;

  Object.keys(choices).forEach(choiceKey => {
    const choiceValue = choices[choiceKey];
    if (stage2Content.componentsByChoice[choiceKey] && stage2Content.componentsByChoice[choiceKey][choiceValue]) {
      components.push(...stage2Content.componentsByChoice[choiceKey][choiceValue]);
    }
  });

  return components;
}

function getAugustineAvailableComponents() {
  const components = [];
  const choices = gameState.choices;

  Object.keys(choices).forEach(choiceKey => {
    const choiceValue = choices[choiceKey];
    if (augustineStage2Content.componentsByChoice[choiceKey] &&
        augustineStage2Content.componentsByChoice[choiceKey][choiceValue]) {
      components.push(...augustineStage2Content.componentsByChoice[choiceKey][choiceValue]);
    }
  });

  components.push(...augustineStage2Content.componentsByChoice.universal);
  return components;
}

function getAllComponents() {
  return gameState.selectedAuthor === 'augustine'
    ? getAugustineAvailableComponents()
    : getAvailableComponents();
}

function getBudget() {
  return gameState.selectedAuthor === 'augustine'
    ? augustineStage2Content.budget
    : stage2Content.budget;
}

function getRationalizationPrompt() {
  return gameState.selectedAuthor === 'augustine'
    ? augustineStage2Content.rationalizationPrompt
    : stage2Content.rationalizationPrompt;
}

function getWritingContent() {
  return gameState.selectedAuthor === 'augustine'
    ? augustineStage3Content.writingPrompt
    : stage3Content.writingPrompt;
}

function generateStructureSuggestions(components) {
  const suggestions = [];
  const categories = components.map(c => c.category);
  const firstCategory = categories[0];
  const lastCategory = categories[categories.length - 1];

  if (firstCategory === 'emphasis') {
    suggestions.push("→ You begin by establishing your thematic focus - this sets reader expectations early.");
  } else if (firstCategory === 'protagonist') {
    suggestions.push("→ You introduce your protagonist first - readers will understand events through this lens.");
  } else if (firstCategory === 'violence') {
    suggestions.push("→ You address the violence question immediately - a direct approach that shapes interpretation.");
  }

  if (lastCategory === 'endpoint') {
    suggestions.push("→ You conclude with your chosen ending - this determines how readers remember the story.");
  }

  const emphasisCount = categories.filter(c => c === 'emphasis').length;
  const protagonistCount = categories.filter(c => c === 'protagonist').length;

  if (emphasisCount > protagonistCount) {
    suggestions.push("→ Your structure prioritizes thematic emphasis over character development.");
  } else if (protagonistCount > emphasisCount) {
    suggestions.push("→ Your structure is character-driven, building through protagonist focus.");
  }

  suggestions.push("→ Ancient historians often moved from: event description → protagonist actions → theological meaning. Consider how your structure compares.");
  return suggestions;
}

// ===== SCREEN 1: WELCOME + AUTHOR CHOICE =====

function renderWelcome() {
  const container = document.getElementById('game-container');
  const content = authorChoiceContent;

  container.innerHTML = `
    <div class="screen welcome-screen fade-in">
      <div class="welcome-header">
        <div class="title-illustration">
          ${titleContent.illustration}
        </div>
        <h1 class="main-title">${titleContent.title}</h1>
        <h2 class="subtitle">${titleContent.subtitle}</h2>
        <p class="tagline">${titleContent.tagline}</p>
      </div>

      <p class="welcome-instruction">${content.instruction}</p>

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
            <button class="select-author-btn">Begin as ${author.name.split(' ')[0]} →</button>
          </div>
        `).join('')}
      </div>

      <div class="title-footer">
        <p>Bar-Ilan University • Introduction to Early Medieval Europe</p>
      </div>
    </div>
  `;
}

function selectAuthor(authorId) {
  gameState.selectedAuthor = authorId;
  gameState.currentStage = 'stage1';
  gameState.choices = {};
  saveGameState();

  if (authorId === 'eusebius') {
    renderEusebiusStage1();
  } else {
    renderAugustineStage1();
  }
}

// ===== SCREEN 2: EUSEBIUS STAGE 1 =====

function renderEusebiusStage1() {
  const container = document.getElementById('game-container');
  const choices = gameState.choices;
  const allChoicesMade = choices.emphasis && choices.protagonist && choices.violence && choices.endpoint;

  // Build choice sections
  const choiceSectionsHTML = stage1Content.choices.map((choice, idx) => {
    const selectedOptionId = choices[choice.id];

    // Insert mid-feedback after choice 2
    let feedbackHTML = '';
    if (idx === 1 && choices.emphasis && choices.protagonist) {
      const feedback = stage1Content.midFeedback.getContent(choices);
      feedbackHTML = `
        <div class="inline-feedback fade-in">
          <p class="feedback-note">${generateMidReflection(choices)}</p>
        </div>
      `;
    }

    return `
      <div class="choice-section" id="choice-section-${choice.id}">
        <div class="choice-header">
          <span class="choice-number">${choice.title}</span>
        </div>
        <div class="choice-context">
          <p class="context-text">${choice.context}</p>
        </div>
        <h3 class="choice-question">${choice.question}</h3>
        <div class="options-container">
          ${choice.options.map(option => `
            <div class="option-card ${selectedOptionId === option.id ? 'selected' : ''}"
                 onclick="selectEusebiusChoice('${choice.id}', '${option.id}')">
              <div class="option-main">${option.text}</div>
              <div class="option-description">${option.description}</div>
            </div>
          `).join('')}
        </div>
      </div>
      ${feedbackHTML}
    `;
  }).join('');

  // Profile section (appears when all choices made)
  let profileHTML = '';
  if (allChoicesMade) {
    const profile = generateNarrativeProfile(choices);
    gameState.narrativeProfile = profile.name;
    saveGameState();

    profileHTML = `
      <div class="stage-complete-section fade-in" id="profile-section">
        <div class="feedback-box profile-box">
          <h3>Your Authorial Profile: "${profile.name}"</h3>
          <p>${profile.description}</p>
        </div>
        <div class="feedback-box reflection-box">
          <h3>Reflection</h3>
          ${profile.reflection.map(line => `<p class="prompt-line">${line}</p>`).join('')}
        </div>
        <button class="primary-button" onclick="proceedToStage2()">
          Proceed to Stage 2: Structure Your Composition →
        </button>
      </div>
    `;
  }

  container.innerHTML = `
    <div class="screen fade-in">
      <div class="stage-indicator">Stage 1 of 4: Compositional Choices</div>
      <div class="intro-visual">
        <img src="Images/persecution.png" alt="The Great Persecution" class="intro-illustration-img">
      </div>
      <h1>${stage1Content.intro.title}</h1>
      ${stage1Content.intro.paragraphs.map(p => `<p>${p}</p>`).join('')}

      <div class="all-choices">
        ${choiceSectionsHTML}
      </div>

      ${profileHTML}

      <div class="stage-actions" style="margin-top: 2rem;">
        <button class="secondary-button" onclick="resetAndRestart()">Start Over</button>
      </div>
    </div>
  `;
}

function selectEusebiusChoice(choiceId, optionId) {
  gameState.choices[choiceId] = optionId;
  saveGameState();
  renderEusebiusStage1();

  // Scroll to next unanswered choice or profile
  setTimeout(() => {
    const allChoicesMade = gameState.choices.emphasis && gameState.choices.protagonist &&
                           gameState.choices.violence && gameState.choices.endpoint;
    if (allChoicesMade) {
      document.getElementById('profile-section')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      // Find next unanswered choice
      const choiceIds = ['emphasis', 'protagonist', 'violence', 'endpoint'];
      const nextUnanswered = choiceIds.find(id => !gameState.choices[id]);
      if (nextUnanswered) {
        document.getElementById(`choice-section-${nextUnanswered}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, 100);
}

// ===== SCREEN 2: AUGUSTINE STAGE 1 =====

function renderAugustineStage1() {
  const container = document.getElementById('game-container');
  const choices = gameState.choices;

  // Determine progress
  const hasPurpose = !!choices.mainPurpose;
  const branchedQuestions = hasPurpose ? (augustineStage1Content.branchedQuestions[choices.mainPurpose] || []) : [];
  const hasBranched1 = branchedQuestions.length > 0 && !!choices[branchedQuestions[0].id];
  const hasBranched2 = branchedQuestions.length > 1 && !!choices[branchedQuestions[1].id];
  const hasAllBranched = hasPurpose && hasBranched1 && hasBranched2;
  const hasWill = !!choices.role_of_will;
  const hasRevision = !!choices.revision_decision;
  const allComplete = hasAllBranched && hasWill && hasRevision;

  // Build context panels
  const situationHTML = buildAugustineContextPanel(augustineStage1Content.situationScreen);
  const eventHTML = buildAugustineEventPanel(augustineStage1Content.eventScreen);

  // Main purpose choice
  const purposeHTML = buildChoiceSection(
    augustineStage1Content.mainPurposeChoice,
    choices.mainPurpose,
    'selectAugustineChoice'
  );

  // Branched questions
  let branchedHTML = '';
  if (hasPurpose) {
    branchedHTML = branchedQuestions.map(q => buildChoiceSection(
      q, choices[q.id], 'selectAugustineChoice'
    )).join('');
  }

  // New context + will + revision (progressive reveal)
  let lateHTML = '';
  if (hasAllBranched) {
    // New context info
    lateHTML += `
      <div class="context-info-panel fade-in" id="pelagius-section">
        <h3>${augustineStage1Content.newContextScreen.title}</h3>
        <div class="intro-visual">
          <img src="Images/pelagius.png" alt="Pelagius" class="intro-illustration-img" style="max-height:200px;">
        </div>
        ${augustineStage1Content.newContextScreen.paragraphs.map(p => `<p>${p}</p>`).join('')}
      </div>
    `;

    // Will question
    lateHTML += buildChoiceSection(
      augustineStage1Content.willQuestionChoice,
      choices.role_of_will,
      'selectAugustineChoice',
      augustineStage1Content.willQuestionChoice.context
    );
  }

  if (hasWill) {
    // Revision choice
    const revisionContent = augustineStage1Content.revisionChoice;
    const contextParagraphs = revisionContent.getContext(choices.mainPurpose);
    lateHTML += buildChoiceSection(
      revisionContent,
      choices.revision_decision,
      'selectAugustineChoice',
      contextParagraphs
    );
  }

  // Summary
  let summaryHTML = '';
  if (allComplete) {
    const summaryContent = augustineStage1Content.finalSummary.getContent(choices);
    summaryHTML = `
      <div class="stage-complete-section fade-in" id="augustine-summary">
        <div class="feedback-box">
          <h3>Your Authorial Decisions</h3>
          ${summaryContent.choicesSummary.map(line => `<p class="summary-line">✓ ${line}</p>`).join('')}
        </div>
        <button class="primary-button" onclick="proceedToStage2()">
          Proceed to Stage 2: Structure Your Composition →
        </button>
      </div>
    `;
  }

  container.innerHTML = `
    <div class="augustine-stage">
      <div class="screen fade-in">
        <div class="stage-indicator">Stage 1 of 4: Authorial Choices</div>
        <h1>${augustineStage1Content.intro.title}</h1>
        ${augustineStage1Content.intro.paragraphs.map(p => `<p>${p}</p>`).join('')}

        ${situationHTML}
        ${eventHTML}

        <div class="all-choices">
          ${purposeHTML}
          ${branchedHTML}
          ${lateHTML}
        </div>

        ${summaryHTML}

        <div class="stage-actions" style="margin-top: 2rem;">
          <button class="secondary-button" onclick="resetAndRestart()">Start Over</button>
        </div>
      </div>
    </div>
  `;
}

function buildAugustineContextPanel(screen) {
  return `
    <div class="context-info-panel">
      <h3>${screen.title}</h3>
      <div class="feedback-box">
        <h4>${screen.contexts.personal.title}</h4>
        <ul>${screen.contexts.personal.items.map(item => `<li>${item}</li>`).join('')}</ul>
      </div>
      <div class="feedback-box">
        <h4>${screen.contexts.historical.title}</h4>
        <ul>${screen.contexts.historical.items.map(item => `<li>${item}</li>`).join('')}</ul>
      </div>
      <p style="font-style: italic; margin-top: 12px;">${screen.closing}</p>
    </div>
  `;
}

function buildAugustineEventPanel(screen) {
  return `
    <div class="context-info-panel">
      <h3>${screen.title}</h3>
      <div class="intro-visual">
        <img src="Images/garden.png" alt="The Garden in Milan" class="intro-illustration-img" style="max-height:250px;">
      </div>
      <p>${screen.intro}</p>
      <div class="feedback-box">
        <ul>${screen.events.map(event => `<li>${event}</li>`).join('')}</ul>
      </div>
      ${screen.closing.map(p => `<p>${p}</p>`).join('')}
    </div>
  `;
}

function buildChoiceSection(choiceData, selectedValue, handler, contextArray) {
  const contextHTML = contextArray
    ? `<div class="choice-context">${(Array.isArray(contextArray) ? contextArray : [contextArray]).map(p => `<p class="context-text">${p}</p>`).join('')}</div>`
    : (choiceData.context && !Array.isArray(choiceData.context)
        ? `<div class="choice-context"><p class="context-text">${choiceData.context}</p></div>`
        : '');

  return `
    <div class="choice-section" id="choice-section-${choiceData.id}">
      <h3 class="choice-question">${choiceData.question}</h3>
      ${contextHTML}
      <div class="options-container">
        ${choiceData.options.map(option => `
          <div class="option-card ${selectedValue === option.id ? 'selected' : ''}"
               onclick="${handler}('${choiceData.id}', '${option.id}')">
            <div class="option-main">${option.text}</div>
            <div class="option-description">${option.description}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function selectAugustineChoice(choiceId, optionId) {
  // If changing main purpose, clear branched choices
  if (choiceId === 'mainPurpose' && gameState.choices.mainPurpose !== optionId) {
    const oldPurpose = gameState.choices.mainPurpose;
    if (oldPurpose) {
      const oldQuestions = augustineStage1Content.branchedQuestions[oldPurpose] || [];
      oldQuestions.forEach(q => delete gameState.choices[q.id]);
    }
    delete gameState.choices.role_of_will;
    delete gameState.choices.revision_decision;
  }

  gameState.choices[choiceId] = optionId;
  saveGameState();
  renderAugustineStage1();

  // Scroll to next section
  setTimeout(() => {
    const choices = gameState.choices;
    const hasPurpose = !!choices.mainPurpose;
    const branchedQuestions = hasPurpose ? (augustineStage1Content.branchedQuestions[choices.mainPurpose] || []) : [];
    const hasBranched1 = branchedQuestions.length > 0 && !!choices[branchedQuestions[0].id];
    const hasBranched2 = branchedQuestions.length > 1 && !!choices[branchedQuestions[1].id];
    const hasAllBranched = hasPurpose && hasBranched1 && hasBranched2;
    const hasWill = !!choices.role_of_will;
    const hasRevision = !!choices.revision_decision;
    const allComplete = hasAllBranched && hasWill && hasRevision;

    if (allComplete) {
      document.getElementById('augustine-summary')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else if (hasWill && !hasRevision) {
      document.getElementById('choice-section-revision_decision')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (hasAllBranched && !hasWill) {
      document.getElementById('pelagius-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (hasPurpose) {
      // Find next unanswered branched question
      const nextQ = branchedQuestions.find(q => !choices[q.id]);
      if (nextQ) {
        document.getElementById(`choice-section-${nextQ.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, 100);
}

// ===== SCREEN 3: STAGE 2 - BUILD STRUCTURE =====

function proceedToStage2() {
  gameState.currentStage = 'stage2';
  gameState.selectedComponents = [];
  gameState.componentSequence = [];
  gameState.rationalization = '';
  saveGameState();
  renderStage2();
}

function renderStage2() {
  const container = document.getElementById('game-container');
  const components = getAllComponents();
  const budget = getBudget();
  const prompt = getRationalizationPrompt();
  const isAugustine = gameState.selectedAuthor === 'augustine';

  // Clean up selected components
  const validComponentIds = new Set(components.map(c => c.id));
  gameState.selectedComponents = [...new Set(gameState.selectedComponents)].filter(id => validComponentIds.has(id));
  gameState.componentSequence = gameState.componentSequence.filter(id => validComponentIds.has(id));
  saveGameState();

  const count = gameState.selectedComponents.length;
  const hasEnoughSelected = count >= budget.min && count <= budget.max;

  // Build sequence items
  const sequenceHTML = hasEnoughSelected ? buildSequenceList() : `<p class="help-text">Select at least ${budget.min} components above to begin arranging.</p>`;

  // Continue button state
  const canContinue = hasEnoughSelected && gameState.rationalization.trim().length >= 20;

  container.innerHTML = `
    <div class="${isAugustine ? 'augustine-stage' : ''}">
    <div class="screen fade-in">
      <div class="stage-indicator">Stage 2 of 4: Structure Your Composition</div>
      <h2>${isAugustine ? 'Structure Your Confessions' : 'Structure Your Composition'}</h2>

      <!-- Section 1: Select Components -->
      <div class="stage2-section" id="selection-section">
        <h3>1. Select Your Narrative Components</h3>
        <div class="budget-indicator">
          <p><strong>${budget.message}</strong></p>
          <p class="selection-count">Selected: <span id="selected-count">${count}</span> / ${budget.max}</p>
        </div>
        <div class="components-grid">
          ${components.map(comp => `
            <div class="component-item" data-component-id="${comp.id}">
              <label class="component-label">
                <input type="checkbox"
                       class="component-checkbox"
                       value="${comp.id}"
                       ${gameState.selectedComponents.includes(comp.id) ? 'checked' : ''}
                       onchange="toggleComponent('${comp.id}', this.checked)">
                <span class="component-text">${comp.text}</span>
              </label>
            </div>
          `).join('')}
        </div>
        <p class="help-text" id="selection-help">${getSelectionHelpText(count, budget)}</p>
      </div>

      <!-- Section 2: Sequence -->
      <div class="stage2-section ${hasEnoughSelected ? '' : 'section-disabled'}" id="sequencing-section">
        <h3>2. Arrange Your Narrative Structure</h3>
        <p class="instruction">Drag and drop to arrange components in the order they'll appear in your narrative.</p>
        <div class="sequence-container" id="sequence-container">
          ${sequenceHTML}
        </div>
      </div>

      <!-- Section 3: Explain -->
      <div class="stage2-section ${hasEnoughSelected ? '' : 'section-disabled'}" id="rationalization-section">
        <h3>3. ${prompt.title}</h3>
        <div class="rationalization-prompt">
          <p class="guidance">${prompt.guidance}</p>
        </div>
        <textarea
          id="rationalization-input"
          class="rationalization-textarea"
          placeholder="${prompt.placeholder}"
          maxlength="500"
          oninput="updateRationalization(this.value)"
          ${hasEnoughSelected ? '' : 'disabled'}
        >${gameState.rationalization || ''}</textarea>
      </div>

      <!-- Continue -->
      <div class="stage-actions">
        <button class="secondary-button" onclick="resetAndRestart()">Start Over</button>
        <button class="secondary-button" onclick="backToStage1()">← Back to Choices</button>
        <button class="primary-button" id="continue-to-stage3" onclick="proceedToStage3()" ${canContinue ? '' : 'disabled'}>
          Proceed to Stage 3: Write Your Narrative →
        </button>
      </div>
    </div>
    </div>
  `;

  // Initialize drag and drop if sequence is ready
  if (hasEnoughSelected) {
    initializeDragAndDrop();
  }
}

function getSelectionHelpText(count, budget) {
  if (count < budget.min) return `Please select at least ${budget.min} components (${budget.min - count} more needed).`;
  if (count > budget.max) return `Maximum ${budget.max} components. Please deselect ${count - budget.max}.`;
  return `Good! You've selected ${count} components.`;
}

function buildSequenceList() {
  const components = getAllComponents();
  const sequencedComponents = gameState.componentSequence
    .map(id => components.find(c => c.id === id))
    .filter(c => c !== undefined);

  return sequencedComponents.map((comp, index) => `
    <div class="sequence-item" draggable="true" data-component-id="${comp.id}" data-index="${index}">
      <div class="sequence-number">${index + 1}</div>
      <div class="sequence-content">
        <div class="sequence-text">${comp.text}</div>
        <div class="sequence-category">${comp.category}</div>
      </div>
      <div class="sequence-handle">⋮⋮</div>
    </div>
  `).join('');
}

function toggleComponent(componentId, isChecked) {
  const budget = getBudget();

  if (isChecked) {
    if (gameState.selectedComponents.length < budget.max) {
      gameState.selectedComponents.push(componentId);
      if (!gameState.componentSequence.includes(componentId)) {
        gameState.componentSequence.push(componentId);
      }
    } else {
      const checkbox = document.querySelector(`input[value="${componentId}"]`);
      if (checkbox) checkbox.checked = false;
      return;
    }
  } else {
    gameState.selectedComponents = gameState.selectedComponents.filter(id => id !== componentId);
    gameState.componentSequence = gameState.componentSequence.filter(id => id !== componentId);
  }

  saveGameState();
  updateStage2UI();
}

function updateStage2UI() {
  const budget = getBudget();
  const count = gameState.selectedComponents.length;
  const hasEnough = count >= budget.min && count <= budget.max;

  // Update count
  const countEl = document.getElementById('selected-count');
  if (countEl) countEl.textContent = count;

  // Update help text
  const helpEl = document.getElementById('selection-help');
  if (helpEl) helpEl.textContent = getSelectionHelpText(count, budget);

  // Update sequencing section
  const seqSection = document.getElementById('sequencing-section');
  const seqContainer = document.getElementById('sequence-container');
  const ratSection = document.getElementById('rationalization-section');
  const ratInput = document.getElementById('rationalization-input');

  if (hasEnough) {
    seqSection?.classList.remove('section-disabled');
    ratSection?.classList.remove('section-disabled');
    if (ratInput) ratInput.disabled = false;
    if (seqContainer) {
      seqContainer.innerHTML = buildSequenceList();
      initializeDragAndDrop();
    }
  } else {
    seqSection?.classList.add('section-disabled');
    ratSection?.classList.add('section-disabled');
    if (ratInput) ratInput.disabled = true;
    if (seqContainer) {
      seqContainer.innerHTML = `<p class="help-text">Select at least ${budget.min} components above to begin arranging.</p>`;
    }
  }

  // Update continue button
  updateStage2ContinueButton();
}

function updateRationalization(value) {
  gameState.rationalization = value;
  saveGameState();
  updateStage2ContinueButton();
}

function updateStage2ContinueButton() {
  const budget = getBudget();
  const count = gameState.selectedComponents.length;
  const hasEnough = count >= budget.min && count <= budget.max;
  const hasRationalization = gameState.rationalization.trim().length >= 20;
  const btn = document.getElementById('continue-to-stage3');
  if (btn) btn.disabled = !(hasEnough && hasRationalization);
}

function backToStage1() {
  gameState.currentStage = 'stage1';
  saveGameState();
  if (gameState.selectedAuthor === 'augustine') {
    renderAugustineStage1();
  } else {
    renderEusebiusStage1();
  }
}

// Drag and drop
function initializeDragAndDrop() {
  const container = document.getElementById('sequence-container');
  if (!container) return;

  let draggedElement = null;

  container.addEventListener('dragstart', (e) => {
    if (e.target.classList.contains('sequence-item')) {
      draggedElement = e.target;
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
    const numberEl = item.querySelector('.sequence-number');
    if (numberEl) numberEl.textContent = index + 1;
    item.dataset.index = index;
  });

  gameState.componentSequence = newSequence;
  saveGameState();
}

// ===== SCREEN 4: STAGE 3 - WRITE =====

function proceedToStage3() {
  gameState.currentStage = 'stage3';
  if (!gameState.studentNarrative) {
    gameState.studentNarrative = '';
  }
  saveGameState();
  renderStage3();
}

function renderStage3() {
  const container = document.getElementById('game-container');
  const content = getWritingContent();
  const isAugustine = gameState.selectedAuthor === 'augustine';

  const allComponents = getAllComponents();
  const sequencedComponents = gameState.componentSequence.map(id =>
    allComponents.find(c => c.id === id)
  ).filter(c => c !== undefined);

  const text = gameState.studentNarrative.trim();
  const wordCount = text === '' ? 0 : text.split(/\s+/).length;
  const canContinue = wordCount >= content.minWords;

  container.innerHTML = `
    <div class="${isAugustine ? 'augustine-stage' : ''}">
    <div class="screen writing-screen fade-in">
      <div class="stage-indicator">Stage 3 of 4: Write Your Narrative</div>
      <div class="intro-visual">
        <img src="Images/${isAugustine ? 'confessions.png' : 'eusebius_writing.png'}"
             alt="${isAugustine ? 'Augustine writing the Confessions' : 'Eusebius writing'}"
             class="intro-illustration-img" style="max-height:200px;">
      </div>
      <h2>${content.title}</h2>
      <p class="prompt-text">${content.prompt}</p>

      <div class="info-box">
        <h3>Guidelines</h3>
        <ul>
          <li>Write up to ${content.targetWords} words (1-2 paragraphs)</li>
          <li>Follow the sequence of components you arranged</li>
          <li>Use first-person perspective</li>
          <li>Your work auto-saves as you type</li>
        </ul>
      </div>

      <div class="writing-layout">
        <div class="writing-main">
          <div class="word-count-indicator">
            <span id="word-count">${wordCount}</span> words
            <span class="target-indicator">(target: ${content.targetWords} words)</span>
          </div>

          <textarea
            id="narrative-textarea"
            class="narrative-textarea"
            placeholder="${content.placeholder}"
            oninput="handleNarrativeInput()"
          >${gameState.studentNarrative}</textarea>

          <div class="writing-actions">
            <button class="secondary-button" onclick="resetAndRestart()">Start Over</button>
            <button class="secondary-button" onclick="backToStage2()">← Back to Structure</button>
            <button class="primary-button" id="continue-btn" onclick="proceedToStage4()" ${canContinue ? '' : 'disabled'}>
              Continue to Export →
            </button>
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

  // Update word count color
  updateWordCountColor(wordCount);

  setTimeout(() => {
    document.getElementById('narrative-textarea')?.focus();
  }, 100);
}

function handleNarrativeInput() {
  const textarea = document.getElementById('narrative-textarea');
  gameState.studentNarrative = textarea.value;
  saveGameState();

  const text = gameState.studentNarrative.trim();
  const wordCount = text === '' ? 0 : text.split(/\s+/).length;
  const content = getWritingContent();

  const wordCountEl = document.getElementById('word-count');
  if (wordCountEl) wordCountEl.textContent = wordCount;
  updateWordCountColor(wordCount);

  const continueBtn = document.getElementById('continue-btn');
  if (continueBtn) continueBtn.disabled = wordCount < content.minWords;
}

function updateWordCountColor(wordCount) {
  const content = getWritingContent();
  const wordCountEl = document.getElementById('word-count');
  if (!wordCountEl) return;

  if (wordCount < content.minWords) {
    wordCountEl.style.color = '#dc2626';
  } else if (wordCount <= content.maxWords) {
    wordCountEl.style.color = '#059669';
  } else {
    wordCountEl.style.color = '#d97706';
  }
}

function backToStage2() {
  gameState.currentStage = 'stage2';
  saveGameState();
  renderStage2();
}

// ===== SCREEN 5: STAGE 4 - EXPORT =====

function proceedToStage4() {
  const text = gameState.studentNarrative.trim();
  const wordCount = text === '' ? 0 : text.split(/\s+/).length;
  const content = getWritingContent();

  if (wordCount < content.minWords) return;

  gameState.currentStage = 'stage4';
  saveGameState();
  renderStage4();
}

function renderStage4() {
  if (gameState.selectedAuthor === 'augustine') {
    renderAugustineExport();
  } else {
    renderEusebiusExport();
  }
}

function renderEusebiusExport() {
  const container = document.getElementById('game-container');
  const allComponents = getAvailableComponents();
  const sequencedComponents = gameState.componentSequence.map(id =>
    allComponents.find(c => c.id === id)
  ).filter(c => c !== undefined);

  const text = gameState.studentNarrative.trim();
  const wordCount = text === '' ? 0 : text.split(/\s+/).length;

  const stage1Summary = stage1Content.choices.map(choice => {
    const optionId = gameState.choices[choice.id];
    if (!optionId) return '';
    const option = choice.options.find(o => o.id === optionId);
    const text = option ? option.text : '';
    return `<p class="summary-line"><strong>${choice.id.charAt(0).toUpperCase() + choice.id.slice(1)}:</strong> ${text}</p>`;
  }).join('');

  container.innerHTML = `
    <div class="screen export-screen fade-in">
      <div class="stage-indicator">Stage 4 of 4: Export Your Work</div>
      <h2>Your Complete Work Summary</h2>

      <div class="export-intro">
        <p>Review your work below and download it for submission.</p>
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
        <button class="secondary-button" onclick="backToStage3()">← Revise Narrative</button>
        <button class="primary-button export-button" onclick="downloadWorkAsJSON()">
          <span class="download-icon">↓</span> Download Work as JSON
        </button>
      </div>

      <div class="stage-actions" style="margin-top: 2rem;">
        <button class="secondary-button" onclick="resetAndRestart()">Start Over</button>
      </div>
    </div>
  `;
}

function renderAugustineExport() {
  const container = document.getElementById('game-container');
  const allComponents = getAugustineAvailableComponents();
  const sequencedComponents = gameState.componentSequence.map(id =>
    allComponents.find(c => c.id === id)
  ).filter(c => c !== undefined);

  const text = gameState.studentNarrative.trim();
  const wordCount = text === '' ? 0 : text.split(/\s+/).length;

  const choicesSummary = [
    { label: "Main Purpose", value: getMainPurposeText(gameState.choices.mainPurpose) },
    { label: "Role of Will", value: getWillPositionText(gameState.choices.role_of_will) },
    { label: "Revision Decision", value: getRevisionDecisionText(gameState.choices.revision_decision) }
  ];

  const mainPurpose = gameState.choices.mainPurpose;
  if (mainPurpose && augustineStage1Content.branchedQuestions[mainPurpose]) {
    augustineStage1Content.branchedQuestions[mainPurpose].forEach(q => {
      if (gameState.choices[q.id]) {
        choicesSummary.push({
          label: q.id.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
          value: getAugustineBranchedText(q.id, gameState.choices[q.id])
        });
      }
    });
  }

  const stage1Summary = choicesSummary.map(choice =>
    `<p class="summary-line"><strong>${choice.label}:</strong> ${choice.value}</p>`
  ).join('');

  container.innerHTML = `
    <div class="augustine-stage">
    <div class="screen export-screen fade-in">
      <div class="stage-indicator">Stage 4 of 4: Export Your Work</div>
      <h2>Your Complete Confessions Summary</h2>

      <div class="export-intro">
        <p>Review your work below and download it for submission.</p>
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
        <button class="secondary-button" onclick="backToStage3()">← Edit Narrative</button>
        <button class="primary-button" onclick="downloadAugustineWork()">Download Complete Work</button>
      </div>

      <div class="feedback-box reflection-box" style="margin-top: 24px;">
        <h3>Reflection</h3>
        <p>You've shaped a memory into a narrative, just as Augustine did in 397 CE.</p>
        <p class="prompt-line">→ Your choices about purpose shaped what components you selected</p>
        <p class="prompt-line">→ Your component sequence shaped how the story unfolds</p>
        <p class="prompt-line">→ Your theological position shaped how you explained the conversion</p>
        <p class="closing-prompt"><strong>Think about:</strong> If you wrote this story again with different purposes, how would it change?</p>
      </div>

      <div class="stage-actions" style="margin-top: 2rem;">
        <button class="secondary-button" onclick="resetAndRestart()">Start Over</button>
      </div>
    </div>
    </div>
  `;
}

function backToStage3() {
  gameState.currentStage = 'stage3';
  saveGameState();
  renderStage3();
}

// ===== DOWNLOAD FUNCTIONS =====

function downloadWorkAsJSON() {
  const text = gameState.studentNarrative.trim();
  const wordCount = text === '' ? 0 : text.split(/\s+/).length;

  const allComponents = getAvailableComponents();
  const sequencedComponents = gameState.componentSequence.map(id => {
    const comp = allComponents.find(c => c.id === id);
    return comp ? { id: comp.id, text: comp.text, category: comp.category } : null;
  }).filter(c => c !== null);

  const stage1ChoicesReadable = {};
  stage1Content.choices.forEach(choice => {
    const optionId = gameState.choices[choice.id];
    if (optionId) {
      const option = choice.options.find(o => o.id === optionId);
      stage1ChoicesReadable[choice.id] = option ? option.text : '';
    }
  });

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

  const jsonString = JSON.stringify(exportData, null, 2);
  const blob = new Blob([jsonString], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `shaping-history-work-${Date.now()}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  showDownloadConfirmation();
}

function downloadAugustineWork() {
  const text = gameState.studentNarrative.trim();
  const wordCount = text === '' ? 0 : text.split(/\s+/).length;

  const allComponents = getAugustineAvailableComponents();
  const sequencedComponents = gameState.componentSequence.map(id => {
    const comp = allComponents.find(c => c.id === id);
    return comp ? { id: comp.id, text: comp.text, category: comp.category } : null;
  }).filter(c => c !== null);

  const stage1ChoicesReadable = {
    mainPurpose: getMainPurposeText(gameState.choices.mainPurpose),
    role_of_will: getWillPositionText(gameState.choices.role_of_will),
    revision_decision: getRevisionDecisionText(gameState.choices.revision_decision)
  };

  const mainPurpose = gameState.choices.mainPurpose;
  if (mainPurpose && augustineStage1Content.branchedQuestions[mainPurpose]) {
    augustineStage1Content.branchedQuestions[mainPurpose].forEach(q => {
      if (gameState.choices[q.id]) {
        stage1ChoicesReadable[q.id] = getAugustineBranchedText(q.id, gameState.choices[q.id]);
      }
    });
  }

  const exportData = {
    metadata: {
      author: "Augustine of Hippo",
      timestamp: new Date().toISOString(),
      dateCompleted: new Date().toLocaleString(),
      wordCount: wordCount,
      version: "1.0"
    },
    stage1: {
      choices: gameState.choices,
      choicesReadable: stage1ChoicesReadable
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

  const jsonString = JSON.stringify(exportData, null, 2);
  const blob = new Blob([jsonString], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `shaping-history-augustine-${Date.now()}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  showDownloadConfirmation();
}

function showDownloadConfirmation() {
  const existingConfirmation = document.querySelector('.download-confirmation');
  if (existingConfirmation) existingConfirmation.remove();

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
    renderWelcome();
  }
}

// ===== STATE MANAGEMENT =====

function saveGameState() {
  localStorage.setItem('shapingHistory_gameState', JSON.stringify(gameState));
}

function loadGameState() {
  const saved = localStorage.getItem('shapingHistory_gameState');
  if (saved) {
    const savedState = JSON.parse(saved);

    if (savedState.version !== GAME_VERSION) {
      console.log(`Version mismatch: saved=${savedState.version}, current=${GAME_VERSION}. Starting fresh.`);
      localStorage.removeItem('shapingHistory_gameState');
      return;
    }

    Object.assign(gameState, savedState);
  }
}

function resetGameState() {
  localStorage.removeItem('shapingHistory_gameState');
  gameState.version = GAME_VERSION;
  gameState.currentStage = 'welcome';
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
  console.log('=== Shaping History v3.0 Initializing ===');

  try {
    loadGameState();
    console.log('Game state loaded:', gameState.currentStage);

    switch (gameState.currentStage) {
      case 'welcome':
        renderWelcome();
        break;
      case 'stage1':
        if (gameState.selectedAuthor === 'augustine') {
          renderAugustineStage1();
        } else {
          renderEusebiusStage1();
        }
        break;
      case 'stage2':
        renderStage2();
        break;
      case 'stage3':
        renderStage3();
        break;
      case 'stage4':
        renderStage4();
        break;
      default:
        renderWelcome();
    }

    console.log('=== Initialization complete ===');
  } catch (error) {
    console.error('Initialization error:', error);
    document.getElementById('game-container').innerHTML = `
      <div class="screen">
        <h1>Error Loading</h1>
        <p>Something went wrong. Please try:</p>
        <ol>
          <li>Refresh the page</li>
          <li>Clear your browser cache</li>
        </ol>
        <button class="primary-button" onclick="localStorage.clear(); location.reload();">
          Clear Data and Restart
        </button>
      </div>
    `;
  }
});
