---
id: adoption-view-engineering-simulation
title: Adoption View
description: 'Engineering Simulation KIT'
sidebar_position: 2
---

<!--
Copyright(c) 2026 Contributors to the Eclipse Foundation

See the NOTICE file(s) distributed with this work for additional
information regarding copyright ownership.

This work is made available under the terms of the
Creative Commons Attribution 4.0 International (CC-BY-4.0) license,
which is available at
https://creativecommons.org/licenses/by/4.0/legalcode.

SPDX-License-Identifier: CC-BY-4.0
-->

<!-- 
KIT LOGO START - Generated automatically from the configuration done in Kit Master Data
Replace <kit-id> with the id from your kit referenced in `data/kitsData.js`.
Do not remove!
This logo is only visible when compiled with Docusarus (final version of the hosted KIT)
-->

import Kit3DLogo from '@site/src/components/2.0/Kit3DLogo';

<Kit3DLogo kitId="engineering-simulation" />

<!--
KIT LOGO END
-->

:::info[Target Audience]
Business Managers, Product Owners, Solution Architects, Industry Experts, and Decision Makers.
:::

---

## Introduction

<!-- Describe what problem this KIT solves and who benefits from it. -->

The Engineering Simulation KIT describes relevant use cases and approaches to support Simulations in the Engineering phase of a product, that require exchange in the data ecosystem, e.g. due to a supplier.

Simulation models can be classified along two independent dimensions:

1. Geometrical / spatial representation (how much of the physical space is considered for solving them)
2. Modeling approach / equation formulation (how component behavior and interactions are described and solved, causal/acausal/hybrid)

The KIT shall give support in correctly describing boundary conditions and choosing the correct components and aspect models for describing these dimensions.
This shall allow consuming the relevant information required from other stakeholders in the network, or to providing simulations to other participants in the network with the relevant information properly. This also includes the credibility of the simulation model.

The creation of the KIT was done in close alignment with the [prostep ivip SmartSE group](https://www.prostep.org/en/projects/smart-systems-engineering-smartse-gb) and may reference recommendations given by that group.

## Vision and Mission

<!-- What is the long-term goal? What does the KIT deliver today? Problem statatement -->

## Vision

Currently some simulation models that are created on request (e.g. in a customer supplier interaction) require a lot of interaction between these stakeholders to gather the context, the relevant simulation environment or required inputs and test cases. This hinders automation and requires larger efforts in alignment from both supplier and customer. To allow tool-integration and support automation, there needs to be a machine-readable format to directly specify and later on also describe the realized simulation models. But not only the format is relevant - also the trust of the models, there capabilities and the collaborating stakeholder is of utmost importance. Thus the topics of data trust and security as well as credibility need to be considered.

:::info[VISION]
There needs to be a solution to automatically provide specifications and realizations of simulation models context in a machine readable and trusted way to relevant business partners
:::

## Mission

This KIT shall support the Simulation Use Case in Collaborative Engineering in Data Ecosystems by addressing multiple points:

- Describe a common business context for Simulations within Collaborative Engineering in Data Ecosystems
- Explain Terminology for the use cases
- Distinguish different use cases in Simulation to consider
- Explain where data Ecosystems such as Catena-X can actually add benefits to the Simulation use case
- Explain how to apply the Simulation Use Case and how to gain and verify trust and credibility

:::info[MISSION]
The Engineering simulation KIT shall enable the automated and trusted exchange of relevant information for the creation and application of simulation models.
:::

For now, the KIT will not focus on the exchange of the simulation itself.

## Business Context

<!-- Describe the business process or domain this KIT addresses. If a use case describe the use case. -->

The KIT focuses on the Engineering phase of a product or other form of asset and thus the early realization of it. It addresses the simulation before a product was created or handed over to another company in a supplier-customer-relationship.

The following flow defines the common exchange:

```mermaid
graph LR
  A["A) Request definition and provision to partner"]
  B["B) Request confirmation"]
  C["C) Releases/Agreed specification"]
  D["D) Model provision"]
  E["E) Simulation and Feedback"]
  F["F) Enhance model"]
  G["G) Model usage"]
  A --> B --> C --> D --> E --> F --> G

```

each step can be broken down into sub-steps (see development view). More important is, that each of these points requires interaction between supplier and customer - and can have numerous iterations, especially if not done systematically.

The KIT focuses on the steps A-C as well as E+F, leaving the actual model exchange up to other initiatives.

## Business Value

<!-- Describe why this KIT is attractive for service providers to be implemented -->

This KIT support in the faster (in the best case automatic) alignment of simulation models. Additionally, it shows, how trust in these models can be generated and verified.

Service providers and Data Provider can in that way

- define their specifications for simulation models (e.g. scope of the simulation, test cases) and
- describe realizations of these specifications (e.g. used tools)

Service Provider and Data Consumer can also easier identify the relevant inputs and thus better create simulation models or use simulation models in a collaborative engineering use case.

As test were yet not conducted there can not be given a defined answer on the business value for credibility, but it is assumed, that in the future the KIT can support in raising trust in simulation models and executions / results in data ecosystems.

## Use Cases

### Geometrical Simulations

**Description**: This use cases focuses on the definition of geometric simulations. These include for example FEM, CFD or muti-body simulations.

**Actors**: [Actor 1], [Actor 2], [Actor 3]

**Process Flow**:

1. Specification and alignment with supplier
2. Clarification of Artifacts and constraints
3. Agreement
4. Model development
5. Model provisioning
6. Model feedback and enhancement

**Business Outcomes**: main business outcome are aligned and exchanged simulation models

**Success Metrics**: low number of manual interactions in exchange, low number of clarification cycles

### Causal / Acausal Simulation

**Description**: This use cases focuses on the definition of simulations with a specific modeling approach. Usually this describes how component behavior and interactions are described and solved (causal/acausal/hybrid). Typical examples for this use case are 1D and 2D simulations that do not require geometrical inputs.

**Actors**: Customer, Supplier

**Process Flow**:

1. Specification and alignment with supplier
2. Clarification of Artifacts and constraints
3. Agreement
4. Model development
5. Model provisioning
6. Model feedback and enhancement

**Business Outcomes**: main business outcome are aligned and exchanged simulation models

**Success Metrics**: low number of manual interactions in exchange, low number of clarification cycles

### Credibility

**Description**: Beside the actual description of the simulation model, the credibility of these models has to be evaluated.  [prostep ivip SmartSE group](https://www.prostep.org/en/projects/smart-systems-engineering-smartse-gb) described specific parameters how to assess the credibility and how to run credible simulations.

---

## Semantic Models / Data Model

<!-- Reference the relevant semantic models, APIs, or standards. -->

There is currently no released model for engineering simulations in the official [tractus-x sldt](https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main).
In the [expert groups development repository](https://github.com/manourym/sldt-semantic-models) there are currently three models under development:

- [``urn:samm:io.catenax.engineering.simulation.model.minimal``](https://github.com/manourym/sldt-semantic-models/blob/engineering.simulation1.0.0/io.catenax.engineering.simulation/1.0.0/SimulationModel.ttl): an approach to include all relevant aspects in one model (including binary). This has been developed in an early phase and is currently rather legacy for reusing elements.
- [``urn:samm:io.catenax.engineering.simulation.shared.sic-core``](https://github.com/manourym/sldt-semantic-models/blob/engineering.simulation1.0.0/io.catenax.engineering.simulation/shared.sic_core/1.0.0/SimulationSICCore.ttl): A model for the shared elements a simulation needs (meta data etc.). This is based on the [SIC core](https://mic-core.github.io/SIC-Core/main/) specification. It shall be used as common baseline for the other use cases.
- [``urn:samm:io.catenax.engineering.simulation.geometrical``](https://github.com/manourym/sldt-semantic-models/blob/engineering.simulation1.0.0/io.catenax.engineering.simulation/geometrical/1.0.0/GeometricalSimulationSpecification.ttl): A model focusing on the [geometry use case](#geometrical-simulations). It adds the ``physicalBoundaries`` and ``acceptanceCirteria`` that where demanded by experts in the geometrical simulation use case.

<details>
  <summary>Shared SIC Core</summary>

This is a shared model that can be reused for all use cases.

```json
{
  "simulationTask" : [ {
    "subName" : "aeroplaneTT",
    "subVersion" : "1.0.0",
    "subIdentifier" : "urn:uuid:48878d48-6f1d-47f5-8ded-a441d0d879df"
  } ],
  "itemUnderTest" : "camera34-A-sampleV23",
  "simulationObjective" : [ "DhHYHsh" ],
  "entityParameter" : [ "fQSuQ" ],
  "usedSimulationModel" : [ {
    "subName" : "aeroplaneTT",
    "subVersion" : "1.0.0",
    "subIdentifier" : "urn:uuid:48878d48-6f1d-47f5-8ded-a441d0d879df"
  } ],
  "usedParameter" : [ {
    "subName" : "aeroplaneTT",
    "subVersion" : "1.0.0",
    "subIdentifier" : "urn:uuid:48878d48-6f1d-47f5-8ded-a441d0d879df"
  } ],
  "usedTool" : [ {
    "subName" : "aeroplaneTT",
    "subVersion" : "1.0.0",
    "subIdentifier" : "urn:uuid:48878d48-6f1d-47f5-8ded-a441d0d879df"
  } ],
  "taskStatus" : "Checked out: in progress but checked out from data management system",
  "testCaseRequirement" : [ "xcQlZ27EYm" ],
  "testCase" : [ {
    "subName" : "aeroplaneTT",
    "subVersion" : "1.0.0",
    "subIdentifier" : "urn:uuid:48878d48-6f1d-47f5-8ded-a441d0d879df"
  } ]
```

</details>

<details>
  <summary>Geometric Simulation model</summary>

This model is the current baseline for discussion regarding the geometric simulation use case.

```json
{
  "simulationTask" : [ {
    "subName" : "aeroplaneTT",
    "subVersion" : "1.0.0",
    "subIdentifier" : "urn:uuid:48878d48-6f1d-47f5-8ded-a441d0d879df"
  } ],
  "itemUnderTest" : "camera34-A-sampleV23",
  "simulationObjective" : [ "DhHYHsh" ],
  "entityParameter" : [ "fQSuQ" ],
  "usedSimulationModel" : [ {
    "subName" : "aeroplaneTT",
    "subVersion" : "1.0.0",
    "subIdentifier" : "urn:uuid:48878d48-6f1d-47f5-8ded-a441d0d879df"
  } ],
  "usedParameter" : [ {
    "subName" : "aeroplaneTT",
    "subVersion" : "1.0.0",
    "subIdentifier" : "urn:uuid:48878d48-6f1d-47f5-8ded-a441d0d879df"
  } ],
  "usedTool" : [ {
    "subName" : "aeroplaneTT",
    "subVersion" : "1.0.0",
    "subIdentifier" : "urn:uuid:48878d48-6f1d-47f5-8ded-a441d0d879df"
  } ],
  "taskStatus" : "Checked out: in progress but checked out from data management system",
  "testCaseRequirement" : [ "xcQlZ27EYm" ],
  "testCase" : [ {
    "subName" : "aeroplaneTT",
    "subVersion" : "1.0.0",
    "subIdentifier" : "urn:uuid:48878d48-6f1d-47f5-8ded-a441d0d879df"
  } ],
  "acceptanceCriteria": [ "Ge" ],
  "physicalBoundaries": [ "cKsf" ]
}
```

</details>

## Standards

<!-- Provide a list of standards this KIT. -->

There is currently no Catena-X or other data space related standard known to the group maintaining this KIT.
As already mentioned, the [SIC-Core specification](https://mic-core.github.io/SIC-Core/main/) can be used as an example. While not being a standard it can be used for the description of meta data for simulation exchange.
In that regard [MIC-Core](https://mic-core.github.io/MIC-Core/main/#_introduction) needs to be mentioned as baseline to consider. It addresses directly the model and thus can be a baseline for the exchange. The current minimal model is based on this specification.

regarding standards and Simulation the [Functional Mock-up Interface (FMI)](https://fmi-standard.org/) shall also be named.
It is "[...] a free [modelica] standard that defines an interface to exchange dynamic models using a combination of XML files, binaries and C code."^[1] THis standard gives and example how the actual models (especially for the use case of causal/acausal simulations) can be described and exchanged.

| Name | Description | Link to standard |
| ---- | ----------- | ---------------------- |
| `SIC-Core specification` | This Specification defines simulation meta data and is reused in this KIT | [SIC-Core specification](https://mic-core.github.io/SIC-Core/main/) |
| `FMI` | The Functional Mock-up Interface (FMI) is a free standard that defines a container and an interface to exchange dynamic models using a combination of XML files, binaries and C code, distributed as a ZIP file. | [FMI standard](https://fmi-standard.org/docs/main/) |

[1]: https://github.com/modelica/fmi-standard

## NOTICE

This work is licensed under the [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/legalcode).

- SPDX-License-Identifier: CC-BY-4.0
- SPDX-FileCopyrightText: 2026 Fraunhofer-Gesellschaft zur Foerderung der angewandten Forschung e.V. (represented by Fraunhofer IPK)
- SPDX-FileCopyrightText: 2026 Schaeffler AG
- SPDX-FileCopyrightText: 2026 Mercedes-Benz
- SPDX-FileCopyrightText: 2026 German Aerospace Center (DLR)
- SPDX-FileCopyrightText: 2026 Robert Bosch GmbH
- SPDX-FileCopyrightText: 2026 Dräxlmaier GmbH & Co. KG
- SPDX-FileCopyrightText: 2026 Contributors to the Eclipse Foundation
- Source URL: [https://github.com/eclipse-tractusx/eclipse-tractusx.github.io](https://github.com/eclipse-tractusx/eclipse-tractusx.github.io)
