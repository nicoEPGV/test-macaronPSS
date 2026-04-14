export const ACTIVITIES = {
  yoga: {
    label: "Yoga",
    synonymes: ["Hatha", "Yoga doux"],
    presets: { SOUP: 4, RENFO: 2, CARDIO: 0, EQUI: 3 },
    editableZones: ["RENFO", "EQUI"]
  },

  body_zen: {
    label: "Body Zen",
    synonymes: ["Body Balance"],
    presets: { SOUP: 3, RENFO: 2, CARDIO: 0, EQUI: 3 },
    editableZones: ["EQUI", "RENFO"]
  },

  autre_seance_souplesse: {
    label: "Autre séance Souplesse",
    synonymes: ["Activité dont la souplesse est le pilier dominant"],
    presets: { SOUP: 3, RENFO: 0, CARDIO: 0, EQUI: 0 },
    editableZones: ["EQUI", "RENFO"]
  },

  programme_diabete_surpoids: {
    label: "Programme Diabète & Surpoids",
    synonymes: [],
    presets: { SOUP: 2, RENFO: 3, CARDIO: 3, EQUI: 2 },
    editableZones: ["EQUI", "RENFO", "SOUP"]
  },

  seance_multi_activites_bien_vieillir: {
    label: "Séance Multi activités Bien vieillir",
    synonymes: ["Acti’Gym Senior", "Gym douce", "gym d’entretien", "Gym dynamique"],
    presets: { SOUP: 2, RENFO: 3, CARDIO: 4, EQUI: 2 },
    editableZones: ["RENFO", "EQUI", "CARDIO", "SOUP"]
  },

  programme_gym_apres_cancer: {
    label: "Programme Gym’Après Cancer®",
    synonymes: ["GAC"],
    presets: { SOUP: 2, RENFO: 2, CARDIO: 2, EQUI: 2 },
    editableZones: ["RENFO", "EQUI", "CARDIO", "SOUP"]
  },

  programme_gymmemoire: {
    label: "Programme Gymmémoire®",
    synonymes: ["Ateliers Corps et Mémoire"],
    presets: { SOUP: 2, RENFO: 2, CARDIO: 2, EQUI: 2 },
    editableZones: ["RENFO", "EQUI", "CARDIO", "SOUP"]
  },

  seance_multi_activites: {
    label: "Séance Multi activités",
    synonymes: [],
    presets: { SOUP: 2, RENFO: 2, CARDIO: 2, EQUI: 2 },
    editableZones: ["RENFO", "EQUI", "CARDIO", "SOUP"]
  },

  seance_multi_activites_exterieur: {
    label: "Séance Multi Activités Exterieur",
    synonymes: [],
    presets: { SOUP: 2, RENFO: 2, CARDIO: 2, EQUI: 2 },
    editableZones: ["RENFO", "EQUI", "CARDIO", "SOUP"]
  },

  seance_corps_et_memoire: {
    label: "Séance Corps et mémoire",
    synonymes: [],
    presets: { SOUP: 2, RENFO: 2, CARDIO: 2, EQUI: 2 },
    editableZones: ["RENFO", "CARDIO", "SOUP"]
  },

  seance_apa_multi_pathologies: {
    label: "Séance APA multi-pathologies",
    synonymes: ["Maladies Chroniques", "GAC", "Diabete Surpoids", "ALD", "autres Pathologies"],
    presets: { SOUP: 2, RENFO: 2, CARDIO: 2, EQUI: 2 },
    editableZones: ["RENFO", "EQUI", "CARDIO", "SOUP"]
  },

  seance_7_12_ans: {
    label: "Séance 7 – 12 ans",
    synonymes: ["Récréa’Gym"],
    presets: { SOUP: 1, RENFO: 2, CARDIO: 2, EQUI: 1 },
    editableZones: ["RENFO", "EQUI", "CARDIO", "SOUP"]
  },

  seance_3_6_ans: {
    label: "Séance 3 – 6 ans",
    synonymes: ["Gym’3 Pommes"],
    presets: { SOUP: 1, RENFO: 1, CARDIO: 1, EQUI: 1 },
    editableZones: ["RENFO", "EQUI", "CARDIO", "SOUP"]
  },

  seance_9_mois_3_ans: {
    label: "Séance 9 mois – 3 ans",
    synonymes: ["Gym’Caline", "Éveil corporel", "Parents bébé"],
    presets: { SOUP: 1, RENFO: 1, CARDIO: 0, EQUI: 1 },
    editableZones: ["RENFO", "EQUI", "CARDIO", "SOUP"]
  },

  autre_seance_renforcement: {
    label: "Autre séance Renforcement",
    synonymes: ["Activité dont le renforcement musculaire est le pilier dominant"],
    presets: { SOUP: 0, RENFO: 3, CARDIO: 0, EQUI: 0 },
    editableZones: ["EQUI", "CARDIO", "SOUP"]
  },

  autre_seance_cardio: {
    label: "Autre séance Cardio",
    synonymes: ["Activité dont le cardio est le pilier dominant"],
    presets: { SOUP: 0, RENFO: 0, CARDIO: 3, EQUI: 0 },
    editableZones: ["RENFO", "EQUI", "SOUP"]
  },

  autre_seance_equilibre: {
    label: "Autre séance Equilibre",
    synonymes: ["Activité dont l'équilibre est le pilier dominant"],
    presets: { SOUP: 0, RENFO: 0, CARDIO: 0, EQUI: 3 },
    editableZones: ["RENFO", "CARDIO", "SOUP"]
  },

  programme_et_vie_danse: {
    label: "Programme Et Vie Danse",
    synonymes: [],
    presets: { SOUP: 2, RENFO: 2, CARDIO: 2, EQUI: 3 },
    editableZones: ["CARDIO"]
  },

  seance_et_vie_danse: {
    label: "Séance Et Vie Danse",
    synonymes: [],
    presets: { SOUP: 3, RENFO: 3, CARDIO: 3, EQUI: 3 },
    editableZones: ["EQUI"]
  },

  seance_maintien_de_l_autonomie: {
    label: "Séance maintien de l'autonomie",
    synonymes: ["Parcours de mobilité / Animation les gestes du quotidien", "Animation MAMA", "Animation parkinson"],
    presets: { SOUP: 3, RENFO: 2, CARDIO: 2, EQUI: 3 },
    editableZones: ["RENFO", "CARDIO", "SOUP"]
  },

  autre_atelier_bien_vieillir: {
    label: "Autre atelier Bien Vieillir",
    synonymes: [],
    presets: { SOUP: 2, RENFO: 2, CARDIO: 2, EQUI: 2 },
    editableZones: ["CARDIO", "SOUP"]
  },

  seance_gym_apres_cancer: {
    label: "Séance Gym’Après Cancer®",
    synonymes: ["GAC"],
    presets: { SOUP: 2, RENFO: 2, CARDIO: 2, EQUI: 2 },
    editableZones: ["RENFO", "EQUI", "CARDIO", "SOUP"]
  },

  seance_diabete_surpoids: {
    label: "Séance Diabète & Surpoids",
    synonymes: [],
    presets: { SOUP: 2, RENFO: 3, CARDIO: 3, EQUI: 2 },
    editableZones: ["RENFO", "EQUI", "SOUP"]
  },

  seance_dansee: {
    label: "Séance Dansée",
    synonymes: ["Country", "Danse de salon", "Danse du monde", "Danse Latine …."],
    presets: { SOUP: 0, RENFO: 1, CARDIO: 3, EQUI: 1 },
    editableZones: []
  },

  stretching: {
    label: "Stretching",
    synonymes: ["Étirements"],
    presets: { SOUP: 5, RENFO: 0, CARDIO: 0, EQUI: 2 },
    editableZones: []
  },

  pilates: {
    label: "Pilates",
    synonymes: [],
    presets: { SOUP: 3, RENFO: 4, CARDIO: 0, EQUI: 3 },
    editableZones: []
  },

  fit_ball: {
    label: "Fit’Ball®",
    synonymes: ["Gym ball", "Postural Ball (marque)"],
    presets: { SOUP: 2, RENFO: 4, CARDIO: 0, EQUI: 2 },
    editableZones: []
  },

  atelier_prevention_des_chutes: {
    label: "Atelier prévention des chutes",
    synonymes: ["Atelier équilibre", "prog. "l'équilibre où en êtes-vous ? Carsat BFC""],
    presets: { SOUP: 2, RENFO: 3, CARDIO: 2, EQUI: 5 },
    editableZones: ["RENFO"]
  },

  fit_gliss: {
    label: "Fit’Gliss®",
    synonymes: ["Glyding", "Disques glisseurs"],
    presets: { SOUP: 2, RENFO: 4, CARDIO: 1, EQUI: 2 },
    editableZones: ["RENFO"]
  },

  seance_equilibre: {
    label: "Séance Équilibre",
    synonymes: ["Gym équilibre"],
    presets: { SOUP: 2, RENFO: 3, CARDIO: 2, EQUI: 5 },
    editableZones: []
  },

  cross_training: {
    label: "Cross Training",
    synonymes: ["CrossFit (marque)", "MetaFit (marque)", "Interval training"],
    presets: { SOUP: 1, RENFO: 5, CARDIO: 4, EQUI: 1 },
    editableZones: []
  },

  course_a_pied: {
    label: "Course à pied",
    synonymes: ["Footing", "Running", "Programme Courir Sport Santé"],
    presets: { SOUP: 1, RENFO: 3, CARDIO: 5, EQUI: 0 },
    editableZones: []
  },

  marche_dynamique_bungypump: {
    label: "Marche dynamique – BungyPump®",
    synonymes: ["Marche dynamique avec bâtons à ressort"],
    presets: { SOUP: 1, RENFO: 3, CARDIO: 3, EQUI: 0 },
    editableZones: []
  },

  acti_march: {
    label: "Acti’March’®",
    synonymes: [],
    presets: { SOUP: 1, RENFO: 2, CARDIO: 3, EQUI: 1 },
    editableZones: []
  },

  marche_active: {
    label: "Marche active",
    synonymes: ["Marche rapide"],
    presets: { SOUP: 1, RENFO: 2, CARDIO: 3, EQUI: 0 },
    editableZones: []
  },

  marche_nordique: {
    label: "Marche Nordique",
    synonymes: [],
    presets: { SOUP: 1, RENFO: 2, CARDIO: 4, EQUI: 0 },
    editableZones: []
  },

  balade: {
    label: "Balade",
    synonymes: ["Marche de plein air", "Promenade"],
    presets: { SOUP: 1, RENFO: 1, CARDIO: 2, EQUI: 1 },
    editableZones: []
  },

  randonnee_en_raquettes_a_neige: {
    label: "Randonnée en raquettes à neige",
    synonymes: ["Marche enneigée", "Balade enneigée", "Promenade enneigée"],
    presets: { SOUP: 1, RENFO: 1, CARDIO: 2, EQUI: 1 },
    editableZones: []
  },

  randonnee_pedestre: {
    label: "Randonnée pédestre",
    synonymes: ["Randonnée"],
    presets: { SOUP: 1, RENFO: 1, CARDIO: 2, EQUI: 1 },
    editableZones: []
  },

  gym_aquatique: {
    label: "Gym aquatique",
    synonymes: ["Aqua gym", "Aqua fitness"],
    presets: { SOUP: 0, RENFO: 3, CARDIO: 2, EQUI: 1 },
    editableZones: []
  },

  longe_cote_marche_aquatique: {
    label: "Longe côte (Marche aquatique)",
    synonymes: ["Marche aquatique"],
    presets: { SOUP: 1, RENFO: 3, CARDIO: 4, EQUI: 1 },
    editableZones: []
  },

  boxing_energy: {
    label: "Boxing Energy®",
    synonymes: ["Cardio boxing", "Air boxing"],
    presets: { SOUP: 0, RENFO: 2, CARDIO: 4, EQUI: 1 },
    editableZones: []
  },

  fit_stick: {
    label: "Fit’Stick",
    synonymes: ["Pound"],
    presets: { SOUP: 0, RENFO: 2, CARDIO: 3, EQUI: 1 },
    editableZones: []
  },

  step_energy: {
    label: "Step Energy®",
    synonymes: ["Step"],
    presets: { SOUP: 0, RENFO: 2, CARDIO: 3, EQUI: 1 },
    editableZones: []
  },

  aero_move: {
    label: "Aéro Move®",
    synonymes: ["Aérobic", "LIA"],
    presets: { SOUP: 0, RENFO: 1, CARDIO: 3, EQUI: 1 },
    editableZones: []
  },

  afro_move: {
    label: "Afro Move®",
    synonymes: ["Danse afro", "Danse africaine"],
    presets: { SOUP: 0, RENFO: 1, CARDIO: 3, EQUI: 1 },
    editableZones: []
  },

  dance_move: {
    label: "Dance Move®",
    synonymes: [],
    presets: { SOUP: 0, RENFO: 1, CARDIO: 3, EQUI: 1 },
    editableZones: []
  }
};
