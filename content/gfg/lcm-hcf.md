## Definitions
- **HCF (GCD)**: the largest number that divides all the given numbers exactly.
- **LCM**: the smallest number that all the given numbers divide exactly.
- **For two numbers: HCF × LCM = product of the numbers.** (This does not work for three or more.)
- HCF always divides the LCM.

## Method 1: prime factorisation
- **HCF** = product of common primes with the **lowest** powers.
- **LCM** = product of all primes with the **highest** powers.
- *Example:* 24 = 2³ × 3, 36 = 2² × 3² → HCF = 2² × 3 = **12**, LCM = 2³ × 3² = **72**.

## Method 2: division
- **HCF by long division** (Euclid): divide the larger by the smaller, then divide the divisor by the remainder, and repeat. The last divisor (when the remainder is 0) is the HCF.
  *Example:* HCF(1071, 462): 1071 = 2 × 462 + 147; 462 = 3 × 147 + 21; 147 = 7 × 21 → **21**.
- **LCM by common division**: write the numbers in a row and divide by primes that divide at least two of them. LCM = product of all divisors and what's left at the bottom.

## Fractions and decimals
- **HCF of fractions = HCF of numerators ÷ LCM of denominators.**
- **LCM of fractions = LCM of numerators ÷ HCF of denominators.**
- Decimals: make the decimal places equal, remove the point, find HCF/LCM, then put the point back.
  *Example:* HCF(1.75, 5.6, 7) → 175, 560, 700 → 35 → **0.35**.

## Standard question types
| Question asks for… | Answer |
|---|---|
| Greatest number dividing a, b, c exactly | HCF(a, b, c) |
| Greatest number leaving remainders r₁, r₂, r₃ | HCF(a − r₁, b − r₂, c − r₃) |
| Greatest number leaving the same remainder | HCF of the differences \|a − b\|, \|b − c\| |
| Least number divisible by a, b, c | LCM(a, b, c) |
| Least number leaving remainder r each time | LCM + r |
| Bells/lights together again; when do they meet | LCM of the intervals |
| Largest square tile for a floor | HCF of the side lengths |

*Example:* Bells ring every 6, 8 and 12 minutes. They ring together again after LCM = **24 minutes**.
