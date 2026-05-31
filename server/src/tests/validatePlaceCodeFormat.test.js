import { describe, expect, it } from "vitest";
import { validatePlaceCodeFormat } from "../utils/validatePlaceCodeFormat.js";

describe("validatePlaceCodeFormat", () => {
  it("returns invalid when placeCode is missing", () => {
    const result = validatePlaceCodeFormat();

    expect(result).toEqual({
      isValid: false,
      message: "placeCode query parameter is required",
    });
  });

  it("normalizes valid placeCode", () => {
    const result = validatePlaceCodeFormat(" Vilnius ");

    expect(result).toEqual({
      isValid: true,
      placeCode: "vilnius",
    });
  });

  it("allows hyphenated place codes", () => {
    const result = validatePlaceCodeFormat("naujoji-akmene");

    expect(result).toEqual({
      isValid: true,
      placeCode: "naujoji-akmene",
    });
  });

  it("rejects invalid characters", () => {
    const result = validatePlaceCodeFormat("../../bad");

    expect(result).toEqual({
      isValid: false,
      message: "placeCode contains invalid characters",
    });
  });

  it("rejects empty string after trimming", () => {
    const result = validatePlaceCodeFormat("   ");

    expect(result).toEqual({
      isValid: false,
      message: "placeCode cannot be empty",
    });
  });
});
