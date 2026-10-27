## ① The idea
Count **odd days**: the days left over after removing complete weeks. Then 0 odd days = Sunday, 1 = Monday, … 6 = Saturday.

## ② Facts to memorise
- Ordinary year = 365 days = 52 weeks + **1 odd day**. Leap year = 366 = 52 weeks + **2 odd days**.
- **Leap year:** divisible by 4; but a **century year** must be divisible by **400** (1600, 2000 leap; 1700, 1800, 1900 not).
- **Century odd days:** 100 yrs → 5, 200 → 3, 300 → 1, **400 → 0** (so 1600, 2000 have 0).
- Month odd days (ordinary year): Jan 3, **Feb 0** (leap: 1), Mar 3, Apr 2, May 3, Jun 2, Jul 3, Aug 3, Sep 2, Oct 3, Nov 2, Dec 3.
  Memory trick: **31-day month = 3, 30-day month = 2.**
- The last day of a century can only be **Monday, Wednesday, Friday or Sunday**.
- Day codes: 0 Sun, 1 Mon, 2 Tue, 3 Wed, 4 Thu, 5 Fri, 6 Sat.

## ③ Method A: day of the week for any date
1. Split: (complete centuries) + (remaining complete years) + (months of the current year) + (days).
2. Odd days for each part; add; take the remainder mod 7.

**Ex 1: 15 August 1947.**
- 1600 yrs → 0; next 300 yrs (1601–1900) → 1.
- 1901–1946 = 46 yrs with 11 leap → 11 × 2 + 35 = 57 → 57 mod 7 = **1**.
- 1947: Jan 3 + Feb 0 + Mar 3 + Apr 2 + May 3 + Jun 2 + Jul 3 + 15 days (1) = 17 → **3**.
- Total 0 + 1 + 1 + 3 = 5 → **Friday**. ✔ (India's Independence Day was a Friday.)

**Ex 2: 26 January 1950.** 1600 → 0; 300 → 1; 1901–1949 = 49 yrs with 12 leap → 24 + 37 = 61 → 5; Jan 26 → 5. Total 11 → 4 → **Thursday**. ✔

## Method B: shifting from a known date
- Same date, next year: +1 day (or +2 if a **29 Feb lies in between**).
- *Ex:* Jan 1, 2008 Tuesday → 2008 is leap and the interval Jan 1, 2008 → Jan 1, 2009 includes 29 Feb 2008 → +2 → **Thursday**.
- *Ex:* 8 Feb 2005 Tuesday → 8 Feb 2004? Interval includes 29 Feb 2004 → −2 → **Sunday**.
- *Ex:* 6 March 2005 Monday → 6 March 2004? 29 Feb 2004 is **before** 6 Mar 2004, so it's not inside → −1 → **Sunday**. (Your book's key gets this one wrong!)

**After n days:** today Monday, after 61 days → 61 mod 7 = 5 → Monday + 5 = **Saturday**.

## Method C: same-calendar years
Keep adding odd days year by year from the given year until the total is a multiple of 7, **and** the new year must be the same type (leap/ordinary) as the given year.
- Ordinary years usually repeat after 6 or 11 years; leap years after **28 years**.
- 2007 → 2018; 2009 → 2015; 2010 → 2021; 2016 (leap) → 2044.

## ⑤ Traps
- 1900 is NOT a leap year; 2000 IS.
- Counting days in the current month: the date itself is the number of days (15 Aug → 15 days).
