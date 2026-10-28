## Types of numbers
- **Natural numbers**: counting numbers 1, 2, 3, …
- **Whole numbers**: natural numbers plus 0 → 0, 1, 2, …
- **Integers**: whole numbers and their negatives → …, −2, −1, 0, 1, 2, …
- **Rational**: can be written p/q with q ≠ 0 (½, −3, 0.75, 0.333…). **Irrational**: non-terminating, non-repeating decimals (√2, π).
- **Even** (divisible by 2) and **odd** (not divisible by 2).
- **Prime**: exactly two factors, 1 and itself (2, 3, 5, 7, 11 …). **Composite**: greater than 1 and not prime (4, 6, 9 …).
- **Co-prime**: two numbers whose HCF is 1 (8 and 15). They don't have to be prime themselves.

## Facts about primes
- 0 and 1 are **neither** prime nor composite. 2 is the only even prime.
- There are **25 primes below 100**: 2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 53 59 61 67 71 73 79 83 89 97.
- **Prime test:** find the smallest n with n² ≥ p. If p isn't divisible by any prime ≤ n, p is prime.
  *Example:* 191 → 14² = 196 ≥ 191. Primes up to 13 (2, 3, 5, 7, 11, 13) don't divide 191, so 191 is prime.
- **Number of divisors:** if n = p₁^a × p₂^b × p₃^c, then divisors = (a + 1)(b + 1)(c + 1).
  *Example:* 72 = 2³ × 3² → (3 + 1)(2 + 1) = **12 divisors**.

## Divisibility rules (short form)
See the full **Divisibility Rules** note. In short: 2 → last digit even; 3 → digit sum ÷ 3; 4 → last 2 digits; 5 → ends 0/5; 8 → last 3 digits; 9 → digit sum ÷ 9; 11 → (odd-place sum − even-place sum) is 0 or a multiple of 11.

## Remainder shortcuts
| Divisor | Quick way to get the remainder | Example |
|---|---|---|
| 2 | last digit odd → 1, even → 0 | 37 → 1 |
| 3 | remainder of the digit sum ÷ 3 | 23 → 5 → 2 |
| 4 | remainder of last two digits ÷ 4 | 123 → 23 → 3 |
| 5 | remainder of last digit ÷ 5 | 32 → 2 |
| 6 | combine the rules for 2 and 3 | 35 → 5 |
| 8 | remainder of last three digits ÷ 8 | 1234 → 234 → 2 |
| 9 | remainder of the digit sum ÷ 9 | 125 → 8 |
| 10 | the last digit | 47 → 7 |

## Division theorem
**Dividend = Divisor × Quotient + Remainder**, and 0 ≤ remainder < divisor.
- If a number gives remainder r when divided by D, and d is a factor of D, then the remainder on dividing by d is **r mod d**.
  *Example:* N ÷ 342 leaves 47 → N ÷ 18 leaves 47 mod 18 = **11** (342 = 18 × 19).
- (a × b) mod n = [(a mod n) × (b mod n)] mod n. Same for + and −.

## Cyclicity (unit digit of powers)
Unit digits of powers repeat in cycles:
| Last digit | Cycle | Length |
|---|---|---|
| 0, 1, 5, 6 | stays the same | 1 |
| 4 | 4, 6 | 2 |
| 9 | 9, 1 | 2 |
| 2 | 2, 4, 8, 6 | 4 |
| 3 | 3, 9, 7, 1 | 4 |
| 7 | 7, 9, 3, 1 | 4 |
| 8 | 8, 4, 2, 6 | 4 |

**Method:** divide the power by 4 and take remainder r (use 4 if r = 0), then pick the r-th item.
*Example:* 7²²² → 222 mod 4 = 2 → 2nd item of 7, 9, 3, 1 → **9**.

## Handy facts
- Sum of first n natural numbers = n(n + 1)/2; of squares = n(n + 1)(2n + 1)/6; of cubes = [n(n + 1)/2]².
- Trailing zeros of n! = ⌊n/5⌋ + ⌊n/25⌋ + ⌊n/125⌋ + …
- Product of any r consecutive integers is divisible by r!.
