## ① The idea
**HCF** (Highest Common Factor) = biggest number that divides all the given numbers. **LCM** (Least Common Multiple) = smallest number that all of them divide.
Keyword detector: **"greatest / largest / maximum size / divides" → HCF**. **"least / smallest / together again / bells / divisible by all" → LCM**.

## ② Formulas
- Prime factorisation: HCF = **lowest** powers of the common primes; LCM = **highest** powers of all primes.
  36 = 2²·3², 84 = 2²·3·7 → HCF = 2²·3 = 12, LCM = 2²·3²·7 = 252.
- **Product of two numbers = HCF × LCM.** (Only for two numbers!)
- If numbers are in ratio a : b : c with HCF h → numbers = ha, hb, hc and LCM = h × LCM(a, b, c).
- **Fractions:** HCF = HCF(numerators)/LCM(denominators); LCM = LCM(numerators)/HCF(denominators).
- **Decimals:** make the decimal places equal, drop the decimal, find HCF/LCM, put the decimal back.
- HCF of co-primes = 1; LCM of co-primes = product.

## ③ Worked examples (the 6 standard types)
**Type 1. Greatest number dividing a, b, c exactly** → HCF(a, b, c).

**Type 2. Greatest number dividing a, b, c leaving remainders r₁, r₂, r₃** → HCF(a − r₁, b − r₂, c − r₃).
*Ex:* 964, 1238, 1400 with remainders 41, 31, 51 → HCF(923, 1207, 1349) = **71**.

**Type 3. Greatest number dividing a, b, c leaving the SAME remainder** → HCF of the differences |a − b|, |b − c|, |c − a|.
*Ex:* 43, 91, 183 → differences 48, 92, 140 → HCF = **4**.

**Type 4. Least number divisible by a, b, c** → LCM.

**Type 5. Least number which leaves remainder r when divided by a, b, c** → LCM + r.
*Ex:* by 12, 15, 20, 54 remainder 8 → 540 + 8 = **548**.

**Type 6. Least number which leaves remainders such that (divisor − remainder) is constant k** → LCM − k.
*Ex:* divided by 12, 15, 16 leaves 7, 10, 11 → each is 5 short → LCM(12, 15, 16) − 5 = 240 − 5 = **235**.

**Greatest/least n-digit number divisible by a, b, c:**
- *Greatest 4-digit divisible by 15, 25, 40, 75:* LCM = 600; 9999 ÷ 600 → remainder 399 → 9999 − 399 = **9600**.
- *Least 5-digit divisible by 12, 15, 18:* LCM = 180; 10000 ÷ 180 → remainder 100 → 10000 + (180 − 100) = **10080**.

**Tiles / rooms:** largest square tile = HCF of the sides (in cm). Number of tiles = area / tile².
*Ex:* 15.17 m × 9.02 m → HCF(1517, 902) = 41 → tiles = 37 × 22 = **814**.

**Bells:** Bells at 2, 4, 6, 8, 10, 12 s; LCM = 120 s; in 30 min (1800 s) → 1800/120 = 15 → **16 times** including the start.

**Using HCF × LCM:** HCF 12, LCM 336, one number 84 → other = 12 × 336/84 = **48**.

**Counting pairs:** Sum 528, HCF 33 → numbers 33a, 33b with a + b = 16 and a, b co-prime → (1, 15), (3, 13), (5, 11), (7, 9) → **4 pairs**.

## ④ Shortcut: Euclid's division for HCF of big numbers
HCF(2923, 3239): 3239 − 2923 = 316; 2923 = 9 × 316 + 79; 316 = 4 × 79 → **79**.

## ⑤ Traps
- HCF always **divides** the LCM. If an option violates this, kill it.
- HCF of 0 and n = n.
