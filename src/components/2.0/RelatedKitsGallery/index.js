/*********************************************************************************
 * Copyright (c) 2026 Contributors to the Eclipse Foundation
 *
 * See the NOTICE file(s) distributed with this work for additional
 * information regarding copyright ownership.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Apache License, Version 2.0 which is available at
 * https://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 ********************************************************************************/

import React from 'react';
import ExpandedKitCard from '@site/src/components/2.0/ExpandedKitCard';
import { getKitById } from '@site/data/kitsData';
import styles from './styles.module.scss';

/**
 * Renders a fixed grid of KIT cards (no filter bar) using the same
 * ExpandedKitCard component as the FilteredKitsGallery, so the visual
 * format stays consistent with the KIT gallery pages.
 *
 * @param {Array<string>} kitIds - IDs of KITs registered in kitsData.js to render.
 * @param {Array} extraKits - Optional array of { name, description, route, icon, chip }
 *   for KITs that are not yet registered in kitsData.js (e.g. under development).
 */
export default function RelatedKitsGallery({ kitIds = [], extraKits = [] }) {
  const kits = kitIds
    .map((id) => getKitById(id))
    .filter((kit) => kit !== null);

  return (
    <div className={styles.relatedKitsGallery}>
      <div className={styles.grid}>
        {kits.map((kit) => (
          <ExpandedKitCard key={kit.id} kit={kit} />
        ))}
        {extraKits.map((kit, idx) => (
          <div className={styles.extraCardWrapper} key={`extra-${idx}`}>
            <a
              className={styles.extraCard}
              href={kit.route || '#'}
              aria-disabled={!kit.route}
            >
              <div className={styles.extraCard__iconSection}>
                <span className={styles.extraCard__icon}>{kit.icon || '🧪'}</span>
              </div>
              <div className={styles.extraCard__content}>
                <h3 className={styles.extraCard__title}>{kit.name}</h3>
                {kit.description && (
                  <p className={styles.extraCard__description}>{kit.description}</p>
                )}
                <div className={styles.extraCard__maturity}>
                  <span className={styles.extraCard__chip}>{kit.chip || 'In Development'}</span>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
