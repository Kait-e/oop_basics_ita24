
const NAMES = [
  "Anu", "Arpa", "Essi", "Heluna", "Hely",
  "Hento", "Hilke", "Hilsu", "Hymy", "Ihq", "Ilme", "Ilo",
  "Jaana", "Jami", "Jatta", "Laku", "Liekki",
  "Mainikki", "Mella", "Mimmi", "Naatti",
  "Nina", "Nyytti", "Papu", "Pullukka", "Pulu",
  "Rima", "Soma", "Sylkki", "Valpu", "Virpi"
];

class Cow {

  constructor(name) {
    if (typeof name === 'string') {
      this.name = name;
    } else {
      this.name = NAMES[Math.floor(Math.random() * NAMES.length)];
    }
  }

  GetName() {
    return this.name;
  }

  GetAmount() {
    
  }

}
