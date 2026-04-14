export const ACTIVITIES = {
  yoga: {
    label: "Yoga",
    presets: { SOUP: 4, RENFO: 2, CARDIO: 0, EQUI: 3 },
    editableZones: ["RENFO", "EQUI"]
  },

  body_zen: {
    label: "Body Zen",
    presets: { SOUP: 3, RENFO: 2, CARDIO: 0, EQUI: 3 },
    editableZones: ["EQUI", "RENFO"]
  },

  autre_seance_souplesse: {
    label: "Autre séance Souplesse",
    presets: { SOUP: 3, RENFO: 0, CARDIO: 0, EQUI: 0 },
    editableZones: ["EQUI", "RENFO"]
  },

  programme_diabete_surpoids: {
    label: "Programme Diabète & Surpoids ",
    presets: { SOUP: 2, RENFO: 3, CARDIO: 3, EQUI: 2 },
    editableZones: ["EQUI", "RENFO", "SOUP"]
  },

  seance_multi_activites_bien_vieillir: {
    label: "Séance Multi activités Bien vieillir",
    presets: { SOUP: 2, RENFO: 3, CARDIO: 4, EQUI: 2 },
    editableZones: ["RENFO", "EQUI", "CARDIO", "SOUP"]
  },

  programme_gym_apres_cancer: {
    label: "Programme Gym’Après Cancer®",
    presets: { SOUP: 2, RENFO: 2, CARDIO: 2, EQUI: 2 },
    editableZones: ["RENFO", "EQUI", "CARDIO", "SOUP"]
  },

  programme_gymmemoire: {
    label: "Programme Gymmémoire®",
    presets: { SOUP: 2, RENFO: 2, CARDIO: 2, EQUI: 2 },
    editableZones: ["RENFO", "EQUI", "CARDIO", "SOUP"]
  },

  seance_multi_activites: {
    label: "Séance Multi activités",
    presets: { SOUP: 2, RENFO: 2, CARDIO: 2, EQUI: 2 },
    editableZones: ["RENFO", "EQUI", "CARDIO", "SOUP"]
  },

  seance_multi_activites_exterieur: {
    label: "Séance Multi Activités Exterieur",
    presets: { SOUP: 2, RENFO: 2, CARDIO: 2, EQUI: 2 },
    editableZones: ["RENFO", "EQUI", "CARDIO", "SOUP"]
  },

  seance_corps_et_memoire: {
    label: "Séance Corps et mémoire",
    presets: { SOUP: 2, RENFO: 2, CARDIO: 2, EQUI: 2 },
    editableZones: ["RENFO", "CARDIO", "SOUP"]
  },

  seance_apa_multi_pathologies: {
    label: "Séance APA multi-pathologies",
    presets: { SOUP: 2, RENFO: 2, CARDIO: 2, EQUI: 2 },
    editableZones: ["RENFO", "EQUI", "CARDIO", "SOUP"]
  },

  seance_7_12_ans: {
    label: "Séance 7 – 12 ans",
    presets: { SOUP: 1, RENFO: 2, CARDIO: 2, EQUI: 1 },
    editableZones: ["RENFO", "EQUI", "CARDIO", "SOUP"]
  },

  seance_3_6_ans: {
    label: "Séance 3 – 6 ans",
    presets: { SOUP: 1, RENFO: 1, CARDIO: 1, EQUI: 1 },
    editableZones: ["RENFO", "EQUI", "CARDIO", "SOUP"]
  },

  seance_9_mois_3_ans: {
    label: "Séance 9 mois – 3 ans",
    presets: { SOUP: 1, RENFO: 1, CARDIO: 0, EQUI: 1 },
    editableZones: ["RENFO", "EQUI", "CARDIO", "SOUP"]
  },

  autre_seance_renforcement: {
    label: "Autre séance Renforcement",
    presets: { SOUP: 0, RENFO: 3, CARDIO: 0, EQUI: 0 },
    editableZones: ["EQUI", "CARDIO", "SOUP"]
  },

  autre_seance_cardio: {
    label: "Autre séance Cardio",
    presets: { SOUP: 0, RENFO: 0, CARDIO: 3, EQUI: 0 },
    editableZones: ["RENFO", "EQUI", "SOUP"]
  },

  autre_seance_equilibre: {
    label: "Autre séance Equilibre",
    presets: { SOUP: 0, RENFO: 0, CARDIO: 0, EQUI: 3 },
    editableZones: ["RENFO", "CARDIO", "SOUP"]
  },

  programme_et_vie_danse: {
    label: "Programme Et Vie Danse",
    presets: { SOUP: 2, RENFO: 2, CARDIO: 2, EQUI: 3 },
    editableZones: ["CARDIO"]
  },

  seance_et_vie_danse: {
    label: "Séance Et Vie Danse",
    presets: { SOUP: 3, RENFO: 3, CARDIO: 3, EQUI: 3 },
    editableZones: ["EQUI"]
  },

  seance_maintien_de_l_autonomie: {
    label: "Séance maintien de l'autonomie",
    presets: { SOUP: 3, RENFO: 2, CARDIO: 2, EQUI: 3 },
    editableZones: ["RENFO", "CARDIO", "SOUP"]
  },

  autre_atelier_bien_vieillir: {
    label: "Autre atelier Bien Vieillir",
    presets: { SOUP: 2, RENFO: 2, CARDIO: 2, EQUI: 2 },
    editableZones: ["CARDIO", "SOUP"]
  },

  seance_gym_apres_cancer: {
    label: "Séance Gym’Après Cancer®",
    presets: { SOUP: 2, RENFO: 2, CARDIO: 2, EQUI: 2 },
    editableZones: ["RENFO", "EQUI", "CARDIO", "SOUP"]
  },

  seance_diabete_surpoids: {
    label: "Séance Diabète & Surpoids",
    presets: { SOUP: 2, RENFO: 3, CARDIO: 3, EQUI: 2 },
    editableZones: ["RENFO", "EQUI", "SOUP"]
  },

  seance_dansee: {
    label: "Séance Dansée",
    presets: { SOUP: 0, RENFO: 1, CARDIO: 3, EQUI: 1 },
    editableZones: []
  },

  stretching: {
    label: "Stretching",
    presets: { SOUP: 5, RENFO: 0, CARDIO: 0, EQUI: 2 },
    editableZones: []
  },

  pilates: {
    label: "Pilates",
    presets: { SOUP: 3, RENFO: 4, CARDIO: 0, EQUI: 3 },
    editableZones: []
  },

  fit_ball: {
    label: "Fit’Ball®",
    presets: { SOUP: 2, RENFO: 4, CARDIO: 0, EQUI: 2 },
    editableZones: []
  },

  atelier_prevention_des_chutes: {
    label: "Atelier prévention des chutes",
    presets: { SOUP: 2, RENFO: 3, CARDIO: 2, EQUI: 5 },
    editableZones: ["RENFO"]
  },

  fit_gliss: {
    label: "Fit’Gliss®",
    presets: { SOUP: 2, RENFO: 4, CARDIO: 1, EQUI: 2 },
    editableZones: ["RENFO"]
  },

  seance_equilibre: {
    label: "Séance Équilibre",
    presets: { SOUP: 2, RENFO: 3, CARDIO: 2, EQUI: 5 },
    editableZones: []
  },

  cross_training: {
    label: "Cross Training",
    presets: { SOUP: 1, RENFO: 5, CARDIO: 4, EQUI: 1 },
    editableZones: []
  },

  course_a_pied: {
    label: "Course à pied",
    presets: { SOUP: 1, RENFO: 3, CARDIO: 5, EQUI: 0 },
    editableZones: []
  },

  marche_dynamique_bungypump: {
    label: "Marche dynamique – BungyPump®",
    presets: { SOUP: 1, RENFO: 3, CARDIO: 3, EQUI: 0 },
    editableZones: []
  },

  acti_march: {
    label: "Acti’March’®",
    presets: { SOUP: 1, RENFO: 2, CARDIO: 3, EQUI: 1 },
    editableZones: []
  },

  marche_active: {
    label: "Marche active",
    presets: { SOUP: 1, RENFO: 2, CARDIO: 3, EQUI: 0 },
    editableZones: []
  },

  marche_nordique: {
    label: "Marche Nordique",
    presets: { SOUP: 1, RENFO: 2, CARDIO: 4, EQUI: 0 },
    editableZones: []
  },

  balade: {
    label: "Balade",
    presets: { SOUP: 1, RENFO: 1, CARDIO: 2, EQUI: 1 },
    editableZones: []
  },

  randonnee_en_raquettes_a_neige: {
    label: "Randonnée en raquettes à neige",
    presets: { SOUP: 1, RENFO: 1, CARDIO: 2, EQUI: 1 },
    editableZones: []
  },

  randonnee_pedestre: {
    label: "Randonnée pédestre",
    presets: { SOUP: 1, RENFO: 1, CARDIO: 2, EQUI: 1 },
    editableZones: []
  },

  gym_aquatique: {
    label: "Gym aquatique",
    presets: { SOUP: 0, RENFO: 3, CARDIO: 2, EQUI: 1 },
    editableZones: []
  },

  longe_cote_marche_aquatique: {
    label: "Longe côte (Marche aquatique)",
    presets: { SOUP: 1, RENFO: 3, CARDIO: 4, EQUI: 1 },
    editableZones: []
  },

  boxing_energy: {
    label: "Boxing Energy®",
    presets: { SOUP: 0, RENFO: 2, CARDIO: 4, EQUI: 1 },
    editableZones: []
  },

  fit_stick: {
    label: "Fit’Stick",
    presets: { SOUP: 0, RENFO: 2, CARDIO: 3, EQUI: 1 },
    editableZones: []
  },

  step_energy: {
    label: "Step Energy®",
    presets: { SOUP: 0, RENFO: 2, CARDIO: 3, EQUI: 1 },
    editableZones: []
  },

  aero_move: {
    label: "Aéro Move®",
    presets: { SOUP: 0, RENFO: 1, CARDIO: 3, EQUI: 1 },
    editableZones: []
  },

  afro_move: {
    label: "Afro Move®",
    presets: { SOUP: 0, RENFO: 1, CARDIO: 3, EQUI: 1 },
    editableZones: []
  },

  dance_move: {
    label: "Dance Move®",
    presets: { SOUP: 0, RENFO: 1, CARDIO: 3, EQUI: 1 },
    editableZones: []
  }
};