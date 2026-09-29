---
id: engineering-mbse-kit-adoption-view
title: Adoption View
description: MBSE KIT
sidebar_position: 2
domain: engineering
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
import RelatedKitsGallery from '@site/src/components/2.0/RelatedKitsGallery';

<Kit3DLogo kitId="engineering-mbse" />

<!--
KIT LOGO END
-->

## Introduction

<!-- Describe what problem this KIT solves and who benefits from it. -->

> TODO: Provide a short description of the KIT's purpose and scope.

**Model-Based Systems Engineering (MBSE)** is an engineering approach for the realization of complex systems that places **models** — rather than documents — at the center. Instead of
describing a system primarily through text-based specifications, drawings, and paper documents, MBSE uses formal, structured, and machine-readable models as the primary source of truth for capturing, analyzing, and communicating a system's requirements, architecture, behavior, and
structure throughout its entire lifecycle.

Usually this is applied by internal development teams. With the rising complexity in the stakeholder collaboration, MBSE might also help in supporting the collaborative engineering. This KIT is meant to support in understanding where MBSE can be useful in Collaborative Engineering in Data Ecosystems and where not.

## Vision and Mission

<!-- What is the long-term goal? What does the KIT deliver today? Problem statatement -->

## Vision

When multiple organizations — OEMs, suppliers, and engineering partners — collaborate on a complex system, they must exchange and align requirements, architectures, and interfaces across organizational boundaries. Today, this collaboration is hampered by heterogeneous tools, inconsistent terminology, and incompatible data formats. Each partner maintains its own models and documents, making it difficult to establish a shared understanding of the system and to
trace decisions across the entire value chain.

Additionally, in the engineering phase there is often a complex dependency between multiple system elements that compose to an integrated system (e.g. a vehicle being an aggregation of different subsystems such as entertainment system and drive system which again can also be decomposed into subsystems across the data ecosystem). These system elements can be scattered across the data ecosystem making it even harder to take system wide decisions such as engineering changes.

:::info[Vision]
Our vision is a **common, system-focused, model-based foundation for collaborative engineering in data
ecosystems**. With this foundation system development can happen in data-sovereign and still integrated ways
:::

## Mission

The mission of this KIT is to **equip the different stakeholders of a data ecosystem with the data models, architectures, procedures, and terms they need to realize complex systems collaboratively**. It delivers a practical, actionable foundation that organizations can adopt to move from document-based, fragmented cross-company collaboration toward a shared, model-based way of working.

Concretely, the KIT provides:

- **Guidance for stakeholders** -- clear explanations of the roles involved in collaborative engineering and how each of them contributes to and benefits from the data ecosystem wide application of a model-based systems engineering approach.
- **Standardized artifacts** -- data models and reference architectures that partners can directly use to structure and exchange their relevant system engineering information.
- **Procedures and best practices** -- guidance on how to establish and operate model-based collaboration across company boundaries.
- **Use Case Explanations** -- Supporting in the differentiation where to apply and where not to apply MBSE in collaborative Engineering approaches in data ecosystems.
- **A shared terminology** -- a common glossary explaining the core concepts and terms of MBSE allowing a better understanding for the usability in data ecosystems.

In doing so, the KIT makes it possible for organizations to collaborate on complex systems in a data ecosystem without each partner having to reinvent its own approach — enabling faster, more consistent, and more traceable cross-company systems engineering.

:::info[Mission]
Mission of the MBSE KIT is making the **application of MBSE in collaborative engineering cases** understandable in sense of requirements and possibilities. Additionally, it shall link the various KITs relevant for MBSE so that it is **integrating all relevant aspects for system realization in data ecosystems**.
:::

## Business Context

While usually MBSE focuses on the architectural realization of systems this KIT follows a more integrative approach: It focuses on the *transdisciplinary realization of systems* thus integrating all different domains active in the realization of that system of interest.
While these domains are sometimes in different organizations in the network (e.g. a customer wants to realize a complete vehicle and uses the required simulation and CAD stakeholders from a gearbox supplier) the approach is considered ecosystem wide: System Definition (including Requirements Engineering), Realization and Validation is considered an integrated task.

For that, the KIT integrates different other KITs that are required to achieve that goal.
These include (but are not limited to):

<RelatedKitsGallery
  kitIds={['requirements', 'geometry', 'agents']}
  extraKits={[
    {
      name: 'Engineering Simulation KIT',
      description: 'Simulation-based realization & validation',
      icon: '🧪',
      chip: 'In Development',
      route: undefined
    }
  ]}
/>

Additionally, which is not defined as an own KIT but of utmost importance is the Digital Engineering Master Data (DEMD).
This master data is meant to include all relevant data for a an asset including product, material and 3D related data.  

## Business Value

<!-- Describe why this KIT is attractive for service providers to be implemented -->

Adopting this KIT enables organizations to move from fragmented, document-based cross-company collaboration toward a shared, model-based way of working. The concrete business value it delivers includes:

- **Reduced integration effort** -- standardized data models and reference architectures allow partners to exchange system engineering information without building bespoke point-to-point interfaces for every collaboration.
- **Faster cross-company engineering** -- a common, system-focused foundation lets OEMs, suppliers, and engineering partners align requirements, architectures, and interfaces more quickly, shortening time-to-market for complex systems.
- **Improved traceability and decision-making** -- a shared model-based source of truth makes it possible to trace decisions across the entire value chain and to take system-wide decisions (e.g. engineering changes) even when system elements are scattered across the data ecosystem.
- **Data-sovereign collaboration** -- the KIT enables integrated system development while preserving each partner's data sovereignty, allowing organizations to collaborate without giving up control over their own data.
- **New business opportunities for service providers** -- the KIT clarifies the roles and procedures for collaborative engineering, enabling service providers to offer simulation, CAD, requirements engineering, and validation services across organizational boundaries.

:::info[Business Value]
In short, the KIT turns collaborative systems engineering in data ecosystems from a costly, error-prone, document-driven effort into a **standardized, traceable, and data-sovereign process** that benefits every stakeholder in the value chain.
:::

## Semantic Models / Data Model

<!-- Reference the relevant semantic models, APIs, or standards. -->

Some of the relevant data models are currently still under development. What can be used is:

| urn | Domain | Description | Link |
| --- | ------- | ---------- | ---- |
| ``urn:samm:io.catenax.requirement:1.0.0`` | Requirements | Currently standardized model ([CX-0155](https://catenax-ev.github.io/docs/standards/CX-0155-RequirementsEngineering)) to describe Requirements. | [tractusx/sldt](https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.requirement/1.0.0/Requirement.ttl) |
| ``urn:samm:io.catenax.requirements:2.0.0`` | Requirements | Active development of the Requirements model under review for describing multiple requirements and their relationship. | [manourym/sldt (CX MBSE Expert Group Working Fork)](https://github.com/manourym/sldt-semantic-models/blob/requirement2.0.0/io.catenax.requirements/2.0.0/Requirements.ttl) |
| ``urn:samm:io.catenax.digital_engineering_master_data:1.0.0`` | Requirements | Active development of the Requirements model under review for describing multiple requirements and their relationship. | [tractusx/sldt](https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.digital_engineering_master_data/1.0.0/DigitalEngineeringMasterData.ttl) |

## Standards

This is an excerpt of currently relevant standards for MBSE in data ecosystems.

| Name | Description | Link to standard |
| ---- | ----------- | ---------------------- |
| `CX-0154` | Catena-X Standard for Digital Engineering Master Data (DEMD) | [CX-0154](https://catenax-ev.github.io/docs/standards/CX-0154-MasterDataManagement) |
| `CX-0155` | Catena-X Standard for Requirements Engineering | [CX-0155](https://catenax-ev.github.io/docs/standards/CX-0155-RequirementsEngineering) |
| `CX-0156` | Catena-X Standard for Geometries | [CX-0156](https://catenax-ev.github.io/docs/standards/CX-0156-Geometry) |
| `SysML v2` | Specification for Systems Modeling Language (SysML) v2 | [OMG SysML v2](https://www.omg.org/spec/SysML) |

## NOTICE

This work is licensed under the [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/legalcode).

- SPDX-License-Identifier: CC-BY-4.0
- SPDX-FileCopyrightText: 2026 Fraunhofer-Gesellschaft zur Foerderung der angewandten Forschung e.V. (represented by Fraunhofer IPK)
- SPDX-FileCopyrightText: 2026 Mercedes-Benz
- SPDX-FileCopyrightText: 2026 Contributors to the Eclipse Foundation
- Source URL: [https://github.com/eclipse-tractusx/eclipse-tractusx.github.io](https://github.com/eclipse-tractusx/eclipse-tractusx.github.io)
