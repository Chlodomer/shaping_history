// ===== SHAPING HISTORY: STAGE-BASED COMPOSITION TOOL =====
// Stage 1: Multiple Choice Decisions

// ===== GAME STATE =====
const GAME_VERSION = '2.1'; // Increment when making breaking changes

const gameState = {
  version: GAME_VERSION,
  currentStage: 'title', // title, onboarding, bio, intro, stage1, stage2, stage3, stage4
  currentScreen: 0,
  onboardingStep: 0,
  hasSeenOnboarding: false,
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
        "In this tool, you'll become ancient Christian historians writing about events they witnessed.",
        "You'll make the same kinds of choices these authors faced: what to emphasize, what to omit, and how to frame events for your audience.",
        "Through this hands-on experience, you'll discover how all historical narratives are shaped by authorial decisions."
      ],
      visual: "preview-welcome"
    },
    {
      title: "What You'll Do",
      content: [
        "You'll work through 4 stages for each author:",
        "• <strong>Stage 1:</strong> Make high-level compositional choices",
        "• <strong>Stage 2:</strong> Select and arrange narrative components",
        "• <strong>Stage 3:</strong> Write your own historical narrative",
        "• <strong>Stage 4:</strong> Review and export your work"
      ],
      visual: "preview-stages"
    },
    {
      title: "The Authors",
      content: [
        "You'll write as two different historians:",
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
        "Time to complete: 25-30 minutes"
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

// ===== STAGE 3 CONTENT =====
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
          '<button class="secondary-button" onclick="skipToEusebius()">Skip to Eusebius →</button>' :
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
          ${gameState.onboardingStep < totalSteps - 1 ? 'Next →' : 'Start with Eusebius →'}
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
    // Finished onboarding, go to Eusebius bio
    gameState.hasSeenOnboarding = true;
    showEusebiusBio();
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
  showEusebiusBio();
}

function skipToEusebius() {
  showEusebiusBio();
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

function renderIntro() {
  const content = stage1Content.intro;
  const container = document.getElementById('game-container');

  container.innerHTML = `
    <div class="screen intro-screen fade-in">
      <div class="stage-indicator">Stage 1 of 5: Multiple Choice</div>
      <h1>${content.title}</h1>
      ${content.paragraphs.map(p => `<p>${p}</p>`).join('')}
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
    </div>
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
    </div>
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
    </div>
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
    </div>
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

      <div class="info-box">
        <h3>Guidelines</h3>
        <ul>
          ${content.guidelines.map(g => `<li>${g}</li>`).join('')}
        </ul>
      </div>

      <button class="primary-button" onclick="renderWritingInterface()">${content.buttonText}</button>
    </div>
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
      case 'bio':
        console.log('Rendering bio');
        renderEusebiusBio();
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
