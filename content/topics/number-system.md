## ① The idea
Numbers are classified into families, and there are rules for divisibility, remainders, last digits and trailing zeros. Questions test whether you know the rule, not heavy calculation.

## ② Concepts & formulas
- **Natural** 1, 2, 3, … · **Whole** 0, 1, 2, … · **Integers** …−2, −1, 0, 1, 2… · **Rational** p/q (q ≠ 0) · **Irrational** non-terminating non-repeating (√2, π).
- **Prime**: exactly 2 factors. Primes < 100: 2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 53 59 61 67 71 73 79 83 89 97 (**25 primes**). 1 is neither prime nor composite; 2 is the only even prime.
- **Co-prime**: HCF = 1 (e.g. 8, 9). Twin primes differ by 2 (11, 13).
- **Face value** = the digit itself. **Place value** = digit × its position (in 4**7**25, place value of 7 = 700).
- Odd ± odd = even; odd × odd = odd; even × anything = even.
- **Sums:** 1 + 2 + … + n = n(n + 1)/2. Squares: n(n + 1)(2n + 1)/6. Cubes: [n(n + 1)/2]². First n odd numbers = n². First n even numbers = n(n + 1).
- **Dividend = Divisor × Quotient + Remainder.**

**Divisibility rules (most-asked):**

| By | Rule |
|---|---|
| 2 | last digit even |
| 3 | digit sum divisible by 3 |
| 4 | last 2 digits divisible by 4 |
| 5 | ends in 0 or 5 |
| 6 | divisible by 2 **and** 3 |
| 8 | last 3 digits divisible by 8 |
| 9 | digit sum divisible by 9 |
| 11 | (sum of digits at odd places) − (sum at even places) = 0 or a multiple of 11 |
| 12, 15, 18, 24 … | split into co-prime factors: 12 = 3 × 4, 15 = 3 × 5, 18 = 2 × 9, 24 = 3 × 8 |

> **Watch out:** 24 = 4 × 6 is **wrong** for testing (4 and 6 aren't co-prime). Always use co-prime pairs.

**Unit (last) digit cycles (power cycle = 4):**

| Base ends in | Cycle |
|---|---|
| 0, 1, 5, 6 | always itself |
| 2 | 2, 4, 8, 6 |
| 3 | 3, 9, 7, 1 |
| 4 | 4, 6 (odd power → 4, even → 6) |
| 7 | 7, 9, 3, 1 |
| 8 | 8, 4, 2, 6 |
| 9 | 9, 1 (odd → 9, even → 1) |

Method: divide the power by 4 and take the remainder r (if r = 0 use the 4th term).

**Trailing zeros of n!** = ⌊n/5⌋ + ⌊n/25⌋ + ⌊n/125⌋ + … (zeros come from 2 × 5 pairs; 5s are rarer).

## ③ Worked examples
**Ex 1.** Unit digit of 7¹⁰⁵ → 105 ÷ 4 leaves 1 → first term of cycle (7, 9, 3, 1) → **7**.

**Ex 2.** Unit digit of 264¹⁰² + 264¹⁰³ → 4^even = 6, 4^odd = 4 → 6 + 4 = 1**0** → **0**.

**Ex 3.** Trailing zeros in 100! → 20 + 4 = **24**.

**Ex 4.** **Is 4832718 divisible by 11?** From the right, odd positions: 8, 7, 3, 4 → 22; even: 1, 2, 8 → 11. Difference 11 → **yes**.

**Ex 5.** Find * if 5*2 is divisible by 9: 5 + * + 2 = 9 or 18 → * = 2 (or 11, impossible) → **2**.

**Ex 6.** A number divided by 899 leaves remainder 63. Remainder when divided by 29? 899 = 29 × 31, so remainder = 63 ÷ 29 → **5**.
> *Rule:* if the first divisor is a multiple of the second, just divide the old remainder by the new divisor.

**Ex 7.** 1! + 2! + … + 50! divided by 5 → only 1 + 2 + 6 + 24 = 33 matters → remainder **3**.

**Ex 8.** Which is divisible by 24: 35718, 63810, 537804, 3125736? → Test 3 and 8: 3125736 has digit sum 27 and last three digits 736 = 8 × 92 → **3125736**.

## ④ Shortcuts
- Product of r consecutive integers is divisible by r!.
- (aⁿ − bⁿ) is divisible by (a − b) always; by (a + b) when n is even.
- Every prime > 3 is of the form 6k ± 1.
- Product of only odd numbers → **0** trailing zeros.

## ⑤ Traps
- "Place value of 0" is 0.
- "Smallest 4-digit number using 0, 2, 4, 7" → 0 can't lead → 2047.
- For trailing zeros of products like 5 × 10 × 15 × … check whether there are **enough 2s**.
