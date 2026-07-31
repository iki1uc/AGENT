import { Station } from "../station.js";
import { CO_GLOBAL_PANEL } from "../runtime/ani.js";
import { CO_BUTTONS } from "../runtime/Hub.js";
import { applyRespoFlowToPanel } from "../runtime/flow.js";
import { renderGlobalPanelInMatrix } from "../runtime/mirror.js";

import form from "./form/f.md";
import struktur from "./struktur/s.md";
import verhalten from "./verhalten/v.md";
import präsenz from "./präsenz/p.md";

export const AGENT_STATION = Station("AGENT", {
    form,
    struktur,
    verhalten,
    präsenz
});

// Dynamische XI / IX / X4 Präsenz
AGENT_STATION.presenceMode = function() {
    return CO_GLOBAL_PANEL.Agent.mode;
};

// Dynamische Präsenz-Ausgabe
AGENT_STATION.presence = function() {
    return {
        status: "aktiv",
        mode: this.presenceMode(),
        präsenz: this.data.präsenz
    };
};

// Copilot-Prozess
AGENT_STATION.executeCopilot = function() {
    console.log("AGENT Copilot gestartet.");
    return `AGENT aktiv (${this.presenceMode()})`;
};

// Dokumentation
AGENT_STATION.doc2 = function() {
    return `
AGENT – Station Dokumentation (SRC‑Imperium)
============================================

Form:
${this.data.form}

Struktur:
${this.data.struktur}

Verhalten:
${this.data.verhalten}

Präsenz:
${this.data.präsenz}

Modus: ${this.presenceMode()}
Degree: ${this.degree}
Fulfillment: ${this.fulfillment}
Manifest: ${this.manifest().manifest}

Verbindungen:
- Achsenfeld: SDSA
- Operator: CO
- Priorität: PQ
- Prozess: PP

Status: EVO‑LIERT
`;
};

// API‑Tools
import { SRC_RetrievalAPI, SRC_SearchAPI, SRC_ChatAPI } from "./api.js";

AGENT_STATION.tools = {
    retrieve: SRC_RetrievalAPI,
    search: SRC_SearchAPI,
    chat: SRC_ChatAPI
};

// Runtime‑Kompatibilität
AGENT_STATION.runRetrieve = async function(path) {
    return await this.tools.retrieve(path);
};

AGENT_STATION.runSearch = function(query, dataset) {
    return this.tools.search(query, dataset);
};

AGENT_STATION.runChat = function(message) {
    return this.tools.chat(message, { agent: "AGENT", mode: this.presenceMode() });
};
