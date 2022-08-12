// *My solution:
const DNAtoRNA = (dna) => dna.split("").map(letter => letter === 'T' ? 'U' : letter).join("")

console.log(DNAtoRNA("TTTT"), DNAtoRNA("GCAT"), DNAtoRNA("GACCGCCGCC"));
