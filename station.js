import { Station } from "../station.js";
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

Degree: ${this.degree}
Fulfillment: ${this.fulfillment}
Manifest: ${this.manifest().manifest}

Verbindungen:
- Achsenfeld: SDSA
- Operator: CO
- Priorität: PQ
- Prozess: PP
AGENT_STATION.executeCopilot = function() {
    // hier startet dein Copilot‑Prozess
    console.log("Copilot wurde gestartet.");
    return "Copilot aktiv";
};

Status: FINALISIERT
`;
};
import { SRC_RetrievalAPI } from "../api/retrieval.js";
import { SRC_SearchAPI } from "../api/search.js";
import { SRC_ChatAPI } from "../api/chat.js";
import { SRC_RetrievalAPI, SRC_SearchAPI, SRC_ChatAPI } from "./api.js";

AGENT_STATION.tools = {
    retrieve: SRC_RetrievalAPI,
    search: SRC_SearchAPI,
    chat: SRC_ChatAPI
};

AGENT_STATION.runRetrieve = async function(path) {
    return await this.tools.retrieve(path);
};

AGENT_STATION.runSearch = function(query, dataset) {
    return this.tools.search(query, dataset);
};

AGENT_STATION.runChat = function(message) {
    return this.tools.chat(message, { agent: "AGENT" });
};
