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
  }
];
