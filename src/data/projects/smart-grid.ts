import type { Project } from "../../types/project";

export const smartGrid: Project = {
  slug: "smart-grid-data-platform",
  title: "Smart Grid Energy Monitoring & Billing Platform",
  year: "2026",
  type: "Data Engineering / Big Data Analytics",
  status: "Completed Academic Project",
  role: "Data Engineering Team Member",
  summary: "An energy data platform that turns simulated household consumption and rooftop solar readings into zone analytics, estimated daily bills, and interactive dashboards.",
  description: "A team-built data engineering platform combining Kafka and Spark Structured Streaming with Airflow workflows and PostgreSQL. FastAPI exposes stored energy metrics and estimated household bills to a Streamlit dashboard, while durable readiness records coordinate streaming and scheduled processing.",
  stack: ["Python", "Apache Kafka", "Apache Spark", "Apache Airflow", "PostgreSQL", "FastAPI", "Streamlit", "Plotly", "Docker Compose", "pytest"],
  stackGroups: [
    { title: "Streaming", items: ["Apache Kafka", "Apache Spark"] },
    { title: "Orchestration", items: ["Apache Airflow"] },
    { title: "Storage", items: ["PostgreSQL"] },
    { title: "API", items: ["FastAPI"] },
    { title: "Visualization", items: ["Streamlit", "Plotly"] },
    { title: "Infrastructure", items: ["Docker Compose"] },
    { title: "Language & Validation", items: ["Python", "pytest"] },
  ],
  features: [
    "Configurable consumption and solar simulation for 20 households across three grid zones",
    "Event-time zone metrics and daily household energy summaries",
    "Validated tariff ingestion and readiness-driven estimated daily billing",
    "Read-only energy, billing, and renewable-alert APIs",
    "Interactive energy and billing dashboard with operational inspection tools",
  ],
  challenges: [
    "Coordinating finalized event-time energy totals with independently arriving daily tariffs",
    "Preserving readiness and eligible billing dates through scheduler interruptions",
    "Keeping energy analytics, estimated billing, and simulated time consistent across services",
  ],
  links: [{ label: "GitHub", href: "https://github.com/AmiruHoradagoda/smart-grid-data-platform" }],
  accent: "blue",
  media: [
    {
      type: "image",
      src: "projects/smart-grid-energy-monitoring&-billing-sys/card-image.png",
      alt: "Illustrative Smart Grid project cover showing household solar energy and dashboard concepts, rather than measured system results",
    },
  ],
  details: {
    background: "Electricity readings arrive continuously, while tariff updates and household billing follow a periodic schedule. This platform separates those workloads: simulated meters feed streaming energy analytics, and scheduled workflows calculate daily estimates once matching energy and tariff data are ready. An API and dashboard make both results available for inspection.",
    overviewSections: [
      {
        id: "context",
        heading: "System Context",
        content: "An energy analyst or operator reviews consumption, solar generation, grid import, and estimated household bills. A demo operator starts the simulated meter and tariff generators and inspects service health and processing progress. Both data sources belong to the local demonstration; there are no external utility or payment integrations.",
        diagrams: [
          {
            title: "C4 Context Diagram",
            src: "projects/smart-grid-energy-monitoring&-billing-sys/archi&design/c4-context-c1.png",
            alt: "Smart Grid context connecting system operators and analysts with the platform and its simulated meter and tariff inputs",
            caption: "Illustrates how system operators, analysts, simulated energy-data sources, and tariff inputs interact with the Smart Grid Energy Monitoring & Billing Platform. The external-source labels are conceptual: both generators run locally, with meter events emitted every real second in the configured demo.",
          },
        ],
      },
      {
        id: "container",
        heading: "Container / Service View",
        content: "Meter producer → Kafka → Spark → PostgreSQL supplies energy analytics. Tariff generator → daily CSV files → Airflow → PostgreSQL supplies reference rates; Airflow then joins ready household/date records to calculate bills. PostgreSQL → FastAPI → Streamlit serves the results.\n\nDocker Compose runs Kafka, Spark, PostgreSQL, and Airflow. FastAPI, Streamlit, and both generators run as separate host Python processes in the documented setup. The dashboard accesses data through the API, keeping presentation separate from database access.",
        diagrams: [
          {
            title: "C4 Container Diagram",
            src: "projects/smart-grid-energy-monitoring&-billing-sys/archi&design/c4-container-c2.png",
            alt: "Smart Grid service responsibilities and data paths through Python generators, Kafka, Spark, Airflow, PostgreSQL, FastAPI, and Streamlit",
            caption: "Shows the main application containers and their interactions, including smart-meter simulation, Kafka, Spark, Airflow, PostgreSQL, FastAPI, and Streamlit. C4 containers describe software responsibilities; the host-process deployment is explained above.",
          },
        ],
      },
    ],
    functionalRequirements: [
      {
        id: "SG-FR-01",
        area: "Household Energy Simulation",
        requirement: "Generate timestamped household consumption and solar readings across three grid zones using configurable load, daylight, and simulation-speed parameters.",
        priority: "Implemented",
      },
      {
        id: "SG-FR-02",
        area: "Event Ingestion",
        requirement: "Publish JSON smart-meter events to Kafka with household IDs as partition keys for downstream streaming processing.",
        priority: "Implemented",
      },
      {
        id: "SG-FR-03",
        area: "Streaming Validation & Aggregation",
        requirement: "Filter invalid readings and calculate five-minute zone metrics, daily household totals, grid import, and renewable contribution using event time.",
        priority: "Implemented",
      },
      {
        id: "SG-FR-04",
        area: "Tariff Generation & Ingestion",
        requirement: "Generate dated household tariff CSV files, validate their columns, household counts, duplicate IDs, and nonnegative rates, and ingest them through Airflow.",
        priority: "Implemented",
      },
      {
        id: "SG-FR-05",
        area: "Daily Household Billing",
        requirement: "Calculate and persist estimated daily bills from finalized grid-import totals and matching simulated tariff rates after both inputs are ready.",
        priority: "Implemented",
      },
      {
        id: "SG-FR-06",
        area: "Workflow State & Recovery",
        requirement: "Persist energy and tariff readiness, household counts, billing status, and errors in PostgreSQL. Discover eligible pending or failed dates when the billing scheduler resumes.",
        priority: "Implemented",
      },
      {
        id: "SG-FR-07",
        area: "Energy & Billing APIs",
        requirement: "Expose latest and historical zone metrics, daily bills, individual household billing history, and database health through read-only HTTP endpoints.",
        priority: "Implemented",
      },
      {
        id: "SG-FR-08",
        area: "Renewable Contribution Alerts",
        requirement: "When requested, identify latest stored zone windows below the configured renewable threshold during daylight hours. Alerts are calculated on demand rather than pushed as notifications.",
        priority: "Implemented",
      },
      {
        id: "SG-FR-09",
        area: "Energy & Billing Dashboard",
        requirement: "Explore consumption, solar generation, grid import, zone comparisons, daily household estimates, tariff-tier summaries, and renewable alerts through interactive charts and date/time filters.",
        priority: "Implemented",
      },
      {
        id: "SG-FR-10",
        area: "Operational Control & Validation",
        requirement: "Inspect Kafka offsets, processing logs, Airflow runs, and per-day readiness. Support local service inspection through the optional Control Center and component-level automated tests.",
        priority: "Implemented",
      },
    ],
    architectureHeadings: {
      dataModel: "Data Model / ER Design",
      systemDesigns: "Main System Designs",
      oopDesignPatterns: "Design Patterns",
    },
    dataModelDescription: "Five PostgreSQL tables separate analytics, reference rates, billing outputs, and workflow coordination:\n\n- **zone_energy_metrics:** one row per grid zone and five-minute simulated-time window.\n- **household_daily_energy:** one energy summary per household and date.\n- **tariff_reference:** one tariff per household and effective date.\n- **daily_household_billing:** one estimated bill per household and energy date.\n- **daily_pipeline_status:** one readiness and billing-status record per simulated date.\n\nComposite primary keys define these grains; billing joins energy and tariffs by household and date. Airflow stores its own metadata in the separate airflow_meta database.",
    dataModelDiagrams: [
      {
        title: "PostgreSQL Data Model",
        src: "projects/smart-grid-energy-monitoring&-billing-sys/archi&design/postgresql-data-model.png",
        alt: "Five-table PostgreSQL model showing zone windows, household daily energy, household tariffs, daily bills, and per-date readiness state",
        caption: "Illustrates the five PostgreSQL tables used to store energy aggregations, tariff references, daily billing records, and pipeline readiness state. Relationships represent logical joins, not enforced foreign keys; reading_count is labeled meter_readings in the implemented SQL schema.",
      },
    ],
    pipelineArchitecture: {
      title: "Lambda-Style Hybrid Architecture",
      content: "Kafka and Spark continuously derive energy metrics, while Airflow handles periodic tariff ingestion and estimated daily billing. Both paths converge on household/date records and durable readiness state in PostgreSQL. This Lambda-style separation fits inputs with different timing requirements; it does not duplicate the raw stream across independent speed and batch computations. Operators can inspect operational metrics while complete daily inputs wait for billing.",
      diagram: {
        title: "Lambda-Style Hybrid Architecture",
        src: "projects/smart-grid-energy-monitoring&-billing-sys/archi&design/lambda-style-hybrid-architecture.png",
        alt: "Streaming meter readings flow through Kafka and Spark while tariff CSVs and billing run through Airflow, converging in PostgreSQL before FastAPI and Streamlit",
        caption: "Shows how streaming smart-meter data and scheduled tariff/billing workflows converge in PostgreSQL before results are exposed through the API and dashboard. In the implementation, Kafka partitions by household key, and tariff CSVs identify households and effective dates rather than grid zones.",
      },
    },
    systemDesigns: [
      {
        title: "Kafka Event Ingestion & Partitioning",
        content: "The Python producer publishes JSON readings to a Kafka topic with three partitions, using household ID as the message key. Events include meter and household identifiers, consumption, solar generation, zone, and timestamp. Keyed ingestion keeps a household's events together within a partition and separates event production from processing. Kafka offsets give operators a way to inspect ingestion progress without coupling the simulator to Spark execution.",
      },
      {
        title: "Spark Structured Streaming & Event Time",
        content: "Spark parses and validates readings, calculates grid import as max(consumption − solar generation, 0) per reading, and aggregates five-minute zone windows alongside daily household totals. Both queries use a ten-minute event-time watermark and separate persistent checkpoints. Finalized zone metrics are appended; daily totals are upserted. Renewable contribution is solar generation divided by consumption, expressed as a percentage. Finalization requires later events to advance the watermark beyond the relevant window.",
        diagram: {
          title: "Spark Structured Streaming Processing Flow",
          src: "projects/smart-grid-energy-monitoring&-billing-sys/archi&design/spark-structured-streaming-flow.png",
          alt: "Conceptual Spark flow from Kafka JSON parsing through reading validation, event-time window aggregation, PostgreSQL persistence, and checkpoint storage",
          caption: "Shows how Spark reads Kafka events, validates and transforms energy measurements, calculates windowed zone metrics, persists results, and maintains checkpoints for recovery. Unlike the illustrative labels, zone writes are append-only; checkpoints do not guarantee exactly-once processing across the pipeline.",
        },
      },
      {
        title: "Airflow Tariff Ingestion & Daily Billing",
        content: "Tariff ingestion runs every five real minutes, validates available CSV files, upserts household rates, and records tariff readiness. A dispatcher runs every real minute to find dates with both inputs ready. It joins daily household energy with matching tariffs and calculates round(grid import × tariff rate, 2), committing bills and completion together. These simulated LKR estimates exclude energy exports and a full utility tariff structure; failed dates remain eligible for retry.",
      },
      {
        title: "PostgreSQL & Durable Readiness Coordination",
        content: "PostgreSQL provides the handoff between streaming output and scheduled billing. Spark writes finalized daily household rows and energy readiness in one transaction; tariff ingestion similarly commits reference rows and tariff readiness together. Readiness checks require the configured household count. Household/date keys and upserts make these daily writes repeatable, while the persisted status table lets the dispatcher discover work independently of the scheduler's real-time execution date.",
      },
      {
        title: "FastAPI & Streamlit Presentation",
        content: "FastAPI reads PostgreSQL to serve zone metrics, billing history, health checks, and renewable alerts. Streamlit consumes only those endpoints and uses Plotly for energy trends, zone comparisons, and household and tariff-tier billing charts. Requests are cached for 15 seconds, with manual refresh rather than automatic polling. Alerts evaluate the latest stored windows on request, using a configurable daylight period and threshold; they do not establish that upstream data is fresh.",
      },
      {
        title: "Pipeline Reliability & Recovery",
        content: "Persistent Spark checkpoints retain streaming progress, while daily database upserts and transactional status updates support repeatable billing work. PostgreSQL records PENDING, PROCESSING, COMPLETED, and FAILED states; the dispatcher rediscovers eligible pending or failed dates after interruptions. Logs and the optional local Control Center expose progress. Repository tests cover component behavior, with separate SQL and container validation steps. Zone writes remain append-only, so these controls do not guarantee exactly-once processing across the pipeline.",
      },
    ],
    oopDesignPatterns: [],
    evidence: [
      {
        title: "Energy Monitoring",
        introduction: "The application screenshot shows energy metrics for a selected simulated date and time range, with consumption, solar generation, and grid-import trends followed by zone comparisons.",
        diagrams: [
          {
            title: "Energy Monitoring Dashboard",
            src: "projects/smart-grid-energy-monitoring&-billing-sys/archi&design/energy-monitoring-dashboard.png",
            alt: "Streamlit energy dashboard with consumption, solar, grid-import, renewable-contribution, and grid-dependency cards, a time-series chart, and zone comparisons",
            caption: "Energy monitoring dashboard showing consumption, solar generation, grid import, renewable contribution, and zone-level comparisons.",
          },
        ],
        result: "**Observed result:** The selected simulated period is presented as energy totals and interval trends, making solar contribution and grid dependency visible. These are demonstration readings, not measurements from live households.",
      },
      {
        title: "Daily Billing Results",
        introduction: "The summary and detailed views show estimated bills for the same simulated day: household comparisons and tariff-tier averages alongside the underlying energy, rate, and billing records.",
        diagrams: [
          {
            title: "Daily Billing Dashboard — Summary",
            src: "projects/smart-grid-energy-monitoring&-billing-sys/archi&design/daily-billing-summary.png",
            alt: "Daily billing summary for 1 January 2026 showing 20 households billed, estimated totals, household bill bars, and average bills by tariff tier",
            caption: "Calculated household bills and tariff-tier billing comparisons generated after the daily billing workflow.",
          },
          {
            title: "Daily Billing Dashboard — Details",
            src: "projects/smart-grid-energy-monitoring&-billing-sys/archi&design/daily-billing-details.png",
            alt: "Expanded household billing table showing household and zone identifiers, consumption, solar generation, grid import, tariff tier, rate, and estimated LKR bill",
            caption: "Detailed household billing records, including energy consumption, grid import, tariff assignments, and estimated bills.",
          },
        ],
        result: "**Observed result:** The summary reports 20 billed households, and the details expose the inputs behind individual estimates. All tariff rates and bills are simulated; the screenshots do not establish production billing accuracy or processing throughput.",
      },
    ],
  },
};
