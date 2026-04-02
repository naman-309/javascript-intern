.

🟢 Level 1 — Basic Real Life (Easy)
1️⃣ Temperature Check
User temperature enter kare.

agar temperature > 35 → "It's very hot"
agar temperature < 10 → "It's very cold"
warna → "Weather is normal"


2️⃣ Website Login Access
User ka role check karo.

agar role = "admin" → "Full access"
warna → "Limited access"


3️⃣ Mobile Battery Warning

User battery percentage input kare.
agar battery ≤ 20 → "Battery Low"
warna → "Battery OK"
4️⃣ Movie Ticket Age Check

User ki age lo.
agar age ≥ 18 → "You can watch the movie"
warna → "Not allowed"
🟡 Level 2 — If-Else Ladder


5️⃣ Internet Speed Category
Speed input lo.

Speed	Result
≥100 Mbps	Very Fast
≥50 Mbps	Fast
≥10 Mbps	Average
<10 Mbps	Slow


6️⃣ E-commerce Delivery Charge

Order amount input lo.
agar amount ≥ 1000 → "Free Delivery"
agar amount ≥ 500 → "Delivery charge ₹50"
warna → "Delivery charge ₹100"


7️⃣ Student Attendance Check

Student exam tab de sakta hai jab:
attendance ≥ 75
warna "Not allowed for exam"

🟠 Level 3 — AND (&&) Operator
8️⃣ Job Eligibility

Candidate eligible hai agar:

age ≥ 21
degree = true

Condition:

age >= 21 && degree === true
9️⃣ Free Shipping Offer

Customer ko free shipping tab milegi jab:

order ≥ 2000
customer is premium

Example condition

order >= 2000 && isPremium === true
🔵 Level 4 — OR (||) Operator
🔟 Holiday Check

Agar day:

"Sunday" OR "Saturday"

→ "Holiday"

warna "Working day"

11️⃣ Login with Email or Phone

User login kar sakta hai agar:

email match kare
OR phone number match kare
email === savedEmail || phone === savedPhone
🟣 Level 5 — Nested If
12️⃣ ATM Withdrawal (Real Banking Logic)

User input:

balance
withdrawAmount

Rules:

agar balance ≥ withdrawAmount
phir check karo withdrawAmount % 500 === 0

warna error message show karo.

13️⃣ Online Exam Result System

Student pass tab hoga jab:

marks ≥ 40

Phir check karo:

agar marks ≥ 80 → Distinction
agar marks ≥ 60 → First Division
🔴 Level 6 — Real Life Advanced
14️⃣ Traffic Signal System

User color input kare:

Color	Action
Red	Stop
Yellow	Ready
Green	Go
15️⃣ Restaurant Discount System

Customer ko discount milega agar:

bill ≥ 3000 AND weekend
→ "20% Discount"
bill ≥ 2000
→ "10% Discount"
warna "No discount"

