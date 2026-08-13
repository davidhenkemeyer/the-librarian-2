// Playable librarians. Their small, explicit trade-offs create a real loadout
// choice without turning either character into the objectively correct pick.

export const CHARACTERS = {
  marion: {
    id: 'marion',
    name: 'Marion',
    title: 'Head Librarian',
    icon: '👓',
    blurb: 'Twenty-two years in this building. She has seen every kind of child there is.',
    trait: 'Precision Filing — longer reach, but one fewer carrying slot.',
    bonuses: { pickupRadius: 0.35, returnRadius: 0.2, carrySlots: -1, moveSpeedMul: 1 },
    height: 1.74,
    chunk: 1.0,
    style: { hair: 'bun', glasses: true, cardigan: true, sleeves: 'short' },
    colors: {
      skin: 0xdda882, shirt: 0x7a4a6a, pants: 0x2c3040,
      hair: 0x4a2c1a, shoe: 0x231d1a,
    },
    // Swatches for the select screen.
    swatch: ['#7a4a6a', '#2c3040', '#4a2c1a'],
  },

  wolfe: {
    id: 'wolfe',
    name: 'Wolfe',
    title: 'Weekend Shift',
    icon: '🧢',
    blurb: 'Flannel, beard, and strong opinions about the Dewey Decimal System.',
    trait: 'Bulk Returns — carries two extra items, but moves 3% slower.',
    bonuses: { pickupRadius: 0, returnRadius: 0, carrySlots: 2, moveSpeedMul: 0.97 },
    height: 1.8,
    chunk: 1.18,
    // Wolfe's silhouette and face deliberately carry the reference's strongest
    // identifying cues so he stays recognizable from both the select portrait
    // and the elevated gameplay camera.
    style: {
      hair: 'underCap',
      beard: 'full',
      hat: 'cap',
      hatLogo: 'openBook',
      sleeves: 'long',
      face: 'broad',
      eyeDetail: true,
      brows: 'thick',
      overshirt: true,
      boots: true,
    },
    colors: {
      skin: 0xe1a16f,
      // The shirt and sleeves render the red-and-black plaid weave, so they stay
      // white and let the texture supply the color.
      shirt: 0xffffff,
      innerShirt: 0x151211,
      pants: 0x315985,
      hair: 0x17110e,
      beard: 0x2b1b15,
      beardAccent: 0x5b3828,
      brow: 0x21150f,
      eyeWhite: 0xf3e6d5,
      eye: 0x3b2418,
      pupil: 0x0b0806,
      hat: 0x8f252d,
      badge: 0xf7f0de,
      button: 0x8d684b,
      shoe: 0x4b2d1f,
    },
    matMap: { torso: 'flannel', armU: 'flannel', armL: 'flannel' },
    swatch: ['#9e2b28', '#315985', '#4b2d1f'],
  },
};

export const CHARACTER_LIST = Object.values(CHARACTERS);
export const DEFAULT_CHARACTER = 'marion';

export function getCharacter(id) {
  return CHARACTERS[id] || CHARACTERS[DEFAULT_CHARACTER];
}
