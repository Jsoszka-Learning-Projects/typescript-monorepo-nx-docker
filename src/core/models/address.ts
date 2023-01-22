import { Static, Type } from "@sinclair/typebox";

export const Address = Type.Object({
  streetAddress: Type.String(),
  streetAddress2: Type.Optional(Type.String()),
  city: Type.String(),
  state: Type.String(),
  zip: Type.String(),
});

export type Address = Static<typeof Address>
