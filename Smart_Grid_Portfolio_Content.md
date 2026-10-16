# Smart Grid Energy Monitoring & Billing Platform

**Project Type:** Data Engineering / Streaming Analytics  
**Project Context:** EC8202 Big Data Analytics — Team Project  
**My Contribution:** Apache Airflow DAGs, FastAPI, Streamlit dashboard, observability, and report preparation (as documented in the group report)  
**Repository:** https://github.com/AmiruHoradagoda/smart-grid-data-platform  
**Project Status:** Completed university mini-project / local demonstration  
**Portfolio Summary:** An end-to-end energy data platform that simulates household electricity usage and rooftop solar generation, monitors grid activity, and produces daily estimated bills and interactive analytics.

> **Portfolio content specification:** The following content follows the existing Engineering Case Study tabs. Angle-bracketed `<Figure ...>` items are **diagram or screenshot placeholders**, not implemented assets. Add images only after creating or verifying them. All measurements and tariff rates are simulated.

# Engineering Case Study

## 1. Overview

### Project Introduction

Electricity monitoring involves data that arrives continuously, while tariffs and billing calculations follow a different, periodic schedule. Processing both workloads as one flow makes it difficult to serve timely operational metrics and reconcile complete daily household usage.

**Smart Grid Energy Monitoring & Billing Platform** demonstrates an end-to-end pipeline for these two requirements. Simulated smart meters publish household consumption and rooftop solar generation events. A streaming engine validates those readings and derives zone-level energy metrics and daily household totals. A separate scheduled workflow imports household tariffs and generates estimated bills when both daily energy summaries and matching tariffs are ready.

The results are stored in a relational database, exposed by an HTTP API, and visualized in an interactive dashboard. The demonstration runs accelerated simulated time: **20 households across three grid zones**, with **13 solar-equipped households** and a **five-minute real-time simulation of one full day**. The project is a **local, simulated engineering demonstration**; it does not connect to live electricity meters, provide official Sri Lankan tariffs, or issue actual utility bills.

### System Context

The main users are an energy analyst or system operator reviewing grid metrics and household billing estimates, and a developer/operator managing the local demonstration. Inputs come from the project's own simulated smart-meter and tariff generators rather than real external metering or billing systems.

<Figure C4 Context Diagram>

*Suggested diagram:* Show the **Smart Grid Energy Monitoring & Billing Platform** as one software system, the **Energy Analyst / Operator** viewing metrics and estimates, and the **Demo Operator** starting and inspecting simulated data flows. Do not depict real CEB/LECO integrations or an external payment gateway.

### Container / Service View

The system separates event ingestion, stream processing, scheduled daily workflows, persistence, HTTP access, and visualization. Kafka, Spark, Airflow, PostgreSQL, FastAPI, and Streamlit are distinct technical containers within the overall platform boundary. The meter and tariff generators run as Python host processes in the documented local setup.

<Figure C4 Container Diagram>

*Suggested diagram:* Show **Smart Meter Producer → Kafka → Spark Structured Streaming → PostgreSQL**, **Tariff Generator → CSV → Airflow Tariff Ingestion → PostgreSQL**, **Airflow Daily Billing ↔ PostgreSQL**, and **PostgreSQL → FastAPI → Streamlit Dashboard**. Include the persisted readiness/status handoff between streaming and scheduled billing. Do not represent the dashboard as connecting directly to PostgreSQL.

### Technologies Used

| Technology | Responsibility in the project |
| --- | --- |
| Python | Smart-meter and tariff simulation, APIs, and supporting application logic |
| Apache Kafka | Buffers household energy events keyed by household ID |
| Apache Spark Structured Streaming | Validates incoming readings and computes event-time energy aggregations |
| Apache Airflow | Schedules tariff ingestion and dispatches ready daily billing work |
| PostgreSQL | Persists energy metrics, tariff references, billing estimates, and pipeline readiness |
| FastAPI | Serves stored metrics, household billing data, and renewable alerts through HTTP endpoints |
| Streamlit & Plotly | Displays interactive energy charts, billing views, and alert information |
| Docker Compose | Runs the local data infrastructure and orchestrator services |
| uv / pytest | Provides repeatable Python dependencies and component-level automated validation |

## 2. Main Functional Requirements

| ID | Functional Area | Implemented requirement |
| --- | --- | --- |
| SG-FR-01 | Household Energy Simulation | Generate timestamped household consumption and solar-generation events across three grid zones using configurable load, daylight, and simulation-speed parameters. |
| SG-FR-02 | Event Ingestion | Publish JSON smart-meter events to Kafka, partitioning by household key for downstream processing. |
| SG-FR-03 | Streaming Validation & Aggregation | Reject invalid readings and calculate five-minute zone metrics, household daily totals, and renewable contribution from event-time data. |
| SG-FR-04 | Tariff Data Generation & Ingestion | Generate daily household tariff CSV files; validate and ingest those files using an Airflow workflow. |
| SG-FR-05 | Daily Billing | Calculate estimated daily household bills using finalized grid-import totals and corresponding tariff rates after both data inputs are ready. |
| SG-FR-06 | Workflow State & Recovery | Track energy/tariff readiness and billing status in PostgreSQL; allow pending eligible dates to be processed after the scheduler resumes. |
| SG-FR-07 | Energy & Billing APIs | Expose latest and historical zone metrics, daily billing results, individual household billing history, and health status. |
| SG-FR-08 | Renewable Contribution Alerts | Identify zones below the configured renewable-contribution threshold during daylight hours when the alert API is requested. |
| SG-FR-09 | Monitoring Dashboard | Visualize consumption, solar generation, grid import, zone comparisons, daily billing, tariff tiers, and renewable alerts through an interactive dashboard. |
| SG-FR-10 | Operational Control & Validation | Inspect Kafka offsets, processing logs, Airflow runs and per-day readiness; use the optional local Control Center and automated tests to validate components. |

<Figure Smart Meter to Dashboard Workflow>

*Suggested diagram:* One simple numbered sequence or flow showing an event's journey from the simulated meter through ingestion, analytics, storage, API, and dashboard. Avoid repeating the full container diagram.

## 3. Architecture & Design

### 3.1 Main Data Pipeline Architecture

The platform uses a **Lambda-style hybrid design** with two complementary processing paths. **Kafka and Spark** continuously process meter readings for timely energy metrics. **Airflow** handles periodic tariff CSV ingestion and estimated daily billing after a simulated day has sufficient finalized data. Both paths meet through persisted household/date records and readiness state in PostgreSQL; the project does not duplicate the same raw stream across independent speed and batch computations. This fits the different timing of live meter data and once-per-day tariff reference files.

<Figure Streaming and Batch Data Pipeline Architecture>

*Reference:* Group report, **Figure 1 (page 2 of the report)** — end-to-end Lambda-style architecture. Redraw in the portfolio style rather than pasting a report-page screenshot.

### 3.2 Data Model / Storage Design

PostgreSQL contains five core business tables:

| Table | Purpose / grain |
| --- | --- |
| `zone_energy_metrics` | Grid zone and five-minute simulated-time window |
| `household_daily_energy` | Household and simulated energy date |
| `tariff_reference` | Household and tariff effective date |
| `daily_household_billing` | Household and billed energy date |
| `daily_pipeline_status` | Simulated date and processing-readiness state |

This model separates raw-derived analytics, tariff reference data, billing outputs, and operational workflow state. Airflow metadata is stored in a separate database (`airflow_meta`).

<Figure PostgreSQL Data Model / ER Diagram>

### 3.3 Streaming Energy Processing

The Python smart-meter simulator publishes readings keyed by household ID into a Kafka topic with **three partitions**. Spark Structured Streaming validates event fields, groups readings by **five-minute event-time windows and zone**, and calculates consumption, solar generation, grid import, renewable contribution, and daily household summaries. A ten-minute event-time watermark determines when aggregation results can be finalized. Zone metrics are append-only, while daily household totals are upserted to support repeatable processing.

<Figure Kafka to Spark Streaming Processing Flow>

### 3.4 Scheduled Tariff Ingestion & Daily Billing

The tariff generator creates a dated CSV covering all **20 households** (simulated tiers: 4 subsidized at LKR 32/kWh, 12 standard at LKR 42/kWh, and 4 premium at LKR 48/kWh). The **tariff ingestion DAG runs every five real minutes**, validates completeness and values, upserts the reference data, and records tariff readiness. Spark independently records energy readiness for complete daily summaries. The **daily billing dispatcher runs every real minute**, checks durable readiness records and processes eligible dates transactionally, allowing pending work to survive scheduler interruptions. Each successful daily run records **20 household bill rows** and a completed state; failed dates remain eligible for later retry.

**Estimated billing logic:**

```text
Grid import (kWh) = max(consumption (kWh) - solar generation (kWh), 0)
Estimated daily bill (LKR) = round(daily grid import × tariff rate, 2)
```

These are demonstration estimates, not official utility bills. The system does not model energy exports or a complete electricity tariff structure.

<Figure Daily Billing Readiness and Workflow Diagram>

*Reference:* Group report, **Figure 2 (page 2 of the report)** — persisted `PENDING`, `PROCESSING`, `COMPLETED` and `FAILED` states and the two readiness flags.

### 3.5 API & Monitoring Dashboard

FastAPI provides read-only access to zone energy summaries, household billing history, daily bills, and computed renewable alerts. The Streamlit dashboard accesses data through FastAPI rather than making direct database queries. It presents energy KPI cards, trend charts, zone comparisons, household billing data, and tariff-tier summaries.

<Figure Energy Monitoring Dashboard Screenshot>

*Reference:* Group report, **Figure 3 (page 7 of the report)** — consumption, solar generation, grid import and zone visualizations. Use a clean original screenshot if available.

<Figure Household Billing Dashboard Screenshot>

*Reference:* Group report, **Figure 4 (page 7 of the report)** — daily billing results and tariff-tier comparisons. Use a clean original screenshot if available.

*Optional screenshots:* Use only actual dashboard captures from a running local environment. Never present simulated data as actual household consumption or billing records.

### 3.6 Reliability and Processing Controls

The implementation uses PostgreSQL readiness records to coordinate streaming output and Airflow billing, database upserts for repeatable daily writes, and Spark checkpoints for streaming recovery. The billing status records support `PENDING`, `PROCESSING`, `COMPLETED`, and `FAILED`. These measures make recovery and delayed processing inspectable without claiming exactly-once behavior across every component. The submitted report records **81 passing pytest tests** (component-level checks for APIs, business logic, configuration, dashboard-client behavior, and control-center operations); it also documents an end-to-end demonstration through real containers.

<Figure Pipeline Readiness / Execution Evidence>

<Figure Smart Grid Control Center Screenshot>

*Reference:* Group report, **Figure 5 (page 8 of the report)** — local Control Center showing service health and readiness. Use this as optional operational evidence, not a core architecture diagram.

*Suggested evidence:* A readable capture of `daily_pipeline_status` or the corresponding operational display showing energy readiness, tariff readiness, and completed billing for a simulated date.

---

## Figure Planning Notes (for the later Codex integration step)

These are implementation notes, **not an additional portfolio tab**.

| Priority | Placeholder | What should be drawn or captured |
| --- | --- | --- |
| Essential | `<Figure C4 Context Diagram>` | User-facing platform boundary and operators |
| Essential | `<Figure C4 Container Diagram>` | Distinct Kafka, Spark, Airflow, PostgreSQL, FastAPI, Streamlit, and generators |
| Essential | `<Figure Streaming and Batch Data Pipeline Architecture>

*Reference:* Group report, **Figure 1 (page 2 of the report)** — end-to-end Lambda-style architecture. Redraw in the portfolio style rather than pasting a report-page screenshot.` | Two processing paths and their PostgreSQL convergence |
| Essential | `<Figure PostgreSQL Data Model / ER Diagram>` | The five business tables and household/date grain relationships |
| Useful | `<Figure Daily Billing Readiness and Workflow Diagram>

*Reference:* Group report, **Figure 2 (page 2 of the report)** — persisted `PENDING`, `PROCESSING`, `COMPLETED` and `FAILED` states and the two readiness flags.` | `energy_ready` + `tariff_ready` → daily billing |
| Useful | `<Figure Energy Monitoring Dashboard Screenshot>

*Reference:* Group report, **Figure 3 (page 7 of the report)** — consumption, solar generation, grid import and zone visualizations. Use a clean original screenshot if available.` | Actual energy charts and zone comparisons |
| Useful | `<Figure Household Billing Dashboard Screenshot>

*Reference:* Group report, **Figure 4 (page 7 of the report)** — daily billing results and tariff-tier comparisons. Use a clean original screenshot if available.` | Actual tariff/billing UI |
| Optional | `<Figure Smart Meter to Dashboard Workflow>` | Concise event journey |
| Optional | `<Figure Kafka to Spark Streaming Processing Flow>` | Validation, windowing, aggregates, watermark |
| Optional | `<Figure Pipeline Readiness / Execution Evidence>

<Figure Smart Grid Control Center Screenshot>

*Reference:* Group report, **Figure 5 (page 8 of the report)** — local Control Center showing service health and readiness. Use this as optional operational evidence, not a core architecture diagram.` | Airflow or PostgreSQL status evidence |

**Ownership and evidence note:** This was a team project. The submitted report attributes **Airflow DAGs, API and dashboard** as the primary individual contribution, plus observability and report preparation. It attributes **architecture, meter producer and Kafka ingestion** primarily to one teammate, and **Spark aggregations and PostgreSQL writes** primarily to another. Present the overall system as a team deliverable and use the contribution statement accurately in the project role or interview narrative. Report figures are **references for visual assets**, not proof that matching image files already exist in the portfolio repository.

**Editorial guidance:** Keep the portfolio's three existing tabs exactly as requested. Put the C4 context and container diagrams under Overview, not Architecture & Design. Favor 1–2 short paragraphs per architecture subsection. If the page becomes crowded, prioritize the four essential figures and two dashboard screenshots rather than showing every optional placeholder. Do not claim production deployment, live smart meters, formal billing accuracy, measured throughput, or high availability.
