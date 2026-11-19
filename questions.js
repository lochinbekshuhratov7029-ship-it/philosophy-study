const QUESTIONS = [
  {
    "topic": "Ontology",
    "question": "What does ontology study?",
    "answer": "Being and existence",
    "options": [
      "Being and existence",
      "Beauty and art",
      "Only scientific experiments",
      "Political institutions"
    ],
    "explanation": "Ontology examines the fundamental principles, categories, and patterns of being."
  },
  {
    "topic": "Ontology",
    "question": "Who first used the term ontology in 1606?",
    "answer": "Jacob Lorhard",
    "options": [
      "Jacob Lorhard",
      "Aristotle",
      "Parmenides",
      "Immanuel Kant"
    ],
    "explanation": "The lecture attributes its first use to Jacob Lorhard in Ogdoas Scholastica (1606)."
  },
  {
    "topic": "Ontology",
    "question": "What is being in the narrow sense?",
    "answer": "Objective reality independent of consciousness",
    "options": [
      "Objective reality independent of consciousness",
      "Only ideas and fantasies",
      "Everything imaginable",
      "Only human society"
    ],
    "explanation": "The narrow meaning refers to an objective world independent of consciousness."
  },
  {
    "topic": "Ontology",
    "question": "What does being include in the broad sense?",
    "answer": "Everything that exists, including ideas and feelings",
    "options": [
      "Everything that exists, including ideas and feelings",
      "Matter alone",
      "Only the natural world",
      "Only physical objects"
    ],
    "explanation": "The broad sense includes matter, consciousness, ideas, feelings, and fantasies."
  },
  {
    "topic": "Ontology",
    "question": "What is the opposite of being?",
    "answer": "Non-being",
    "options": [
      "Non-being",
      "Matter",
      "Motion",
      "Society"
    ],
    "explanation": "The lecture defines non-being as what is not."
  },
  {
    "topic": "Ontology",
    "question": "Which philosopher argued that being is motionless?",
    "answer": "Parmenides",
    "options": [
      "Parmenides",
      "Heraclitus",
      "Democritus",
      "Epicurus"
    ],
    "explanation": "Parmenides described being as present, motionless, homogeneous, perfect and limited."
  },
  {
    "topic": "Ontology",
    "question": "Which work expressed Parmenides’ views?",
    "answer": "On Nature",
    "options": [
      "On Nature",
      "Organon",
      "Critique of Pure Reason",
      "The Canon of Medicine"
    ],
    "explanation": "The lecture identifies his metaphysical poem On Nature."
  },
  {
    "topic": "Ontology",
    "question": "Who viewed the universe as perpetually moving living fire?",
    "answer": "Heraclitus",
    "options": [
      "Heraclitus",
      "Parmenides",
      "Kant",
      "Marx"
    ],
    "explanation": "Heraclitus emphasized perpetual motion and the transition of opposites."
  },
  {
    "topic": "Ontology",
    "question": "Who developed ancient atomism?",
    "answer": "Leucippus and Democritus",
    "options": [
      "Leucippus and Democritus",
      "Marx and Engels",
      "Kant and Hegel",
      "Plato and Socrates"
    ],
    "explanation": "They developed the view that visible bodies consist of indivisible atoms."
  },
  {
    "topic": "Ontology",
    "question": "What are atoms according to the lecture’s ancient atomism?",
    "answer": "Indivisible particles of matter",
    "options": [
      "Indivisible particles of matter",
      "Forms of consciousness",
      "Social institutions",
      "Types of knowledge"
    ],
    "explanation": "The lecture defines atoms as indivisible particles composing visible bodies."
  },
  {
    "topic": "Ontology",
    "question": "Who introduced the concept of social or public being?",
    "answer": "Karl Marx and Friedrich Engels",
    "options": [
      "Karl Marx and Friedrich Engels",
      "Epicurus and Lucretius",
      "Socrates and Plato",
      "Kant and Hegel"
    ],
    "explanation": "The lecture associates social/public being with Marx and Engels’ materialist understanding of history."
  },
  {
    "topic": "Ontology",
    "question": "Which three areas of existence are traditionally distinguished?",
    "answer": "Nature, society and consciousness",
    "options": [
      "Nature, society and consciousness",
      "Time, space and force",
      "Reason, logic and method",
      "Quality, quantity and modality"
    ],
    "explanation": "The lecture names nature, society and consciousness."
  },
  {
    "topic": "Ontology",
    "question": "What is second nature?",
    "answer": "Being produced by human labor, or culture",
    "options": [
      "Being produced by human labor, or culture",
      "Nature existing before humans",
      "The absence of matter",
      "Only the physical universe"
    ],
    "explanation": "The lecture contrasts eternal nature with second nature produced by human labor."
  },
  {
    "topic": "Laws & Methods",
    "question": "What is motion?",
    "answer": "Change in the universe",
    "options": [
      "Change in the universe",
      "Only movement of people",
      "An unchanging condition",
      "A form of proof"
    ],
    "explanation": "The lecture defines movement as change in the universe."
  },
  {
    "topic": "Laws & Methods",
    "question": "What is development?",
    "answer": "Progressive movement from simple to complex",
    "options": [
      "Progressive movement from simple to complex",
      "The absence of change",
      "A fixed state",
      "Randomness without pattern"
    ],
    "explanation": "Development is described as progressive movement, sometimes linear or spiral."
  },
  {
    "topic": "Laws & Methods",
    "question": "What does a law represent?",
    "answer": "Relatively stable recurring relationships",
    "options": [
      "Relatively stable recurring relationships",
      "A single accidental event",
      "Any individual opinion",
      "Only legal regulations"
    ],
    "explanation": "The lecture describes laws as stable and recurring relationships."
  },
  {
    "topic": "Laws & Methods",
    "question": "Who first used the term category?",
    "answer": "Aristotle",
    "options": [
      "Aristotle",
      "Hegel",
      "Socrates",
      "Beruni"
    ],
    "explanation": "Aristotle discussed categories in Organon."
  },
  {
    "topic": "Laws & Methods",
    "question": "How many common categories did Aristotle identify?",
    "answer": "Ten",
    "options": [
      "Ten",
      "Four",
      "Three",
      "Seven"
    ],
    "explanation": "The lecture lists substance, quantity, quality, relation, place, time, position, state, action and affection."
  },
  {
    "topic": "Laws & Methods",
    "question": "Which work contains Aristotle’s discussion of categories?",
    "answer": "Organon",
    "options": [
      "Organon",
      "On Nature",
      "The Book of Healing",
      "Critique of Pure Reason"
    ],
    "explanation": "Organon is presented as six collections on logic, beginning with Categories."
  },
  {
    "topic": "Laws & Methods",
    "question": "Who classified categories into quality, quantity, relation and modality?",
    "answer": "Immanuel Kant",
    "options": [
      "Immanuel Kant",
      "Democritus",
      "Parmenides",
      "Heraclitus"
    ],
    "explanation": "The lecture attributes these four types to Kant."
  },
  {
    "topic": "Laws & Methods",
    "question": "What is a method?",
    "answer": "Techniques and operations used to achieve results",
    "options": [
      "Techniques and operations used to achieve results",
      "An unchanging object",
      "A category of matter",
      "A philosophical school only"
    ],
    "explanation": "A method is a way of achieving results in cognition and practice."
  },
  {
    "topic": "Laws & Methods",
    "question": "What does the dialectical method emphasize?",
    "answer": "Interconnections and dynamic development",
    "options": [
      "Interconnections and dynamic development",
      "Isolation and static conditions",
      "Rejecting all arguments",
      "Only sensory perception"
    ],
    "explanation": "Dialectics studies objects in relation to other objects and in evolution."
  },
  {
    "topic": "Laws & Methods",
    "question": "What does the metaphysical method emphasize in this lecture?",
    "answer": "Objects studied separately and statically",
    "options": [
      "Objects studied separately and statically",
      "Only continuous interactions",
      "The exchange of opinions",
      "Deliberately false arguments"
    ],
    "explanation": "The lecture contrasts metaphysical study of isolated, static objects with dialectics."
  },
  {
    "topic": "Laws & Methods",
    "question": "What is sophism?",
    "answer": "Reasoning using deliberately misleading arguments",
    "options": [
      "Reasoning using deliberately misleading arguments",
      "Experimental observation",
      "The study of being",
      "Indivisible particles"
    ],
    "explanation": "The lecture describes sophism as using false arguments or violations of formal logic."
  },
  {
    "topic": "Laws & Methods",
    "question": "Who made dialectical discussion prominent through Dialogues?",
    "answer": "Plato",
    "options": [
      "Plato",
      "Karl Marx",
      "Ibn Sina",
      "Alexander Baumgarten"
    ],
    "explanation": "The lecture associates the popularity of dialectical dialogue with Plato’s Dialogues."
  },
  {
    "topic": "Epistemology",
    "question": "What does epistemology study?",
    "answer": "Knowledge, its structure and development",
    "options": [
      "Knowledge, its structure and development",
      "Only physical matter",
      "Only moral values",
      "The classification of organisms"
    ],
    "explanation": "The lecture defines epistemology as studying knowledge, its functioning and development."
  },
  {
    "topic": "Epistemology",
    "question": "Who first introduced the term epistemology according to the lecture?",
    "answer": "James Frederick Ferrier",
    "options": [
      "James Frederick Ferrier",
      "Jacob Lorhard",
      "Alexander Baumgarten",
      "Aristotle"
    ],
    "explanation": "The lecture attributes the term epistemology to Scottish philosopher James Frederick Ferrier."
  },
  {
    "topic": "Epistemology",
    "question": "Who first used the term gnosiology according to the lecture?",
    "answer": "Alexander Baumgarten",
    "options": [
      "Alexander Baumgarten",
      "James Frederick Ferrier",
      "Heraclitus",
      "Epicurus"
    ],
    "explanation": "The lecture attributes gnosiology to Alexander Baumgarten."
  },
  {
    "topic": "Epistemology",
    "question": "What is gnosiological optimism?",
    "answer": "The world can be known without a fixed knowledge boundary",
    "options": [
      "The world can be known without a fixed knowledge boundary",
      "The world is unknowable",
      "Only appearances can be known",
      "Knowledge is impossible"
    ],
    "explanation": "According to the lecture, more time and means allow knowledge to advance."
  },
  {
    "topic": "Epistemology",
    "question": "What is agnosticism?",
    "answer": "The world is unknowable in principle",
    "options": [
      "The world is unknowable in principle",
      "All knowledge is certain",
      "Knowledge comes only from logic",
      "All change is illusion"
    ],
    "explanation": "The lecture presents agnosticism as denying that the world can be known in principle."
  },
  {
    "topic": "Epistemology",
    "question": "What does skepticism question?",
    "answer": "Our ability to know the real world",
    "options": [
      "Our ability to know the real world",
      "Whether sensory experiences exist",
      "Whether theories are written",
      "Whether matter moves"
    ],
    "explanation": "The lecture says skeptics know the phenomenal world but question knowing the real world."
  },
  {
    "topic": "Epistemology",
    "question": "Which are the three forms of cognition in the lecture?",
    "answer": "Sensual, rational and supersensible",
    "options": [
      "Sensual, rational and supersensible",
      "Nature, society and consciousness",
      "Quantity, quality and modality",
      "Motion, space and time"
    ],
    "explanation": "The lecture distinguishes sensual, rational and supersensible cognition."
  },
  {
    "topic": "Epistemology",
    "question": "Which forms belong to rational knowledge?",
    "answer": "Concept, judgment and reasoning",
    "options": [
      "Concept, judgment and reasoning",
      "Vision, hearing and touch",
      "Motion, being and non-being",
      "Time, position and state"
    ],
    "explanation": "The lecture identifies concept/idea, judgment and reasoning as forms of rational knowledge."
  },
  {
    "topic": "Epistemology",
    "question": "Which method is a controlled, recreatable study of phenomena?",
    "answer": "Experiment",
    "options": [
      "Experiment",
      "Observation alone",
      "Sophism",
      "Metaphysics"
    ],
    "explanation": "Experiments allow researchers to recreate and control studied phenomena."
  },
  {
    "topic": "Epistemology",
    "question": "What is the starting point for experimental knowledge?",
    "answer": "Observation",
    "options": [
      "Observation",
      "Sophism",
      "Atomism",
      "Modality"
    ],
    "explanation": "The lecture describes observation as targeted study of sensory information."
  },
  {
    "topic": "Epistemology",
    "question": "What did Beruni emphasize as a test of knowledge?",
    "answer": "Observation and experimentation",
    "options": [
      "Observation and experimentation",
      "Pure speculation alone",
      "Only religious tradition",
      "Only political debate"
    ],
    "explanation": "The lecture states that knowledge is determined through observation and experimentation."
  },
  {
    "topic": "Epistemology",
    "question": "Where was Ibn Sina born?",
    "answer": "Afshona near Bukhara",
    "options": [
      "Afshona near Bukhara",
      "Elea",
      "Athens",
      "Rome"
    ],
    "explanation": "The lecture states Ibn Sina was born in Afshona, near Bukhara."
  },
  {
    "topic": "Epistemology",
    "question": "Which is NOT one of Ibn Sina’s three forms of motion in the lecture?",
    "answer": "Dialectical motion",
    "options": [
      "Dialectical motion",
      "Accidental motion",
      "Forced motion",
      "Natural motion"
    ],
    "explanation": "The lecture names accidental, forced and natural motion."
  },
  {
    "topic": "Epistemology",
    "question": "What does forced motion mean in Ibn Sina’s classification?",
    "answer": "Motion caused by something external to the body",
    "options": [
      "Motion caused by something external to the body",
      "Movement caused by the body itself",
      "Motion of a body carried within another",
      "Movement only in a circle"
    ],
    "explanation": "Forced motion has its cause outside the body’s own essence."
  },
  {
    "topic": "Epistemology",
    "question": "What is supersensible knowledge?",
    "answer": "Intellectual intuition and direct inner knowledge",
    "options": [
      "Intellectual intuition and direct inner knowledge",
      "Only five-sense perception",
      "Laboratory measurement",
      "Statistical sampling"
    ],
    "explanation": "The lecture links supersensible knowledge to intellectual intuition and metaphysics."
  },
  {
    "topic": "Ontology",
    "question": "Which work first used the term ontology according to the lecture?",
    "answer": "Ogdoas Scholastica",
    "options": [
      "Ogdoas Scholastica",
      "Organon",
      "On Nature",
      "Critique of Pure Reason"
    ],
    "explanation": "Jacob Lorhard used the term in Ogdoas Scholastica (1606)."
  },
  {
    "topic": "Ontology",
    "question": "Which year is associated with Jacob Lorhard’s first use of ontology?",
    "answer": "1606",
    "options": [
      "1606",
      "1781",
      "1848",
      "1902"
    ],
    "explanation": "The lecture dates the first use of the term to 1606."
  },
  {
    "topic": "Ontology",
    "question": "What does philosophy examine in relation to humans?",
    "answer": "Their place in society and the world",
    "options": [
      "Their place in society and the world",
      "Only their biology",
      "Only their income",
      "Only their language"
    ],
    "explanation": "The lecture discusses the world as a whole and the place of humans within it."
  },
  {
    "topic": "Ontology",
    "question": "What term denotes being as objective reality?",
    "answer": "Matter",
    "options": [
      "Matter",
      "Judgment",
      "Intuition",
      "Sophism"
    ],
    "explanation": "The lecture explicitly calls objective reality matter."
  },
  {
    "topic": "Ontology",
    "question": "Which school did Parmenides represent?",
    "answer": "Eleatic school",
    "options": [
      "Eleatic school",
      "Stoic school",
      "Epicurean school",
      "Sophist school"
    ],
    "explanation": "Parmenides was the founder and chief representative of the Eleatic school."
  },
  {
    "topic": "Ontology",
    "question": "What is the title of Parmenides’ metaphysical poem?",
    "answer": "On Nature",
    "options": [
      "On Nature",
      "The Book of Healing",
      "Organon",
      "Dialogues"
    ],
    "explanation": "His views were expressed in On Nature."
  },
  {
    "topic": "Ontology",
    "question": "According to Parmenides, can being arise from non-being?",
    "answer": "No, because non-being does not exist",
    "options": [
      "No, because non-being does not exist",
      "Yes, through chance",
      "Yes, through fire",
      "Only through perception"
    ],
    "explanation": "Parmenides rejected the generation of being from non-being."
  },
  {
    "topic": "Ontology",
    "question": "Why did Parmenides reject the destruction of being?",
    "answer": "It would have to become non-being",
    "options": [
      "It would have to become non-being",
      "It would become fire",
      "It would become an atom",
      "It would become a category"
    ],
    "explanation": "For him non-being does not exist, so being cannot turn into it."
  },
  {
    "topic": "Ontology",
    "question": "Which temporal description fits Parmenides’ being?",
    "answer": "It has neither past nor future",
    "options": [
      "It has neither past nor future",
      "It exists only in the future",
      "It exists only in the past",
      "It alternates between past and future"
    ],
    "explanation": "The lecture describes being as a present without past or future."
  },
  {
    "topic": "Ontology",
    "question": "Which characteristic did Parmenides attribute to being?",
    "answer": "Homogeneous",
    "options": [
      "Homogeneous",
      "Always divided",
      "Perpetually changing",
      "Created by gods"
    ],
    "explanation": "His being is motionless, homogeneous, perfect and limited."
  },
  {
    "topic": "Ontology",
    "question": "What is the central contrast between Parmenides and Heraclitus?",
    "answer": "Immovable being versus perpetual motion",
    "options": [
      "Immovable being versus perpetual motion",
      "Reason versus sensation",
      "Science versus art",
      "Society versus nature"
    ],
    "explanation": "Parmenides emphasizes immobility; Heraclitus emphasizes change."
  },
  {
    "topic": "Ontology",
    "question": "What image did Heraclitus use for the eternal cosmos?",
    "answer": "A living fire",
    "options": [
      "A living fire",
      "A frozen stone",
      "An empty void",
      "A mechanical clock"
    ],
    "explanation": "Heraclitus described the cosmos as an ever-living fire."
  },
  {
    "topic": "Ontology",
    "question": "According to Heraclitus, what produces movement?",
    "answer": "Mutual transition of opposites",
    "options": [
      "Mutual transition of opposites",
      "Complete absence of change",
      "Only individual atoms resting",
      "Human imagination alone"
    ],
    "explanation": "The lecture explains motion through transitions between opposites."
  },
  {
    "topic": "Ontology",
    "question": "How does Heraclitus relate being and non-existence?",
    "answer": "They are inseparable and transition into each other",
    "options": [
      "They are inseparable and transition into each other",
      "They never interact",
      "They are identical to laws",
      "Neither exists"
    ],
    "explanation": "The lecture says one generates or passes into the other."
  },
  {
    "topic": "Ontology",
    "question": "Who was the disciple of Leucippus?",
    "answer": "Democritus",
    "options": [
      "Democritus",
      "Plato",
      "Kant",
      "Engels"
    ],
    "explanation": "Leucippus and his disciple Democritus developed atomism."
  },
  {
    "topic": "Ontology",
    "question": "What does atomism claim visible bodies are made of?",
    "answer": "Atoms",
    "options": [
      "Atoms",
      "Categories",
      "Pure ideas",
      "Only fire"
    ],
    "explanation": "Atoms are described in the lecture as indivisible particles of matter."
  },
  {
    "topic": "Ontology",
    "question": "Which pair later developed ancient atomistic teaching?",
    "answer": "Epicurus and Titus Lucretius Car",
    "options": [
      "Epicurus and Titus Lucretius Car",
      "Kant and Hegel",
      "Marx and Engels",
      "Plato and Socrates"
    ],
    "explanation": "The lecture names Epicurus and Titus Lucretius Car as later materialists."
  },
  {
    "topic": "Ontology",
    "question": "What worldview became dominant with the rise of Christianity in the lecture?",
    "answer": "Monotheistic worldview",
    "options": [
      "Monotheistic worldview",
      "Atomism",
      "Polytheistic Greek worldview",
      "Skepticism"
    ],
    "explanation": "The lecture contrasts one creator God with earlier polytheistic gods."
  },
  {
    "topic": "Ontology",
    "question": "Who developed dialectical materialism and materialist history in the nineteenth century?",
    "answer": "Karl Marx and Friedrich Engels",
    "options": [
      "Karl Marx and Friedrich Engels",
      "Aristotle and Plato",
      "Kant and Hegel",
      "Leucippus and Democritus"
    ],
    "explanation": "The lecture credits Marx and Engels with this development."
  },
  {
    "topic": "Ontology",
    "question": "What new concept is associated with Marx and Engels in Theme 7?",
    "answer": "Social or public being",
    "options": [
      "Social or public being",
      "Natural motion",
      "Formal judgment",
      "Modal categories"
    ],
    "explanation": "Public being is described as an internal foundation of social development."
  },
  {
    "topic": "Ontology",
    "question": "What does public being provide for society?",
    "answer": "An internal foundation of existence and development",
    "options": [
      "An internal foundation of existence and development",
      "Only a physical climate",
      "A synonym for individual fantasy",
      "A rejection of all history"
    ],
    "explanation": "The lecture distinguishes public being from society’s natural basis."
  },
  {
    "topic": "Ontology",
    "question": "Which philosophical discipline became dominant around the late nineteenth and early twentieth centuries?",
    "answer": "Gnoseology",
    "options": [
      "Gnoseology",
      "Aesthetics",
      "Sophism",
      "Atomism"
    ],
    "explanation": "The lecture describes a shift of attention toward cognition."
  },
  {
    "topic": "Ontology",
    "question": "Which three broad areas of existence are traditionally distinguished?",
    "answer": "Nature, society and consciousness",
    "options": [
      "Nature, society and consciousness",
      "Space, time and number",
      "Art, politics and trade",
      "Atoms, fire and water"
    ],
    "explanation": "The lecture explicitly lists nature, society and consciousness."
  },
  {
    "topic": "Ontology",
    "question": "What is first nature?",
    "answer": "Nature existing before and without human participation",
    "options": [
      "Nature existing before and without human participation",
      "Buildings made by humans",
      "Social institutions",
      "Spiritual creations"
    ],
    "explanation": "The lecture describes eternal nature as existing without human participation."
  },
  {
    "topic": "Ontology",
    "question": "What is second nature in the lecture?",
    "answer": "Being produced by human labor, or culture",
    "options": [
      "Being produced by human labor, or culture",
      "The universe before humanity",
      "Non-being",
      "Only physical atoms"
    ],
    "explanation": "Second nature is the human-produced realm, called culture."
  },
  {
    "topic": "Laws & Methods",
    "question": "How is motion defined in Theme 8?",
    "answer": "Change in the universe",
    "options": [
      "Change in the universe",
      "Only movement by vehicles",
      "Only growth in size",
      "A fixed state"
    ],
    "explanation": "The lecture defines movement broadly as change in the universe."
  },
  {
    "topic": "Laws & Methods",
    "question": "What is development in the lecture?",
    "answer": "Progression from simple to complex",
    "options": [
      "Progression from simple to complex",
      "The total absence of motion",
      "A random isolated event",
      "A fixed relation"
    ],
    "explanation": "Development is described as progressive movement from lower to higher or simple to complex."
  },
  {
    "topic": "Laws & Methods",
    "question": "What shape can development take besides a linear path?",
    "answer": "A slowly expanding spiral",
    "options": [
      "A slowly expanding spiral",
      "Only a perfect circle",
      "Only a straight vertical line",
      "Only a square"
    ],
    "explanation": "The lecture allows linear or expanding spiral development."
  },
  {
    "topic": "Laws & Methods",
    "question": "What is a philosophical law?",
    "answer": "A relatively stable recurring relationship",
    "options": [
      "A relatively stable recurring relationship",
      "A one-time coincidence",
      "A personal preference",
      "An unchanging physical object"
    ],
    "explanation": "The lecture emphasizes relative stability and recurrence."
  },
  {
    "topic": "Laws & Methods",
    "question": "Which example illustrates a recurring law in the lecture?",
    "answer": "Spring following winter",
    "options": [
      "Spring following winter",
      "Summer always following spring twice",
      "A random lottery result",
      "A single dream"
    ],
    "explanation": "Seasonal succession is used to illustrate recurring relationships."
  },
  {
    "topic": "Laws & Methods",
    "question": "What is a philosophical category?",
    "answer": "A highly general concept expressing essential relations",
    "options": [
      "A highly general concept expressing essential relations",
      "An isolated measurement",
      "A laboratory tool",
      "A political institution"
    ],
    "explanation": "Categories capture fundamental and broad relations of reality."
  },
  {
    "topic": "Laws & Methods",
    "question": "What was the ancient Greek sense of category?",
    "answer": "Accusation",
    "options": [
      "Accusation",
      "Experiment",
      "Movement",
      "Observation"
    ],
    "explanation": "The lecture traces category to a Greek word meaning accusation."
  },
  {
    "topic": "Laws & Methods",
    "question": "Which philosopher first used the term category according to Theme 8?",
    "answer": "Aristotle",
    "options": [
      "Aristotle",
      "Beruni",
      "Marx",
      "Heraclitus"
    ],
    "explanation": "The lecture attributes the first use of category to Aristotle."
  },
  {
    "topic": "Laws & Methods",
    "question": "What is the Organon?",
    "answer": "Aristotle’s collection of works on logic",
    "options": [
      "Aristotle’s collection of works on logic",
      "A poem by Parmenides",
      "A book by Kant",
      "A text by Ibn Sina"
    ],
    "explanation": "Theme 8 describes the Organon as six collections on logic."
  },
  {
    "topic": "Laws & Methods",
    "question": "How many main categories did Aristotle list in the lecture?",
    "answer": "Ten",
    "options": [
      "Ten",
      "Four",
      "Three",
      "Seven"
    ],
    "explanation": "The lecture gives ten characteristics, from substance to affection."
  },
  {
    "topic": "Laws & Methods",
    "question": "Which of these is one of Aristotle’s ten categories?",
    "answer": "Position",
    "options": [
      "Position",
      "Epistemology",
      "Agnosticism",
      "Atomism"
    ],
    "explanation": "Position is included in the lecture’s ten-category list."
  },
  {
    "topic": "Laws & Methods",
    "question": "Which of these is NOT among Aristotle’s ten listed categories?",
    "answer": "Skepticism",
    "options": [
      "Skepticism",
      "Quantity",
      "Place",
      "Time"
    ],
    "explanation": "Skepticism is a stance about knowledge, not one of the ten categories."
  },
  {
    "topic": "Laws & Methods",
    "question": "Which of these belongs to Aristotle’s categories?",
    "answer": "Affection",
    "options": [
      "Affection",
      "Gnosiology",
      "Dialectics",
      "Agnosticism"
    ],
    "explanation": "Affection is listed as the tenth category."
  },
  {
    "topic": "Laws & Methods",
    "question": "Which two categories refer to how much and what kind?",
    "answer": "Quantity and quality",
    "options": [
      "Quantity and quality",
      "Place and time",
      "State and position",
      "Action and affection"
    ],
    "explanation": "Quantity concerns amount; quality concerns character."
  },
  {
    "topic": "Laws & Methods",
    "question": "Which book did Kant publish in 1781?",
    "answer": "Critique of Pure Reason",
    "options": [
      "Critique of Pure Reason",
      "On Nature",
      "Organon",
      "The Canon of Medicine"
    ],
    "explanation": "Theme 8 dates Kant’s Critique of Pure Reason to 1781."
  },
  {
    "topic": "Laws & Methods",
    "question": "How did Kant understand categories?",
    "answer": "As part of our mental structure for interpreting the world",
    "options": [
      "As part of our mental structure for interpreting the world",
      "As indivisible physical particles",
      "As gods of nature",
      "As a type of observation instrument"
    ],
    "explanation": "The lecture presents categories as prior concepts through which we interpret experience."
  },
  {
    "topic": "Laws & Methods",
    "question": "What four groups of categories did Kant elaborate?",
    "answer": "Quality, quantity, relation and modality",
    "options": [
      "Quality, quantity, relation and modality",
      "Nature, society, mind and matter",
      "Atom, fire, water and air",
      "Motion, rest, space and culture"
    ],
    "explanation": "These four groups are explicitly listed in Theme 8."
  },
  {
    "topic": "Laws & Methods",
    "question": "Which of these is a Kantian category group?",
    "answer": "Modality",
    "options": [
      "Modality",
      "Atomism",
      "Sophism",
      "Observation"
    ],
    "explanation": "Kant’s four groups include modality."
  },
  {
    "topic": "Laws & Methods",
    "question": "Which examples appear under Kant’s quantity group?",
    "answer": "Unity, plurality and totality",
    "options": [
      "Unity, plurality and totality",
      "Reality, negation and limitation",
      "Possibility and existence",
      "Beauty, goodness and truth"
    ],
    "explanation": "The lecture groups unity, plurality and totality under quantity."
  },
  {
    "topic": "Laws & Methods",
    "question": "Which examples appear under Kant’s quality group?",
    "answer": "Reality, negation and limitation",
    "options": [
      "Reality, negation and limitation",
      "Unity, plurality and totality",
      "Beauty, goodness and truth",
      "Place, time and state"
    ],
    "explanation": "These are the lecture’s three examples for Kant’s quality group."
  },
  {
    "topic": "Laws & Methods",
    "question": "How did Hegel group philosophical categories?",
    "answer": "Being, essence and notion",
    "options": [
      "Being, essence and notion",
      "Only quantity and quality",
      "Nature and second nature",
      "Observation and experiment"
    ],
    "explanation": "The lecture contrasts Hegel’s three headings with Kant’s four."
  },
  {
    "topic": "Laws & Methods",
    "question": "Which examples are given under Hegel’s essence?",
    "answer": "Cause and effect",
    "options": [
      "Cause and effect",
      "Unity and plurality",
      "Reality and negation",
      "Possibility and existence"
    ],
    "explanation": "Theme 8 associates cause and effect with essence."
  },
  {
    "topic": "Laws & Methods",
    "question": "What does the Greek word methodos mean in the lecture?",
    "answer": "A way of research or teaching",
    "options": [
      "A way of research or teaching",
      "A physical atom",
      "An eternal law",
      "A category of time"
    ],
    "explanation": "Method is presented as a way of inquiry or practice."
  },
  {
    "topic": "Laws & Methods",
    "question": "What determines which method is appropriate?",
    "answer": "Purpose, subject and conditions",
    "options": [
      "Purpose, subject and conditions",
      "Only the researcher’s age",
      "Only the century",
      "Only the number of participants"
    ],
    "explanation": "Method selection depends on activity purpose, subject and conditions."
  },
  {
    "topic": "Laws & Methods",
    "question": "What does philosophy mainly consider concerning methods?",
    "answer": "Methods of cognition",
    "options": [
      "Methods of cognition",
      "Methods of cooking",
      "Only methods of warfare",
      "Only athletic training"
    ],
    "explanation": "The lecture says philosophy mainly studies methods of cognition."
  },
  {
    "topic": "Laws & Methods",
    "question": "What is dialectics as a discussion?",
    "answer": "Reasoned exchange between differing viewpoints seeking truth",
    "options": [
      "Reasoned exchange between differing viewpoints seeking truth",
      "Deliberate use of false arguments",
      "A refusal to discuss",
      "An isolated static description"
    ],
    "explanation": "The lecture defines dialectics through discussion and reasoned argument."
  },
  {
    "topic": "Laws & Methods",
    "question": "How does the dialectical method study objects?",
    "answer": "In relation to other objects and within development",
    "options": [
      "In relation to other objects and within development",
      "Only in isolation",
      "Only as motionless objects",
      "Without considering systems"
    ],
    "explanation": "Dialectics examines relations and dynamic evolution."
  },
  {
    "topic": "Laws & Methods",
    "question": "How is the metaphysical method contrasted with dialectics in Theme 8?",
    "answer": "It studies objects in isolation and relatively statically",
    "options": [
      "It studies objects in isolation and relatively statically",
      "It emphasizes all mutual relations",
      "It is identical to experiments",
      "It requires perpetual motion"
    ],
    "explanation": "The lecture contrasts isolated static analysis with dialectical relations."
  },
  {
    "topic": "Laws & Methods",
    "question": "Which work popularized dialectic through dialogue?",
    "answer": "Plato’s Dialogues",
    "options": [
      "Plato’s Dialogues",
      "The Canon of Medicine",
      "Ogdoas Scholastica",
      "Critique of Pure Reason"
    ],
    "explanation": "The lecture attributes its popularity to Plato’s Dialogues."
  },
  {
    "topic": "Laws & Methods",
    "question": "Who is associated with introducing the word metaphysics in Theme 8?",
    "answer": "Andronicus of Rhodes",
    "options": [
      "Andronicus of Rhodes",
      "Democritus",
      "James Ferrier",
      "Jacob Lorhard"
    ],
    "explanation": "The lecture names Andronicus of Rhodes in the first century BC."
  },
  {
    "topic": "Laws & Methods",
    "question": "What is sophistic reasoning described as?",
    "answer": "Deliberately using false arguments or violating logic",
    "options": [
      "Deliberately using false arguments or violating logic",
      "Testing a controlled experiment",
      "Studying sensation",
      "Measuring motion"
    ],
    "explanation": "Theme 8 describes sophism as reasoning that deliberately breaks logical rules."
  },
  {
    "topic": "Laws & Methods",
    "question": "What did ancient Sophists professionally teach?",
    "answer": "Oratory and public debate",
    "options": [
      "Oratory and public debate",
      "Only astronomy",
      "Only medicine",
      "Only atomism"
    ],
    "explanation": "Sophists trained young people in speaking and debate for public careers."
  },
  {
    "topic": "Epistemology",
    "question": "What does the Greek epistēmē mean?",
    "answer": "Certain knowledge",
    "options": [
      "Certain knowledge",
      "Motion",
      "Existence",
      "Beauty"
    ],
    "explanation": "The lecture derives epistemology from epistēmē and logos."
  },
  {
    "topic": "Epistemology",
    "question": "What does the Greek gnosis mean?",
    "answer": "Knowledge",
    "options": [
      "Knowledge",
      "Law",
      "Fire",
      "Method"
    ],
    "explanation": "Gnosiology derives from gnosis meaning knowledge."
  },
  {
    "topic": "Epistemology",
    "question": "Who first used the term gnosiology according to Theme 9?",
    "answer": "Alexander Baumgarten",
    "options": [
      "Alexander Baumgarten",
      "James Frederick Ferrier",
      "Parmenides",
      "Andronicus of Rhodes"
    ],
    "explanation": "The lecture attributes the term gnosiology to Baumgarten."
  },
  {
    "topic": "Epistemology",
    "question": "Who first introduced the term epistemology according to Theme 9?",
    "answer": "James Frederick Ferrier",
    "options": [
      "James Frederick Ferrier",
      "Alexander Baumgarten",
      "Aristotle",
      "Heraclitus"
    ],
    "explanation": "The lecture credits Scottish philosopher Ferrier."
  },
  {
    "topic": "Epistemology",
    "question": "Which philosopher also developed aesthetic philosophy?",
    "answer": "Alexander Baumgarten",
    "options": [
      "Alexander Baumgarten",
      "Democritus",
      "Engels",
      "Leucippus"
    ],
    "explanation": "Baumgarten is associated with aesthetics in the lecture."
  },
  {
    "topic": "Epistemology",
    "question": "How does the lecture distinguish gnosiology from epistemology?",
    "answer": "General knowledge versus scientific cognition",
    "options": [
      "General knowledge versus scientific cognition",
      "Being versus non-being",
      "Motion versus rest",
      "Nature versus culture"
    ],
    "explanation": "The lecture generally treats gnosiology as broader and epistemology as scientific cognition."
  },
  {
    "topic": "Epistemology",
    "question": "Which types of cognition are named beyond scientific knowledge?",
    "answer": "Ideological, artistic and religious",
    "options": [
      "Ideological, artistic and religious",
      "Only mathematical and physical",
      "Only mechanical and natural",
      "Only social and economic"
    ],
    "explanation": "Theme 9 names ideological, artistic and religious cognition."
  },
  {
    "topic": "Epistemology",
    "question": "What does gnosiological optimism hold?",
    "answer": "The world can be known without a fixed boundary",
    "options": [
      "The world can be known without a fixed boundary",
      "The world is unknowable in principle",
      "Only appearances are knowable",
      "Knowledge is impossible"
    ],
    "explanation": "Optimism holds that time and means allow knowledge to advance."
  },
  {
    "topic": "Epistemology",
    "question": "What does agnosticism claim in the lecture?",
    "answer": "The world is unknowable in principle",
    "options": [
      "The world is unknowable in principle",
      "All knowledge is complete",
      "Only observation matters",
      "Atoms are indivisible"
    ],
    "explanation": "The lecture describes agnosticism as denying knowledge of the world in principle."
  },
  {
    "topic": "Epistemology",
    "question": "What does skepticism question?",
    "answer": "Our ability to know the real world beyond appearances",
    "options": [
      "Our ability to know the real world beyond appearances",
      "Whether humans can feel sensations",
      "Whether experiments exist",
      "Whether the world changes"
    ],
    "explanation": "The lecture contrasts phenomenal knowledge with doubts about the real world."
  },
  {
    "topic": "Epistemology",
    "question": "What are the three forms of cognition listed in Theme 9?",
    "answer": "Sensual, rational and supersensible",
    "options": [
      "Sensual, rational and supersensible",
      "Being, essence and notion",
      "Quantity, quality and modality",
      "Nature, society and culture"
    ],
    "explanation": "Theme 9 gives these three levels or forms of cognition."
  },
  {
    "topic": "Epistemology",
    "question": "What belongs to sensual cognition?",
    "answer": "Sensations, perceptions and notions",
    "options": [
      "Sensations, perceptions and notions",
      "Only theories and laws",
      "Only formal proof",
      "Only political institutions"
    ],
    "explanation": "Sensual cognition operates through sensory experience."
  },
  {
    "topic": "Epistemology",
    "question": "What belongs to rational cognition?",
    "answer": "Hypotheses, theories, laws and causal relations",
    "options": [
      "Hypotheses, theories, laws and causal relations",
      "Only taste and smell",
      "Only mystical intuition",
      "Only physical movement"
    ],
    "explanation": "Rational cognition uses abstraction and explanatory structures."
  },
  {
    "topic": "Epistemology",
    "question": "What are the forms of rational knowledge?",
    "answer": "Concept, judgment and reasoning",
    "options": [
      "Concept, judgment and reasoning",
      "Vision, touch and smell",
      "Fire, air and water",
      "Nature, society and culture"
    ],
    "explanation": "The lecture lists concept or idea, judgment and reasoning."
  },
  {
    "topic": "Epistemology",
    "question": "What does supersensible knowledge involve?",
    "answer": "Intellectual intuition and direct inner knowledge",
    "options": [
      "Intellectual intuition and direct inner knowledge",
      "Only controlled experiments",
      "Only sensory organs",
      "Only formal measurements"
    ],
    "explanation": "The lecture associates supersensible knowledge with intuition and metaphysics."
  },
  {
    "topic": "Epistemology",
    "question": "Which five sensory systems are listed?",
    "answer": "Vision, hearing, touch, taste and smell",
    "options": [
      "Vision, hearing, touch, taste and smell",
      "Vision, memory, logic, belief and law",
      "Touch, motion, reason, time and space",
      "Taste, quality, society, science and logic"
    ],
    "explanation": "These five senses provide information interpreted by the mind."
  },
  {
    "topic": "Epistemology",
    "question": "Which three forms of emotional cognition are named in Theme 9?",
    "answer": "Intuition, perception and imagination",
    "options": [
      "Intuition, perception and imagination",
      "Concept, judgment and reasoning",
      "Being, essence and notion",
      "Law, category and method"
    ],
    "explanation": "The lecture explicitly lists intuition, perception and imagination."
  },
  {
    "topic": "Epistemology",
    "question": "What does a judgment do in classical formal logic?",
    "answer": "Affirms or denies conformity of concepts",
    "options": [
      "Affirms or denies conformity of concepts",
      "Measures a physical object",
      "Creates an atom",
      "Moves a body naturally"
    ],
    "explanation": "A judgment affirms or denies relations between concepts."
  },
  {
    "topic": "Epistemology",
    "question": "How are new logical statements formed?",
    "answer": "Through conclusions drawn from concepts and judgments",
    "options": [
      "Through conclusions drawn from concepts and judgments",
      "Through sensory organs alone",
      "By rejecting every premise",
      "By static observation alone"
    ],
    "explanation": "The lecture explains that conclusions produce new judgments."
  },
  {
    "topic": "Epistemology",
    "question": "What is the starting point for experimental knowledge?",
    "answer": "Observation",
    "options": [
      "Observation",
      "Sophism",
      "Non-being",
      "Modality"
    ],
    "explanation": "Theme 9 explicitly calls observation the starting point."
  },
  {
    "topic": "Epistemology",
    "question": "Which is an element of observation?",
    "answer": "An observer and a research object",
    "options": [
      "An observer and a research object",
      "Only a conclusion",
      "Only a philosopher’s name",
      "Only a social category"
    ],
    "explanation": "Observation includes observer, object, commentary, tools and measuring instruments."
  },
  {
    "topic": "Epistemology",
    "question": "How can observation results be displayed?",
    "answer": "Drawings, diagrams and simple images",
    "options": [
      "Drawings, diagrams and simple images",
      "Only metaphysical arguments",
      "Only dreams",
      "Only abstract categories"
    ],
    "explanation": "The lecture lists visual records and diagrams among observation results."
  },
  {
    "topic": "Epistemology",
    "question": "What distinguishes an experiment from simple observation?",
    "answer": "The researcher can recreate and control the phenomenon",
    "options": [
      "The researcher can recreate and control the phenomenon",
      "It excludes all measurement",
      "It never uses instruments",
      "It requires no target"
    ],
    "explanation": "The lecture defines experiments through controlled, repeatable study."
  },
  {
    "topic": "Epistemology",
    "question": "In which science did experimental style initially arise according to the lecture?",
    "answer": "Physics",
    "options": [
      "Physics",
      "History",
      "Ethics",
      "Linguistics"
    ],
    "explanation": "The lecture says experimentation arose in physics before spreading."
  },
  {
    "topic": "Epistemology",
    "question": "According to Beruni, what is one purpose of knowledge?",
    "answer": "To satisfy people’s needs",
    "options": [
      "To satisfy people’s needs",
      "To deny observation",
      "To reject sensory information",
      "To eliminate logic"
    ],
    "explanation": "Beruni connects knowledge with human needs."
  },
  {
    "topic": "Epistemology",
    "question": "According to Beruni, what begins cognition?",
    "answer": "Information from the sense organs",
    "options": [
      "Information from the sense organs",
      "Purely abstract laws",
      "A political decision",
      "A philosophical category alone"
    ],
    "explanation": "Sense information provides a foundation for mental cognition."
  },
  {
    "topic": "Epistemology",
    "question": "How is the authenticity of knowledge tested in Beruni’s account?",
    "answer": "Observation and experimentation",
    "options": [
      "Observation and experimentation",
      "Only intuition",
      "Only tradition",
      "Only debate"
    ],
    "explanation": "The lecture emphasizes observation and experimentation."
  },
  {
    "topic": "Epistemology",
    "question": "Where was Ibn Sina born according to the lecture?",
    "answer": "Afshona near Bukhara",
    "options": [
      "Afshona near Bukhara",
      "Hamadon",
      "Elea",
      "Athens"
    ],
    "explanation": "Theme 9 places his birth in Afshona near Bukhara."
  },
  {
    "topic": "Epistemology",
    "question": "Which is a well-known work of Ibn Sina?",
    "answer": "The Canon of Medicine",
    "options": [
      "The Canon of Medicine",
      "Organon",
      "On Nature",
      "Dialogues"
    ],
    "explanation": "The lecture lists The Canon of Medicine among his works."
  },
  {
    "topic": "Epistemology",
    "question": "What does wujudu wājib refer to in Ibn Sina’s account?",
    "answer": "God as the first reason",
    "options": [
      "God as the first reason",
      "The created world",
      "Accidental motion",
      "Sensory perception"
    ],
    "explanation": "The lecture describes wujudu wājib as the necessary first cause."
  },
  {
    "topic": "Epistemology",
    "question": "What does wujudi mumkin refer to in Ibn Sina’s account?",
    "answer": "Created material and spiritual beings",
    "options": [
      "Created material and spiritual beings",
      "The first reason itself",
      "Only the five senses",
      "The Eleatic school"
    ],
    "explanation": "The lecture contrasts contingent created beings with the first cause."
  },
  {
    "topic": "Epistemology",
    "question": "How many forms of motion does Ibn Sina distinguish in Theme 9?",
    "answer": "Three",
    "options": [
      "Three",
      "Two",
      "Four",
      "Ten"
    ],
    "explanation": "The lecture lists accidental, forced and natural motion."
  },
  {
    "topic": "Epistemology",
    "question": "What is accidental motion in Ibn Sina’s classification?",
    "answer": "A body moving jointly within another body",
    "options": [
      "A body moving jointly within another body",
      "Motion caused by an external force",
      "Motion arising from the body itself",
      "A motionless perfect being"
    ],
    "explanation": "The lecture describes a body moving together with another containing body."
  },
  {
    "topic": "Epistemology",
    "question": "What is forced motion?",
    "answer": "Motion caused by something outside the body’s essence",
    "options": [
      "Motion caused by something outside the body’s essence",
      "The body’s own natural motion",
      "Only movement in a circle",
      "No movement at all"
    ],
    "explanation": "The cause of forced motion lies outside the body."
  },
  {
    "topic": "Epistemology",
    "question": "What is natural motion in Ibn Sina’s account?",
    "answer": "Motion belonging to the body itself",
    "options": [
      "Motion belonging to the body itself",
      "Motion imposed by another body",
      "Motion without space or time",
      "Only imaginary motion"
    ],
    "explanation": "The lecture gives rising fire and falling stones as examples."
  },
  {
    "topic": "Epistemology",
    "question": "Which example is given for natural motion?",
    "answer": "A falling stone",
    "options": [
      "A falling stone",
      "A passenger inside a moving carriage",
      "A body pushed by an external agent",
      "A stationary category"
    ],
    "explanation": "The lecture cites the fall of a stone and rise of fire or wind."
  },
  {
    "topic": "Epistemology",
    "question": "Which paths can natural motion take according to the lecture?",
    "answer": "Circular and straight-line",
    "options": [
      "Circular and straight-line",
      "Only diagonal and zigzag",
      "Only stationary",
      "Only spiral and square"
    ],
    "explanation": "The lecture describes circular and straight-line natural motion."
  }
];
