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

