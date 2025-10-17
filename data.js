// 骨骼数据
const bones = [
  {
    latin: "Femur",
    common: {
      zh: "股骨",
      en: "Femur"
    },
    finnish: "Lihaskammio",
    category: "category-lower",
    imageId: 1082,
    description: {
      zh: "股骨是人体最长、最粗壮的骨头，位于大腿部位，连接髋关节和膝关节。",
      en: "The femur is the longest and strongest bone in the human body, located in the thigh, connecting the hip joint to the knee joint."
    }
  },
  {
    latin: "Tibia",
    common: {
      zh: "胫骨",
      en: "Tibia"
    },
    finnish: "Jalkaranka",
    category: "category-lower",
    imageId: 1083,
    description: {
      zh: "胫骨是小腿内侧的长骨，是下肢主要承重骨之一，连接股骨和踝骨。",
      en: "The tibia is the long bone in the medial part of the lower leg, one of the main weight-bearing bones of the lower extremity, connecting the femur and ankle bones."
    }
  },
  {
    latin: "Humerus",
    common: {
      zh: "肱骨",
      en: "Humerus"
    },
    finnish: "Olkaranka",
    category: "category-upper",
    imageId: 1084,
    description: {
      zh: "肱骨是上臂的长骨，连接肩胛骨和前臂骨（桡骨和尺骨）。",
      en: "The humerus is the long bone of the upper arm, connecting the scapula and the forearm bones (radius and ulna)."
    }
  },
  {
    latin: "Radius",
    common: {
      zh: "桡骨",
      en: "Radius"
    },
    finnish: "Käsihaaranka",
    category: "category-upper",
    imageId: 1085,
    description: {
      zh: "桡骨是前臂外侧的长骨，与尺骨平行，参与腕关节的形成。",
      en: "The radius is the long bone on the lateral side of the forearm, parallel to the ulna, and participates in the formation of the wrist joint."
    }
  },
  {
    latin: "Ulna",
    common: {
      zh: "尺骨",
      en: "Ulna"
    },
    finnish: "Vartalon ulnariranka",
    category: "category-upper",
    imageId: 1086,
    description: {
      zh: "尺骨是前臂内侧的长骨，与桡骨平行，是肘关节的重要组成部分。",
      en: "The ulna is the long bone on the medial side of the forearm, parallel to the radius, and is an important part of the elbow joint."
    }
  },
  {
    latin: "Vertebra",
    common: {
      zh: "椎骨",
      en: "Vertebra"
    },
    finnish: "Selkänoppa",
    category: "category-spine",
    imageId: 1087,
    description: {
      zh: "椎骨是构成脊柱的33块骨头，保护脊髓，支撑头部和躯干。",
      en: "Vertebrae are the 33 bones that make up the spine, protecting the spinal cord and supporting the head and trunk."
    }
  },
  {
    latin: "Cranium",
    common: {
      zh: "颅骨",
      en: "Cranium"
    },
    finnish: "Käpälö",
    category: "category-skull",
    imageId: 1088,
    description: {
      zh: "颅骨是保护大脑的骨骼结构，由8块颅骨组成。",
      en: "The cranium is the skeletal structure that protects the brain, consisting of 8 cranial bones."
    }
  },
  {
    latin: "Sternum",
    common: {
      zh: "胸骨",
      en: "Sternum"
    },
    finnish: "Rinta-aiholuuna",
    category: "category-thorax",
    imageId: 1089,
    description: {
      zh: "胸骨是位于胸前正中线的扁骨，与肋骨共同构成胸廓前壁。",
      en: "The sternum is a flat bone located in the midline of the anterior chest, forming the anterior wall of the thoracic cage together with the ribs."
    }
  },
  {
    latin: "Scapula",
    common: {
      zh: "肩胛骨",
      en: "Scapula"
    },
    finnish: "Laatikko",
    category: "category-upper",
    imageId: 1090,
    description: {
      zh: "肩胛骨是位于背部的三角形扁骨，参与肩关节的形成。",
      en: "The scapula is a triangular flat bone located on the back, participating in the formation of the shoulder joint."
    }
  },
  {
    latin: "Pelvis",
    common: {
      zh: "骨盆",
      en: "Pelvis"
    },
    finnish: "Lantio",
    category: "category-lower",
    imageId: 1091,
    description: {
      zh: "骨盆是由骶骨、尾骨和左右髋骨组成的盆状结构，支撑脊柱，保护内脏。",
      en: "The pelvis is a basin-shaped structure composed of the sacrum, coccyx, and left and right hip bones, supporting the spine and protecting internal organs."
    }
  },
  {
    latin: "Fibula",
    common: {
      zh: "腓骨",
      en: "Fibula"
    },
    finnish: "Käsihaaranka",
    category: "category-lower",
    imageId: 1092,
    description: {
      zh: "腓骨是小腿外侧的长骨，与胫骨平行，不直接承重，但参与踝关节的形成。",
      en: "The fibula is the long bone on the lateral side of the lower leg, parallel to the tibia, not directly bearing weight but participating in the formation of the ankle joint."
    }
  },
  {
    latin: "Clavicula",
    common: {
      zh: "锁骨",
      en: "Clavicle"
    },
    finnish: "Kaulanvirveli",
    category: "category-upper",
    imageId: 1093,
    description: {
      zh: "锁骨是连接胸骨和肩胛骨的长骨，是上肢与躯干的唯一骨性连接。",
      en: "The clavicle is the long bone connecting the sternum and scapula, and is the only bony connection between the upper limb and the trunk."
    }
  }
];

// 翻译数据
const translations = {
  zh: {
    "practice": "练习",
    "bone-list": "骨骼列表",
    "quiz": "测验模式",
    "statistics": "学习统计",
    "resources": "解剖学资源",
    "study-mode": "学习模式",
    "quiz-mode": "测验模式",
    "page-title": "人体骨骼解剖学练习",
    "page-description": "通过图片识别学习人体骨骼结构，点击下方按钮查看答案或获取新的骨骼图片进行练习。",
    "bone-name": "骨骼名称",
    "click-to-reveal": "点击"显示答案"查看骨骼拉丁语名称",
    "bone-description": "骨骼说明",
    "show-answer": "显示答案",
    "show-details": "详细说明",
    "new-bone": "新骨骼",
    "save": "收藏",
    "identify-bone": "请识别这是哪块骨骼（拉丁语名称）",
    "check-answer": "检查答案",
    "next-question": "下一题",
    "correct": "正确！",
    "incorrect": "不正确",
    "correct-answer": "正确答案是",
    "progress": "学习进度",
    "learned-bones": "已学习骨骼",
    "today-learned": "今日学习",
    "saved-bones": "收藏骨骼",
    "overall-progress": "总体进度: 6%",
    "quiz-stats": "测验统计",
    "total-quizzes": "总测验数",
    "correct-answers": "正确答案",
    "accuracy": "正确率",
    "bone-regions": "骨骼区域",
    "all-bones": "全部骨骼",
    "skull": "颅骨",
    "spine": "脊柱",
    "thorax": "胸廓",
    "upper-limbs": "上肢骨",
    "lower-limbs": "下肢骨",
    "copyright": "© 2023 Osteologia. 解剖学学习工具"
  },
  en: {
    "practice": "Practice",
    "bone-list": "Bone List",
    "quiz": "Quiz Mode",
    "statistics": "Statistics",
    "resources": "Anatomy Resources",
    "study-mode": "Study Mode",
    "quiz-mode": "Quiz Mode",
    "page-title": "Human Skeleton Anatomy Practice",
    "page-description": "Learn human skeleton anatomy through image recognition. Click the buttons below to reveal answers or get new bone images for practice.",
    "bone-name": "Bone Name",
    "click-to-reveal": "Click 'Show Answer' to view the Latin name of the bone",
    "bone-description": "Bone Description",
    "show-answer": "Show Answer",
    "show-details": "Show Details",
    "new-bone": "New Bone",
    "save": "Save",
    "identify-bone": "Please identify this bone (Latin name)",
    "check-answer": "Check Answer",
    "next-question": "Next Question",
    "correct": "Correct!",
    "incorrect": "Incorrect",
    "correct-answer": "The correct answer is",
    "progress": "Learning Progress",
    "learned-bones": "Learned Bones",
    "today-learned": "Today's Learning",
    "saved-bones": "Saved Bones",
    "overall-progress": "Overall Progress: 6%",
    "quiz-stats": "Quiz Statistics",
    "total-quizzes": "Total Quizzes",
    "correct-answers": "Correct Answers",
    "accuracy": "Accuracy",
    "bone-regions": "Bone Regions",
    "all-bones": "All Bones",
    "skull": "Skull",
    "spine": "Spine",
    "thorax": "Thorax",
    "upper-limbs": "Upper Limbs",
    "lower-limbs": "Lower Limbs",
    "copyright": "© 2023 Osteologia. Anatomy Learning Tool"
  }
};

// 骨骼类别名称
const boneCategories = {
  "category-skull": {
    zh: "颅骨",
    en: "Skull"
  },
  "category-spine": {
    zh: "脊柱",
    en: "Spine"
  },
  "category-thorax": {
    zh: "胸廓",
    en: "Thorax"
  },
  "category-upper": {
    zh: "上肢骨",
    en: "Upper Limbs"
  },
  "category-lower": {
    zh: "下肢骨",
    en: "Lower Limbs"
  }
};
