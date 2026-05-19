# Content — Source of Truth

> Pulled from SWCS SRS v1.0 (`/Users/Anjali/Desktop/swcs/SWCS_SRS_v1.0.pdf`) and the existing public site.

## Branding
- Product: **Single Window Clearance System (SWCS)**
- Authority / client: **Nagpur Metropolitan Region Development Authority (NMRDA)**
- Implementation partner (TSP): **VIPL — Vidarbha Infotech Pvt. Ltd.**
- Hub: **Naveen Nagpur International Business and Finance Hub (IBFC)**

## Headline value props
1. One application, every approval — replaces 15+ separate department portals
2. Target 40–60% reduction in end-to-end approval timelines
3. CA/CS managed-service for company incorporation (Journey A)
4. Sector-aware operational approval routing with SLA tracking (Journey B)
5. Real-time tracker with deemed-approval triggers and escalation
6. Foreign investor friendly — FEMA/FDI compliance, Passport OCR, OpenCorporates
7. Audit-grade — CERT-In Safe-to-Host, TLS 1.2, AES-256, 5-year audit retention
8. 99.5% uptime SLA, 500 concurrent users, <3s page load

## Numbers (use liberally)
| Number | Context |
|---|---|
| **15+** | Government departments consolidated |
| **10** | Sectors in the live approval matrix |
| **4** | Portals (Investor, CA/CS, Admin, Officer) |
| **11** | Production modules (10 active + 1 Phase 2) |
| **2** | Core user journeys (A: Registration, B: Operational) |
| **40–60%** | Target reduction in approval cycles |
| **200+** | Applicants already registered |
| **99.5%** | Uptime SLA |
| **500** | Concurrent users supported |
| **3 sec** | Page load ceiling under normal load |
| **5 yrs** | Audit log retention |
| **5 min** | OTP validity |
| **692** | Hectares — IBFC footprint |
| **₹8,200 cr** | Investment target |
| **42 km** | Underground utility tunnels |
| **400 kV** | Dedicated power |
| **100 Gbps** | Optical fiber backbone |
| **25%** | Mandatory green cover |
| **120 Ha** | Finance zone |
| **95 Ha** | IT / ITeS zone |
| **140 Ha** | Residential zone |
| **173 Ha** | Green / open space |
| **3** | Revenue villages (Godhni, Ladgaon, Hingna) |

## Four Portals
| Portal | Users | Access |
|---|---|---|
| Investor Portal | Entrepreneurs, business owners, foreign nationals | Self-registration (email + OTP) |
| CA/CS Portal | Empanelled Chartered Accountants & Company Secretaries | Admin invitation |
| Admin Portal | NMRDA administrators | NMRDA internal onboarding |
| Officer Portal | NMRDA + external dept officers | Admin invitation, scoped |

## Two Journeys
- **Journey A — Business Registration:** Pvt Ltd, LLP, OPC, Partnership, Sole Proprietorship, Foreign Subsidiary. End-to-end via CA/CS managed-service.
- **Journey B — Operational Approvals:** Sector-specific & activity-specific. Hybrid model: deep API integration where available, guided redirection where not. First Officer-Portal-managed approval is **Fire NOC**.

## 11 Modules (with one-liners)
1. **Login / Registration** — Email OTP + CAPTCHA; foreign-national friendly
2. **Business Details Bot** — Conversational onboarding maps profile → approval matrix
3. **Approval Checklist** — Personalised list with fees, opt-ins, payment
4. **Common Application Form (CAF)** — Single dynamic form, API auto-fill
5. **Application Tracker** — Per-app SLA timers, clarifications, escalations
6. **CA/CS Portal** — Case dashboard, document handling, status updates
7. **Chat** — Direct messaging, audit-logged
8. **Grievance Management** — Formal channel with reference numbers + resolution SLA
9. **Admin Portal** — Pipeline analytics, SLA config, empanelment, grievance oversight
10. **Communications Strategy** — Email, SMS, WhatsApp notifications
11. **GIS Map Integration** — Phase 2, pending NMRDA building plans

## Integrations (Phase 1)
### Verification & Data Fetch (P0)
- Aadhaar OTP eKYC
- PAN Verification
- MCA21 V3 — CIN / LLPIN / DIN
- GSTIN Verification
- Udyam / MSME Verification

### Verification & Data Fetch (P1)
- IEC, DigiLocker, Passport OCR + Verification
- OpenCorporates (foreign company registry)
- Sanctions & PEP Screening
- Bank Account Penny Drop

### Verification & Data Fetch (P2)
- EPFO API (20+ employees)
- ESIC API (10+ employees)

### Communications & Payments (P0)
- Email Gateway, SMS OTP
- Payment Gateway — Government Fees + Portal Service Charge

### Operational
- WhatsApp Business API (P1)

## NFR highlights
- TLS 1.2+ in transit, AES-256 at rest
- RBAC at every API endpoint (not just UI)
- CERT-In empanelled Safe-to-Host certification before go-live
- UIDAI compliance for Aadhaar (verified attributes only, no raw retention)
- 5-year tamper-proof audit log
- API response timeout: 5s (manual fallback triggers)
- Tracker propagation: ≤60s after CA/CS status update

## Existing site (reference only, do NOT mirror)
URL: https://swcs-app-qa.jedix.co/
- Vision line they use: "Make Naveen Nagpur the fastest city in India for business approvals"
- Public-facing claim: 200+ applicants registered

## Copy NOT to use (banned phrases)
- "Empower your business..."
- "Revolutionize approvals..."
- "Seamless / frictionless / cutting-edge"
- "Your one-stop shop"
- "Powered by AI" (it isn't — it's a workflow platform)
- Anything starting with "In today's digital age..."
