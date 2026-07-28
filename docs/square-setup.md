# Square setup — Ko Art Studio classes

A step-by-step guide for Geon & Mr. Ko to set up class booking and
payment in Square, and for keeping it running each month. Written for the
**Fall 2025** term (Sept–Dec).

> **How the website connects to this:** the site never invents classes on
> its own. Each "Book" / "Enroll" button points at a Square page. When you
> create the pages below, send the URLs to whoever manages the site and
> they get wired in — no new website build needed.

---

## 1. The model (read this first)

Every class has **two separate layers**. Keep them separate in your head
and the whole thing gets simple:

| Layer | What it is | Where it lives in Square |
|---|---|---|
| **Seat** | The 7 spots in a class | A **group class** in Square Appointments, capacity 7 |
| **Payment** | How someone bought the right to a seat | A **pass** (semester, monthly, or full-run), sold separately |

The **7 seats are one shared pool**. It doesn't matter whether a student
paid by semester, by month, or is trying a single class — they all take
from the same 7. That's the whole trick, and it works because the cap
lives on the *class*, not on the thing they bought.

Three kinds of payment, depending on the program:

- **Semester pass** — buys a seat for the whole term. Seat locked Sept–Dec.
- **Monthly pass** — buys a seat for one month. Must re-buy each month or
  the seat opens up.
- **Full-run pass** — buys the whole fixed run (e.g. a 6-week Collective
  program). One payment, seat held for all sessions.

---

## 2. Before you start

1. **Appointments plan.** Group classes + packages need **Square
   Appointments Plus** (a paid tier), not the free plan. Confirm you're on
   Plus — if the "class" / capacity options below don't appear, that's why.
2. **Staff added.** Make sure Geon and Mr. Ko are both added as staff
   (Appointments → Staff), so either can manage rosters from the Square
   Appointments phone app.
3. **Location.** Everything should be on the `koartstudionyc` location at
   47 Bergen St.

> Labels in Square shift slightly between versions. If a button isn't
> named exactly as below, look for the closest match (e.g. "Class" vs
> "Group service," "Seats" vs "Max attendees").

---

## 3. Two things I still need from you

These are missing from the schedule you sent and are needed before the
classes can actually go live:

1. **Class times** for the kids/teen and portfolio classes (Cartooning,
   Intro to Drawing, HS Prep, College Portfolio, etc.). You gave times for
   the adult classes (7:10–9:10pm, 12:30–2:30pm) but not the others.
2. **Prices** for the kids/teen/portfolio classes — both the **semester**
   price and the **monthly** price. (Adult monthly prices you gave;
   Collective prices are still needed too.)

Also please **confirm the seat cap is 7 for every class** (or tell me
which ones differ).

---

## 4. Pattern A — Kids, teen & portfolio classes (semester OR monthly)

These run weekly across the whole Fall term. A family can pay for the
**whole semester** (seat locked) or **month-to-month** (re-book monthly).

### How to build one class

1. **Appointments → Services (Service library) → Add → Class** (or a
   service with group booking turned on).
2. Name it clearly with the day, e.g. `Cartooning & Illustration — Monday`.
   *(Make one class per weekday it runs — each weekday is its own set of 7
   seats.)*
3. **Capacity / max attendees: 7.**
4. Duration = the class length; start time = the class time. *(See §3 — I
   need these.)*
5. **Schedule:** set it to repeat **weekly** on that weekday, then remove
   the skipped holiday weeks so the live dates match the lists below.
   (Square will offer a weekly repeat; you delete the off weeks, or add the
   exact dates by hand.)
6. Assign staff, enable **online booking**, save.
7. Repeat for each weekday the class runs.

### Then create the two passes (payment)

- **Semester pass** — Items & Services → create an item
  `Cartooning — Fall Semester (Monday)`, one-time price = your semester
  rate. When a family buys it, **Geon books their seat as a recurring
  booking for the whole term** (adds them to every date).
- **Monthly pass** — create an item `Cartooning — Monthly (Monday)`,
  price = your monthly rate. When bought, book their seat **for that month
  only**. They re-buy next month to keep it.

> Both passes just collect money and signal "this person gets a seat." The
> actual seat is the booking Geon makes into the capacity-7 class. That's
> what keeps semester + monthly + trial all sharing the same 7.

### The classes and their Fall dates

Holiday weeks are already removed from these lists — enter them exactly.

**Cartooning & Illustration** (Grades 3–5)
- **Mon:** 9/14, 9/21, 9/28, 10/5, 10/19, 10/26, 11/2, 11/9, 11/16, 11/23, 11/30, 12/7, 12/14, 12/21
- **Thu:** 9/10, 9/17, 9/24, 10/1, 10/8, 10/15, 10/22, 10/29, 11/5, 11/12, 11/19, 12/3, 12/10, 12/17
- **Fri:** 9/11, 9/18, 9/25, 10/2, 10/9, 10/16, 10/23, 10/30, 11/6, 11/13, 11/20, 12/4, 12/11, 12/18
- **Sat:** 9/12, 9/19, 9/26, 10/3, 10/10, 10/17, 10/24, 10/31, 11/7, 11/14, 11/21, 12/5, 12/12, 12/19

**2D Animation**
- **Thu:** 9/10, 9/17, 9/24, 10/1, 10/8, 10/15, 10/22, 10/29, 11/5, 11/12, 11/19, 12/3, 12/10, 12/17

**Intro to Drawing & Painting** (Grades 5–7)
- **Mon:** 9/14, 9/21, 9/28, 10/5, 10/19, 10/26, 11/2, 11/9, 11/16, 11/23, 11/30, 12/7, 12/14, 12/21
- **Wed:** 9/9, 9/16, 9/23, 9/30, 10/7, 10/14, 10/21, 10/28, 11/4, 11/11, 11/18, 12/2, 12/9, 12/16
- **Thu:** 9/10, 9/17, 9/24, 10/1, 10/8, 10/15, 10/22, 10/29, 11/5, 11/12, 11/19, 12/3, 12/10, 12/17
- **Fri:** 9/11, 9/18, 9/25, 10/2, 10/9, 10/16, 10/23, 10/30, 11/6, 11/13, 11/20, 12/4, 12/11, 12/18

**Pre-Art HS Prep**
- **Mon:** 9/14, 9/21, 9/28, 10/5, 10/19, 10/26, 11/2, 11/9, 11/16, 11/23, 11/30, 12/7, 12/14, 12/21
- **Tue:** 9/15, 9/22, 9/29, 10/6, 10/13, 10/20, 10/27, 11/3, 11/10, 11/17, 11/24, 12/1, 12/8, 12/15
- **Wed:** 9/9, 9/16, 9/23, 9/30, 10/7, 10/14, 10/21, 10/28, 11/4, 11/11, 11/18, 12/2, 12/9, 12/16
- **Fri:** 9/11, 9/18, 9/25, 10/2, 10/9, 10/16, 10/23, 10/30, 11/6, 11/13, 11/20, 12/4, 12/11, 12/18
- **Sat:** 9/12, 9/19, 9/26, 10/3, 10/10, 10/17, 10/24, 10/31, 11/7, 11/14, 11/21, 12/5, 12/12, 12/19

**Art High School Prep Program**
- **Mon:** 9/14, 9/21, 9/28, 10/5, 10/19, 10/26, 11/2, 11/9, 11/16, 11/23, 11/30, 12/7, 12/14, 12/21
- **Tue:** 9/15, 9/22, 9/29, 10/6, 10/13, 10/20, 10/27, 11/3, 11/10, 11/17, 11/24, 12/1, 12/8, 12/15
- **Wed:** 9/9, 9/16, 9/23, 9/30, 10/7, 10/14, 10/21, 10/28, 11/4, 11/11, 11/18, 12/2, 12/9, 12/16
- **Fri:** 9/11, 9/18, 9/25, 10/2, 10/9, 10/16, 10/23, 10/30, 11/6, 11/13, 11/20, 12/4, 12/11, 12/18
- **Sat:** 9/12, 9/19, 9/26, 10/3, 10/10, 10/17, 10/24, 10/31, 11/7, 11/14, 11/21, 12/5, 12/12, 12/19

**Post-Portfolio / HS Development**
- **Mon:** 9/14, 9/21, 9/28, 10/5, 10/19, 10/26, 11/2, 11/9, 11/16, 11/23, 11/30, 12/7, 12/14, 12/21
- **Tue:** 9/15, 9/22, 9/29, 10/6, 10/13, 10/20, 10/27, 11/3, 11/10, 11/17, 11/24, 12/1, 12/8, 12/15
- **Wed:** 9/9, 9/16, 9/23, 9/30, 10/7, 10/14, 10/21, 10/28, 11/4, 11/11, 11/18, 12/2, 12/9, 12/16
- **Thu:** 9/10, 9/17, 9/24, 10/1, 10/8, 10/15, 10/22, 10/29, 11/5, 11/12, 11/19, 12/3, 12/10, 12/17

**High School Art Class** (skill & personal development)
- **Mon / Tue / Wed / Thu** — same dates as Post-Portfolio above.

**Acrylic & Portrait** (HS hobby class)
- **Tue:** 9/15, 9/22, 9/29, 10/6, 10/13, 10/20, 10/27, 11/3, 11/10, 11/17, 11/24, 12/1
  *(Your list ended at 12/1 — confirm if it continues to 12/8, 12/15.)*

**Art College Portfolio** (U.S. & Europe)
- **Mon:** 9/14, 9/21, 9/28, 10/5, 10/19, 10/26, 11/2, 11/9, 11/16, 11/23, 11/30, 12/7, 12/14, 12/21
- **Tue:** 9/15, 9/22, 9/29, 10/6, 10/13, 10/20, 10/27, 11/3, 11/10, 11/17, 11/24, 12/1, 12/8, 12/15
- **Wed:** 9/9, 9/16, 9/23, 9/30, 10/7, 10/14, 10/21, 10/28, 11/4, 11/11, 11/18, 12/2, 12/9, 12/16
- **Sat:** 9/12, 9/19, 9/26, 10/3, 10/10, 10/17, 10/24, 10/31, 11/7, 11/14, 11/21, 12/5, 12/12, 12/19

---

## 5. Pattern B — Adult classes (monthly only)

Adults register for the **exact month** they want (Sept / Oct / Nov / Dec)
and pick **3 or 4 classes** that month. No semester option.

### How to build it

1. Create the class the same way as Pattern A — **group class, capacity 7**,
   recurring on the listed days/time.
2. Create **two monthly packages** per class (the 3-class and 4-class
   options) so people buy the exact month + count:

**Adult Beginner** — Mon, Tue, Thu · **7:10–9:10pm**
- `Adult Beginner — 3 classes / month` — **$185** ($61/class)
- `Adult Beginner — 4 classes / month` — **$235** ($58/class)

**Adult Intermediate–Advanced** — Mon–Sat · **12:30–2:30pm**
- `Adult Int–Adv — 3 classes / month` — **$235** ($78/class)
- `Adult Int–Adv — 4 classes / month` — **$295** ($73/class)

> Because these are month-by-month by nature, they *are* the "monthly
> pass." Each month, the adult re-buys the package for that month and their
> seats are booked for the sessions they choose.

---

## 6. Pattern C — Fall Collective (6-week master programs)

Fixed 6-week runs — like the summer workshops. **One payment for the whole
run**, seat held for all 6 weeks. Build each as a **group class, capacity 7**,
with the exact 6 dates, and sell a single **full-run pass** item.

> Treat each **time slot** as its own class, and each **run** (start date)
> as its own class. Prices still needed for all of these (see §3).

**Adult Watercolor Beginner Master** (6 wks) — Mon **7:10–9:10pm**
- 9/14, 9/21, 9/28, 10/5, 10/19, 10/26

**Adult Watercolor Landscape Master** (6 wks) — Tue — *two time slots*
- **12:30–2:30pm:** 9/15, 9/22, 9/29, 10/6, 10/13, 10/20
- **7:10–9:10pm:** 9/15, 9/22, 9/29, 10/6, 10/13, 10/20

**Adult Charcoal Portrait Master** (6 wks) — Wed **7:10–9:10pm** — *two runs*
- **Run 1:** 9/9, 9/16, 9/23, 9/30, 10/7, 10/14
- **Run 2:** 10/28, 11/4, 11/11, 11/18, 12/2, 12/9

**Adult Oil Painting Beginner Master** (6 wks) — Thu — *two time slots*
- **12:30–2:30pm:** 9/10, 9/17, 9/24, 10/1, 10/8, 10/15
- **7:10–9:10pm:** 9/10, 9/17, 9/24, 10/1, 10/8, 10/15

**Adult Calligraphy Pen Beginner Master** (6 wks) — Mon **7:10–9:10pm**
- 11/9, 11/16, 11/23, 11/30, 12/7, 12/14

---

## 7. Consultations & mentorship (leave as-is)

These stay **1:1 appointments** — no change:
- **Free Consultation** (with Geon)
- **Mentorship trial** (with Mr. Ko)

---

## 8. Running it each month (the upkeep)

- **Semester & full-run students:** set once at signup, nothing to do.
- **Monthly students:** at the start of each month, confirm who re-paid and
  extend their booking into the new month. Anyone who didn't renew — remove
  their booking so the seat opens back up.
- **Trials:** book them into an open seat for a single session. Remember a
  trial counts against the 7, so a full class can't take a trial.
- Do all of this from the **Square Appointments app** — add/remove
  students, see the roster, see remaining seats. It updates the booking
  site automatically.

> If the monthly re-booking becomes too much work once volume grows, the
> alternative is to make "monthly" an **auto-renewing membership** (Square
> bills and continues the seat automatically). The tradeoff is you lose the
> deliberate monthly re-confirmation. Worth revisiting after this term.

---

## 9. What to send back for the website

For each thing below, open its Square booking / checkout page and copy the
URL. Send the list to whoever manages the site and the buttons get pointed
at them.

- Each **class** → its group-class booking URL (used for the "Book a
  Trial" button).
- Each **semester pass**, **monthly pass**, and **full-run pass** →
  its checkout/item URL (used for the "Enroll" buttons).
- Consultation & mentorship trial URLs are already wired.

Send them in this shape and it drops straight into the site config:

```
Cartooning — Monday — class booking URL: ...
Cartooning — semester pass URL: ...
Cartooning — monthly pass URL: ...
Adult Beginner — 3-class package URL: ...
Adult Beginner — 4-class package URL: ...
Fall Collective — Watercolor Beginner — full-run URL: ...
...etc
```
