import { beforeEach, describe, expect, it } from "vitest";
import {
  getTopViewedCities,
  getViewedCities,
  saveViewedCity,
} from "../utils/viewedCitiesStorage";

describe("viewedCitiesStorage", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("returns empty array when no cities are saved", () => {
    expect(getViewedCities()).toEqual([]);
  });

  it("saves a new viewed city", () => {
    const result = saveViewedCity({
      code: "vilnius",
      name: "Vilnius",
      administrativeDivision: "Vilniaus miesto savivaldybė",
    });

    expect(result).toEqual([
      {
        code: "vilnius",
        name: "Vilnius",
        administrativeDivision: "Vilniaus miesto savivaldybė",
        views: 1,
      },
    ]);
  });

  it("increments views for an existing city", () => {
    const city = {
      code: "vilnius",
      name: "Vilnius",
      administrativeDivision: "Vilniaus miesto savivaldybė",
    };

    saveViewedCity(city);
    const result = saveViewedCity(city);

    expect(result[0].views).toBe(2);
  });

  it("returns only top 3 viewed cities", () => {
    saveViewedCity({ code: "a", name: "A", administrativeDivision: "One" });
    saveViewedCity({ code: "b", name: "B", administrativeDivision: "Two" });
    saveViewedCity({ code: "c", name: "C", administrativeDivision: "Three" });
    saveViewedCity({ code: "d", name: "D", administrativeDivision: "Four" });

    saveViewedCity({ code: "b", name: "B", administrativeDivision: "Two" });
    saveViewedCity({ code: "c", name: "C", administrativeDivision: "Three" });
    saveViewedCity({ code: "c", name: "C", administrativeDivision: "Three" });

    const result = getTopViewedCities();

    expect(result).toHaveLength(3);
    expect(result.map((city) => city.code)).toEqual(["c", "b", "a"]);
  });

  it("returns empty array when localStorage contains invalid JSON", () => {
    localStorage.setItem("weather_app_viewed_cities", "bad-json");

    expect(getViewedCities()).toEqual([]);
  });
});
