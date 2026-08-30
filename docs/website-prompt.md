# StatSkill AI — SIH Problem Statement 101

## Website Build Specification

**Product Name:** StatSkill AI  
**Tagline:** *Building a Future-Ready Statistical Workforce*  
**Organization:** Ministry of Statistics and Programme Implementation (MoSPI) / National Statistical Systems Training Academy (NSSTA)

StatSkill AI is an AI-powered competency intelligence, learning, assessment, and workforce analytics platform designed for India's National Statistical System.

The platform should feel like a real Government of India enterprise learning platform, inspired by the structured learning experience of iGOT Karmayogi, while maintaining an original visual identity and modern analytics/AI capabilities.

## Core Capacity-Building Loop

**Competency Profiling → Skill Gap Identification → Explainable AI Recommendations → Learning Pathways → AI MCQ Generation → Assessment → Competency Improvement → Workforce Analytics**

## Three Role-Based Modes

### 1. Learner

Persona: **Ananya Sharma**, Statistical Officer, National Statistical Office.

Dashboard should include:
- Overall competency score
- Skills improving
- Learning hours
- Courses completed
- Assessment score
- Competency radar chart
- Priority skill gaps
- Personalized learning recommendations
- Active learning roadmap
- Assessment history

Learning journey:
**Profile → Skill Gap → Why This Course? → Learn → Assessment → +6% Competency Boost → Continue Learning**

### 2. Trainer / Faculty

Persona: **Dr. Rajesh Verma**, NSSTA Faculty.

Dashboard should include:
- Questions pending review
- Approved questions
- Active assessments
- Learner count
- AI question-generation QA pipeline
- Source verification
- Bloom's taxonomy alignment
- Hallucination verification
- Grounding score
- Cohort weak-topic analytics

Question QA pipeline:
**Source Selection → Semantic Chunking → Topic Extraction → Bloom's Taxonomy → Hallucination Verification → Source Grounding**

### 3. Administrator

Persona: **Smt. Priya Menon**, Capacity Building Director, MoSPI.

Dashboard should include:
- Total workforce
- Average competency
- Employees below target
- Active learning
- Assessment completion
- Department competency heatmap
- Workforce competency trends
- Skill-gap distribution
- 3-year future-skills forecast
- iGOT Karmayogi integration telemetry

## Public Landing Page

Create a polished Government-tech landing page with:
- StatSkill AI branding
- MoSPI / NSSTA text identity
- Home, About, Learning, Competencies, AI Assistant navigation
- Language selector
- Accessibility controls
- Login and Register buttons
- Hero section: **Building a Future-Ready Statistical Workforce**
- Supporting statement explaining AI-powered competency intelligence and learning
- Dashboard preview
- Ecosystem section
- Six feature cards
- Six-step "How It Works" journey
- AI Learning Advisor demonstration

Do not invent official logos. Use text-based branding or placeholders.

## Visual Design

Use a premium, trustworthy, modern Government-tech interface.

- Deep navy / government blue primary palette
- Indian saffron as a subtle accent
- White and light blue-gray backgrounds
- Teal/green for positive competency growth
- Amber for warnings
- Red only for critical alerts
- Inter / Noto Sans typography
- Strong contrast and WCAG 2.1 AA accessibility
- Rounded cards, subtle shadows, thin borders
- Professional charts
- Spacious layouts

Avoid gaming aesthetics, neon colors, excessive gradients, excessive glassmorphism, and generic startup styling.

## Authentication

### Login

Fields:
- Official Email / Employee ID
- Password
- Remember me
- Forgot Password

Actions:
- Sign In
- Register
- Demo Access

Demo role buttons:
**Learner | Trainer | Administrator**

### Registration

Three-step registration:
1. Personal information
2. Professional profile
3. Competency interests

## Learner Pages

### Dashboard

Show KPI cards, competency radar, priority gaps, recommended courses, and active learning path.

### Competencies

Competency matrix with:
- Competency
- Current Level
- Target Level
- Gap
- Last Assessment
- Status

Levels:
1. Awareness
2. Foundation
3. Practitioner
4. Advanced
5. Expert

Competency detail drawer should show definition, current level, target level, evidence, recommended courses, assessment history, and improvement trend.

### Learning Path

Show current competency → target competency and a visual learning roadmap.

Every recommendation should support **Why this course?** with an explainable score, for example:
- Competency Gap — 40%
- Role Relevance — 30%
- Learning Impact — 20%
- Course Quality — 10%

### Assessments

Show upcoming/completed assessments, average score, and competency gain.

### Quiz Player

Include:
- Timer
- Question
- Four answer choices
- Question palette
- Answered/unanswered/marked-for-review states
- Previous
- Mark for Review
- Save & Next
- Submit Assessment
- Auto-save indicator

### Assessment Result

Show score, competency improvement, strengths, weaknesses, detailed analysis, and before/after competency chart.

Demo result may show **+6% Competency Score Boost** as specified by the project.

## Trainer Pages

### Faculty Console

Include dashboard KPIs and AI Question QA Pipeline.

### Question Review

Show generated MCQ, options, Bloom level, difficulty, AI validation, grounding score, hallucination risk, source document, page number, and View Source modal.

Actions:
**Reject | Edit | Approve**

### Cohort Analytics

Charts for:
- Average competency by topic
- Weak-topic distribution
- Assessment performance
- Learning completion
- Competency improvement

Include a "Topics Requiring Intervention" table and a **Create Targeted Learning Intervention** action.

## Administrator Pages

### Workforce Intelligence

Show national-level competency KPIs.

### Department Competency Heatmap

Rows: departments. Columns:
- Survey Sampling
- Data Quality
- Statistical Methods
- Computing
- Visualization
- Official Statistics

Filters:
Department, State, Designation, Competency, Experience.

### Workforce Analytics

Charts:
- Competency Trend
- Department Comparison
- Skill Gap Distribution
- Learning Adoption

### Future Skills Forecast

Show 2026–2029 forecast for:
- AI & Statistical Computing
- Data Engineering
- Advanced Survey Methods
- Data Quality
- Geospatial Statistics
- Machine Learning
- Data Visualization

Include trend indicators and an AI Forecast Confidence metric.

### iGOT Integration

Display demo/mock telemetry only unless a real backend is connected.

Show:
- Connection status
- Last synchronization
- Courses synced
- Learner profiles synced
- Assessments synced
- Pending records
- Sync health

## AI Assistant

Add a floating **StatSkill AI** assistant on authenticated pages.

Quick prompts:
- Explain my skill gaps
- Recommend a course
- Explain sampling methods
- Help me prepare for an assessment
- Find the source for this concept

Responses should demonstrate RAG-style source citations and include a disclaimer that AI-generated responses should be verified against official source documents.

## Accessibility

Global controls:
- A-
- A
- A+
- High Contrast
- Language

Languages:
- English
- हिन्दी
- తెలుగు

## Navigation

Authenticated sidebar should change by role.

Common learner navigation:
Dashboard, My Competencies, Learning Path, Courses, Assessments, AI Assistant.

Trainer navigation:
Dashboard, Question Bank, AI Question Generator, Assessments, Cohort Analytics.

Administrator navigation:
Dashboard, Workforce, Competency Heatmap, Future Skills, Analytics, iGOT Integration, System Settings.

Include Profile, Settings, and Logout.

## Technology

Recommended frontend:
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Lucide icons
- Recharts
- Responsive component architecture

Use realistic mock data for the SIH prototype and isolate API calls in service files so real backend APIs can replace mock implementations.

## API Contracts

Prepare service abstractions for:

`GET /api/state`  
`GET /api/competencies`  
`GET /api/learning-path`  
`GET /api/igot/status`  
`POST /api/assessments/submit`  
`POST /api/ai/generate-questions`  
`POST /api/ai/chat`

## Key SIH Demo Flow

**Landing → Login → Learner Dashboard → Skill Gap → Explainable Recommendation → Learning Path → Assessment → Score +6% → Trainer Question Review → View Source → Approve → Administrator Workforce Heatmap → Future Skills Forecast → iGOT Integration**

The three modes should feel like three connected products inside one ecosystem:

- **Learner — My Growth**
- **Trainer — My Cohort**
- **Administrator — My Workforce**

The final application should communicate one core idea:

> **StatSkill AI transforms competency data into personalized learning, measurable improvement, and national workforce intelligence.**
