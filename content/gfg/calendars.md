## Odd days
The days left over after taking out complete weeks.
- Ordinary year = 365 days = 52 weeks + **1 odd day**. Leap year = 366 = 52 weeks + **2 odd days**.
- 100 years → **5** odd days; 200 → 3; 300 → 1; **400 → 0**.

## Leap year
Divisible by 4, but a **century year must be divisible by 400** (2000 yes; 1900 no).

## Day of the week from odd days
| Odd days | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|---|
| Day | Sun | Mon | Tue | Wed | Thu | Fri | Sat |

Month odd days: 31-day month → 3; 30-day month → 2; February → 0 (1 in a leap year).

## Method
Split the date into complete centuries + remaining full years + months of the current year + days, add all the odd days, then take the remainder mod 7.
*Example:* 15 August 1947 → 1600 yrs: 0; 300: 1; 46 yrs (11 leap): 57 → 1; Jan–Aug 15, 1947: 17 → 3. Total 5 → **Friday**.

## Quick rules
- Same date next year moves forward 1 day, or 2 if 29 February falls in between.
- The last day of a century can only be Monday, Wednesday, Friday or Sunday.
- An ordinary year's calendar repeats after 6 or 11 years; a leap year's after 28.
