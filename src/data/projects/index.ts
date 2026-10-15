import type { Project } from "../../types/project";
import { eventTicketBooking } from "./event-ticket-booking.ts";
import { kafkaOrderPipeline } from "./kafka-order-pipeline.ts";
import { secureDns } from "./securedns.ts";
import { bikePartsHub } from "./bike-parts-hub.ts";
import { leckeep } from "./leckeep.ts";
import { simplePosSystem } from "./simple-pos-system.ts";
import { serviceFinder } from "./service-finder.ts";
import { pharmacy } from "./pharmacy.ts";

// Display order for project cards, featured projects, and generated routes.
export const projects: Project[] = [
  eventTicketBooking,
  kafkaOrderPipeline,
  secureDns,
  bikePartsHub,
  leckeep,
  simplePosSystem,
  serviceFinder,
  pharmacy,
];
