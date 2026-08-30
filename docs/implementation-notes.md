# StatSkill AI — Implementation Notes

## SIH 101 scope implemented in the prototype

The prototype is designed as an original government-grade learning platform inspired by the information architecture and role-based capacity-building model of iGOT Karmayogi. It is not an official iGOT interface or integration.

### Role model

The registration flow supports these platform personas/administrative roles:

- Karmayogi / Learner
- Trainer / Faculty
- Content Creator
- Content Reviewer / Curator
- MDO Administrator
- State Administrator
- Capacity Building Administrator
- Assessment Manager
- Organization / Department Administrator
- Super Administrator

The role model is aligned to concepts visible in iGOT's public materials, including role/activity-based learner profiles, MDO administration, State Admin, content authors/curators, and capacity-building planning. The exact permissions are StatSkill AI design choices for the SIH prototype.

### Verification geography

Registration includes all 28 Indian states and 8 Union Territories:

Andhra Pradesh, Arunachal Pradesh, Assam, Bihar, Chhattisgarh, Goa, Gujarat, Haryana, Himachal Pradesh, Jharkhand, Karnataka, Kerala, Madhya Pradesh, Maharashtra, Manipur, Meghalaya, Mizoram, Nagaland, Odisha, Punjab, Rajasthan, Sikkim, Tamil Nadu, Telangana, Tripura, Uttar Pradesh, Uttarakhand, West Bengal, Andaman and Nicobar Islands, Chandigarh, Dadra and Nagar Haveli and Daman and Diu, Delhi, Jammu and Kashmir, Ladakh, Lakshadweep, Puducherry.

### Main demo experiences

- Public landing page
- Login and demo role selection
- Three primary experiences: Learner / Trainer / Administrator
- Learner competency dashboard with radar chart and skill gaps
- Explainable AI course recommendations
- Trainer AI question QA pipeline and source-grounding view
- Administrator workforce intelligence and competency heatmap
- Three-year future-skills forecast
- iGOT integration telemetry as clearly labeled demo/mock data
- Accessibility and English/Hindi/Telugu controls
- Responsive mobile/tablet layout

### Source grounding

Official iGOT public materials were checked while expanding the role and ecosystem model. iGOT describes role/activity-based learner profiles and a State Admin role, and its public platform materials describe role-based governance, competency-driven development, AI recommendations, analytics, and organizational hierarchy management.

Real iGOT APIs, government identity verification, and production authentication are not claimed by this prototype and must be connected through authorized integrations before production deployment.
