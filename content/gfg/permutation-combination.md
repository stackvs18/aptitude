## Fundamental principle
If one task can be done in m ways and another in n ways: **both together** (and) → m × n ways; **either one** (or) → m + n ways.
**n! = n × (n − 1) × … × 1**, and 0! = 1.

## Permutation (order matters)
Arrangements of r things from n: **ⁿPᵣ = n!/(n − r)!**
- All n things in a row: n!. Around a circle: (n − 1)!.
- With repeated items (p alike, q alike): n!/(p! q!).
*Example:* arrangements of LEVEL = 5!/(2! 2!) = **30**.

## Combination (order doesn't matter)
Selections of r things from n: **ⁿCᵣ = n!/[r!(n − r)!]**
- ⁿCᵣ = ⁿCₙ₋ᵣ; ⁿC₀ = ⁿCₙ = 1; ⁿPᵣ = ⁿCᵣ × r!.
*Example:* choose 3 from 5 → ⁵C₃ = **10**; arrange them → ⁵P₃ = **60**.

## Derivations
- **Permutations:** the first place has n choices, the second n − 1, … the r-th has n − r + 1. The product is n!/(n − r)!.
- **Combinations:** each selection of r items can be arranged in r! ways, so ⁿCᵣ = ⁿPᵣ/r!.

## Quick cases
- Handshakes among n people = ⁿC₂. Lines through n points (no three collinear) = ⁿC₂; triangles = ⁿC₃.
- Diagonals of an n-gon = ⁿC₂ − n.
