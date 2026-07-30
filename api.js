export async function SRC_RetrievalAPI(source) {
    if (source.endsWith(".json")) {
        return await fetch(source).then(r => r.json());
    }
    if (source.endsWith(".raw") || source.endsWith(".txt")) {
        return await fetch(source).then(r => r.text());
    }
    if (source.endsWith(".hdf")) {
        return { hdf: "HDF‑Daten geladen (Mock)", file: source };
    }
    return { error: "Unbekannte Quelle", file: source };
}

export function SRC_SearchAPI(query, dataset) {
    const results = [];
    for (const key in dataset) {
        const value = dataset[key]?.toString() || "";
        if (value.includes(query)) {
            results.push({ key, value });
        }
    }
    return { query, results, count: results.length };
}

export function SRC_ChatAPI(message, context = {}) {
    return {
        input: message,
        response: `AGENT antwortet auf: ${message}`,
        context
    };
}
