// Curated real-estate photography sourced from Unsplash (verified working photo IDs).
// Helper appends sizing/quality params so every call site controls its own crop.
const u = (id, w = 1600, q = 80) =>
  `https://images.unsplash.com/${id}?w=${w}&q=${q}&auto=format&fit=crop`;

export const photos = {
  livingRoom: [
    u("photo-1564078516393-cf04bd966897"),
    u("photo-1705326701287-346fc37a2c86"),
    u("photo-1648881806148-e5c51179c826"),
    u("photo-1720247520862-7e4b14176fa8"),
  ],
  kitchen: [
    u("photo-1502005097973-6a7082348e28"),
    u("photo-1671197244266-73129c97c096"),
    u("photo-1635321350281-e2a91ecffd00"),
    u("photo-1643034738686-d69e7bc047e1"),
  ],
  twilight: [
    u("photo-1568605114967-8130f3a36994"),
    u("photo-1494526585095-c41746248156"),
    u("photo-1707189856923-46dd41ea2bdc"),
    u("photo-1696266530873-30935fa5e549"),
  ],
  aerial: [
    u("photo-1505843795480-5cfb3c03f6ff"),
    u("photo-1520473323060-f6f50760c35b"),
    u("photo-1605150454207-80249a0e82d6"),
    u("photo-1543276678-9d354df1c191"),
  ],
  pool: [
    u("photo-1657383543368-7d929944be6a"),
    u("photo-1635111300299-e6e677daf7b7"),
    u("photo-1618606338706-fc3bad33dbe6"),
    u("photo-1711110065954-1c79c1dec505"),
  ],
  bedroom: [
    u("photo-1696762932825-2737db830bbe"),
    u("photo-1720420021124-4e18564e070f"),
    u("photo-1604580040660-f0a7f9abaea6"),
    u("photo-1648634158203-199accfd7afc"),
  ],
  exteriorDay: [
    u("photo-1704457031528-adfa0abf6bba"),
    u("photo-1704457030386-1663afc19e3d"),
    u("photo-1704457031745-fe39ed2d296c"),
    u("photo-1780507637834-beafd4a79bc8"),
  ],
  bathroom: [
    u("photo-1576698483491-8c43f0862543"),
    u("photo-1722923400899-af08ffc715c6"),
    u("photo-1663811396038-7a21d4eef49e"),
    u("photo-1754522711595-84428937b07a"),
  ],
};
