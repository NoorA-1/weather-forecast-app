import { useMemo, useState } from "react";
import { Autocomplete, TextField } from "@mui/material";

const MAX_VISIBLE_OPTIONS = 50;
const MORE_RESULTS_OPTION = {
  code: "__more-results__",
  name: "Keep typing to narrow results...",
  disabled: true,
};

function CityDropdown({
  places,
  selectedPlace,
  loading,
  disabled,
  onPlaceChange,
}) {
  const [inputValue, setInputValue] = useState("");

  const matchingPlaces = useMemo(() => {
    const searchValue = inputValue.trim().toLowerCase();

    if (!searchValue) {
      return places;
    }

    return places.filter((place) => {
      const name = place.name?.toLowerCase() || "";

      return name.includes(searchValue);
    });
  }, [places, inputValue]);

  const hasMoreResults = matchingPlaces.length > MAX_VISIBLE_OPTIONS;

  const visiblePlaces = useMemo(() => {
    const slicedPlaces = matchingPlaces.slice(0, MAX_VISIBLE_OPTIONS);

    if (hasMoreResults) {
      return [...slicedPlaces, MORE_RESULTS_OPTION];
    }

    return slicedPlaces;
  }, [matchingPlaces, hasMoreResults]);

  function getPlaceKey(place) {
    if (place.code === MORE_RESULTS_OPTION.code) {
      return MORE_RESULTS_OPTION.code;
    }

    return `${place.code}-${place.administrativeDivision}-${place.coordinates?.latitude}-${place.coordinates?.longitude}`;
  }

  return (
    <Autocomplete
      options={visiblePlaces}
      value={selectedPlace}
      inputValue={inputValue}
      loading={loading}
      disabled={disabled}
      filterOptions={(options) => options}
      getOptionDisabled={(option) => option.disabled === true}
      onInputChange={(_, newInputValue) => {
        setInputValue(newInputValue);
      }}
      onChange={(_, value) => {
        if (!value || value.disabled) {
          return;
        }

        onPlaceChange(value);
      }}
      getOptionLabel={(option) => option?.name || ""}
      isOptionEqualToValue={(option, value) =>
        getPlaceKey(option) === getPlaceKey(value)
      }
      renderOption={(props, option) => {
        const { key, ...optionProps } = props;

        return (
          <li {...optionProps} key={getPlaceKey(option)}>
            {option.name}
          </li>
        );
      }}
      renderInput={(params) => (
        <TextField {...params} label="Select city" placeholder="Search city" />
      )}
    />
  );
}

export default CityDropdown;
