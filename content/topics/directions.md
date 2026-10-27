## ① The idea
Draw it, every time. Use a mini compass and a coordinate grid: **North = +y, East = +x**.

```
            N
       NW   |   NE
   W ——————+—————— E
       SW   |   SE
            S
```

## ② Rules
- **Right turn = 90° clockwise; left turn = 90° anticlockwise.**
  Facing N: right → E, left → W. Facing E: right → S, left → N. Facing S: right → W, left → E. Facing W: right → N, left → S.
- **Shortest distance** = √(x² + y²) (Pythagoras). Common triples: 3-4-5, 6-8-10, 5-12-13, 8-15-17.
- **Sun & shadows:** Morning sun in the **East** → shadows fall **West**. Evening sun in the **West** → shadows fall **East**. At noon there is (almost) no shadow.
  - Morning, shadow to your **left** → you face **North**. Morning, shadow to your **right** → you face **South**.
  - Evening, shadow to your **left** → you face **South**. Evening, shadow to your **right** → you face **North**.
- **Rotated directions** ("if North becomes South-East…"): find the rotation angle once, then apply the same rotation to every direction.

## ③ Worked examples
**Ex 1.** 10 m N, right 5 m, right 10 m → (0,0)→(0,10)→(5,10)→(5,0) → **5 m East**.

**Ex 2.** 20 m N, right 30, right 35, left 15, left 15 → (0,20)→(30,20)→(30,−15)→(45,−15)→(45,0) → **45 m East**.
*Tip:* After "right, right" you face South; "left" from South = East; "left" from East = North.

**Ex 3.** Facing N, turn 90° clockwise, then 180° anticlockwise, then 270° clockwise → N → E → W → S.
*Tip:* net rotation = +90 − 180 + 270 = +180° → facing **South**.

**Ex 4 (rotation).** SE becomes N → rotation of −135° (135° anticlockwise). West (270°) − 135° = 135° → **SE**.
