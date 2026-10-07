// packages/db/src/index.ts
import { PrismaClient } from "./generated/client/index.js";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare global {
  var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>;
}

export const db = globalThis.prismaGlobal ?? prismaClientSingleton();


export * from "./generated/client/index.js";