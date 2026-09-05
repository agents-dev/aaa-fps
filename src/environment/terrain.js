export function createLargeTerrain(_scene, _opts = {}) {
  return {
    worldSize: 600,
    tier: 'high',
    segments: 100,
    textureSize: 256,
    forest: { count: 0 },
    getHeightAt(_x, _z) { return 0; },
    mesh: null,
    colliders: [],
    dispose() {}
  };
}
