const characters = [
  {
    name: "Raiden",
    image: "https://i.imgur.com/HnrLj6n.jpg"
  },
  {
    name: "Collie",
    image: "https://i.imgur.com/Qt9YC0e.jpg"
  },
  {
    name: "Ganyu",
    image: "https://i.imgur.com/axviC7m.jpg"
  },
  {
    name: "Xingqiu",
    image: "https://i.imgur.com/2VVramG.png"
  },
  {
    name: "Ningguang",
    image: "https://i.imgur.com/qLB0bZm.jpg"
  },
  {
    name: "Albedo",
    image: "https://i.imgur.com/zE6viXR.jpg"
  },
  {
    name: "Mona",
    image: "https://i.imgur.com/5mz8zKO.jpg"
  },
  {
    name: "Tianquan",
    image: "https://i.imgur.com/IcNChJD.jpg"
  },
  {
    name: "Xiangling",
    image: "https://i.imgur.com/Wvethdl.jpg"
  },
  {
    name: "Shenhe",
    image: "https://i.imgur.com/x5yvkgV.jpg"
  },
  {
    name: "Bennett",
    image: "https://i.imgur.com/VjA0WeT.png"
  },
  {
    name: "Diluc",
    image: "https://i.imgur.com/LXnFQ9e.jpg"
  },
  {
    name: "Shinobu",
    image: "https://i.imgur.com/ZkpVGDW.jpg"
  },
  {
    name: "Yelan",
    image: "https://i.imgur.com/0nfm0AS.jpg"
  },
  {
    name: "Kazuha",
    image: "https://i.imgur.com/JhWqjl9.jpg"
  },
  {
    name: "Diona",
    image: "https://i.imgur.com/ll7BpX8.png"
  },
  {
    name: "Jean",
    image: "https://i.imgur.com/o9PPZn8.jpg"
  },
  {
    name: "Xinyan",
    image: "https://i.imgur.com/CTlIY39.jpg"
  },
  {
    name: "Sucrose",
    image: "https://i.imgur.com/xJZi7TZ.jpg"
  },
  {
    name: "Faruzan",
    image: "https://i.imgur.com/2tkL8Y7.png"
  },
  {
    name: "Klee",
    image: "https://i.ibb.co/WkNyGP1/xva213.jpg"
  },
  {
    name: "Yanfei",
    image: "https://i.ibb.co/LSptkKV/xva213.jpg"
  },
  {
    name: "Beidou",
    image: "https://i.ibb.co/BNML8sG/xva213.jpg"
  },
  {
    name: "Kokomi",
    image: "https://i.ibb.co/f1trhCT/xva213.jpg"
  },
  {
    name: "Ningguang",
    image: "https://i.ibb.co/h7BkjTd/xva21.jpg"
  },
  {
    name: "Rosaria",
    image: "https://i.ibb.co/n6X6CDd/xva213.jpg"
  },
  {
    name: "Sara",
    image: "https://i.ibb.co/fqvM3Sg/xva213.jpg"
  },
  {
    name: "Yoimiya",
    image: "https://i.ibb.co/bQQ8Nd0/xva213.jpg"
  },
  {
    name: "Ayato",
    image: "https://i.ibb.co/cX4DJr7/xva213.jpg"
  },
  {
    name: "Venti",
    image: "https://i.ibb.co/JRDcW38/xva213.jpg"
  },
  {
    name: "Ayaka",
    image: "https://i.ibb.co/jrvy5sG/xva213.jpg"
  },
  {
    name: "Gorou",
    image: "https://i.ibb.co/W68nMDd/xva213.jpg"
  },
  {
    name: "Xiao",
    image: "https://i.ibb.co/s2shgFM/xva213.jpg"
  },
  {
    name: "Itto",
    image: "https://i.ibb.co/4dfxMvK/xva213.jpg"
  },
  {
    name: "Heizou",
    image: "https://i.ibb.co/WPfK731/xva213.jpg"
  },
{
    name: "Fischl",
    image: "https://i.ibb.co/k0LYz4N/xva213.jpg"
  },
  {
    name: "Miko",
    image: "https://i.ibb.co/f9F4Lm7/xva213.jpg"
  },
  {
    name: "Yin Jin",
    image: "https://i.ibb.co/RC5Gpnx/xva213.jpg"
  },
  {
    name: "Eula",
    image: "https://i.ibb.co/S51K2ST/xva213.jpg"
  },
  {
    name: "Thoma",
    image: "https://i.ibb.co/M6sSrjC/xva213.jpg"
  },
  {
    name: "Trataglia",
    image: "https://i.ibb.co/2yht6F1/xva21.jpg"
  },
  {
    name: "Zhongli",
    image: "https://i.ibb.co/zQ5znW5/xva213.jpg"
  },
  {
    name: "Aloy",
    image: "https://i.ibb.co/McFqF5f/xva213.jpg"
  },
  {
    name: "Sayu",
    image: "https://i.ibb.co/Z86zny9/xva213.jpg"
  },
  {
    name: "Lisa",
    image: "https://i.ibb.co/8rSRQzF/xva213.jpg"
  },
  {
    name: "Amber",
    image: "https://i.ibb.co/mN39fbm/xva213.jpg"
  },
  {
    name: "Barbara",
    image: "https://i.ibb.co/dtyVbGS/xva213.jpg"
  },
  {
    name: "Kaeya",
    image: "https://i.ibb.co/BfT0xLt/xva213.jpg"
  },
  {
    name: "Xinyan",
    image: "https://i.ibb.co/PTzdCZQ/xva213.jpg"
  },
  {
    name: "Chongyun",
    image: "https://i.ibb.co/VNrfFKv/xva213.jpg"
  },
  {
    name: "Razor",
    image: "https://i.ibb.co/xhx3RFF/xva213.jpg"
  },
  {
    name: "Qiqi",
    image: "https://i.ibb.co/w49rJg0/xva213.jpg"
  },
  {
    name: "Noelle",
    image: "https://i.ibb.co/znQ6j0G/xva213.jpg"
  },
  {
    name: "Keqing",
    image: "https://i.ibb.co/QpXySsp/xva213.jpg"
  },
  {
    name: "Traveler1",
    image: "https://i.ibb.co/wJ2s9CC/xva21.jpg"
  },
  {
    name: "Traveler2",
    image: "https://i.ibb.co/sbr5ZmL/xva2.jpg"
  }
];

module.exports = characters;
